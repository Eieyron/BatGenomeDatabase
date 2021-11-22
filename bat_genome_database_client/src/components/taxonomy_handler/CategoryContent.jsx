import React, { Component } from "react";
import "./TaxonomyHandler.css";
import axios from "axios";
import { categoryContents } from "./CategoryContents";
import ParentList from "./ParentList";

export default class CategoryContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: {
        name: "error",
      },
      isLoaded: false,
      category: this.props.category
        .charAt(0)
        .toUpperCase()
        .concat(this.props.category.slice(1)),
      component: "content",
    };

    this.toEdit = {};

    this.renderContent = this.renderContent.bind(this);
    this.renderUpdate = this.renderUpdate.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    fetch(
      axios.defaults.baseURL +
        "tax/" +
        this.props.category.toLowerCase() +
        "/" +
        this.props.id +
        "/"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          content: json,
        });
      });
  }

  renderContent() {
    return (
      <div>
        {categoryContents[
          this.props.category
            .charAt(0)
            .toUpperCase()
            .concat(this.props.category.slice(1))
        ]
          .filter((category) => {
            if (category[0] === "Name") {
              return false;
            }
            return true;
          })
          .map((category, category_id) => {
            if (category[0] === "Parent") {
              // console.log(String(category[1]).split("."));

              let cat_split = category[1].split(".");

              return (
                <div key={category_id}>
                  <b>{category[0]}</b>&nbsp;
                  <i>{this.state.content[cat_split[0]][cat_split[1]]}</i>
                  <br />
                </div>
              );
            } else if (category[0] === "RNA Gene") {
              return (
                <div>
                  <b>RNA Gene</b> &emsp;
                  <button>
                    {" "}
                    <a href={this.state.content.rna_gene}>Get Fasta</a>{" "}
                  </button>
                  <br />
                </div>
              );
            } else {
              return (
                <div key={category_id}>
                  <b>{category[0]}</b>&nbsp;
                  <i>{this.state.content[category[1]]}</i>
                  <br />
                </div>
              );
            }
          })}
      </div>
    );
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (target.type === "file") {
      this.toEdit[name] = target.files[0];
    } else {
      this.toEdit[name] = value;
    }

    console.log(this.toEdit);
  }

  async update(event) {
    event.preventDefault();

    let fd = new FormData();
    for (const [key, value] of Object.entries(this.toEdit)) {
      console.log(key, value);
      fd.append(key, value);
    }

    console.log("formdata", fd);

    await axios
      .patch("tax/" + this.props.category + "/" + this.props.id + "/", fd)
      .then((response) => {
        alert(response.statusText + ": " + response.data.strain_name);
        console.log(response);
      })
      .then((data) => console.log(data))
      .catch((error) => {
        if ([403, 401].includes(error.request.status)) {
          alert("You are not logged in. To continue, please login first.");
        } else {
          console.log(error);
        }
      });

    this.componentDidMount();
  }

  renderUpdate() {
    return (
      <form onSubmit={this.update} className="form_container">
        {categoryContents[
          this.props.category
            .charAt(0)
            .toUpperCase()
            .concat(this.props.category.slice(1))
        ].map((category, category_id) => {
          if (category[0] === "Parent") {
            return (
              <ParentList
                name={category[1].split(".")[0]}
                onChange={this.handleInputChange}
                category={this.props.category}
                category_contents={category}
              />
            );
          } else if (category[2] === "textarea") {
            return (
              <div className="form_content" key={category_id}>
                {category[0]}
                <textarea
                  name={category[1].split(".")[0]}
                  type={category[2]}
                  onChange={this.handleInputChange}
                  rows="4"
                  cols="50"
                />
              </div>
            );
          } else {
            return (
              <div className="form_content" key={category_id}>
                {category[0]}
                <input
                  name={category[1]}
                  type={category[2]}
                  onChange={this.handleInputChange}
                />
              </div>
            );
          }
        })}
        <input type="submit" value="Submit" />
      </form>
    );
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <div className="domain">
            <div className="main_name">
              <div className="main_name_center">
                {this.state.category}
                &nbsp;
                <i>{this.state.content.category_name}</i>
              </div>
              {this.state.component === "content" ? (
                <svg
                  className="title_bar_button"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    this.setState({
                      component: "update",
                    });
                  }}
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="title_bar_button"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() =>
                    this.setState({
                      component: "content",
                    })
                  }
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <div className="info_handler">
              {this.state.component === "content"
                ? this.renderContent()
                : this.renderUpdate()}
            </div>
          </div>
        </div>
      );
    } else {
      return <div>None</div>;
    }
  }
}

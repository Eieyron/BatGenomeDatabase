import React, { Component } from "react";
import "./TaxonomyHandler";
import axios from "axios";
import { categoryContents } from "./CategoryContents";
import ParentList from "./ParentList";

const capitalize = (string) => {
  return string.charAt(0).toUpperCase().concat(string.slice(1));
};

export class AddDomain extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    for (const item of categoryContents[capitalize(this.props.category)]) {
      if (item[0] === "Parent") {
        this.state[item[1].split(".")[0]] = item[2];
      } else {
        this.state[item[1]] = item[2];
      }
    }

    console.log(this.state);

    // this.api = axios.create({
    //   baseURL: "http://localhost:8000/tax/" + this.props.category + "/",
    // });

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (target.type === "file") {
      this.state[name] = target.files[0];
    } else {
      this.setState({
        [name]: value,
      });
    }

    console.log(this.state);
  }

  async submit(event) {
    event.preventDefault();

    let fd = new FormData();
    for (const [key, value] of Object.entries(this.state)) {
      console.log(key, value);
      fd.append(key, value);
    }

    await axios
      .post("tax/" + this.props.category + "/", fd)
      .then((response) => {
        alert(response.statusText + ": " + response.data.category_name);
      })
      .then((data) => console.log(data))
      .catch((error) => {
        if ([403, 401].includes(error.request.status)) {
          alert("You are not logged in. To continue, please login first.");
        } else {
          alert(error.request.response);
        }
      });

    window.location.reload();
  }

  render() {
    return (
      <form onSubmit={this.submit} className="form_container">
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
                  value={this.state.value}
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
}

export default AddDomain;

import React, { Component } from "react";
import "./TaxonomyHandler.css";
import axios from "axios";

function getParent(category) {
  if (category === "domain") return null;
  else if (category === "phylum") return "domain";
  else if (category === "class") return "phylum";
  else if (category === "order") return "class";
  else if (category === "family") return "order";
  else if (category === "genus") return "family";
  else if (category === "species") return "genus";
  else if (category === "strain") return "species";
}

export default class ParentList extends Component {
  constructor(props) {
    super(props);

    console.log("this is being constructed");

    this.state = {
      content: {},
      isLoaded: false,
    };
  }

  async componentDidMount() {
    console.log("parentlist is being mounted");
    await fetch(
      axios.defaults.baseURL +
        "tax/" +
        getParent(this.props.category.toLowerCase()) +
        "/"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          content: json,
        });
      });
    // this.props.onChange(event);
    if (this.props.setDefault) {
      this.props.setDefault(
        this.state.content[0].id,
        getParent(this.props.category.toLowerCase())
      );
    }
  }

  // componentDidUpdate() {
  //   // if (this.props.setDefault) {
  //   //   this.props.setDefault(
  //   //     this.state.content[0].id,
  //   //     this.props.category.toLowerCase()
  //   //   );
  //     // console.log("is this loading");
  //     // console.log(this.state.content);
  //   }
  // }

  render() {
    if (this.state.isLoaded) {
      return (
        <div className="form_content" key={this.props.category_id}>
          {this.props.category_contents[0]}
          <select
            list="parent"
            name={this.props.name}
            onChange={this.props.onChange}
            // onClick={this.props.onChange}
          >
            {this.state.content.map((parent, parent_id) => {
              return (
                <option key={parent_id} value={parent.id}>
                  {parent.category_name}
                </option>
              );
            })}
          </select>
        </div>
      );
    } else {
      return <p> loading </p>;
    }
  }
}

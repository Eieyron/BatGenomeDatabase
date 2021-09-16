import React, { Component } from "react";
import "./TaxonomyHandler.css";

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

    console.log("tjhis is being constructed");

    this.state = {
      content: {},
      isLoaded: false,
    };
  }

  componentDidMount() {
    console.log("this is being mounted");
    fetch(
      "http://127.0.0.1:8000/tax/" +
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
  }

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

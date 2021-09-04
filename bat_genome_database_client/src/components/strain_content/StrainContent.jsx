// import React from 'react'
import "./StrainContent.css";

import React, { Component } from "react";

export default class StrainContent extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    this.state = {
      content: {
        name: "error",
      },
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/strain/".concat(this.props.id).concat("/"))
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          content: json,
        });
      });
  }

  render() {
    console.log(this.state.content);

    if (this.state.isLoaded) {
      return (
        <div className="strain_content_body">
          <div className="name">{this.state.content.name}</div>
          <div className="section">Name and Taxonomic Classification</div>

          <ul className="section_contents">
            <li className="information">
              <b>Scientific Name</b> &emsp;
              <i>{this.state.content.scientific_name}</i>
            </li>
            <li className="information">
              <b>Domain</b> &emsp;
              <i>
                {this.state.content.doman
                  ? this.state.content.domain.name
                  : null}
              </i>
            </li>
            {/* <li className="information">
              <b>Phylum</b> &emsp;<i>{this.state.content.phylum.name}</i>
            </li>
            <li className="information">
              <b>Class</b> &emsp;<i>{this.state.content.class_name.name}</i>
            </li>
            <li className="information">
              <b>Order</b> &emsp;<i>{this.state.content.order.name}</i>
            </li>
            <li className="information">
              <b>Family</b> &emsp;<i>{this.state.content.family.name}</i>
            </li>
            <li className="information">
              <b>Genus</b> &emsp;<i>{this.state.content.genus.name}</i>
            </li>
            <li className="information">
              <b>Species</b> &emsp;<i>{this.state.content.species.name}</i>
            </li> */}
          </ul>

          <div className="section">Culture and Growth Conditions</div>

          <ul className="section_contents">
            <li className="information">
              <b>Medium</b> &emsp;<i>{this.state.content.medium}</i>
            </li>
            <li className="information">
              <b>Medium Composition</b> &emsp;
              <i>{this.state.content.medium_composition}</i>
            </li>
            <li className="information">
              <b>Medium Growth</b> &emsp;
              <i>{this.state.content.medium_growth}</i>
            </li>
            <li className="information">
              <b>Temperature</b> &emsp;<i>{this.state.content.temperature}</i>
            </li>
            <li className="information">
              <b>Temperature Range</b> &emsp;
              <i>{this.state.content.temperature_range}</i>
            </li>
            <li className="information">
              <b>Temperature Type</b> &emsp;
              <i>{this.state.content.temperature_type}</i>
            </li>
          </ul>

          <div className="section">Sequence Information</div>

          <ul className="section_contents">
            <button>
              <a href={this.state.content.type_strain}>Get Fasta</a>
            </button>
          </ul>
        </div>
      );
    } else {
      return <div>None</div>;
    }
  }
}

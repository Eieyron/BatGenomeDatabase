import React, { Component } from "react";
import "./TaxonomyHandler.css";

export default class CategoryContent extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    this.state = {
      content: {
        name: "error",
      },
      isLoaded: false,
      category: this.props.category
        .charAt(0)
        .toUpperCase()
        .concat(this.props.category.slice(1)),
    };

    this.renderElement = this.renderElement.bind(this);
  }

  componentDidMount() {
    fetch(
      "http://127.0.0.1:8000/tax/" +
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

  renderElement() {
    if (this.state.category === "Domain") {
      return (
        <div>
          <b>Scientific Name</b> &emsp;{" "}
          <i>{this.state.content.scientific_name}</i>
          <br />
          <b>Etymology</b> &emsp; <i>{this.state.content.etymology}</i>
          <br />
          <b>Proposed As</b> &emsp; <i>{this.state.content.proposed_as}</i>
          <br />
          <b>Publication</b> &emsp; <i>{this.state.content.publication}</i>
          <br />
          <b>Publication Status</b> &emsp;{" "}
          <i>{this.state.content.publication_status}</i>
          <br />
          <b>IJSEM List</b> &emsp; <i>{this.state.content.IJSEM_list}</i>
          <br />
          <b>Notes</b> &emsp; <i>{this.state.content.notes}</i>
          <br />
          <b>Nomenclature Status</b> &emsp;{" "}
          <i>{this.state.content.nomenclature_status}</i>
          <br />
          <b>Taxonomic Status</b> &emsp;{" "}
          <i>{this.state.content.taxonomic_status}</i>
          <br />
        </div>
      );
    } else if (this.state.category === "Phylum") {
      return (
        <div>
          <b>Scientific Name</b> &emsp;{" "}
          <i>{this.state.content.scientific_name}</i>
          <br />
          <b>Etymology</b> &emsp; <i>{this.state.content.etymology}</i>
          <br />
          <b>Proposed As</b> &emsp; <i>{this.state.content.proposed_as}</i>
          <br />
          <b>Publication</b> &emsp; <i>{this.state.content.publication}</i>
          <br />
          <b>Publication Status</b> &emsp;{" "}
          <i>{this.state.content.publication_status}</i>
          <br />
          <b>IJSEM List</b> &emsp; <i>{this.state.content.IJSEM_list}</i>
          <br />
          <b>Notes</b> &emsp; <i>{this.state.content.notes}</i>
          <br />
          <b>Nomenclature Status</b> &emsp;{" "}
          <i>{this.state.content.nomenclature_status}</i>
          <br />
          <b>Taxonomic Status</b> &emsp;{" "}
          <i>{this.state.content.taxonomic_status}</i>
          <br />
          <b>Parent</b> &emsp; <i>{this.state.content.parent.name}</i>
          <br />
        </div>
      );
    } else if (this.state.category === "Class") {
      return (
        <div>
          <b>Scientific Name</b> &emsp;{" "}
          <i>{this.state.content.scientific_name}</i>
          <br />
          <b>Etymology</b> &emsp; <i>{this.state.content.etymology}</i>
          <br />
          <b>Gender</b> &emsp; <i>{this.state.content.gender}</i>
          <br />
          <b>Proposed As</b> &emsp; <i>{this.state.content.proposed_as}</i>
          <br />
          <b>Publication</b> &emsp; <i>{this.state.content.publication}</i>
          <br />
          <b>Publication Status</b> &emsp;{" "}
          <i>{this.state.content.publication_status}</i>
          <br />
          <b>IJSEM List</b> &emsp; <i>{this.state.content.IJSEM_list}</i>
          <br />
          <b>Notes</b> &emsp; <i>{this.state.content.notes}</i>
          <br />
          <b>Nomenclature Status</b> &emsp;{" "}
          <i>{this.state.content.nomenclature_status}</i>
          <br />
          <b>Taxonomic Status</b> &emsp;{" "}
          <i>{this.state.content.taxonomic_status}</i>
          <br />
          <b>Parent</b> &emsp; <i>{this.state.content.parent.name}</i>
          <br />
        </div>
      );
    } else if (this.state.category === "Order") {
      return (
        <div>
          <b>Scientific Name</b> &emsp;{" "}
          <i>{this.state.content.scientific_name}</i>
          <br />
          <b>Etymology</b> &emsp; <i>{this.state.content.etymology}</i>
          <br />
          <b>Gender</b> &emsp; <i>{this.state.content.gender}</i>
          <br />
          <b>Proposed As</b> &emsp; <i>{this.state.content.proposed_as}</i>
          <br />
          <b>Publication</b> &emsp; <i>{this.state.content.publication}</i>
          <br />
          <b>Publication Status</b> &emsp;{" "}
          <i>{this.state.content.publication_status}</i>
          <br />
          <b>IJSEM List</b> &emsp; <i>{this.state.content.IJSEM_list}</i>
          <br />
          <b>Notes</b> &emsp; <i>{this.state.content.notes}</i>
          <br />
          <b>Nomenclature Status</b> &emsp;{" "}
          <i>{this.state.content.nomenclature_status}</i>
          <br />
          <b>Taxonomic Status</b> &emsp;{" "}
          <i>{this.state.content.taxonomic_status}</i>
          <br />
          <b>Parent</b> &emsp; <i>{this.state.content.parent.name}</i>
          <br />
        </div>
      );
    } else if (this.state.category === "Family") {
      return (
        <div>
          <b>Scientific Name</b> &emsp;{" "}
          <i>{this.state.content.scientific_name}</i>
          <br />
          <b>Etymology</b> &emsp; <i>{this.state.content.etymology}</i>
          <br />
          <b>Gender</b> &emsp; <i>{this.state.content.gender}</i>
          <br />
          <b>Proposed As</b> &emsp; <i>{this.state.content.proposed_as}</i>
          <br />
          <b>Publication</b> &emsp; <i>{this.state.content.publication}</i>
          <br />
          <b>Publication Status</b> &emsp;{" "}
          <i>{this.state.content.publication_status}</i>
          <br />
          <b>IJSEM List</b> &emsp; <i>{this.state.content.IJSEM_list}</i>
          <br />
          <b>Notes</b> &emsp; <i>{this.state.content.notes}</i>
          <br />
          <b>Nomenclature Status</b> &emsp;{" "}
          <i>{this.state.content.nomenclature_status}</i>
          <br />
          <b>Taxonomic Status</b> &emsp;{" "}
          <i>{this.state.content.taxonomic_status}</i>
          <br />
          <b>Parent</b> &emsp; <i>{this.state.content.parent.name}</i>
          <br />
        </div>
      );
    } else if (this.state.category === "Genus") {
      return (
        <div>
          <b>Scientific Name</b> &emsp;{" "}
          <i>{this.state.content.scientific_name}</i>
          <br />
          <b>Etymology</b> &emsp; <i>{this.state.content.etymology}</i>
          <br />
          <b>Gender</b> &emsp; <i>{this.state.content.gender}</i>
          <br />
          <b>Proposed As</b> &emsp; <i>{this.state.content.proposed_as}</i>
          <br />
          <b>Publication</b> &emsp; <i>{this.state.content.publication}</i>
          <br />
          <b>Publication Status</b> &emsp;{" "}
          <i>{this.state.content.publication_status}</i>
          <br />
          <b>IJSEM List</b> &emsp; <i>{this.state.content.IJSEM_list}</i>
          <br />
          <b>Notes</b> &emsp; <i>{this.state.content.notes}</i>
          <br />
          <b>Nomenclature Status</b> &emsp;{" "}
          <i>{this.state.content.nomenclature_status}</i>
          <br />
          <b>Taxonomic Status</b> &emsp;{" "}
          <i>{this.state.content.taxonomic_status}</i>
          <br />
          <b>Parent</b> &emsp; <i>{this.state.content.parent.name}</i>
          <br />
          <b>RNA Gene</b> &emsp;{" "}
          <button>
            {" "}
            <a href={this.state.content.rna_gene}>Get Fasta</a>{" "}
          </button>
          <br />
        </div>
      );
    } else if (this.state.category === "Species") {
      return (
        <div>
          <b>Scientific Name</b> &emsp;{" "}
          <i>{this.state.content.scientific_name}</i>
          <br />
          <b>Etymology</b> &emsp; <i>{this.state.content.etymology}</i>
          <br />
          <b>Gender</b> &emsp; <i>{this.state.content.gender}</i>
          <br />
          <b>Basonym</b> &emsp; <i>{this.state.content.basonym}</i>
          <br />
          <b>Proposed As</b> &emsp; <i>{this.state.content.proposed_as}</i>
          <br />
          <b>Publication</b> &emsp; <i>{this.state.content.publication}</i>
          <br />
          <b>Publication Status</b> &emsp;{" "}
          <i>{this.state.content.publication_status}</i>
          <br />
          <b>IJSEM List</b> &emsp; <i>{this.state.content.IJSEM_list}</i>
          <br />
          <b>Notes</b> &emsp; <i>{this.state.content.notes}</i>
          <br />
          <b>Nomenclature Status</b> &emsp;{" "}
          <i>{this.state.content.nomenclature_status}</i>
          <br />
          <b>Taxonomic Status</b> &emsp;{" "}
          <i>{this.state.content.taxonomic_status}</i>
          <br />
          <b>Parent</b> &emsp; <i>{this.state.content.parent.name}</i>
          <br />
          <b>RNA Gene</b> &emsp;{" "}
          <button>
            {" "}
            <a href={this.state.content.rna_gene}>Get Fasta</a>{" "}
          </button>
          <br />
        </div>
      );
    } else {
      return <div>Man this is so sad. error 404 nalang siguro</div>;
    }
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <div className="domain">
            <div className="main_name">
              {this.state.category}
              &nbsp;
              <i>{this.state.content.name}</i>
            </div>
            <div className="info_handler">{this.renderElement()}</div>
          </div>
        </div>
      );
    } else {
      return <div>None</div>;
    }
  }
}

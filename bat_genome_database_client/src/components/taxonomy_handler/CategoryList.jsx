import React, { Component } from "react";
import Sidebar from "../sidebar/Sidebar";
import history from "../../history";
import "./TaxonomyHandler.css";

class CategoryPickerHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.ToPresent,
      content: props.Tax,
    };
  }

  render() {
    // console.log(this.state.content);

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
          <b>Parent</b> &emsp; <i>{this.state.content.parent}</i>
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
          <b>Parent</b> &emsp; <i>{this.state.content.parent}</i>
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
          <b>Parent</b> &emsp; <i>{this.state.content.parent}</i>
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
          <b>Parent</b> &emsp; <i>{this.state.content.parent}</i>
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
          <b>Parent</b> &emsp; <i>{this.state.content.parent}</i>
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
          <b>Parent</b> &emsp; <i>{this.state.content.parent}</i>
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
}

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "error",
        },
      ],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      "http://127.0.0.1:8000/tax/" + this.props.Category.toLowerCase() + "/"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    return (
      <div>
        <Sidebar Crumb={this.props.Crumb} />
        <div className="main_name">{this.props.Category} Database</div>
        <div className="domain">
          <table className="strainlist">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Scientific Name</th>
            </tr>
            <tbody>
              {this.state.items.map((category, category_id) => {
                return (
                  <tr
                    key={category_id}
                    onClick={() =>
                      history.push(
                        "/taxonomy/"
                          .concat(this.props.Category.toLowerCase())
                          .concat("/")
                          .concat(category.id)
                      )
                    }
                  >
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>{category.scientific_name}</td>
                  </tr>
                  // </Link>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

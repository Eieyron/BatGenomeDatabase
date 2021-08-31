import React from "react";
import "./Taxonomy.css";
import TaxonomyHandler from "../../components/taxonomy_handler/TaxonomyHandler";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Taxonomy(props) {
  return (
    <>
      <Sidebar Crumb={props.Crumb} />
      <div className="taxonomy">
        <TaxonomyHandler />
      </div>
    </>
  );
}

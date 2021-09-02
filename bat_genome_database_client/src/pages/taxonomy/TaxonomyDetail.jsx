import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Taxonomy";
import { useParams } from "react-router-dom";
import CategoryContent from "../../components/taxonomy_handler/CategoryContent";

export default function TaxonomyDetail(props) {
  let match = useParams();

  return (
    <>
      <Sidebar Crumb={props.Crumb} Match={match} />
      <div className="strain_content">
        <CategoryContent category={match.category} id={match.id} />
      </div>
    </>
  );
}

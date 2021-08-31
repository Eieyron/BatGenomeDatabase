import React from "react";
import StrainContent from "../../components/strain_content/StrainContent";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Strain.css";
import { useParams } from "react-router-dom";

export default function StrainDetail(props) {
  let { id } = useParams();

  return (
    <>
      <Sidebar Crumb={props.Crumb} Match={id} />
      <div className="strain_content">
        <StrainContent id={id} />
      </div>
    </>
  );
}

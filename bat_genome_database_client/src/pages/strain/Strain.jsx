import React from "react";
import StrainList from "../../components/strain_content/StrainList";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Strain.css";
import { useParams } from "react-router-dom";

export default function Strain(props) {
  let { id } = useParams();

  return (
    <>
      <Sidebar Crumb={props.Crumb} match={id} />
      <div className="strain_content">
        <div className="title_bar">
          <div className="left_title_bar">
            <h1 className="title">Strain Database</h1>
          </div>
          <div className="right_title_bar">
            <svg
              className="w-6 h-6 title_bar_button"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                console.log("add element");
              }}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <StrainList />
      </div>
    </>
  );
}

import React, { Component } from "react";
import "./Profile.css";

export class Profile extends Component {
  render() {
    return (
      <div className="profile_container">
        <div className="profile_header">
          <div className="profile_header_left">
            <div className="pic_container">picture</div>
            <div className="name_container">
              {localStorage.first_name} {localStorage.last_name}
            </div>
          </div>

          <div className="profile_header_right"></div>
        </div>

        <div className="profile_information">
          <div className="profile_item">
            username <i>{localStorage.username}</i>
          </div>
          <div className="profile_item">
            email <i>{localStorage.email}</i>
          </div>
          <div className="profile_item">
            mobile_number <i>{localStorage.mobile_number}</i>
          </div>
          <div className="profile_item">
            landline_number <i>{localStorage.landline_number}</i>
          </div>
          <div className="profile_item">
            address <i>{localStorage.address}</i>
          </div>
          <div className="profile_item">
            role <i>{localStorage.role}</i>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

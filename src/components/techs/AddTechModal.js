import React, { useState } from "react";
import { connect } from "react-redux";
import { addTech } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");

  const onSubmit = () => {
    if (firstName === "") {
      M.toast({ html: "Please enter firstName" });
    } else if (lastName === "") {
      M.toast({ html: "Please enter lastName" });
    } else {
      addTech({
        firstName,
        lastName,
      });
      M.toast({ html: `Added new tech : ${firstName} ${lastName}` });

      //   Clear fields
      setFirstname("");
      setLastname("");
    }
  };
  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect btn blue btn"
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);

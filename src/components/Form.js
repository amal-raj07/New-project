import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Form() {
  const [errors, setErrors] = useState([
    {
      municipalityError: "",
      address1Error: "",
      address2Error: "",
      cityError: "",
      stateError: "",
      zipcodeError: "",
      countryError: "",
      isMunicipalCheckError: ""
    }
  ]);
  const [formData, setFormData] = useState([
    {
      municipality: "",
      address1Error: "",
      address2: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      isMunicipalCheck: false
    }
  ]);

  const handleValidation = (event) => {
    let formIsValid = true;

    if (formData.municipality === "") {
      setErrors((prevState) => ({
        ...prevState,
        municipalityError: "Please enter valid data"
      }));
      formIsValid = false;
    }
    if (formData.address1 === "") {
      setErrors((prevState) => ({
        ...prevState,
        address1Error: "Please enter valid data"
      }));
      formIsValid = false;
    }
    if (formData.address2 === "") {
      setErrors((prevState) => ({
        ...prevState,
        address2Error: "Please enter valid data"
      }));
      formIsValid = false;
    }
    if (formData.city === "") {
      setErrors((prevState) => ({
        ...prevState,
        cityError: "Please enter valid data"
      }));
      formIsValid = false;
    }
    if (formData.zipcode === "") {
      setErrors((prevState) => ({
        ...prevState,
        zipcodeError: "Please enter valid data"
      }));
      formIsValid = false;
    }
    if (formData.state === "") {
      setErrors((prevState) => ({
        ...prevState,
        stateError: "Please enter valid data"
      }));
      formIsValid = false;
    }

    if (formData.country === "") {
      setErrors((prevState) => ({
        ...prevState,
        countryError: "Please enter valid data"
      }));
      formIsValid = false;
    }
    if (!formData.isMunicipalCheck) {
      setErrors((prevState) => ({
        ...prevState,
        isMunicipalCheckError: "Please check ...."
      }));
      formIsValid = false;
    }
    return formIsValid;
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    // handleValidation();
    if (handleValidation) {
      console.log("form data", formData);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <h3>System Records</h3>
          </div>
          <div className="col-md-4">
            <form id="registerForm" onSubmit={registerSubmit}>
              <div className="form-group">
                <label>Municipality</label>
                <input
                  type="text"
                  className="form-control"
                  id="municipality"
                  name="municipality"
                  placeholder="Enter Municipality"
                  onChange={(event) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      municipality: event.target.value
                    }))
                  }
                />
                <small id="municipality" className="text-danger form-text">
                  {formData.municipality === "" ? errors.municipalityError : ""}
                </small>
              </div>
              <div className="form-group">
                <label>Address 1</label>
                <input
                  type="text"
                  className="form-control"
                  id="address1"
                  name="address1"
                  placeholder="Enter Address"
                  onChange={(event) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      address1: event.target.value
                    }))
                  }
                />
                <small id="address1" className="text-danger form-text">
                  {formData.address1 === "" ? errors.address1Error : ""}
                </small>
              </div>
              <div className="form-group">
                <label>Address 2</label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  name="address2"
                  placeholder="Enter Address 2"
                  onChange={(event) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      address2: event.target.value
                    }))
                  }
                />
                <small id="address2" className="text-danger form-text">
                  {formData.address2 === "" ? errors.address2Error : ""}
                </small>
              </div>
              <div className="col-md-12 d-flex ">
                <div className="form-group pr-2">
                  <label>City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    placeholder="Enter City"
                    onChange={(event) =>
                      setFormData((prevState) => ({
                        ...prevState,
                        city: event.target.value
                      }))
                    }
                  />
                  <small id="city" className="text-danger form-text">
                    {formData.city === "" ? errors.cityError : ""}
                  </small>
                </div>

                <div className="form-group pr-2">
                  <label>State</label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    name="state"
                    placeholder="Enter state"
                    onChange={(event) =>
                      setFormData((prevState) => ({
                        ...prevState,
                        state: event.target.value
                      }))
                    }
                  />
                  <small id="state" className="text-danger form-text">
                    {errors ? errors.state : ""}
                  </small>
                </div>

                <div className="form-group">
                  <label>Zip Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zipcode"
                    name="zipcode"
                    placeholder="Enter zipcode"
                    onChange={(event) =>
                      setFormData((prevState) => ({
                        ...prevState,
                        zipcode: event.target.value
                      }))
                    }
                  />
                  <small id="zipcode" className="text-danger form-text">
                    {errors ? errors.zipcodeError : ""}
                  </small>
                </div>
              </div>
              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  name="country"
                  placeholder="Enter country"
                  onChange={(event) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      country: event.target.value
                    }))
                  }
                />
                <small id="country" className="text-danger form-text">
                  {errors ? errors.countryError : ""}
                </small>
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  onChange={(event) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      isMunicipalCheck: !formData.isMunicipalCheck
                    }))
                  }
                />
                <label className="form-check-label">
                  Use Municipal Account?
                </label>
                <small id="zipcode" className="text-danger form-text">
                  {!formData.isMunicipalCheck
                    ? errors.isMunicipalCheckError
                    : ""}
                </small>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form
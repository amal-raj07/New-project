import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
    return (
        <div className="col-md-12 header">

            <p className="heading">Grave Sites Management</p>
            <div className="header-right">
                <a className="active" href="#Maintain">Maintain</a>
                <a href="#Payments">Payments</a>
                <a href="#Reports">Reports</a>
            </div>
        </div>
    );
}
export default Header;
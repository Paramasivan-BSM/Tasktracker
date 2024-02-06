import React from "react";
import Hlogo from "../assets/Hlogo.png";
// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Import Bootstrap JavaScript
import "bootstrap/dist/js/bootstrap.min.js";
import styles from "./Header.module.css";
export const Header = () => {
  return (
    <header className="container mt-3" id={styles.Head}>
      <div className="row">
        <div className="col-3">
          <img src={Hlogo} alt="" srcset="" width={"80px"} />
          <span className="ms-5 h3">TaskMate</span>
        </div>

        <div className="col-3 offset-5 mt-3">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={"20px"}
              className="m-1 "
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={"20px"}
              className="m-1"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={"20px"}
              className="m-1"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>
          </span>
        </div>
      </div>
    </header>
  );
};

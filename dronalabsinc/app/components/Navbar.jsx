import 'bootstrap/dist/css/bootstrap.css'
 
import React from 'react'
import Link from 'next/link'


export default function Navbar() {
  return (
    <nav  className="navbar navbar-expand-lg  bg-body-tertiary">
  <div  className="container-fluid">
    <a  className="navbar-brand" href="#">Navbar scroll</a>
    <button  className="navbar-toggler" type="button" data-bs-toggle="dropdown" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="true" aria-label="Toggle navigation">
    <span  className="navbar-toggler-icon"></span> 
    </button>
    <div  className="collapse navbar-collapse" id="navbarScroll">
      <ul  className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"  >
        <li  className="nav-item">
          <a  className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link" href="#">Link1</a>
        </li>
        <li  className="nav-item dropdown">
          <a  className="nav-link dropdown-toggle"   role="button" 
          data-bs-toggle="dropdown" aria-expanded="false" id="navbarDropdown">
            DropDown
          </a>
          <ul  className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a  className="dropdown-item" href="#">Action</a></li>
            <li><a  className="dropdown-item" href="#">Another action</a></li>  
            <li><a  className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li  className="nav-item">
          <a  className="nav-link" aria-disabled="true">Link3</a>
        </li>
      </ul>
       
    </div>
  </div>
</nav>
  );
}

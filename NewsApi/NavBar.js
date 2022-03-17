import React, { useEffect, useState } from 'react'
// import ScocialNews from './ScocialNews';


const NavBar= ({categaries,onClick})=>{
   const [social,setSocial] = useState([]);


   
  
   
   
   
    return(
        <>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{color:'red'}}><img src='https://cdn-icons-png.flaticon.com/512/21/21601.png' style={{width:"39px"}} alt="Global news"></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" onClick={categaries}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Catageries
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li onClick={onClick}><a className="dropdown-item" href="#">Social</a></li>
                                    <li><a className="dropdown-item" href="#">Sport</a></li>
                                    <li><hr className="dropdown-divider" />Crime</li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* <ScocialNews>{social}</ScocialNews> */}
        </>
    )
}
export default NavBar;
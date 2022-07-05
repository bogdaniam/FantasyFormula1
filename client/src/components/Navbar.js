//import './App.css';

import React, { useState } from "react";


function Navbar() {
  
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // console.log(email)
  // console.log(pass)
  //! REGUITRAR EMAIL
//   const register = () => {
//     createUserWithEmailAndPassword(auth, email, pass)
//       .then(() => {
//         console.log("Creado el usuario");
//       })
//       .catch((e) => {
//         console.log("Error: " + e);
//       }
//       )
//   }
//   //! LOGUEAR EMAIL
//   const login = () => {
//     signInWithEmailAndPassword(auth, email, pass)
//       .then((userCredential) => {
//         console.log("Login con usuario: " + userCredential.user.email);
//       })
//       .catch((e) => {
//         console.log("Error: " + e);
//       });
//   }
//   //! DESLOGUEAR
//   const deslogarUsuario = () => {
//     signOut(auth)
//       .then(() => {
//         console.log("Logout");
//       })
//       .catch((e) => {
//         console.log("Error: " + e);
//       });
//   }
  return (
      <div className="App">
        <div className="container">
          {/* <!-- Barra de navegación --> */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#SignInModal">SingIn</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#SignUpModal">SingUp</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" id="aLogOut" >LogOut</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* <!-- Modal Registro -->
        <!-- Modal --> */}
        <div className="modal fade" id="SignUpModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">SingUp</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form id="SignUpForm">
                  <div className="form-group">
                    <input type="text" id="SignUpEmail" className="form-control form-control-lg" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <br />
                    <input type="password" id="SignUpPass" className="form-contol form-control-lg" placeholder="Password" required onChange={(e) => setPass(e.target.value)} />
                  </div>
                  <br />
                  <br />
                  <button type="button" className="btn btn-primary" onClick={() => {  }}>SingUp</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal Login -->
        <!-- Modal --> */}
        <div className="modal fade" id="SignInModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">SingIn</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form id="SignInForm">
                  <div className="form-group">
                    <input type="text" id="SignInEmail" className="form-control form-control-lg" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <br />
                    <input type="password" id="SignInPass" className="form-contol form-control-lg" placeholder="Password" required onChange={(e) => setPass(e.target.value)} />
                  </div>
                  <br />
                  <br />
                  <button type="button" className="btn btn-primary" onClick={() => {  }}>SingIn</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Navbar;
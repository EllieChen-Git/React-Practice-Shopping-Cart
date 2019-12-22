// import React, { Component } from "react";
import React from "react";

function getCurrentTime() {
  const current = new Date();
  return current.toTimeString();
}

//stateless functional component

const NavBar = ({ totalCounters }) => {
  //Destructuring 'props.totalCounters' here
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="http://localhost:3000/">
        Shopping Cart{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
      {getCurrentTime()}
    </nav>
  );
};

// JSX class

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;

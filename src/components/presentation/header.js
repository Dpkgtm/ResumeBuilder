import React from "react";
import { NavLink } from "react-router-dom";
import * as SignOutMiddleWare from "../../redux/reducers/SignOutMiddleWare";
import logo from "../../static/images/logo.png";
import { connect } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useHistory } from "react-router";
function LoggesOut(props) {
  console.log("logout")
  return (
    <ul>
      <li className="signup ">
        <NavLink className=" btnv-1" to="/signup">
          SignUp
        </NavLink>
      </li>
      <li className="signin"> 
        <NavLink className="text-blue btnv-3" to="/login">
        Sign In
        </NavLink>  
               
      </li>
    </ul>
  )
}

const Header = (props) => {
  console.log(props);
  const history=useHistory();
  const auth = props.auth;
  const handleLogOut=()=>{
   console.log('The user will sign out');
   props.signout();
  
  }

  return (  
  <header className="header">
  <nav className="nav">
      <a href="/" className="holder-logo">
        <img className='logo' src={logo}></img>
      </a> 
        <div className="header-links full-height">

        { isLoaded(auth) && !isEmpty(auth) ?<>
          <ul>
            <li className="signin ">
              <NavLink className="  " to="/">
               Logged in as {props.auth.email}
              </NavLink>
            </li>
            <li className="signin"> 
              <button className="text-blue btnv-3" onClick={handleLogOut}>
             Signout
              </button>         
            </li>
          </ul>

        </>:<LoggesOut></LoggesOut>}
          
          <ul id="nav-mid">
            <li>
            <NavLink className="btn-nvt-gm" to="/resume-templates">
            Resume Templates
            </NavLink>
            </li> 
            <li className="holder-pricing">            
              <NavLink className="btn-nvt-gm" to="/about-us">
              About Us
              </NavLink>
            </li>        
          </ul>
            
      </div>   
    </nav>
  </header>

  );
};

const mapStateToProps=(state)=>{
  return{
     auth: state.firebase.auth,
     authMine:state.authMine
  }
}
const mapDispatchToProps= (dispatch)=>{
  return {
    signout:()=>dispatch(SignOutMiddleWare.signout())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);

import React,{useEffect, useState} from "react";
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
// import { connect } from 'react-redux'
// import * as educationActions from '../../actions/educationActions';
// import {bindActionCreators} from 'redux';
import * as educationActions from '../../redux/actionTypes'
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";

function Education(props) {
  const initialEducation={
    [fieldCd.SchoolName]: "",
    [fieldCd.Degree]: "",
    [fieldCd.GraduationCGPA]: null,
    [fieldCd.City]: "",
    [fieldCd.GraduationDate]: "",
    [fieldCd.GraduationYear]: null,
  }
  console.log(props);
 
  console.log('Education');
  let history = useHistory();
  const [education,setEducation]= useState(initialEducation);

  const onchange = (event) => {
    var key =event.target.name;
    var val =event.target.value;
    setEducation({...education,[key]:val})
  }
  const getFieldData=(key)=>{
    if(education && education[key]){
      return education[key]
    }
    return "";
}
console.log(education);
  const onSubmit = async(e) =>{
    let keys = Object.keys(props.education)
    if(keys.length==0){
      console.log(props.education,"if");
      props.setEducation(education);
    }
    else{
      console.log(props.education,"else");
      props.UpdateEducation(education)
    }
     history.push('/finalize')
  }

    useEffect(()=>{
      let keys = Object.keys(props.education);
      if(keys){
        setEducation(props.education);
      }
    },[])
    return (
      <div className="container med education" >
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Educational Section</h2>
            <div className="form-section">
              <div className="input-group"><label>College Name</label>
                <div className="effect"><input type="text" name={fieldCd.SchoolName}
                  onChange={onchange} value={getFieldData(fieldCd.SchoolName)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Degree</label>
                <div className="effect"><input type="text" name={fieldCd.Degree}
                  onChange={onchange} value={getFieldData(fieldCd.Degree)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>CGPA</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationCGPA}
                  onChange={onchange} value={getFieldData(fieldCd.GraduationCGPA)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>City/State</label>
                <div className="effect"><input type="text"  name={fieldCd.City}
                  onChange={onchange} value={getFieldData(fieldCd.City)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Month</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationDate}
                  onChange={onchange} value={getFieldData(fieldCd.GraduationDate)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Year</label>
                <div className="effect"><input type="text"  name={fieldCd.GraduationYear}
                  onChange={onchange} value={getFieldData(fieldCd.GraduationYear)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="form-buttons">
                <button className="btn hvr-float-shadow" type='button' onClick={onSubmit}>Next</button>
                <NavLink to='/contact' className="center">Back</NavLink>
              </div>
            </div>
          </div>
          <div className="preview-card">
            <ResumePreview contactSection={props.contact} educationSection={education} skinCd={props?.document?.skinCd}></ResumePreview>            
          </div>
        </div>
      </div>
    );
  }


function mapStateToProps(store){
  return {
    document:store.document,
    contact:store.contact,
    education:store.education
  }
}
function mapDispatchToProps(dispatch){
  return {
    setEducation:(object)=>{
      dispatch({
        type: educationActions.ADD_EDUCATION ,
        payload:object
      })
    },
    UpdateEducation:(object)=>{
      dispatch({
        type:educationActions.UPDATE_EDUCATION,
        payload:object
      })
    }
  }
}
  


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Education))


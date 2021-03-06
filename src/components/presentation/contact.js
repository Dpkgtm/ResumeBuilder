import React,{useState,useEffect} from "react";
import {NavLink, withRouter} from "react-router-dom";
import {fieldCd, skinCodes}  from '../../constants/typeCodes';
import * as contactActions from "../../redux/actionTypes"
import { useHistory } from "react-router-dom";
import ResumePreview from './resumePreview'
import { connect } from "react-redux";


function Contact(props) {
    console.log(props);
   let history = useHistory();
           let initFormState = {
               [fieldCd.FirstName]: "",
               [fieldCd.LastName]: "",
               [fieldCd.ProfSummary]: "",
               [fieldCd.Email]: "",
               [fieldCd.Phone]: "",
               [fieldCd.Profession]: "",
               [fieldCd.Street]: "",
               [fieldCd.City]: "",
               [fieldCd.State]: "",
               [fieldCd.Country]: "",
               [fieldCd.ZipCode]: ""
            }
const [contact,setContact]= useState(initFormState);
  const onchange=(event)=>{
        var key =event.target.name;
        var val =event.target.value;
        setContact({...contact,[key]:val})
    }
    console.log(contact);
    const onSubmit= async()=>{
        let keys=Object.keys(props.contact);
        if(keys.length==0){
            props.setContact(contact);
        }
        else{
            props.updateContact(contact);
        }
        history.push('/education');
    }


    const getFieldData=(key)=>{
        if(contact && contact[key]){
          return contact[key]
        }
        return "";
    }
    useEffect(()=>{
        let keys=Object.keys(props.contact);
        if(keys.length!=0){
            setContact(props.contact);
        }
    },[])
    
    return (
          <div className="container med contact">
            <div className="section funnel-section">
                <div className="form-card">
                    <h2 className="form-heading center">Personal Details</h2>
                    <div className="form-section">
                        <div className="input-group"><label>First Name</label>
                            <div className="effect"><input type="text" name={fieldCd.FirstName} value={getFieldData(fieldCd.FirstName)}  onChange={onchange}  /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Last Name</label>
                            <div className="effect"><input type="text" name={fieldCd.LastName}  value={getFieldData(fieldCd.LastName)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group full"><label>Professional Summary</label>
                            <div className="effect"><input type="text" name={fieldCd.ProfSummary}   value={getFieldData(fieldCd.ProfSummary)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Email</label>
                            <div className="effect"><input type="text"  name={fieldCd.Email}  value={getFieldData(fieldCd.Email)}  onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Phone</label>
                            <div className="effect"><input type="text"  name={fieldCd.Phone}   value={getFieldData(fieldCd.Phone)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Profession</label>
                            <div className="effect"><input type="text"  name={fieldCd.Profession}  value={getFieldData(fieldCd.Profession)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Street</label>
                            <div className="effect"><input type="text" name={fieldCd.Street}   value={getFieldData(fieldCd.Street)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>City</label>
                            <div className="effect"><input type="text" name={fieldCd.City}  value={getFieldData(fieldCd.City)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>State</label>
                            <div className="effect"><input type="text"   name={fieldCd.State}  value={getFieldData(fieldCd.State)}  onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>


                        <div className="input-group"><label>Country</label>
                            <div className="effect"><input type="text"  name={fieldCd.Country}  value={getFieldData(fieldCd.Country)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Pin Code</label>
                            <div className="effect"><input type="text" name={fieldCd.ZipCode}  value={getFieldData(fieldCd.ZipCode)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="form-buttons">
                            <button onClick={onSubmit} className="btn hvr-float-shadow" type='button'>Next</button>
                            <NavLink to='/getting-started'  className="center">Back</NavLink>
                        </div>
                    </div>

                </div>

                <div className="preview-card">
                    <ResumePreview contactSection={contact} skinCd={props?.document?.skinCd}></ResumePreview>
                </div>

            </div>
        </div>
    );
}
function mapStateToProps(store){
    return {
        document :store.document,
        contact : store.contact
    }
}
function mapDispatchToProps(dispatch){
    return {
        setContact:(object)=>{
            dispatch({
                type:contactActions.ADD_CONTACT,
                payload:object
            })
        },
        updateContact:(object)=>{
            dispatch({
                type:contactActions.UPDATE_CONTACT,
                payload:object
            })
        }
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Contact))


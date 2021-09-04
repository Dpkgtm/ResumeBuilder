import React from 'react';
import {skinCodes} from '../../constants/typeCodes';
import * as taskActions from "../../redux/actionTypes";
import uuid from "react-uuid";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
// import { bindActionCreators } from 'redux';
// import { withRouter } from "react-router-dom";
// import { useHistory } from "react-router-dom";
function GettingStarted(props) {
     //let history = useHistory();
     console.log(props);
     console.log(props.id);
     const onChange = async (skinCd) => {

        if(props.id==null){
                  let document ={
                      id:uuid(),
                      skinCd:skinCd
                  }
                  props.setSkin(document);
        }
        else{
            //  props.setDocument(skinCd); 
            props.updateSkin(skinCd)
        }
        props.history.push('/contact');
      }

      
        return (  
            <div className="container med gettingStarted">
                <div className="section">
                    <h1 className=" center">
                    Select a resume template to get started</h1>
                    <p className=" center">
                    You’ll be able to edit and change this template later!
                    </p>
                    <div className="styleTemplate ">
                    {
                        skinCodes.map((value,index) => {
                            return( <div key={index} className="template-card rounded-border">
                                  <i className={(value == 'demo-value'? 'selected fa fa-check' :'hide') } ></i>
                                <img  className='' src={'/images/' + value + '.svg'}/>
                                <button type="button" onClick={()=>onChange(value)}  className='btn-select-theme'>USE TEMPLATE</button>
                            </div>);
    
                        })
                    }
                    </div>
                
                </div>
            </div>
        );
    
}
  
function mapStateToProps(store){
    return store.document;

}
function mapDispatchToProps(dispatch){
    return{
        setSkin:(document)=>{
            dispatch({
                type:taskActions.SET_SKIN,
                payload:document
            })
        },
        updateSkin:(skinCd)=>{
            dispatch({
                type:taskActions.UPDATE_SKIN,
                payload:skinCd
            })
        }

    }
}

export default
    withRouter(connect(mapStateToProps, mapDispatchToProps)(GettingStarted));


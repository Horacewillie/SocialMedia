import "./login.css";
import { useState, useContext} from "react";
import { useHistory } from "react-router";
import {Link} from 'react-router-dom'
import FormField from "../../utils/form/formField/FormField";
import { update, generateData, isFormValid } from "../../utils/form/formActions/formActions";
import {LoginContext} from '../../context/Login/LoginContext'
import {loginUser} from '../../context/Login/LoginActions'
import {CircularProgress} from '@material-ui/core'


function Login({props}) {
  const [state, setState] = useState({
    formError: false,
    errorMessage: '',
    formSuccess: "",
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password",
        },
        validation: {
          required: true,
          password: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
    },
  });

 

  const {dispatch, isFetching, loginSuccess, error} = useContext(LoginContext)
  const history = useHistory()

  const updateForm = (element) => {
    const newFormData = update(element, state.formData, "login");

    setState({
      ...state,
      formError: false,
      formData: newFormData,
    });
  };
    
  
  const submitForm = async (e) => {
    e.preventDefault();
    let dataToSubmit = generateData(state.formData, "login");
    let formIsValid = isFormValid(state.formData, 'login')
    
      if(formIsValid){
        loginUser(dispatch, dataToSubmit).then(res => {
          console.log(res)
          if(res.success){
            history.push('/') 
          }else if(!res.data.success && res.data.message === 'Incorrect Password'){
            setState({
              ...state,
              formError: true,
              errorMessage: res.data.message
            })
          }else{
            setState({
              ...state,
              errorMessage: 'User does not exist',
              formError: true
            })
          }
        })
     } 
    else{
      setState({
        ...state,
        formError: true,
        errorMessage: 'Please Check your data'
      })
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Ijoba Social</h3>
          <span className="loginDesc">
            Connect with friends and the World around you on Ijoba Social.
          </span>
        </div>
        <div className="loginRight">
          <form onSubmit = {(e) => submitForm(e)} className="loginBox">
            <FormField
              id="email"
              formData={state.formData.email}
              change={(element) => updateForm(element)}
            />
            <FormField
              id="password"
              formData={state.formData.password}
              change={(element) => updateForm(element)}
            />
          
            {state.formError && state.errorMessage ? (
                    <div className = 'form_error'>{state.errorMessage }</div>
                  ) : null}
            <button className="loginButton" onClick={(e) => submitForm(e)}>
               {isFetching ? <CircularProgress style ={{color: 'white'}} size={15} thickness ={2.5}/> : 'LOG IN'}
            </button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegister">
            <Link className = 'registerLink' to = '/register'>Create an Account</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

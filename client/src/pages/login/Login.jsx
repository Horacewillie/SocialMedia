import "./login.css";
import { useState } from "react";
import {Link} from 'react-router-dom'
import FormField from "../../utils/form/formField/FormField";
import { update, generateData } from "../../utils/form/formActions/formActions";

function Login() {
  const [state, setState] = useState({
    formError: false,
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

  const updateForm = (element) => {
    const newFormData = update(element, state.formData, "login");

    setState({
      formError: false,
      formData: newFormData,
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    let dataToSubmit = generateData(this.state.formData, "login");
    console.log(dataToSubmit);
    // let formIsValid = isFormValid(this.state.formData, 'login')

    // if(formIsValid){
    //   console.log('Hey')
    //   this.props.dispatch(loginUser(dataToSubmit)).then(res => {
    //     console.log(res)
    //     if(res.payload.success){
    //       this.props.history.push('/user/dashboard')
    //     }else{
    //       this.setState({
    //         formError: true
    //       })
    //     }
    //   })
    // }else{
    //   this.setState({
    //     formError: true
    //   })
    // }
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
          <div className="loginBox">
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
            {state.formError ? (
                    <div>Please check your data</div>
                  ) : null}
            <button className="loginButton" onClick={(e) => submitForm(e)}>
              LOG IN
            </button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegister">
            <Link className = 'registerLink' to = '/register'>Create an Account</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

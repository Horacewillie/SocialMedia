import "./register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import FormField from "../../utils/form/formField/FormField";
import { update, generateData } from "../../utils/form/formActions/formActions";

function Login() {
  const [state, setState] = useState({
    formError: false,
    formSuccess: "",
    formData: {
      name: {
        element: "input",
        value: "",
        config: {
          name: "name_input",
          type: "name",
          placeholder: "Enter your name",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      lastname: {
        element: "input",
        value: "",
        config: {
          name: "lastname_input",
          type: "lastname",
          placeholder: "Enter your lastname",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      username: {
        element: "input",
        value: "",
        config: {
          name: "username_input",
          type: "username",
          placeholder: "Enter your username",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
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
      confirmPassword: {
        element: "input",
        value: "",
        config: {
          name: "confirmPassword_input",
          type: "password",
          placeholder: "Enter your password again",
        },
        validation: {
          required: true,
          confirm: 'password',
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
    let dataToSubmit = generateData(state.formData, "login");
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
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Ijoba Social</h3>
          <span className="registerDesc">
            Connect with friends and the World around you on Ijoba Social.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <FormField
              id="name"
              formData={state.formData.name}
              change={(element) => updateForm(element)}
            />
            <FormField
              id="username"
              formData={state.formData.username}
              change={(element) => updateForm(element)}
            />
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
            <FormField
              id="confirmPassword"
              formData={state.formData.confirmPassword}
              change={(element) => updateForm(element)}
            />
            <button className="registerButton" onClick={(e) => submitForm(e)}>
              SIGN UP
            </button>
            <button className="registerRegister">
              <Link className="loginLink" to="/login">
                SIGN IN
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* <Dialog open={state.formSuccess}>
          <div className="dialog_alert">
            <div>Congratulations!!!</div>
            <div>You will be directed in a few seconds</div>
          </div>
    </Dialog> */}
    </div>
  );
}

export default Login;

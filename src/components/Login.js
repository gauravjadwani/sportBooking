import React from "react";
import {FontIcon, RaisedButton} from "material-ui";
import {loginWithGoogle} from "../helpers/auth";
import {firebaseAuth} from "../firebase";
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {SET_NAME} from './../actions';
const firebaseAuthKey = "firebaseAuthInProgress";
const appTokenKey = "appToken";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      splashScreen: false
    };

    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
  }

  handleGoogleLogin() {
    loginWithGoogle().catch(function(error) {
      alert(error); // or show toast
      localStorage.removeItem(firebaseAuthKey);
    });
    localStorage.setItem(firebaseAuthKey, "1");
  }

  componentWillMount() {
    firebaseAuth().getRedirectResult().then(function(result) {
      if (result.user) {
        console.log("GoogleLogin Redirect result");
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          let token = result.credential.accessToken;
          // ...
        }
        // The signed-in user info.
        let user = result.user;
        console.log("user:", JSON.stringify(user));
      }
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      alert(error);
    });

    /**
         * We have appToken relevant for our backend API
         */
    if (localStorage.getItem(appTokenKey)) {
      this.props.history.push("/LandingScreen");
      return;
    }

    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        console.log("User signed in: ", JSON.stringify(user));
        this.props.SET_NAME(user.displayName);
        console.log(this.props.SET_NAME, 'setname');
        localStorage.removeItem(firebaseAuthKey);

        localStorage.setItem(appTokenKey, user.uid);
        // email = ref.getAuth().password.email;
        // store the token
        this.props.history.push("/LandingScreen")
      }
    });
  }

  render() {
    console.log(firebaseAuthKey + "=" + localStorage.getItem(firebaseAuthKey));
    if (localStorage.getItem(firebaseAuthKey) === "1")
      return <SplashScreen/>;
    return <LoginPage handleGoogleLogin={this.handleGoogleLogin}/>;
  }
}

const iconStyles = {
  color: "#ffffff"
};
const LoginPage = ({handleGoogleLogin}) => (<div>
  <h1>Login</h1>
  <div>
    <Button label="Sign in with Google" labelColor={"#ffffff"} backgroundColor="#dd4b39" icon={<FontIcon className = "fa fa-google-plus" style = {
        iconStyles
      } />} onClick={handleGoogleLogin}>Sign in with Google</Button>
  </div>
</div>);
const SplashScreen = () => (<p>Loading...</p>);

const mapStateToProps = ({main}) => {
  const {name} = main;
  return {name}
}
export default connect(mapStateToProps, {SET_NAME})(Login);

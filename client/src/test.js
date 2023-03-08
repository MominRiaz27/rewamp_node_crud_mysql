import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: {
        Email: "",
        Password: "",
        ConfirmPassword: "",
        CNIC: ""

      },
      login: {
        Email: "",
        Password: "",
      },
    };
    this.handleSignupChange = this.handleSignupChange.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
  }

  handleEmailChange(event) {
    const { Email,value } = event.target;
    this.setState((prevState) => ({
      signup: {
        ...prevState.signup,
        [Email]: value,
      },
    }));
  }
  // handleEmailChange(event) {
  //   const { Password,value } = event.target;
  //   this.setState((prevState) => ({
  //     signup: {
  //       ...prevState.signup,
  //       [Email]: value,
  //     },
  //   }));
  // }

        componentDidMount(){
        //animation code
        $(document).ready(function(){
            $('.login-info-box').fadeOut();
            $('.login-show').addClass('show-log-panel');    

        $('input[type="radio"]').on('change',function() {
            
            if($('#log-reg-show').is(':checked')) {
                $('.register-info-box').fadeIn();
                $('.login-info-box').fadeOut();
                
                $('.white-panel').removeClass('right-log');
                
                $('.login-show').addClass('show-log-panel');
                $('.register-show').removeClass('show-log-panel');
            }
            if($('#log-login-show').is(':checked')) {
                $('.register-info-box').fadeOut(); 
                $('.login-info-box').fadeIn();
                
                $('.white-panel').addClass('right-log');
                $('.register-show').addClass('show-log-panel');
                $('.login-show').removeClass('show-log-panel');
                
            }
        });
    });
  }
  signupSubmit = e => {
    e.preventDefault();
    console.log("inside submit")
    const signupData = {
      Email: e.target.email.value,
      Password: e.target.password.value,
      ConfirmPassword: e.target.confirmpassword.value,
      CNIC: e.target.cnic.value,

      // Update other form fields here
    };
    console.log(signupData)
    this.setState({
      signup: signupData,
    });
  };


    render() {

        return (
            
            
            <div class="login-reg-panel">
                <div class="login-info-box">
                    <h2>Have an account?</h2>
                    <p>Click here to Login </p>
                    <label id="label-register" for="log-reg-show">Login</label>
                    <input type="radio" name="active-log-panel" id="log-reg-show" value="log-reg-show" />
                </div>
                            
                <div class="register-info-box">
                    <h2>Don't have an account?</h2>
                    <p>Click here to Register</p>
                    <label id="label-login" for="log-login-show" >Register</label>
                    <input type="radio" name="active-log-panel" value="log-login-show" id="log-login-show" />
                </div>
                            
                <div class="white-panel">
                    <div class="login-show">
                    <h2>LOGIN</h2>
                      <form id="form" onSubmit={''}>
                        <input type="text" placeholder="Email" name='Email'/>
                        <input type="password" placeholder="Password" name='Password'/>
                        <input type="button" value="Login" />
                      </form>
                    
                    </div>
                    <div class="register-show">
                    <h2>REGISTER</h2>
                    <form id="form" onClick={this.signupSubmit}>
                        <input type="text" value={this.signup.Email} onChange={this.handleEmailChange} placeholder="Email" name='email'/>
                        <input type="password" placeholder="Password" name='password'/>
                        <input type="password" placeholder="ConfirmPassword" name='confirmpassword'/>
                        <input type="number" placeholder="CNIC" name='cnic'/>
                        <input type="button" value="Register" />
                      </form>
                    </div>
                </div>
            </div>
                
            
            
            
        )
    };
}

export default Home;


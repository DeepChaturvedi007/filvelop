import React,{Component} from "react";
import LoginSvg from '../../assets/img/login.svg';
import $ from 'jquery';

class LoginScreen extends Component {
    componentDidMount () {
	}
    render() {
      return (
		<section id="content" className="bg-white login-form" style={{display : "none"}}>
			<div className="content-wrap">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
							<div className="d-flex justify-content-end">
								<div className="col-md-10">
                                    <h1>Sign in to <span>WIN!</span></h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Diam imperdiet quam imperdiet scelerisque a. In et, et sit dignissim ut.</p>
								</div>
							</div>
                            <div className="signin-img"><img src={LoginSvg} className="img-fluid" /></div> 
                        </div>
                        <div className="col-lg-4 offset-md-1 mb-5">
                            <div className="well well-lg mb-0">
								<form id="login-form" name="login-form" className="row" action="#" method="post">

									<div className="col-12 mb-4">
										<h1>Login</h1>
									</div>

									<div className="col-12 form-group">
										<label htmlFor="login-form-name">Name:</label>
										<input type="text" id="login-form-name" name="login-form-name" className="form-control" placeholder="Enter Name" />
									</div>

									<div className="col-12 form-group">
										<label htmlFor="email-address">Email Address:</label>
										<input type="text" id="email-address" name="email-address" className="form-control" placeholder="Enter Email Address" />
									</div>

                                    <div className="col-12 form-group mb-5">
										<label htmlFor="mobile-number">Mobile Number:</label>
										<input type="text" id="mobile-number" name="mobile-number" className="form-control" placeholder="Enter Mobile Number" />
									</div>

									<div className="col-12 form-group">
										<button className="button button-circle button-orange button-rounded btn-block m-0" id="login-form-submit" name="login-form-submit" defaultValue="login" type="button">Login</button>
										<a href="#" className="float-right">Forgot Password?</a>
									</div>

								</form>
							</div>
                        </div>
                    </div>
                </div>
			</div>
		</section>

        );
  }
}
export default LoginScreen;
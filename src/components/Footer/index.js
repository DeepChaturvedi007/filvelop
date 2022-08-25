import React,{Component} from "react";
import LoginSvg from '../../assets/img/login.svg';
import $ from 'jquery';
class Footer extends Component {
	componentDidMount () {
	}
	render() {
		return (
			<footer id="footer" className="dark home-page">
				<div className="container clearfix">
					<div className="promo promo-border p-4 p-lg-5 p-md-4 p-sm-3">
						<div className="row align-items-center">
							<div className="col-12 col-lg">
								<h3>Experience the India’s First of its <span>kind Automated</span> Entrance Applications Platform</h3>
							</div>
							<div className="col-12 col-lg-auto mt-4 mt-lg-0">
								<a href="#" className="button button-circle button-orange button-large button-rounded m-0">Register Now</a>
							</div>
						</div>
					</div>
					<div className="footer-widgets-wrap">
						<div className="row">
							<div className="col-lg-3">
								<div className="row">
									<div className="col-md-4 col-lg-12">
										<div className="widget clearfix">
											<img src={require('../../assets/img/logoFilvelop.svg').default} alt="Image" className="Filvelop Logo"/>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-9">
								<div className="row col-mb-50">
									<div className="col-md-3">
										<div className="widget widget_links clearfix">
											<h4>Services</h4>
											<ul>
												<li><a href="discussion-forum.html">Discussion</a></li>
												<li><a href="happenings.html">Happenings</a></li>
												<li><a href="colleges.html">Colleges</a></li>
												<li><a href="exam-listing.html">Exams</a></li>
											</ul>
										</div>
									</div>
									<div className="col-md-3">
										<div className="widget widget_links clearfix">
											<h4>Company</h4>
											<ul>
												<li><a href="#">Support</a></li>
												<li><a href="#">Privacy Policy</a></li>
												<li><a href="#">Terms of Service</a></li>
												<li><a href="#">Licensing</a></li>
											</ul>
										</div>
									</div>
									<div className="col-md-3">
										<div className="widget widget_links clearfix">
											<h4>Support</h4>
											<ul>
												<li><a href="#">Getting Started</a></li>
												<li><a href="#">Help Center</a></li>
												<li><a href="#">Suggest a Feature</a></li>
												<li><a href="#">Report a bug</a></li>
											</ul>
										</div>
									</div>
									<div className="col-md-3">
										<div className="widget widget_links clearfix">
											<h4>Follow Us</h4>
											<div className="d-flex flex-row">
												<a href="#" className="social-icon si-small si-borderless si-facebook">
												<i className="icon-facebook"></i>
												<i className="icon-facebook"></i>
												</a>
												<a href="#" className="social-icon si-small si-borderless si-linkedin">
												<i className="icon-linkedin"></i>
												<i className="icon-linkedin"></i>
												</a>
												<a href="#" className="social-icon si-small si-borderless si-twitter">
												<i className="icon-twitter"></i>
												<i className="icon-twitter"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="copyrights">
					<div className="container text-center text-uppercase">
						© 2021 Filvelop. All rights reserved.
					</div>
				</div>
			</footer>
		);
	}
}
export default Footer;
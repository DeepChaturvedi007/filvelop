import React,{Component} from "react";
import bannerGirl from '../../assets/img/bannerGirl.png';
import '../../assets/js/functions';
import indiaMap from '../../assets/img/indiaMap.png'
import Footer from "../../components/Footer";
import BGImg from '../../assets/img/bannerBg.jpeg';

class HomeScreen extends Component {
    componentDidMount () {
     
    }
    render() {
      return (
        <>
			<section id="slider" className="slider-element slider-parallax swiper_wrapper min-vh-60 min-vh-md-100 include-header home-page" ref={el => (this.div = el)}>
				<div className="slider-inner">

					<div className="swiper-container swiper-parent">
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<div className="container">
									<div className="slider-caption">
										<div className="row d-flex align-items-center">
											<div className="col-md-6">
												<a href="#" data-animate="fadeInUp" className="button button-light button-circle">Helped 1000+ Students</a>
												<h2 data-animate="fadeInUp" data-delay="200">lorem <span>Ipsum</span><br /> dolor sit amet</h2>
												<p className="d-none d-sm-block" data-animate="fadeInUp" data-delay="400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in egestas mi egestas quam. Lectus eget viverra fermentum elit, tortor nec, eleifend. Egestas consequat donec curabitur amet.</p>
												<a href="#" className="button button-circle button-orange mt-4" data-animate="fadeInUp" data-delay="600">Join Now!</a>
											</div>
											<div className="col-md-6">
												<div className="position-relative text-center">
													<img src={bannerGirl} data-animate="fadeInUp" data-delay="100" alt="" className="img-fluid"/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="swiper-slide-bg" style={{backgroundImage: `url(${BGImg})`, backgroundPosition: "center top"}}></div>
							</div>
						</div>
					</div>

					<a href="#" data-scrollto="#content" data-offset="100" className="one-page-arrow dark"><i className="icon-line-arrow-down animated fadeInDown"></i></a>

				</div>
			</section>
			<section id="content" className="bg-white home-page">
				<div className="content-wrap">
					<section id="timeline-wrapper">
						<div className="container">
							<h1 className="titular-title font-weight-normal center font-secondary font-normal mb-3">What will you get?</h1>
							<div className="row">
								<div className="timeline-block">
									<div className="timeline-events">
										<div className="row event-bg-a align-items-center center-line">
											<div className="event l-event col-md-6 col-sm-6 col-xs-8 "><span className="thumb">1</span>
												<div className="event-body shadow">
													<div className="person-image pull-left ">
														<img src={require('../../assets/img/mit-id.png').default} alt="person" />
													</div>
													<div className="event-content">
														<h4 className="text-left">MIT-ID</h4>
														<p>Pune, Maharashtra</p>
														<span className="text-muted text-left" style={{display:"block", margin: 0}}><small>Established in 1984</small></span>
														<div className="d-flex bd-highlight">
															<div className="p-2 flex-fill bd-highlight">
																<span className="text-muted text-left" style={{display:"block", margin: 0}}><small>Ownership</small></span>
																<p>Private</p>
															</div>
															<div className="p-2 flex-fill bd-highlight">
																<span className="text-muted text-left" style={{display:"block", margin: 0}}><small>Median Salary</small></span>
																<p>32 LPA</p>
															</div>
															<div className="p-2 flex-fill bd-highlight">
																<span className="text-muted text-left" style={{display:"block", margin: 0}}><small>Ranking</small></span>
																<p>1</p>
															</div>
														</div>
														<div className="row text-center">
															<div className="col-lg-6 col-md-12"><a href="#" className="button button-border button-circle btn-block">Download Brochure</a></div>
															<div className="col-lg-6 col-md-12"><a href="#" className="button button-circle button-orange btn-block">Apply now</a></div>
														</div>
													</div>
												</div>
											</div>
											<div className="event r-event col-md-6 col-sm-6 col-xs-8 ">
												<div className="event-body bg-transparent border-0">
													<div className="event-content">
														<h3 className="text-left">Apply for your target colleges and examinations effortlessly</h3>
														<span className="text-muted text-left" style={{display:"block", margin: 0}}><p>Browse through our comprehensive list of colleges and examinations to apply for. We provide on-call/chat support for any queries regarding the application process in real-time.</p></span>
													</div>
												</div>
											</div>
										</div>
										<div className="clearfix"></div>
										<div className="row"></div>
										<div className="row event-bg-b align-items-center">
											<div className="event l-event col-md-6 col-sm-6 col-xs-8 ">
												<div className="event-body bg-transparent border-0">
													<div className="event-content">
														<h3 className="text-left">Manage and track your progress </h3>
														<span className="text-muted text-left" style={{display:"block", margin: 0}}><p>Filvelop provides a personalized dashboard for the students to view the progress of their application process and their analysis of past performances. The students can access the dashboard at their convenience to check for any updates.</p></span>
													</div>
												</div>
											</div>
											<div className="event r-event col-md-6 col-sm-6 col-xs-8 "><span className="thumb">2</span>
												<div className="event-body shadow">
													<img src={require('../../assets/img/graph.svg').default} alt="Graph" className="img-fluid" />
												</div>
											</div>
										</div>
										<div className="clearfix"></div>
										<div className="row"></div>
										<div className="row event-bg-c align-items-center">
											<div className="event l-event col-md-6 col-sm-6 col-xs-8 "><span className="thumb">3</span>
												<div className="event-body shadow">
													<img src={require('../../assets/img/chart.svg').default} alt="Chart" className="img-fluid" />
												</div>
											</div>
											<div className="event r-event col-md-6 col-sm-6 col-xs-8 ">
												<div className="event-body bg-transparent border-0">
													<div className="event-content">
														<h3 className="text-left">Attempt previous year question papers with updated evaluations</h3>
														<span className="text-muted text-left" style={{display:"block", margin: 0}}><p>Check your performance by solving the previous year's papers of your chosen entrance examinations. The scores will be evaluated based on the current pattern of the exam to give realistic results.</p></span>
													</div>
												</div>
											</div>
										</div>
										<div className="clearfix"></div>
										<div className="row"></div>
										<div className="row event-bg-d align-items-center">
											<div className="event l-event col-md-6 col-sm-6 col-xs-8 ">
												<div className="event-body bg-transparent border-0">
													<div className="event-content">
														<h3 className="text-left">Get a personalized analysis of your results</h3>
														<span className="text-muted text-left" style={{display:"block", margin: 0}}><p>Through rigorous evaluations, we provide a detailed insight into your strengths and weaknesses. The analysis allows you to enhance your performance by focussing on the key areas and improve your test scores.</p></span>
													</div>
												</div>
											</div>
											<div className="event r-event col-md-6 col-sm-6 col-xs-8 "><span className="thumb">4</span>
												<div className="event-body shadow">
													<img src={require('../../assets/img/marks.svg').default} alt="Marks" className="img-fluid" />
												</div>
											</div>
										</div>
										<div className="clearfix"></div>
										<div className="row"></div>
										<div className="row event-bg-a align-items-center">
											<div className="event l-event col-md-6 col-sm-6 col-xs-8 "><span className="thumb">5</span>
												<div className="event-body bg-transparent border-0">
													<img src={require('../../assets/img/connections.png').default} alt="Connections" className="img-fluid" />
												</div>
											</div>
											<div className="event r-event col-md-6 col-sm-6 col-xs-8 ">
												<div className="event-body bg-transparent border-0">
													<div className="event-content">
														<h3 className="text-left">Connect with peers and career counselors</h3>
														<span className="text-muted text-left" style={{display:"block", margin: 0}}><p>Find a supportive and healthy community of aspirants like you to share study strategies, tips, and experiences. Our panel of career counsellors are available to guide you and answer all your career related queries.</p></span>
													</div>
												</div>
											</div>
										</div>
										<div className="clearfix"></div>
										<div className="row"></div>
										<div className="row event-bg-b align-items-center">
											<div className="event l-event col-md-6 col-sm-6 col-xs-8 ">
												<div className="event-body bg-transparent border-0">
													<div className="event-content">
														<h3 className="text-left">Multipurpose integrated wallet for all payments</h3>
														<span className="text-muted text-left" style={{display:"block", margin: 0}}><p>Wallet amount can be used across all transactions in the website and convert rewards into wallet balance.</p></span>
													</div>
												</div>
											</div>
											<div className="event r-event col-md-6 col-sm-6 col-xs-8 "><span className="thumb">6</span>
												<div className="event-body shadow">
													<img src={require('../../assets/img/wallet.svg').default} alt="Wallet" className="img-fluid" />
												</div>
											</div>
										</div>
										<div className="clearfix"></div>
										<div className="row"></div>
										<div className="row event-bg-c align-items-center">
											<div className="event l-event col-md-6 col-sm-6 col-xs-8 "><span className="thumb">7</span>
												<div className="event-body bg-transparent border-0">
													<img src={require('../../assets/img/connections.png').default} alt="Connections" className="img-fluid" />
												</div>
											</div>
											<div className="event r-event col-md-6 col-sm-6 col-xs-8 ">
												<div className="event-body bg-transparent border-0">
													<div className="event-content">
														<h3 className="text-left">Do not miss out any notification.</h3>
														<span className="text-muted text-left" style={{display:"block", margin: 0}}><p>Keep posted with all the updates in time and rest assured that you don’t miss an opportunity)</p></span>
													</div>
												</div>
											</div>
										</div>
										<div className="clearfix"></div>
									</div>
									<div className="clearfix"></div>
								</div>
							</div>
						</div>
					</section>

					<div className="section topmargin-sm footer-stick bg-light pt-5">
						<div className="container">
						
							<h1 className="titular-title font-weight-normal center font-secondary font-normal mb-5">Testimonials</h1>
							<div className="row mt-4 col-mb-50">

								<div className="col-md-6">
									<div className="slider-wrap">
										<div id="card-slider" className="slider">
										<div className="slider-item">
											<div className="animation-card_image">
												<img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt=""/>
											</div>
											<div className="animation-card_content">
												<h4 className="animation-card_content_title title-2">Charlize Theron 1</h4>
												<p className="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
												<p className="animation-card_content_city">New York, NY</p>
											</div>
										</div>
										<div className="slider-item">
											<div className="animation-card_image">
												<img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt=""/>
											</div>
											<div className="animation-card_content">
												<h4 className="animation-card_content_title title-2">Charlize Theron 2</h4>
												<p className="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
												<p className="animation-card_content_city">New York, NY</p>
											</div>
										</div>
										<div className="slider-item">
											<div className="animation-card_image">
												<img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt=""/>
											</div>
											<div className="animation-card_content">
												<h4 className="animation-card_content_title title-2">Charlize Theron 3</h4>
												<p className="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
												<p className="animation-card_content_city">New York, NY</p>
											</div>
										</div>
										<div className="slider-item">
											<div className="animation-card_image">
												<img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt=""/>
											</div>
											<div className="animation-card_content">
												<h4 className="animation-card_content_title title-2">Charlize Theron 4</h4>
												<p className="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
												<p className="animation-card_content_city">New York, NY</p>
											</div>
										</div>
										<div className="slider-item">
											<div className="animation-card_image">
												<img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt=""/>
											</div>
											<div className="animation-card_content">
												<h4 className="animation-card_content_title title-2">Charlize Theron 5</h4>
												<p className="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
												<p className="animation-card_content_city">New York, NY</p>
											</div>
										</div>
									</div>
									</div>
								</div>

								<div className="col-md-5 offset-md-1 center">
									<img data-animate="fadeInRight" src={indiaMap} alt="India map" className="img-fluid"/>
								</div>

							</div>

						</div>
					</div>
				</div>
			</section>
        	<Footer/>
        </>
        );
  }
}
export default HomeScreen;
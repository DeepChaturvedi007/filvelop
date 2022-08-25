import React,{Component} from "react";
import ProfileImg from '../../assets/img/profile.png';
import $ from 'jquery';
import '../../assets/css/bsFileStyle.css';
import docA from '../../assets/img/docA.png';
import docB from '../../assets/img/docB.png';
import docC from '../../assets/img/docC.png';
import docD from '../../assets/img/docD.png';

class RegistrationScreen extends Component {
    componentDidMount () {
		$(window).on( 'pluginTabsReady', function(){
			$( "#processTabs" ).tabs({ show: { effect: "fade", duration: 400 } });
			$( ".tab-linker" ).click(function() {
				$( "#processTabs" ).tabs("option", "active", $(this).attr('rel') - 1);
				return false;
			});
		});


        $(document).ready(function(){
            var current_fs, next_fs, previous_fs; //fieldsets
            var opacity;
            
            $(".next").click(function(){
                current_fs = $(this).parent();
                next_fs = $(this).parent().next();
            
            //Add Class Active
            $("#processTabs ul li").removeClass("ui-tabs-active ui-state-active")
            var indexOfdiv = $('div#tabContainer div.ui-tabs-panel').index(next_fs);
            $("#processTabs ul li").eq(indexOfdiv).addClass("ui-tabs-active ui-state-active");
            
            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
            step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;
            
            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
                next_fs.css({'opacity': opacity});
            },
                duration: 600
            });
            });
            
            $(".previous").click(function(){
            
            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();
            
            //Remove class active
            $("#processTabs ul li").removeClass("ui-tabs-active ui-state-active")
            var indexOfdiv = $('div#tabContainer div.ui-tabs-panel').index(previous_fs);
            $("#processTabs ul li").eq(indexOfdiv).addClass("ui-tabs-active ui-state-active");
            
            //show the previous fieldset
            previous_fs.show();
            
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
            step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;
            
            current_fs.css({
            'display': 'none',
            'position': 'relative'
            });
            previous_fs.css({'opacity': opacity});
            },
            duration: 600
            });
            });
            
            $('.radio-group .radio').click(function(){
            $(this).parent().find('.radio').removeClass('selected');
            $(this).addClass('selected');
            });
            
            $(".submit").click(function(){
            return false;
            })
            
            });
	
    }
    render() {
      return (
        <section id="content" className="signup-bg registration-form" style={{display : "none"}} ref={el => (this.div = el)}>
			<div className="content-wrap">
                <div className="container">
                    <div id="processTabs" data-plugin="tabs" className="customjs ui-tabs ui-corner-all ui-widget ui-widget-content">
						<ul className="process-steps row col-mb-30 ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
							<li className="col-sm-6 col-lg-3 ui-tabs-active ui-state-active">
								<a href="#ptab1" className="i-circled i-bordered i-alt">1</a>
								<h5>Registration Details</h5>
							</li>
							<li className="col-sm-6 col-lg-3">
								<a href="#ptab2" className="i-circled i-bordered i-alt">2</a>
								<h5>Personal Details</h5>
							</li>
							<li className="col-sm-6 col-lg-3">
								<a href="#ptab3" className="i-circled i-bordered i-alt">3</a>
								<h5>School Information</h5>
							</li>
							<li className="col-sm-6 col-lg-3">
								<a href="#ptab4" className="i-circled i-bordered i-alt">4</a>
								<h5>Document Upload</h5>
							</li>
						</ul>
						<div id="tabContainer">
							<div id="ptab1" className="ui-tabs-panel ui-corner-bottom ui-widget-content">
                                <div className="row">
                                    <div className="col-lg-6 d-flex justify-content-start mb-5">
                                        <label className="profile-img mr-2"><img src={ProfileImg} alt="Profile Image"/></label>
                                        <input id="input-8" type="file" accept="image/*" className="file-loading" data-allowed-file-extensions='[]' data-show-preview="false"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="firstname">First Name</label>
                                                <input type="text" className="form-control" id="firstname" placeholder="Enter First Name"/>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="lastname">Last Name</label>
                                                <input type="text" className="form-control" id="lastname" placeholder="Enter Last Name"/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputEmail4">Date of Birth</label>
                                                <input type="text" defaultValue="" className="form-control text-left component-datepicker default" placeholder="MM/DD/YYYY"/>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">Gender</label>
                                                <select id="inputGender" className="form-control">
                                                    <option>Select Gender</option>
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="email">Email Address</label>
                                                <input type="email" className="form-control" id="email" placeholder="Enter Email Address"/>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">Mobile Number</label>
                                                <input type="text" className="form-control" id="inputPassword4" placeholder="Enter Mobile Number"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12"></div>
                                </div>
                                <a href="#" className="button button-circle button-orange mt-4 tab-linker next" rel="2">Next</a>
							</div>
							<div id="ptab2" className="ui-tabs-panel ui-corner-bottom ui-widget-content" style={{display : "none"}}>
								<div className="row">
                                    <div className="form-group col-md-3">
                                        <label htmlFor="religion">Religion</label>
                                        <input type="text" className="form-control" id="religion" placeholder="Enter Religion"/>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="motherTongue">Mother Tongue</label>
                                        <input type="text" className="form-control" id="motherTongue" placeholder="Enter Mother Tongue"/>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="pincode">Pincode</label>
                                        <input type="text" className="form-control" id="pincode" placeholder="Enter Pincode"/>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="state">State</label>
                                        <select id="inputstate" className="form-control">
                                            <option>Select State</option>
                                            <option>State A</option>
                                            <option>State B</option>
                                            <option>State C</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="economicalweaker">Economical Weaker</label>
                                        <select id="inputeconomicalweaker" className="form-control">
                                            <option>Select Yes/No</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="nativestate">Native State</label>
                                        <select id="inputnativestate" className="form-control">
                                            <option>Select Native State</option>
                                            <option>State A</option>
                                            <option>State B</option>
                                            <option>State C</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="district">District</label>
                                        <select id="inputdistrict" className="form-control">
                                            <option>Select District</option>
                                            <option>District A</option>
                                            <option>District B</option>
                                            <option>District C</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="city">City</label>
                                        <select id="inputCity" className="form-control">
                                            <option>Select City</option>
                                            <option>City A</option>
                                            <option>City B</option>
                                            <option>City C</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="fathernumber">Father’s Number</label>
                                        <input type="text" className="form-control" id="fathernumber" placeholder="Enter Father’s Number" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="mothernumber">Mother’s Number</label>
                                        <input type="text" className="form-control" id="mothernumber" placeholder="Enter Mother’s Number" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="addressline1">Address Line 1</label>
                                        <input type="text" className="form-control" id="addressline1" placeholder="Enter Address Line 1" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="addressline2">Address Line 2</label>
                                        <input type="text" className="form-control" id="addressline2" placeholder="Enter Address Line 2" />
                                    </div>
                                </div>
                                <a href="#" className="button button-circle button-orange mt-4 tab-linker previous" rel="1">Previous</a>
                                <a href="#" className="button button-circle button-orange mt-4 float-right tab-linker next" rel="3">Next</a>
							</div>
							<div id="ptab3" className="ui-tabs-panel ui-corner-bottom ui-widget-content" style={{display : "none"}}>
								<div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="mediumeducatio">Medium of education</label>
                                                <select id="inputmediumeducatio" className="form-control">
                                                    <option>Select Medium of education</option>
                                                    <option>Select A</option>
                                                    <option>Select B</option>
                                                    <option>Select C</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="modeeducatio">Modem of education</label>
                                                <select id="inputmodeeducatio" className="form-control">
                                                    <option>Select Mode of education</option>
                                                    <option>Select A</option>
                                                    <option>Select B</option>
                                                    <option>Select C</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="pincode">Pincode</label>
                                                <input type="text" className="form-control" id="pincode" placeholder="Enter Pincode" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputState">State</label>
                                                <select id="inputState" className="form-control">
                                                    <option>Select State</option>
                                                    <option>Select A</option>
                                                    <option>Select B</option>
                                                    <option>Select C</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputDistrict">District</label>
                                                <select id="inputDistrict" className="form-control">
                                                    <option>Select District</option>
                                                    <option>Select A</option>
                                                    <option>Select B</option>
                                                    <option>Select C</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputTownCity">Town/City</label>
                                                <select id="inputTownCity" className="form-control">
                                                    <option>Select Town/City</option>
                                                    <option>Select A</option>
                                                    <option>Select B</option>
                                                    <option>Select C</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="boardname">Name of baord</label>
                                                <input type="text" className="form-control" id="boardname" placeholder="Enter Name of baord" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="schoolname">School Name</label>
                                                <input type="text" className="form-control" id="schoolname" placeholder="Enter School Name" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="address">Address</label>
                                                <input type="text" className="form-control" id="address" placeholder="Enter Address" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="passingyear">Month/Year of Passing/Appearing</label>
                                                <input type="text" className="form-control" id="passingyear" placeholder="Enter month/year of passing" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12"></div>
                                </div>
								<a href="#" className="button button-circle button-orange mt-4 tab-linker previous" rel="2">Previous</a>
								<a href="#" className="button button-circle button-orange mt-4 float-right tab-linker next" rel="4">Next</a>
							</div>
							<div id="ptab4" className="ui-tabs-panel ui-corner-bottom ui-widget-content" style={{display : "none"}}>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="doc-upload">
                                            <input type="file" className="custom-file-input" id="" />
                                            <img src={docA} alt="" className="" /></div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="doc-upload"><input type="file" className="custom-file-input" id="" />
                                        <img src={docB} alt="" className=""/></div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="doc-upload"><input type="file" className="custom-file-input" id="" />
                                        <img src={docC} alt="" className=""/></div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="doc-upload"><input type="file" className="custom-file-input" id="" />
                                        <img src={docD} alt="" className=""/></div>
                                    </div>
                                </div>
                                <a href="#" className="button button-circle button-orange mt-4">Next</a>
							</div>
						</div>
					</div>
                </div>
			</div>
		</section>

        );
  }
}
export default RegistrationScreen;
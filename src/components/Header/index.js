import React, {Component} from 'react';
import Logo from '../../assets/img/logoFilvelop.svg';
import $ from 'jquery';

class Header extends Component {
    componentDidMount () {
        $(document).on('click', '#go-home, #do-registration, #do-login', function() {
            var clickedItemId = $(this).attr('id');
            if(clickedItemId == 'go-home') {
                $('.login-form, .registration-form').slideUp();
                $('.home-page').slideDown();
            } 
            else if(clickedItemId == 'do-registration') {
                $('.home-page, .login-form').slideUp();
                $('.registration-form').slideDown();
            }
            else if(clickedItemId == 'do-login') {
                $('.home-page, .registration-form').slideUp();
                $('.login-form').slideDown();
            }
        });
    }
    render() {
      return (
    <header id="header" className="transparent-header sticky-header" data-sticky-classname="not-dark">
        <div id="header-wrap">
            <div className="container">
                <div className="header-row">
                    <div id="logo">
                        <a className="standard-logo" data-dark-logo={Logo}>
                            <img src={Logo} alt="Filvelop Logo" />
                        </a>
                        <a className="retina-logo" data-dark-logo={Logo}>
                            <img src={Logo} alt="Filvelop Logo" />
                        </a>
                    </div>
                    <div className="header-misc">
                        <button id="do-registration" className="button button-orange rounded-pill ls0 font-weight-medium my-0 ml-2 d-none d-sm-flex">Sign Up</button>
                        <div id="top-search" className="header-misc-icon">
                            <a href="#" id="top-search-trigger"><i className="icon-line-search"></i><i className="icon-line-cross"></i></a>
                        </div>
                    </div>
                    <div id="primary-menu-trigger">
                        <svg className="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
                    </div>
                    <nav className="primary-menu">

                        <ul className="menu-container">
                            <li className="menu-item">
                                <button className="menu-link border-0  bg-transparent" id="go-home"><div>About</div></button>
                            </li>
                            <li className="menu-item">
                                <a className="menu-link"><div>Discussion</div></a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-link"><div>Happenings</div></a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-link"><div>Colleges</div></a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-link"><div>Exams</div></a>
                                <ul className="sub-menu-container">
                                    <li className="menu-item">
                                        <a className="menu-link"><div>Exam Details</div></a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link" target="_blank"><div>Test Window</div></a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link" target="_blank"><div>Test Submission</div></a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link" target="_blank"><div>Test Analysis</div></a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link" target="_blank"><div>Solutions</div></a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link"><div>Test Resources</div></a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <button className="menu-link border-0  bg-transparent" id="do-login"><div>Login</div></button>
                            </li>
                        </ul>
                    </nav>
                    <form className="top-search-form" action="search.html" method="get">
                        <input type="text" name="q" className="form-control" placeholder="Type &amp; Hit Enter.." autoComplete="off" />
                    </form>

                </div>
            </div>
        </div>
        <div className="header-wrap-clone"></div>
    </header>
    );
    }
}
export default Header;
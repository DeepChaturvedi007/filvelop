import React,{Component} from "react";

import logo from './logo.svg';
import './assets/css/bootstrap.css';
import './assets/css/style.css';
import './assets/css/fonts.css';
import './assets/css/swiper.css';
import './assets/css/dark.css';
import './assets/css/fontIcons.css';
import './assets/css/animate.css';
import './assets/css/custom.css';

import Header from './components/Header';
import HomeScreen from './views/Home';
import LoginScreen from './views/Login';
import RegistrationScreen from './views/Register';
import $ from 'jquery';

class App extends Component {
  componentDidMount () {
  }
  render() {
    return (
        <div id="wrapper" className="clearfix">
          <Header />
          <HomeScreen />
          <LoginScreen />
          <RegistrationScreen />
        </div>
    );
  }
}
export default App;
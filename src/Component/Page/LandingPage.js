import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

class LandingPage extends Component {

    responseGoogle = (response) => {
        localStorage.setItem('cd-user-name', response.profileObj.givenName +" " + response.profileObj.familyName);
        localStorage.setItem('cd-user-email', response.profileObj.email);
        localStorage.setItem('cd-user-token', response.accessToken);
    };

    render() {
        return (
            <div id="page-wrapper">

                <div id="header-wrapper">
                    <div id="header">
                        <section id="banner">
                            <header>
                                <h2>Howdy. This is ChoreDo.</h2>
                                <p>Help your kids with their chores and teach them about money at the same time</p>
                            </header>
                            <ul className="actions">
                                <GoogleLogin
                                    clientId="529228870641-cd4pl87aele5ctibr8p9fvj8mmmdtta2.apps.googleusercontent.com"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                    buttonText={"Login with Google"}
                                    className="button big"
                                />
                            </ul>
                        </section>

                        <section id="intro" className="container">
                            <div className="row">
                                <div className="4u 12u(mobile)">
                                    <section className="first">
                                        <i className="icon featured fa-cog"></i>
                                        <header>
                                            <h2>Planning</h2>
                                        </header>
                                        <p>
                                            Easily plan and assign chores for your kids to do.
                                        </p>
                                    </section>
                                </div>
                                <div className="4u 12u(mobile)">
                                    <section className="middle">
                                        <i className="icon featured alt fa-flash"></i>
                                        <header>
                                            <h2>Tracking</h2>
                                        </header>
                                        <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
                                    </section>
                                </div>
                                <div className="4u 12u(mobile)">
                                    <section className="last">
                                        <i className="icon featured alt2 fa-star"></i>
                                        <header>
                                            <h2>Financial Responsibility</h2>
                                        </header>
                                        <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
                                    </section>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

                <div id="footer-wrapper">
                    <section id="footer" className="container">
                        <div className="row">
                            <div className="12u">
                                <div id="copyright">
                                    <ul className="links">
                                        <li>&copy; 2017 ChoreBoard. All rights reserved.</li><li>Landing Page Designed By: <a href="http://html5up.net">HTML5 UP</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>

            </div>

        );
    }
}

export default LandingPage ;

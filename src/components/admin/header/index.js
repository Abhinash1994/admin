import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="sb-topnav navbar navbar-expand navbar-light bg-clr">
                    <a className="navbar-brand logo-brand" href="/">Big Supermarket</a>
                    <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" ><i className="fas fa-bars" /></button>
                    <a href="/" className="frnt-link"><i className="fas fa-external-link-alt" />Home</a>
                    <ul className="navbar-nav ml-auto mr-md-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw" /></a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <a className="dropdown-item admin-dropdown-item" href="edit_profile.html">Edit Profile</a>
                                <a className="dropdown-item admin-dropdown-item" href="change_password.html">Change Password</a>
                                <span className="dropdown-item admin-dropdown-item">Logout</span>
                            </div>
                        </li>
                    </ul>
                </nav>

            </div>
        );
    }
};

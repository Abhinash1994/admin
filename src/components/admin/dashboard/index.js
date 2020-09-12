import React, { Component } from 'react';
export default class Home extends Component {
    render() {
        return (
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid">
                        <h2 className="mt-30 page-title">Dashboard</h2>
                        <ol className="breadcrumb mb-30">
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="dashboard-report-card purple">
                                    <div className="card-content">
                                        <span className="card-title">Order Pending</span>
                                        <span className="card-count">2</span>
                                    </div>
                                    <div className="card-media">
                                        <i className="fab fa-rev" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="dashboard-report-card red">
                                    <div className="card-content">
                                        <span className="card-title">Order Cancel</span>
                                        <span className="card-count">0</span>
                                    </div>
                                    <div className="card-media">
                                        <i className="far fa-times-circle" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="dashboard-report-card info">
                                    <div className="card-content">
                                        <span className="card-title">Order Process</span>
                                        <span className="card-count">5</span>
                                    </div>
                                    <div className="card-media">
                                        <i className="fas fa-sync-alt rpt_icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="dashboard-report-card success">
                                    <div className="card-content">
                                        <span className="card-title">Today Income</span>
                                        <span className="card-count">$9568.00</span>
                                    </div>
                                    <div className="card-media">
                                        <i className="fas fa-money-bill rpt_icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-md-12">
                                <div className="card card-static-2 mb-30">
                                    <div className="card-title-2">
                                        <h4>Recent Orders</h4>
                                        <a href="orders.html" className="view-btn hover-btn">View All</a>
                                    </div>
                                    <div className="card-body-table">
                                        <div className="table-responsive">
                                            <table className="table ucp-table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: 130 }}>Order ID</th>
                                                        <th style={{ width: 130 }}>Payment Method</th>
                                                        <th style={{ width: 200 }}>Order Date</th>
                                                        <th style={{ width: 200 }}>Delivery Date</th>
                                                        <th style={{ width: 130 }}>Status</th>
                                                        <th style={{ width: 130 }}>Total</th>
                                                        <th style={{ width: 100 }}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr >
                                                        <td>#ORDER 123</td>
                                                        <td>Card </td>
                                                        <td>

                                                        </td>
                                                        <td>
                                                            2013-01-12 09:10
                                                                    </td>
                                                        <td>
                                                            Pending
                                                                    </td>
                                                        <td>&#8377;5000</td>
                                                        <td className="action-btns">

                                                            <i className="fas fa-eye" />

                                                            <i className="fas fa-edit" />
                                                        </td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="py-4 bg-footer mt-auto">
                    <div className="container-fluid">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted-1">© 2020 <b>Grocery Supermarket</b>. by <a href="https://themeforest.net/user/gambolthemes">Abhinash kumar</a></div>
                            <div className="footer-links">
                                <a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/privacy_policy.html">Privacy Policy</a>
                                <a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/term_and_conditions.html">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        );
    }
}


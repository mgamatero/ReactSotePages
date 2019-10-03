import React from 'react'
import Header from '../components/header/Header';
import SideMenu from '../components/sidemenu/SideMenu';
import './HomePage.css';



class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            vehicleid: 'KBP578Q',
            driver: 'Felix Goodsen',
            opendate: '2:15P, 09/27/19'
        })
    }



    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-3 fixed"><SideMenu /></div>
                    <div className="col-9">
                        <div className="row jobcardheader py-3">
                            <div className="col-1 back-icon text-left"><i className="fas fa-angle-double-left"></i></div>
                            <div className="col-11 pagetitle text-center pr-5">Job Home Page</div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <br />
                                <span className="jobcardinfo">Vehicle:  {this.state.vehicleid}  |  Driver:  {this.state.driver} | Opened:  {this.state.opendate}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <dl className="jobfunctions text-center m-5">
                                    <dt className=""><a href="#">View Manager Notes</a></dt>
                                    <hr />
                                    <dt className=""><a href="#">View Checklist</a></dt>
                                    <hr />
                                    <dt className=""><a href="#">View / Edit Job Card Details</a></dt>
                                    <hr />
                                    <dt className=""><a href="#">Authorized Parts Request Form</a></dt>
                                    <hr />
                                </dl>
                            </div>
                        </div>
                        <div className="row p-4">
                        <div className="col-2"></div>
                        <div className="col-4">
                            <div className="btn btn-primary btn-block confirmbtn">Confirm Repairs</div>
                        </div>
                        <div className="col-4">
                            <div className="btn btn-danger btn-block cancelbtn">More Parts Needed</div>
                        </div>
                        <div className="col-2"></div>
                    </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
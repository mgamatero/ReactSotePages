import React from 'react'
import Header from '../components/header/Header';
import SideMenu from '../components/sidemenu/SideMenu';
import './JobCardPage.css';
import PartsIssuedForm from '../components/PartsIssuedForm/PartsIssuedForm';

class JobCardPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-3 fixed"><SideMenu /></div>
                    <div className="col-9">
                        <div className="row jobcardheader py-3">
                            <div className="col-1 back-icon text-left"><i class="fas fa-angle-double-left"></i></div>
                            <div className="col-11 pagetitle text-center pr-5">Job Card</div>
                        </div>
                        <PartsIssuedForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default JobCardPage;
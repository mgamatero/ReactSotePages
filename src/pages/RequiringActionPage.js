import React from 'react'
import Header from '../components/header/Header';
import SideMenu from '../components/sidemenu/SideMenu';
import './RequiringActionPage.css';
import RequiringActionCollapse from '../components/RequiringActionCollapse/RequiringActionCollapse';

class RequiringActionPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-3 fixed"><SideMenu /></div>
                    <div className="col-9">
                        <div className="row jobcardheader py-3">
                            <div className="col-1 back-icon text-left"><i className="fas fa-angle-double-left"></i></div>
                            <div className="col-11 pagetitle text-center pr-5">Action Required</div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <RequiringActionCollapse name="Approve Parts Request" count="3" target="#approve"/>
                            </div>
                            <div className="col-4">
                                <RequiringActionCollapse name="Confirmed Parts Received" count="1" target="#confirm"/>
                            </div>
                            <div className="col-4">
                                <RequiringActionCollapse name="Miscellaneous" count="0" disabled target="#miscellaneous"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RequiringActionPage;
import React from 'react';
import './SideMenu.css';


class SideMenu extends React.Component {
    render() {
        return (
            <div className="sidemenu p-2">
                <ul className="list-group text-light">
                    <li className="list-group-item font-weight-bold pl-2">Activity</li>
                    <li className="list-group-item"><a href="/"><i className="fas fa-home px-2"></i>Job - Home</a></li>
                    <li className="list-group-item">
                        <a href="/RequiringActionPage"><i className="fas fa-exclamation-triangle px-2"></i>Action Required</a>
                        <span className="badge badge-danger badge-pill m-2">10</span>
                        </li>
                    <li className="list-group-item"><a href="/JobCardPage"><i className="fas fa-search px-2"></i>Search Job Cards</a></li>
                    <hr className="py-4"></hr>
                    <li className="list-group-item font-weight-bold pl-2">Support</li>
                    <li className="list-group-item pr-2"><a href="#">Issue Ticket</a></li>
                    <li className="list-group-item pr-2"><a href="#">FAQ</a></li>

                </ul>
            </div>
        )
    }
}

export default SideMenu;
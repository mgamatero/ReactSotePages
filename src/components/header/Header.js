import React from 'react';
import './Header.css';


class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                    <img src="./sote-logo.png" alt="Logo" style={{width:'175px'}}/>
                    </a>

                    <ul className="navbar-nav flex-row  ">
                        <li className="nav-item py-2">
                            <i className="fas fa-angle-down" style={{color:'orange'}}></i>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#">KD <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item px-2">
                            <img src='./kd.jpg' style={{maxHeight:'40px'}} className="rounded-circle border" alt="user"></img>    
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;
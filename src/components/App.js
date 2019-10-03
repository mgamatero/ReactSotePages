import React from 'react'
// import Header from './header/Header';
// import SideMenu from './sidemenu/SideMenu';
import './App.css';
import JobCardPage from '../pages/JobCardPage';
import RequiringActionPage from '../pages/RequiringActionPage';
import HomePage from '../pages/HomePage';
// import PartsIssuedForm from './PartsIssuedForm/PartsIssuedForm';

class App extends React.Component {
    render() {
        return (
            <div>
                <RequiringActionPage/>
                <JobCardPage/>
                <HomePage/>
                {/* {this.props.children} */}
            </div>
        )
    }
}

export default App;


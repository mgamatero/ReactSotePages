import React from 'react';
import './RequiringActionCollapse.css'

const RequiringActionCollapse = (props) => {

    return (
        <div>
            <a class="btn btn-secondary btn-block" data-toggle="collapse" href={props.target} role="button" aria-expanded="false" aria-controls="collapseExample">
                {props.name}  <span><div className="badge badge-pill badge-danger">{props.count}</div></span>
            </a>
            <div className="collapse" id="approve">
                <a href="#">
                <div className="card card-body">
                    <p>Driver: Peter Kagunda</p>
                    <p>Truck: KAR 066E</p>
                    <p>Opened: 09/27/19</p>
                </div>
                </a>
                <a href="#">
                <div className="card card-body">
                    <p>Driver: Mike G</p>
                    <p>Truck: JJK 889</p>
                    <p>Opened: 06/27/19</p>
                </div>
                </a>
                <a href="#">
                <div className="card card-body">
                    <p>Driver: Pete</p>
                    <p>Truck: AAD 334</p>
                    <p>Opened: 03/27/19</p>
                </div>
                </a>
            </div>


            <div className="collapse" id="confirm">
                <a href="#">
                <div className="card card-body">
                    <p>Driver: Peter Kagunda</p>
                    <p>Truck: KAR 066E</p>
                    <p>Opened: 09/27/19</p>
                </div>
                </a>
                <a href="#">
                <div className="card card-body">
                    <p>Driver: Mike G</p>
                    <p>Truck: JJK 889</p>
                    <p>Opened: 06/27/19</p>
                </div>
                </a>
            </div>




        </div>
    )

}


export default RequiringActionCollapse;
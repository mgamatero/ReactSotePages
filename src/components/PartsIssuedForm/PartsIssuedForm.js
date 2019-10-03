import React from 'react';
import './PartsIssuedForm.css'

class PartsIssuedForm extends React.Component {
    render() {
        return (
            <div>

                <form className="partsissuedform container">
                    <div className="row formTitle p-4">
                        <div className="col">Parts Issued</div>
                    </div>
                    <div className="row formHeader text-center">
                        <div className="col">Part</div>
                        <div className="col">Serial#</div>
                        <div className="col">Part#</div>
                        <div className="col">Mechanic</div>
                        <div className="col">Returned?</div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col formHeader text-center">Air Filter</div>
                        <div className="col">
                            <div className="form-group">
                                <input type="text" className="form-control"></input>
                                <select className="form-control mt-1" id="exampleFormControlSelect1">
                                    <option selected>Select</option>
                                    <option>12345</option>
                                    <option>JJKSL</option>
                                    <option>33JJL</option>
                                    <option>778JJ</option>
                                    <option>ABC33</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <input type="text" class="form-control text-center"></input>
                        </div>
                        <div className="col"><div className="form-group">
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>Choice 1</option>
                                <option>Mark</option>
                                <option>Joseph</option>
                                <option>Tom</option>
                                <option>Harry</option>
                                <option>Junior</option>
                            </select>
                        </div></div>
                        <div className="col-2">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input align-self-right" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Yes</label>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col formHeader text-center">Break Pad</div>
                        <div className="col">
                            <div className="form-group">
                                <input type="text" class="form-control"></input>
                            </div>
                        </div>
                        <div className="col">
                            <input type="text" class="form-control text-center"></input>
                        </div>
                        <div className="col"><div className="form-group">
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>Choice 2</option>
                                <option>John</option>
                                <option>Bob</option>
                                <option>Mark</option>
                                <option>Stephen</option>
                                <option>Joey</option>
                            </select>
                        </div></div>
                        <div className="col-2">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input align-self-right" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Yes</label>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col">
                            <p className="text-center">
                                Confirm repairs have been completed by entering the NEW parts issued for these repairs:
                            </p>
                        </div>
                    </div>
                    <div className="row p-4">
                        <div className="col-4"></div>
                        <div className="col-2">
                            <div className="btn btn-primary btn-block confirmbtn">Confirm</div>
                        </div>
                        <div className="col-2">
                            <div className="btn btn-danger btn-block cancelbtn">Cancel</div>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </form>

            </div>
        )

    }
}

export default PartsIssuedForm;
import React, { Component } from 'react'
import CpuService from '../services/CpuService';

class UpdateCpuComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            brand: '',
            model: '',
            socket: '',
            clockspeed: '',
            numberofcores: '',
            numberofthreads: '',
            tdp: '',
            price: ''
        }
        this.changeBrandHandler = this.changeBrandHandler.bind(this);
        this.changeModelHandler = this.changeModelHandler.bind(this);
        this.updateCpu = this.updateCpu.bind(this);
    }

    componentDidMount() {
        CpuService.getCpuById(this.state.id).then((res) => {
            let cpu = res.data;
            this.setState({
                brand: cpu.brand,
                model: cpu.model,
                socket: cpu.socket,
                clockspeed: cpu.clockspeed,
                numberofcores: cpu.numberofcores,
                numberofthreads: cpu.numberofthreads,
                tdp: cpu.tdp,
                price: cpu.price
            });
        });
    }

    updateCpu = (e) => {
        e.preventDefault();
        let cpu = {
            brand: this.state.brand,
            model: this.state.model,
            socket: this.state.socket,
            clockspeed: this.state.clockspeed,
            numberofcores: this.state.numberofcores,
            numberofthreads: this.state.numberofthreads,
            tdp: this.state.tdp,
            price: this.state.price
        };
        console.log('cpu => ' + JSON.stringify(cpu));
        console.log('id => ' + JSON.stringify(this.state.id));
        CpuService.updateCpu(cpu, this.state.id).then(res => {
            this.props.history.push('/cpus');
        });
    }

    changeBrandHandler = (event) => {
        this.setState({ brand: event.target.value });
    }

    changeModelHandler = (event) => {
        this.setState({ model: event.target.value });
    }

    changeSocketHandler = (event) => {
        this.setState({ socket: event.target.value });
    }

    changeClockspeedHandler = (event) => {
        this.setState({ clockspeed: event.target.value });
    }

    changeNumberofcoresHandler = (event) => {
        this.setState({ numberofcores: event.target.value });
    }

    changeNumberofthreadsHandler = (event) => {
        this.setState({ numberofthreads: event.target.value });
    }

    changeTdpHandler = (event) => {
        this.setState({ tdp: event.target.value });
    }

    changePriceHandler = (event) => {
        this.setState({ price: event.target.value });
    }

    cancel() {
        this.props.history.push('/cpus');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update CPU</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Brand: </label>
                                        <input placeholder="Brand" name="brand" className="form-control"
                                            value={this.state.brand} onChange={this.changeBrandHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Model: </label>
                                        <input placeholder="Model" name="model" className="form-control"
                                            value={this.state.model} onChange={this.changeModelHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Socket: </label>
                                        <select className="form-control" value={this.state.socket} onChange={this.changeSocketHandler}>
                                            <option value="PGA">PGA</option>
                                            <option value="SPGA">SPGA</option>
                                            <option value="PPGA">PPGA</option>
                                            <option value="MPGA">MPGA</option>
                                            <option value="FCBGA">FCBGA</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label> Clockspeed: </label>
                                        <input type="number" placeholder="Clockspeed" name="clockspeed" className="form-control"
                                            value={this.state.clockspeed} onChange={this.changeClockspeedHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Number of cores: </label>
                                        <input type="number" placeholder="Number of Cores" name="numberofcores" className="form-control"
                                            value={this.state.numberofcores} onChange={this.changeNumberofcoresHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Number of threads: </label>
                                        <input type="number" placeholder="Number of Threads" name="numberofthreads" className="form-control"
                                            value={this.state.numberofthreads} onChange={this.changeNumberofthreadsHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> TDP: </label>
                                        <input type="number" pattern="\d*" placeholder="TDP" name="tdp" className="form-control"
                                            value={this.state.tdp} onChange={this.changeTdpHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Price: </label>
                                        <input type = "number" placeholder="Price" name="price" className="form-control"
                                            value={this.state.price} onChange={this.changePriceHandler} />
                                    </div>


                                    <button onClick={this.updateCpu}>Save</button>
                                    <button onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UpdateCpuComponent
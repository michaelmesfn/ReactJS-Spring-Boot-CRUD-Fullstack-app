import React, { Component } from 'react';
import CpuService from '../services/CpuService';

class ListCpuComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cpus : []
        };
        this.editCpu = this.editCpu.bind(this);
    }

    editCpu(id) {
        this.props.history.push(`/update-cpu/${id}`);
    }

    componentDidMount() {
        CpuService.getCpus().then((res) => {
            this.setState({ cpus: res.data});
        });
    }
    render() {
        return (
            <div>
                <h2 className="text-center"> CPU List</h2>
                <div className="row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Socket</th>
                                <th>Clockspeed</th>
                                <th>Number of cores</th>
                                <th>Number of threads</th>
                                <th>TDP</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.cpus.map(
                                    cpu =>
                                    <tr key = {cpu.id}>
                                        <td>{cpu.brand}</td>
                                        <td>{cpu.model}</td>
                                        <td>{cpu.socket}</td>
                                        <td>{cpu.clockspeed + " GHz"}</td>
                                        <td>{cpu.numberofcores}</td>
                                        <td>{cpu.numberofthreads}</td>
                                        <td>{cpu.tdp + "W"}</td>
                                        <td>{cpu.price + " EUR"}</td>
                                        <td>
                                            <button onClick = { () => this.editCpu(cpu.id) }>Edit</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListCpuComponent;
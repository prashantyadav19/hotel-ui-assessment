import React, { Component } from 'react';
import Head from 'next/head';
import Nav from '../../components/nav/nav';
import "../../style.css"
import axios from 'axios';
import {Button, GoToDetailsPage} from '../../components/hotelRooms/rooms';
import configs from '../../config';


/**
 * Rooms class is use for hotels rooms
 * Rooms class extends Components
 */
class Rooms extends Component {

    constructor() {
        super();
        this.state = {
            hotelRooms: [
                {
                    roomNo: 1,
                    adult: 1,
                    children: 0,
                    disabled: false,
                    checked: false
                },
                {
                    roomNo: 2,
                    adult: 1,
                    children: 0,
                    disabled: true,
                    checked: false
                },
                {
                    roomNo: 3,
                    adult: 1,
                    children: 0,
                    disabled: true,
                    checked: false
                },{
                    roomNo: 4,
                    adult: 1,
                    children: 0,
                    disabled: true,
                    checked: false
                }],
            dropDowns: {
                adults: [],
                children: []
            }
        }
    }

    componentWillMount() {
        // get hotels rooms and set them in hotelRooms state
        axios.get(configs.API_URL + '/hotelRooms')
            .then(res => {
                this.setState({
                    hotelRooms: res.data && res.data.hotelRooms && res.data.hotelRooms.length > 0 ? res.data.hotelRooms : this.state.hotelRooms
                })
            });

        // get drop down value and set them in dropDown state
        axios.get(configs.API_URL + '/configurations')
            .then(res => {
                this.setState({
                    dropDowns: res.data
                })
            })
    }

    /**
     * handleCheckBox method use for rooms check boxes
     * @param checkedValue
     */
    handleCheckBox = checkedValue => event => {
        const updatedRooms = this.state.hotelRooms.map((room) => {
            if (room.roomNo !== 1 && room.roomNo <= checkedValue && event.target.checked) {
                return { ...room, disabled: false, checked: true };
            }
            if (room.roomNo !== 1 && room.roomNo >= checkedValue && !event.target.checked) {
                return { ...room, disabled: true, checked: false, children: 0, adult: 1 };
            }
            if (room.roomNo !== 1 && room.roomNo > checkedValue) {
                return { ...room, disabled: true, checked: false };
            }
            return { ...room };
        });
        this.setState({ hotelRooms: updatedRooms });
    };

    /**
     * selectAdults method call on select box change of adult
     * @param roomNumber
     */
    selectAdults = roomNumber => event => {
        const updatedRooms = this.state.hotelRooms.map((room) => {
            if (roomNumber === room.roomNo) {
                return { ...room, adult: parseInt(event.target.value) };
            }
            return { ...room };
        });
        this.setState({ hotelRooms: updatedRooms });
    };

    /**
     * selectChildren method call on select box change of children
     * @param roomNumber
     */
    selectChildren = roomNumber => event => {
        const updatedRooms = this.state.hotelRooms.map((room) => {
            if (roomNumber === room.roomNo) {
                return { ...room, children: parseInt(event.target.value) };
            }
            return { ...room };
        });
        this.setState({ hotelRooms: updatedRooms });
    };

    /**
     * handleSubmit method is use for save the data to database
     */
    handleSubmit = () => {
        axios({
            method: 'post',
            url: configs.API_URL + '/hotelRooms',
            data: {hotelRooms: this.state.hotelRooms},
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(res => {
                alert('Hotel rooms saved successfully');
            })
    };

    render() {
        return (
            <div className="App">
                <Head>
                    <title>Hotel</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
                </Head>
                <Nav/>
                <div className='container'>
                    <div className='row'>
                        {this.state.hotelRooms.map((room, idx) => (
                            <div className='col-sm-3' key={idx}>
                                <div className="card">
                                    {room.roomNo === 1 ?
                                        <h5 className="card-header room1-heading">Room 1</h5> :
                                        <div className="card-header header-with-checkbox">
                                            <label className="checkbox-inline">
                                                <input type="checkbox" checked={room.checked} onChange={this.handleCheckBox(room.roomNo)} />
                                                Room {room.roomNo}
                                            </label>
                                        </div>
                                    }
                                    <div className={room.disabled ? 'card-body disabled' : 'card-body'}>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="sel1">Adults (18+)</label>
                                                    <select className="form-control" id="sel1" value={room.adult} onChange={this.selectAdults(room.roomNo)}>
                                                        {this.state.dropDowns.adults.map(item => <option key={item} value={item}>{item}</option>)}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="sel1">Children (0-17)</label>
                                                    <select value={room.children} className="form-control" id="sel1" onChange={this.selectChildren(room.roomNo)}>
                                                        {this.state.dropDowns.children.map(item => <option key={item} value={item}>{item}</option>)}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row room-buttons">
                        <Button handleSubmit={this.handleSubmit} />
                        <GoToDetailsPage />
                    </div>

                </div>
               </div>
        );
    }
}

export default Rooms;




import React, {Component} from "react"
import "../../style.css"
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import configs from '../../config';
/**
 * HotelDetails component is use for showing hotel details
 * HotelDetails extends Component
 */
class HotelDetails extends Component {
    constructor() {
        super();
        this.state = {
            accordionItems: {
                map: false,
                photos: false,
                amenities: false
            },
            hotels: {}
        }
    }

    componentDidMount() {
        // get the details and set in hotels states
        axios.get(configs.API_URL + '/hotelDetails')
            .then(res => {
                this.setState({
                    hotels: res.data
                })
            })

    }

    /**
     * openAccordion method is use for open accordion
     * @param item
     */
    openAccordion = item => {
        const items = this.state.accordionItems;
        items[item] = !items[item];
        this.setState({accordionItems: items});
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Hotel details</title>
                    <link rel="stylesheet"
                          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
                    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet"/>
                </Head>
                <header className="headerSite">
                    <div className="buttonBack">
                        <Link href="/">
                            <button type="button" className="backBtn"><i className="fa fa-angle-left"></i>Back</button>
                        </Link>
                    </div>
                    <div className="titleBox">
                        <div className="title">Hotel Details</div>
                    </div>
                    <div className="logoBox"><a href="#"><img src="/static/logo.jpg" alt="logo"/></a></div>
                </header>
                <section className="back-image">
                    <div className="outline">
                        <div className="imageWrap"><img src="/static/hotelexterior.jpg" alt="image"/></div>
                        {this.state.hotels && this.state.hotels.address ?
                            <address>
                                <p className="addLine1">{this.state.hotels.address.addr1}</p>
                                <p className="addLine2">{this.state.hotels.address.addr2}</p>
                                <p className="addLine3">{this.state.hotels.address.addr3}</p>
                            </address> : ''}
                        {this.state.hotels && this.state.hotels.items ?
                            <div className="item">
                                <div className="item-head" onClick={() => this.openAccordion('map')}>
                                    <h4>Map</h4>
                                    <div
                                        className={this.state.accordionItems.map ? "arrow down fas fa-chevron-down" : "arrow down fas fa-chevron-right"}></div>
                                </div>
                                {this.state.accordionItems.map ? <div className="item-body">
                                    <p>{this.state.hotels.items.map}</p>
                                </div> : ''}
                                <div className="item-head" onClick={() => this.openAccordion('photos')}>
                                    <h4>Photo gallery</h4>
                                    <div
                                        className={this.state.accordionItems.photos ? "arrow down fas fa-chevron-down" : "arrow down fas fa-chevron-right"}></div>
                                </div>
                                {this.state.accordionItems.photos ? <div className="item-body">
                                    <p>{this.state.hotels.items.photos}</p>
                                </div> : ''}
                                <div className="item-head" onClick={() => this.openAccordion('amenities')}>
                                    <h4>Amenities</h4>
                                    <div
                                        className={this.state.accordionItems.amenities ? "arrow down fas fa-chevron-down" : "arrow down fas fa-chevron-right"}></div>
                                </div>
                                {this.state.accordionItems.amenities ? <div className="item-body">
                                    <p>{this.state.hotels.items.amenities}</p>
                                </div> : ''}
                            </div> : '' }

                    </div>
                </section>
            </div>
        )
    }
}


export default HotelDetails;
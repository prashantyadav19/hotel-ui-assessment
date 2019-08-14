import React from 'react';
import Link from 'next/link';

/**
 *  Nav method is use for navigation bar for the application
 * @constructor
 */
const Nav = () => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">Hotel Rooms</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <Link href="/hotel-details"><a> Hotel Details</a></Link>
                </li>
            </ul>

        </div>
    </nav>
);

export default Nav;

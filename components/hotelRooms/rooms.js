import React from 'react';
import Link from 'next/link';

export const Button = ({handleSubmit}) =>(
        <div>
            <button className="btn btn-success" type="button" onClick={handleSubmit}>Submit</button>
    </div>
);

export const GoToDetailsPage = () =>(
    <div>
        <Link href="/hotel-details">
            <button className="btn btn-primary" type="button"> Goto Hotel Details  &#8250;</button>
        </Link>
    </div>
);

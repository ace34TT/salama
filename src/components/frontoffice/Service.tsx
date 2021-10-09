import React, { Component } from 'react'

import '../../styles/frontoffice/service.css'

export default function Service() {
    return (
        <div className="container service-container pt-5">
            <div className="row">
                <h1 className="text-center mt-5"> Our services </h1>
            </div>
            <div className="row mt-4">
                <div className="col-lg-6">
                    <h2>For you</h2>
                    <p className="text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi consequuntur, praesentium ullam magni a consequatur reiciendis perferendis nemo, temporibus voluptates at fugiat mollitia necessitatibus cupiditate velit. Vero velit alias ea!</p>
                    <ul className="text-start">
                        <li>- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium magnam quisquam quidem possimus in explicabo eveniet eaque. Neque ab qui earum maiores reiciendis libero, praesentium dolore dolorem quam! Debitis, consequatur.</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <h2>For organization</h2>
                    <p className="text-start" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, perferendis ipsum dolorum pariatur natus aliquam, ratione voluptatum impedit omnis sapiente laborum ut non deleniti enim in expedita. Maiores, et accusantium?</p>
                    <ul className="text-start">
                        <li>- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium magnam quisquam quidem possimus in explicabo eveniet eaque. Neque ab qui earum maiores reiciendis libero, praesentium dolore dolorem quam! Debitis, consequatur.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


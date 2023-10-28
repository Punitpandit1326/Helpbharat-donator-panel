import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useParams } from 'react-router-dom';
import './nav.css'
import { FaPencilAlt } from 'react-icons/fa';


const NavSection = () => {
    const { _id } = useParams();
    const location = useLocation();
    const { pathname } = location;

    return (
        <>
            <Container>
                <Row>
                    <Col lg={9} md={9}>
                        <div className="dashboard">
                            <div className="listDash">
                                <Link className={`linkItem2 ${pathname === `/myfundraiser/dashboard/${_id}` ? 'active' : ''}`} to={`/myfundraiser/dashboard/${_id}`}> <li> Dashboard </li></Link>

                                <Link
                                    className={`linkItem2 ${pathname === `/donationdb/${_id}` ? 'active' : ''}`}
                                    to={`/donationdb/${_id}`}>
                                    <li>Donation</li>
                                </Link>

                                <Link className={`linkItem2 ${pathname === `/promotePage/${_id}` ? 'active' : ''}`} to={'/promotePage/' + _id} > <li>Promotions</li></Link>

                                <Link className={`linkItem2 ${pathname === `/mywithdraw/${_id}` ? 'active' : ''}`} to={'/mywithdraw/' + _id} > <li>My withdraw</li></Link>

                                <Link className={`linkItem2 ${pathname === `/setting/${_id}` ? 'active' : ''}`} to={'/setting/' + _id}><li>Settings</li></Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={3}>
                        <div className="edit-fund text-end">
                            <button>Edit Fundraiser <FaPencilAlt /></button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NavSection
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useParams } from 'react-router-dom';
import './nav.css'
import { FaPencilAlt } from 'react-icons/fa';


const NavSection = () => {
    const { _id, slug } = useParams();
    const location = useLocation();
    const { pathname } = location;

    return (
        <>
            <Container>
                <Row>
                    <Col lg={9} md={9}>
                        <div className="dashboard">
                            <div className="listDash">
                                <Link className={`linkItem2 ${pathname === `/myfundraiser/dashboard/${_id}/${slug}` ? 'active' : ''}`} to={`/myfundraiser/dashboard/${_id}/${slug}`}> <li> Dashboard </li></Link>

                                <Link
                                    className={`linkItem2 ${pathname === `/donationdb/${_id}/${slug}` ? 'active' : ''}`}
                                    to={`/donationdb/${_id}/${slug}`}>
                                    <li>Donation</li>
                                </Link>

                                <Link className={`linkItem2 ${pathname === `/promotePage/${_id}/${slug}` ? 'active' : ''}`} to={`/promotePage/${_id}/${slug}`} > <li>Promotions</li></Link>

                                <Link className={`linkItem2 ${pathname === `/mywithdraw/${_id}/${slug}` ? 'active' : ''}`} to={`/mywithdraw/${_id}/${slug}`} > <li>My withdraw</li></Link>

                                <Link className={`linkItem2 ${pathname === `/setting/${_id}/${slug}` ? 'active' : ''}`} to={`/setting/${_id}/${slug}`}><li>Settings</li></Link>
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
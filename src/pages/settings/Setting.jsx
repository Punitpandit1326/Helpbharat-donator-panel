import React from 'react';
import './Setting.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPencilAlt, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Setting = () => {
    return (
        <>
            {/* -------TopHeaderSection---------- */}

            <Container>
                <div className="emptybox-2">
                    <div className="emptybox3"></div>
                    <div className="emptybox4"></div>
                </div>
            </Container>
            <Container className='mb-5'>
                <Row>
                    <Col lg={8} md={8}>
                        <div className="dashboard">
                            <div className="listDash ms-n5">
                                <Link className='linkItem2 active' to={'/dashBoard'}><li>Dashboard</li></Link>
                                <Link className='linkItem2' to={'/donationdb'}> <li>Donation</li></Link>
                                <Link className='linkItem2' to={'/promotePage'}> <li>Promotions</li></Link>
                                <Link className='linkItem2' to={'/setting'}><li>Settings</li></Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={4}>
                        <div className="edit-btn text-end">
                            <button>Edit Fundraiser <FaPencilAlt /></button>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* -----------SettingHeroSection-------------- */}

            <Container>
                <div className='settingSection mx-0'>
                    <h3>Setting</h3>
                    <h4>You can change your account settings for the following options</h4>
                    <div className="curreny-section">
                        <p>Currency</p>

                        <select name="cars" id="dropoption2">
                            <option value="volvo">INR</option>
                            <option value="saab">USD</option>
                            <option value="opel">EUR</option>
                            <option value="audi">YEN</option>
                        </select>
                    </div>
                </div>

                {/* ---------EndSection--------- */}

                <div className="endSection">
                    <p>Close this fundraiser</p>
                    <span>You can always reopen the fundraiser once it is closed</span>
                    <button>Close this fundraiser</button>

                </div>

            </Container>

        </>
    )
}

export default Setting;

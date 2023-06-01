import React from 'react';
import './Setting.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPencilAlt, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../../component/footer/Footer';
const Setting = () => {
    return (
        <>
            {/* -------TopHeaderSection---------- */}

            <Container className='mb-5'>
                <Row>
                    <Col lg={9} md={9}>
                        <div className="dashboard">
                            <div className="listDash ms-n5">
                                <Link className='linkItem2' to={'/dashBoard'}><li>Dashboard</li></Link>
                                <Link className='linkItem2' to={'/donationdb'}> <li>Donation</li></Link>
                                <Link className='linkItem2' to={'/promotePage'}> <li>Promotions</li></Link>
                                <Link className='linkItem2' to={'/mywithdraw'}> <li>My Withdraw</li></Link>
                                <Link className='linkItem2 active' to={'/setting'}><li>Settings</li></Link>
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

            {/* --------FooterSection----------- */}

            <div>
                <Footer />
            </div>
        </>
    )
}

export default Setting;

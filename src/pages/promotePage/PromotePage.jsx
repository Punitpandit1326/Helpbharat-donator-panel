import React from 'react';
import './PromotePage.css';
import { Container, Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPencilAlt, FaDownload, FaRegCalendar, FaSortAmountDown, FaPlus } from 'react-icons/fa';

const PromotePage = () => {
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
                            <div className="listDash">
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

            {/* -----------PromoteHeroSection-------------- */}



            <Container className='export-Cont promote-Count'>
                <h3>Promote</h3>
                <div className='export-Sec'>
                    <p>Please promote your fundraiser either by sharing via social media or by adding manually your contacts below.
                    </p>
                    <button>Export <FaDownload /></button>
                </div>
                <span>Invite via social media by clicking on the options below</span>

                <div className="social-media-icon">
                    <i className="socialIcon fab fa-facebook-f"></i>
                    <i className="socialIcon fab fa-twitter"></i>
                    <i className="socialIcon fab fa-instagram"></i>
                    <i className="socialIcon fab fa-whatsapp"></i>
                </div>
                <div className="allboxes">

                    <div className="stats-box">
                        <div className="Facebook-stats">
                            <p>Facebook stats</p>
                        </div>
                        <hr style={{ width: '230px', color: '#000', marginRight: '-15px' }} />
                        <div className="leftlistRaised">
                            <div className="listdiv">
                                <li>Total Raised</li>
                                <li>Donations </li>
                                <li>Total Visits</li>
                            </div>
                            <div className='listdiv2'>
                                <p style={{ paddingLeft: '21px' }}>₹ 0</p>
                                <p >0 </p>
                                <p>0</p>
                            </div>
                        </div>

                    </div>
                    <div className="stats-box">
                        <div className="Facebook-stats">
                            <p>Twitter stats</p>
                        </div>
                        <hr style={{ width: '230px', color: '#000', marginRight: '-15px' }} />
                        <div className="leftlistRaised">
                            <div className="listdiv">
                                <li>Total Raised</li>
                                <li>Donations </li>
                                <li>Total Visits</li>
                            </div>
                            <div className='listdiv2'>

                                <p style={{ paddingLeft: '21px' }}>₹ 0</p>
                                <p >0 </p>
                                <p>0</p>
                            </div>
                        </div>

                    </div>
                    <div className="stats-box">
                        <div className="Facebook-stats">
                            <p>Instagram stats</p>
                        </div>
                        <hr style={{ width: '230px', color: '#000', marginRight: '-15px' }} />
                        <div className="leftlistRaised">
                            <div className="listdiv">
                                <li>Total Raised</li>
                                <li>Donations </li>
                                <li>Total Visits</li>
                            </div>
                            <div className='listdiv2'>

                                <p style={{ paddingLeft: '21px' }}>₹ 0</p>
                                <p >0 </p>
                                <p>0</p>
                            </div>
                        </div>

                    </div>
                    <div className="stats-box">
                        <div className="Facebook-stats">
                            <p>Whatsapp stats</p>
                        </div>
                        <hr style={{ width: '230px', color: '#000', marginRight: '-15px' }} />
                        <div className="leftlistRaised">
                            <div className="listdiv">
                                <li>Total Raised</li>
                                <li>Donations </li>
                                <li>Total Visits</li>
                            </div>
                            <div className='listdiv2'>

                                <p style={{ paddingLeft: '21px' }}>₹ 0</p>
                                <p >0 </p>
                                <p>0</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="D-btn">
                    <button><FaRegCalendar /> Date</button>
                    <button style={{ marginRight: '58%' }}><FaSortAmountDown /> Sort Range </button>
                    <div className="addContbtn">
                        <button>Add New Contact <FaPlus /></button>
                    </div>

                </div>


                <Table striped className='tabl3'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email address</th>
                            <th>Source</th>
                            <th>Added On</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nishant choudhary</td>
                            <td><a href="#">Name@gmail.com</a></td>
                            <td>Manual</td>
                            <td>20/8/2022</td>
                            <td className='view-btn'><a href="#">View</a></td>
                        </tr>
                        <tr>
                            <td>Mithun</td>
                            <td><a href="#">Name@gmail.com</a></td>
                            <td>Manual</td>
                            <td>20/8/2022</td>
                            <td className='view-btn'><a href="#">View</a></td>
                        </tr>
                        <tr>
                            <td>Ankit</td>
                            <td><a href="#">Name@gmail.com</a></td>
                            <td>Manual</td>
                            <td>20/8/2022</td>
                            <td className='view-btn'><a href="#">View</a></td>
                        </tr>
                    </tbody>
                </Table>

            </Container>


        </>
    )
}

export default PromotePage;

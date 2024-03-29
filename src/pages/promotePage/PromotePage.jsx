import React, { useState } from 'react';
import './PromotePage.css';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Table, Row, Col } from 'react-bootstrap';
import { FaPencilAlt, FaDownload, FaRegCalendar, FaSortAmountDown, FaPlus } from 'react-icons/fa';
import Footer from '../../component/footer/Footer';
import NavSection from '../../component/NavSection/NavSection';

const PromotePage = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);

    const navigate = useNavigate();

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setShowCalendar(false);
    };

    const handleClick = () => {
        setShowCalendar(true);
    };

    return (
        <>
            {/* -------TopHeaderSection---------- */}

            <NavSection />


            {/* -----------PromoteHeroSection-------------- */}

            <Container className='export-Cont promote-Count'>
                <h3>Promote</h3>
                <div className='export-Sec'>
                    <p>Please promote your fundraiser either by sharing via social media or by adding manually your contacts below.
                    </p>
                    <button>Export <FaDownload /></button>
                </div>
                <span>Invite via social media by clicking on the options below</span>

                <div className="social-media-icon ">
                    <a href="https://www.facebook.com">    <i className="socialIcon fab fa-facebook-f"></i></a>
                    <a href="https://www.twitter.com"> <i className="socialIcon fab fa-twitter"></i></a>
                    <a href="https://www.whatsapp.com">  <i className="socialIcon fab fa-whatsapp"> </i></a>
                </div>
                {/* <div className="allboxes">

                    <div className="stats-box">
                        <div className="Facebook-stats">
                            <p>Facebook stats</p>
                        </div>
                        <hr className='promote-line' />
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
                        <hr className='promote-line' />
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
                        <hr className='promote-line' />
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
                        <hr className='promote-line' />
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
                </div> */}

                {/* <div className='promotepage-main-section'>
                    <div className="promotepage-btn">
                        {selectedDate ? (
                            <button onClick={handleClick}>{selectedDate.toDateString()}</button>
                        ) : (
                            <button onClick={handleClick}><FaRegCalendar /> Date Range</button>
                        )}
                        {showCalendar && (
                            <DatePicker
                                className="calendar-datepicker"
                                selected={selectedDate}
                                onChange={handleDateChange} inline />
                        )}
                        <button><FaSortAmountDown /> Sort Range </button>
                    </div>

                    <div className="addContbtn">
                        <button>Add New Contact <FaPlus /></button>
                    </div>

                </div> */}

                {/* <Container fluid className='table-container p-0'>
                    <Table striped className='table-promote-section'>
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
                                <td><a href="#" className='text-success'>Name@gmail.com</a></td>
                                <td>Manual</td>
                                <td>20/8/2022</td>
                                <td className='view-btn'><a href="#">View</a></td>
                            </tr>
                            <tr>
                                <td>Mithun</td>
                                <td><a href="#" className='text-success'>Name@gmail.com</a></td>
                                <td>Manual</td>
                                <td>20/8/2022</td>
                                <td className='view-btn'><a href="#">View</a></td>
                            </tr>
                            <tr>
                                <td>Ankit</td>
                                <td><a href="#" className='text-success'>Name@gmail.com</a></td>
                                <td>Manual</td>
                                <td>20/8/2022</td>
                                <td className='view-btn'><a href="#">View</a></td>
                            </tr>
                        </tbody>
                    </Table>
                </Container> */}

            </Container>

            {/* --------FooterSection----------- */}

            <div>
                <Footer />
            </div>
        </>
    )
}

export default PromotePage;

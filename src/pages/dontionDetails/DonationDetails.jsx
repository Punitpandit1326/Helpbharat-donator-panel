import React from 'react';
import './DonationDetails.css';
import { FaAngleRight } from "react-icons/fa";
import { Container, Row, Col, Form } from 'react-bootstrap';


const DonationDetails = () => {
    return (
        <>
            <Container className='DonationDetails'>
                <h1>Donation Details</h1>
                <Row>

                    {/* -----------Donation-Left-Section---------- */}

                    <Col md={12} lg={7} className='Donation-Left'>
                        <img src="/Image/Img1.png" alt="Img1" />
                        <h3>Help Ashok save kids orphaned by farmer suicides. Donate Now</h3>

                        <div className="bb">
                            <div className='BlackBox'><h4>G</h4></div>
                            <p className='fraiserpara'>Fundraiser by Give</p>
                        </div>


                        <div className="paraDleft">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                        </div>

                        <div class="dropdown">
                            <button class="dropbtn">
                                <p>View FAQ</p> <FaAngleRight className='right-icon1' /></button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                        <h6>Have any questions, drop us an email at <a href="#" style={{ color: '#009368' }}>Charity@gmail.com</a>
                        </h6>
                    </Col>

                    {/* -----------Donation-Right-Section---------- */}

                    <Col md={12} lg={5} className='Donation-Right'>
                        <div className="rightSummary">
                            <h3>Donation summary </h3>
                            <p>Donation Amount</p>
                        </div>
                        <div className="rupeesBox">

                            <select name="Money" id="MoneySymbol">
                                <option value="volvo">₹</option>
                                <option value="saab">$</option>
                                <option value="opel">€</option>
                                <option value="audi">£</option>
                            </select>
                            <input type="numbertel" placeholder='1700' id='inputbox' />
                        </div>
                        <div className="ibtn4">
                            <div className="i-btn iBtn" >i
                                <div className="hover-box2">
                                    <strong>Information</strong>
                                    <p style={{ fontSize: '12px' }}>click to know more</p>
                                </div>
                                <div className="i-btn-para iBtnPara">
                                    <span>Min Amount ₹500.</span>
                                </div>
                            </div>
                        </div>
                        <br />
                        <hr style={{ marginTop: '20px' }} />
                        <div>
                        </div>

                        <div className="additionalTip">
                            <h2>Additional Tip</h2>
                            <p>Charity is charging 0% platform fee for this fundraiser, relying solely on the generosity of donors like you. info</p>
                            <div className="i-btn iBtn iBtn2">i
                                <div className="hover-box2 hoverbox3">
                                    <strong>Information</strong>
                                    <p style={{ fontSize: '12px' }}>Click to know more</p>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <select class="form-select" id="inputGroupSelect02">
                                <option selected>8%(250)</option>
                                <option value="1">10%(280)</option>
                                <option value="2">15%(300)</option>
                                <option value="3">20%(350)</option>
                            </select>

                        </div>
                        <br />
                        <hr style={{ marginTop: '20px' }} />

                        <div className='radioBox'>
                            <p>Mark the donation as anonymous
                            </p>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                style={{
                                    fontSize: '29px'
                                }}
                            />
                        </div>
                        <div className="donatepay-main">

                            <button className='btn donate-pay'>Continue to pay ₹1950</button>
                        </div>

                    </Col>
                </Row>
            </Container>

            <img src="/Image/bottomImg.png" alt="bottomImg" className='center' />
        </ >
    )
}

export default DonationDetails;

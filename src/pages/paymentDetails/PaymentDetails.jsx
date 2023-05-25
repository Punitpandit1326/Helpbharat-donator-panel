import React from 'react';
import './PaymentDetails.css';
import { Container, Row, Col, Form } from 'react-bootstrap';


const PaymentDetails = () => {
    return (
        <>
            <Container className='PaymentDetails'>
                <h1>Payment Detail</h1>
                <Row>
                    <Col md={12} lg={7} className='paymentleft'>
                        <h3>Payment summary</h3>
                        <div className="rdio-btn">
                            <p>Do you want Tax Relaxation</p>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                style={{
                                    fontSize
                                        : '29px'
                                }}
                            />
                        </div>
                        <hr style={{ border: '2px solid black', margin: '2px' }} />

                        <p className='taxpara'>Select your preferred tax exemption*</p>

                        <div className="box-Section">
                            <div className='box1-main'>
                                <Form.Check name='country' type="radio" aria-label="radio 1" id='radio-1' />
                                <div>
                                    <h6>India</h6>
                                    <p>with tax benefits in India  </p>
                                </div>
                            </div>
                            <div className='box1-main'>
                                <Form.Check name='country' type="radio" aria-label="radio 1" id='radio-2' />
                                <div>
                                    <h6>United States</h6>
                                    <p>with 501(c)(3)</p>
                                </div>



                            </div>
                            <div className='box1-main'>
                                <Form.Check name='country' type="radio" aria-label="radio 1 " id='radio-3' />
                                <div>
                                    <h6>Other Country Tax</h6>
                                    <p>with tax benefits in India</p>
                                </div>
                            </div>

                        </div>

                        {/* --------PersonalDetailsForm--------- */}

                        <div className="formSection">
                            <h2>Personal Details</h2>
                            <hr style={{ margin: '15px' }} />
                        </div>

                        <form action="#">
                            <div className="user-deatils">
                                <div className="input-box">
                                    <span className='details'>Full Name</span>
                                    <input type="text" placeholder='Enter Full Name' required />
                                </div>
                                <div className="input-box">
                                    <span className='details'>Mobile Number</span>
                                    <input type="numbertel" placeholder='Phone Number' required />
                                </div>
                                <div className="input-box">
                                    <span className='details'>Country</span>
                                    <div className="dropCountry">
                                        <select name="cars" id="dropoption-3">
                                            <option value="India">Ex-India</option>
                                            <option value="United">United state</option>
                                            <option value="England">England</option>
                                            <option value="France">France</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-box">
                                    <span className='details'>Pincode </span>
                                    <input type="text" placeholder='Ex 110044 ' required />
                                </div>
                                <div className="input-box">
                                    <span className='details'>Address</span>
                                    <textarea name="" id="" cols="85" rows="6" placeholder='Ex India '></textarea>
                                </div>
                            </div>
                            <div className="user-deatils2">
                                <div className="input-box2">
                                    <span className='details2'>Town/City </span>
                                    <input type="text" placeholder='Ex New Delhi' required />
                                </div>
                                <div className="input-box2">
                                    <span className='details2'>State </span>
                                    <input type="text" placeholder='Ex NCT of Delhi ' required />
                                </div>
                            </div>
                        </form>

                        <div className="i-btn-2">i
                            <div className="hover-box">
                                <strong>Information</strong>
                                <p>know more</p>
                            </div>
                        </div>
                        <div className="i-para2">
                            <p>The donation receipt will be shared on your Email</p>

                        </div>
                    </Col>

                    <Col md={12} lg={5} className='Donation-Right Donation-Right2'>
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
                            <input type="numbertel" placeholder='1700' id='inputbox2' />
                        </div>

                        <div className="i-btn iBtn" style={{ marginleft: '70px' }}>i
                            <div className="hover-box2">
                                <strong>Information</strong>
                                <p> Click to know more</p>
                            </div>
                            <div className="i-btn-para iBtnPara para-btn">
                                <span>Min Amount ₹500.</span>
                            </div>
                        </div>
                        <br />
                        <hr style={{ marginTop: '20px' }} />

                        <div className="additionalTip">
                            <h2>Additional Tip</h2>
                            <p>Charity is charging 0% platform fee for this fundraiser, relying solely on the generosity of donors like you. info</p>
                            <div className="i-btn iBtn iBtn2" style={{ marginleft: '70px' }}>i
                                <div className="hover-box hover-box2">
                                    <strong>Information</strong>
                                    <p>Click to know more</p>
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
                        <hr style={{ margin: '10px 10px' }} />

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
                        <div className='donate-pay2-main'>
                            <button className='btn donate-pay2'>Donate ₹1950</button>
                        </div>

                    </Col>
                </Row>
            </Container>
            <img src="/Image/bottomImg.png" alt="bottomImg" className='center' />
        </ >

    )
}

export default PaymentDetails;

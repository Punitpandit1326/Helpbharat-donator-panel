import React, { useState } from 'react';
import Footer from '../../component/footer/Footer';
import './DonationTab.css'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const DonationTab = () => {
    const [showStatements, setShowStatements] = useState("");
    const [activeImage, setActiveImage] = useState("/Image/Img1.png")
    const [activeDoc, setActiveDoc] = useState("/Image/doc1.png")
    const [activeTab, setActiveTab] = useState("About")
    const [donarTab, setDonarTab] = useState("donorInfo-main")
    const onClick = () => setShowStatements(prevShow => !prevShow)
    return (
        <>
            <Container className='DonationCont'>
                <h1>Help Ashok save kids orphaned by farmer suicides. Donate Now</h1>
                <button className='border-0'><Link to={'/editdonationtab'}><i className="fa fa-pencil pecilIcon"></i></Link></button>
                <Row>

                    {/* --------leftSection---------- */}

                    <Col md={7} className='DonationLeft'>
                        <img style={{ width: '97%' }} src={activeImage} alt="Image" />

                        <div className='Imagesleft'>
                            <img style={{ width: '80px' }} src="/Image/Img1.png" alt="Image" onClick={() => setActiveImage("/Image/Img1.png")} />
                            <img style={{ width: '80px' }} src="/Image/Img5.png" alt="Image" onClick={() => setActiveImage("/Image/Img5.png")} />
                            <img style={{ width: '80px' }} src="/Image/Img3.png" alt="Image" onClick={() => setActiveImage("/Image/Img3.png")} />
                            <img style={{ width: '80px' }} src="/Image/Img4.png" alt="Image" onClick={() => setActiveImage("/Image/Img4.png")} />
                        </div>

                        <div className="Sectionleftt">
                            <li className={activeTab === "About" && 'active'} onClick={() => setActiveTab("About")}> About</li>
                            <li className={activeTab === "Documents" && 'active'} onClick={() => setActiveTab("Documents")}>Documents</li>
                            <li className={activeTab === "Updates" && 'active'} onClick={() => setActiveTab("Updates")}>Updates</li>
                            <li className={activeTab === "Comments" && 'active'} onClick={() => setActiveTab("Comments")}>Comments</li>
                        </div>
                        <hr />

                        {activeTab === "About" && <div className="paraLeft">
                            <p>About ipsum dolor sit amet, consectetur adipiscing elit.
                                Nunc vulputate libero et velit interdum, ac aliquet odio
                                mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis
                                . Ut commodo efficitur neque.</p>

                            <p>About ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                            <img src="/Image/Img5.png" alt="Image" />
                        </div>}
                        {activeTab === "Documents" && <div className="paraLeft">
                            <p>Documents   .
                                Nunc vulputate libero et velit interdum, ac aliquet odio
                                mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis
                                . Ut commodo efficitur neque.</p>
                            <br />
                            <p>Documents ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                            <img src="/Image/Img5.png" alt="Image" />
                        </div>}
                        {activeTab === "Updates" && <div className="paraLeft">
                            <p>Updates ipsum dolor sit amet, consectetur adipiscing elit.
                                Nunc vulputate libero et velit interdum, ac aliquet odio
                                mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis
                                . Ut commodo efficitur neque.</p>
                            <br />
                            <p>Updates ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                            <img src="/Image/Img5.png" alt="Image" />
                        </div>}

                        {activeTab === "Comments" && <div className="paraLeft">
                            <p>Comments ipsum dolor sit amet, consectetur adipiscing elit.
                                Nunc vulputate libero et velit interdum, ac aliquet odio
                                mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis
                                . Ut commodo efficitur neque.</p>
                            <br />
                            <p>Comments ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                            <img src="/Image/Img5.png" alt="Image" />
                        </div>}

                    </Col>

                    {/* --------RightSection---------- */}

                    <Col md={5} className='DonationRight'>
                        <h2 style={{ margin: '20px' }}>Donate Now</h2>
                        <div className='BlackBox-main'>
                            <div className='BlackBox'><h4>G</h4></div>
                            <p className='fraiserpara'>Fundraiser by Give</p>
                        </div>


                        <div className='PriceDeatailsLeft'>
                            <p>₹1700 <span style={{ fontWeight: '400', fontSize: '1rem' }}>Raised</span> </p>
                            <p>₹5000</p>
                        </div>
                        <ProgressBar variant="success" now={30} style={{ width: '90%', marginLeft: '5%' }} />
                        <div className='PriceDeatailsLeft'>
                            <p>43 Supporters</p>
                            <p>60 Days Left</p>
                        </div>

                        <div className='topdonor tr-donor'>
                            <p className='t-donor' onClick={() => setDonarTab("donorInfo-main")}>Top Donors</p>
                            <p className='r-donor'>Recent Donors</p>

                        </div>
                        <hr style={{ width: '94%', marginLeft: '20px' }} />

                        {donarTab === "donorInfo-main" && <div className="donorInfo-main">

                            <div className="donarInfo">
                                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa", }} /> <p>Someone donated INR <strong>500</strong></p>
                            </div>
                            <p className='donoted-inr'>8 nov 2022</p>

                            <div className="donarInfo m-0">
                                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa" }} />
                                <p>Someone donated INR <strong>500</strong> </p>
                            </div>
                            <p className='donoted-inr'>8 nov 2022</p>
                            <div className="donarInfo m-0">
                                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa" }} />
                                <p>Someone donated INR <strong>500</strong> </p>
                            </div>

                            <p className='donoted-inr'>8 nov 2022</p>
                            <div className="donarInfo m-0">
                                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa" }} />
                                <p>Someone donated INR <strong>500</strong> </p>
                            </div>

                            <p className='donoted-inr'>8 nov 2022</p>
                            <div className="donarInfo m-0">
                                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa" }} />
                                <p>Someone donated INR <strong>500</strong> </p>
                            </div>
                            <p className='donoted-inr'>8 nov 2022</p>
                        </div>
                        }
                        <div className="donate-btn-price">
                            <button>₹500</button>
                            <button>₹1000</button>
                            <button>₹1500</button>
                            <button>₹2000</button>
                        </div>

                        <div className="donate-form">
                            <input type="text" placeholder='Enter Custom Amount' />
                            <div className='i-btn-main'>
                                <div className="i-btn">i
                                    <div className="hover-box">
                                        <strong>Information</strong>
                                        <p>Actual price may be differ based on multiple factor Click to know more</p>
                                    </div>
                                </div>
                                <div className="i-btn-para2">
                                    <p>Min Amount ₹500.</p>
                                </div>
                            </div>
                        </div>


                        <div className='dn-section'>
                            <button className='btn donate-Now2'>Donate Now</button>
                        </div>

                    </Col>
                </Row>
            </Container>

            {/* ---------DocumentSection--------     */}

            <Container className='DocumentSection' >
                <div className="d-head">
                    <h5>Document</h5>
                </div>
                <Row>
                    <Col xl={6} md={10} className='DocumentLeft' >
                        <div style={{ backgroundColor: '#EBEBEB' }}>
                            <img style={{ width: '300px', height: "auto", marginLeft: '28%' }} src={activeDoc} alt="Image" />
                        </div>


                        <div className='Imagesleft'>

                            <img style={{ width: '80px' }} src="/Image/doc1.png" alt="Image" onClick={() => setActiveDoc("/Image/doc1.png")} />
                            <img style={{ width: '80px' }} src="/Image/doc2.png" alt="Image" onClick={() => setActiveDoc("/Image/doc2.png")} />
                            <img style={{ width: '80px' }} src="/Image/doc3.png" alt="Image" onClick={() => setActiveDoc("/Image/doc3.png")} />
                            <img style={{ width: '80px' }} src="/Image/doc4.png" alt="Image" onClick={() => setActiveDoc("/Image/doc4.png")} />


                        </div>
                    </Col>

                    <Col xl={5} md={10} className='Documentright-main2'>
                        <div className="product-price">
                            <div className="product-price-child1" style={{
                                fontSize: '18px',
                                fontWeight: '500',
                                paddingBottom: '20px'
                            }}>
                                Tax Deduction
                                <div className="i-btn" style={{ marginLeft: '10px' }}>i
                                    <div className="hover-box">
                                        <strong>Information</strong>
                                        <p>Actual price may be differ based on multiple factor Click to know more</p>
                                        <div className="underb">Click to know more</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="value-btn border-0">
                            <button>80 G</button>
                            <button>501(c)(3)</button>
                            <button>Gift Aid</button>
                        </div>

                        <div className='icon-main-cont'>
                            <h2>Share This Fundraiser</h2>

                            <div className="social-media-icon">
                                <i className="social-icon fab fa-facebook-f"></i>
                                <i className="social-icon fab fa-twitter"></i>
                                <i className="social-icon fab fa-instagram"></i>
                                <i className="social-icon fab fa-whatsapp"></i>
                            </div>


                        </div>



                        <div className="supportfund">
                            <h2>Supporting Fundraiser</h2>
                            <div className='fontAwesomeSec'>
                                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa", marginTop: '10px', marginLeft: 'px' }} />
                                <p>I am raising funds for the education of a 3 year old girl. There's no family support. Your small donation can make the little girl's future better.</p>
                            </div>

                            <div className='fontAwesomeSec' style={{ marginTop: '20px' }}>
                                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa", marginTop: '10px', marginLeft: 'px' }} />
                                <p>I am raising funds for the education of a 3 year old girl. There's no family support. Your small donation can make the little girl's future better.</p>
                            </div>
                            <div className='fontAwesomeSec' style={{ marginTop: '20px' }}>
                                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa", marginTop: '10px', marginLeft: 'px' }} />
                                <p>I am raising funds for the education of a 3 year old girl. There's no family support. Your small donation can make the little girl's future better.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* --------FooterSection----------- */}

            <div>
                <Footer />
            </div>
        </>
    )
}

export default DonationTab

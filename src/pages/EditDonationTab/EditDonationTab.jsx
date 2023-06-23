import React, { useState } from 'react';
import './EditDonationTab.css';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FaPen, FaCalendarAlt } from "react-icons/fa";



const EditDonationTab = () => {
    const [showStatements, setShowStatements] = useState("");
    const [activeImage, setActiveImage] = useState("/Image/Img1.png")
    const [activeDoc, setActiveDoc] = useState("/Image/doc1.png")
    const [activeTab, setActiveTab] = useState("About")
    const [donarTab, setDonarTab] = useState(true)
    const onClick = () => setShowStatements(prevShow => !prevShow)

    return (
        <div>
            <div className="bottomNav">
                <p>Page is curently on Edit Mode <a href="#">Cancel</a>
                    <a href="#" style={{ color: '#fff', border: '2px solid #000', backgroundColor: '#000', padding: '2px 25px' }}>Finish</a></p>

            </div>

            <Container className='DonationCont DonationCont2'>
                <h2>Help Ashok save kids orphaned by farmer suicides. Donate Now <FaPen className='pencilIcon' /></h2>

                <Row>

                    {/* --------leftSection---------- */}

                    <Col md={7} className='DonationLeft DonationLeft2'>
                        <img style={{ width: '97%' }} src={activeImage} alt="Image" />

                        <div className='Imagesleft'>

                            <img style={{ width: '80px' }} src="/Image/Img1.png" alt="Image" onClick={() => setActiveImage("/Image/Img1.png")} />
                            <img style={{ width: '80px' }} src="/Image/Img5.png" alt="Image" onClick={() => setActiveImage("/Image/Img5.png")} />
                            <img style={{ width: '80px' }} src="/Image/Img3.png" alt="Image" onClick={() => setActiveImage("/Image/Img3.png")} />
                            <img style={{ width: '80px' }} src="/Image/Img4.png" alt="Image" onClick={() => setActiveImage("/Image/Img4.png")} />


                        </div>

                        <div className="Sectionleftt">
                            <li className={`${activeTab === 'About' ? 'active-tab' : ''}`} onClick={() => setActiveTab("About")}> About</li>
                            <li className={`${activeTab === 'Documents' ? 'active-tab' : ''}`} onClick={() => setActiveTab("Documents")}>Documents</li>
                            <li className={`${activeTab === 'Updates' ? 'active-tab' : ''}`} onClick={() => setActiveTab("Updates")}>Updates</li>
                            <li className={`${activeTab === 'Comments' ? 'active-tab' : ''}`} onClick={() => setActiveTab("Comments")}>Comments</li>
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

                    <Col md={5} className='DonationRight DonationRight2'>
                        <h1>Donate Now</h1>
                        <div className='Blackbox2-main'>
                            <div className='BlackBox BlackBox2'>
                                <i className="far fa-image"></i>
                            </div>
                            <p>Fundraiser by</p>
                            <input type="text" id='fund-input0' />
                        </div>

                        <div className='PriceDeatailsLeft'>
                            <p>₹1700 <span style={{ fontWeight: '400', fontSize: '1rem' }}>Raised</span> </p>
                            <input type="text" id='fund-input' />
                        </div>
                        <br />

                        <ProgressBar variant="success" now={30} style={{ width: '90%', marginLeft: '20px' }} />

                        <div className='PriceDeatailsLeft'>
                            <p>43 Supporters</p>
                            <p className='d-lefts'><FaCalendarAlt /> 60 Days Left</p>
                        </div>

                        <div className='topdonor2'>
                            <p className={`${donarTab && 'active'}`} onClick={() => setDonarTab(true)}>Top Donors</p>
                            <p className={`${!donarTab && 'active'}`} onClick={() => setDonarTab(false)}>Recent Donors</p>

                        </div>
                        <hr style={{ width: '94%', marginLeft: '20px' }} />

                        {donarTab && <div className="donorInfo-main">

                            <div className="donarInfo">
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

                            <div className="donarInfo m-0">
                                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa" }} />
                                <p>Someone donated INR <strong>500</strong> </p>

                            </div>
                            <p className='donoted-inr'>8 nov 2022</p>
                        </div>}

                        {!donarTab && <div className="Recent-main-section">Hello Recent Section</div>}
                        <div className='btn-main'>
                            <div className="btn donate-btn donate-btn2">
                                <button>₹500</button>
                                <button>₹1000</button>
                                <button>₹1500</button>
                                <button>₹2000</button>
                            </div>
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
                        <div className="dn-section">
                            <button className='btn donate-Now'>Donate Now</button>
                        </div>

                    </Col>
                </Row>
            </Container>


            {/* ---------DocumentSection--------     */}

            <Container className='DocumentSection'>
                <Row>
                    <div className="d-head">
                        <h5>Document</h5>
                    </div>
                    <Col xl={6} md={10} className='DocumentLeft' >
                        <div style={{ backgroundColor: '#EBEBEB' }}>
                            <img className='document-image-section' src={activeDoc} alt="Image" />
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

                        <div className="btn donate-btn another-btn border-0">
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


                        <div className="supportfund supportfund2 ">
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
        </div >
    )
}

export default EditDonationTab;

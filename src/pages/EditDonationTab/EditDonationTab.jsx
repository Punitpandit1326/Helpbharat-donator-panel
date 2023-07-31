import React, { useState } from 'react';
import './EditDonationTab.css';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FaPen, FaCalendarAlt } from "react-icons/fa";
import Footer from '../../component/footer/Footer';



const EditDonationTab = () => {
    // const [showStatements, setShowStatements] = useState("");
    const [activeImage, setActiveImage] = useState("/Image/Img1.png")
    const [activeDoc, setActiveDoc] = useState("/Image/doc1.png")
    const [activeTab, setActiveTab] = useState("About")
    const [donarTab, setDonarTab] = useState(true)
    const [isFade, setIsFade] = useState(true);

    const handleToggleImage = (src) => {
        setIsFade(false)
        setActiveImage(src)

        setTimeout(() => {
            setIsFade(true)
        }, [300])
    }

    return (
        <div>
            <div className="bottomNav">
                <p>Page is curently on Edit Mode <a href="#">Cancel</a>
                    <a href="#" style={{ color: '#fff', border: '2px solid #000', backgroundColor: '#000', padding: '2px 25px' }}>Finish</a></p>

            </div>

            <Container className='DonationCont2'>
                <h2>Help Ashok save kids orphaned by farmer suicides. Donate Now <FaPen className='pencilIcon' /></h2>
                <Row>

                    {/* --------leftSection---------- */}

                    <Col md={7} className='DonationLeft DonationLeft2'>
                        <img className={`${isFade ? 'active' : ''} main-image`} src={activeImage} alt="Image" />

                        <div className='Imagesleft'>

                            <img style={{ width: '80px' }} src="/Image/Img1.png" alt="Image" onClick={() => handleToggleImage("/Image/Img1.png")} />
                            <img style={{ width: '80px' }} src="/Image/Img5.png" alt="Image" onClick={() => handleToggleImage("/Image/Img5.png")} />
                            <img style={{ width: '80px' }} src="/Image/Img3.png" alt="Image" onClick={() => handleToggleImage("/Image/Img3.png")} />
                            <img style={{ width: '80px' }} src="/Image/Img4.png" alt="Image" onClick={() => handleToggleImage("/Image/Img4.png")} />


                        </div>

                        <div className="Sectionleftt">
                            <li className={`${activeTab === 'About' ? 'active-tab' : ''}`} onClick={() => setActiveTab("About")}> About</li>
                            <li className={`${activeTab === 'Documents' ? 'active-tab' : ''}`} onClick={() => setActiveTab("Documents")}>Documents</li>
                            <li className={`${activeTab === 'Updates' ? 'active-tab' : ''}`} onClick={() => setActiveTab("Updates")}>Updates</li>
                            <li className={`${activeTab === 'Comments' ? 'active-tab' : ''}`} onClick={() => setActiveTab("Comments")}>Comments</li>
                        </div>
                        <hr className='donation-underline' />

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

                    <Col md={4} className='DonationRight2'>
                        <h1>Donate Now</h1>
                        <div className='Blackbox2-main'>
                            <div className='green-box'>
                                <i className="far fa-image"></i>
                            </div>
                            <p>Fundraiser by</p>
                            <input type="text" id='fund-input0' />
                        </div>

                        <div className='PriceDeatailsLeft'>
                            <p>₹1700 <span>Raised</span> </p>
                            <input type="text" id='fund-input' />
                        </div>
                        <br />

                        <ProgressBar variant="success" now={30} style={{ height: '10px' }} />

                        <div className='PriceDeatailsLeft'>
                            <p>43 Supporters</p>
                            <p className='d-lefts'><FaCalendarAlt /> 60 Days Left</p>
                        </div>

                        <div className='topdonor2'>
                            <p className={`${donarTab && 'active'}`} onClick={() => setDonarTab(true)}>Top Donors</p>
                            <p className={`${!donarTab && 'active'}`} onClick={() => setDonarTab(false)}>Recent Donors</p>

                        </div>
                        <hr style={{ margin: '0', width: '100%' }} />

                        {donarTab && <div className="donorInfo-main p-0 mt-3">

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
                            <button className='donate-Now'>Donate Now</button>
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
                    <Col md={7} className='DocumentLeft' >
                        <div style={{ backgroundColor: '#EBEBEB' }}>
                            <img className='document-image-section' src={activeDoc} alt="Image" />
                        </div>

                        <div className='Imagesleft'>

                            <img style={{ width: '80px' }} src="/Image/doc1.png" alt="Image" onClick={() => setActiveDoc("/Image/doc1.png")} />
                            <img style={{ width: '80px' }} src="/Image/adharcard2.png" alt="Image" onClick={() => setActiveDoc("/Image/adharcard2.png")} />
                            <img style={{ width: '80px' }} src="/Image/doc3.png" alt="Image" onClick={() => setActiveDoc("/Image/doc3.png")} />
                            <img style={{ width: '80px' }} src="/Image/pancard.jpg" alt="Image" onClick={() => setActiveDoc("/Image/pancard.jpg")} />
                        </div>
                    </Col>

                    <Col md={5} className='Documentright-main2'>
                        <div className="product-price">
                            <div className="product-price-child1" style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                padding: '10px, 0'
                            }}>
                                Tax Deduction
                                <div className="i-btn" style={{ marginLeft: '10px' }}>i
                                    <div className="hover-box">
                                        <strong>Information</strong>
                                        <p>Actual price may be differ based on multiple factor Click to know more</p>
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

                        <div className="supportfund supportfund2">
                            <h2>Supporting Fundraiser</h2>
                            <div className='fontAwesomeSec'>
                                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa", marginTop: '10px', marginLeft: 'px' }} />
                                <p>I am raising funds for the education of a 3 year old girl. There's no family support. Your small donation can make the little girl's future better.</p>
                            </div>
                            <div className='fontAwesomeSec'>
                                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa", marginTop: '10px', marginLeft: 'px' }} />
                                <p>I am raising funds for the education of a 3 year old girl. There's no family support. Your small donation can make the little girl's future better.</p>
                            </div>
                            <div className='fontAwesomeSec'>
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
        </div>
    )
}

export default EditDonationTab;

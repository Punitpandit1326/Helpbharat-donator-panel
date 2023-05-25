import React from 'react';
import "./Footer.css"
import { Button, Row, Col, Container } from 'react-bootstrap';
import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className='footer-section'>
                <Container>
                    <Row>
                        <Col sm={12} md={4} lg={3}>
                            <div className='footer-1'>
                                <h6>HelpBharat</h6>
                                <p>Porttitor eget dolor morbi non arcu risus quis. Morbi tristique senectus et netus et malesuada fames. Montes nascetur ridiculus mus mauris. Sollicitudin tempor id eu nisl. Massa enim nec dui nunc mattis.</p>
                                <BsTwitter className='media-icon' /> <FiInstagram className='media-icon' /> <FaFacebookF className='media-icon' /> <BsYoutube className='media-icon' />
                            </div>
                        </Col>
                        <Col sm={12} md={4} lg={3}>
                            <div className='footer-2'>
                                <p>Quick links</p>
                                <ul>
                                    <li>Start A Fundraiser</li>
                                    <li>Donate</li>
                                    <li>About Us</li>
                                    <li>News</li>
                                    <li>Blogs</li>
                                    <li>Institutional</li>
                                    <li>Corporate</li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={12} md={4} lg={3}>
                            <div className='footer-3'>
                                <h6>Contacts Info</h6>
                                <div className='pt-2'>
                                    <img src="/Image/phone.png" alt="" />
                                    <span className='ps-3'>Call us </span>
                                    <p>+1-206-156 2849</p>
                                </div>
                                <div className='pt-1'>
                                    <img src="/Image/email.png" alt="" />
                                    <span className='ps-3'>Mail Us </span>
                                    <p>info@harity.com</p>
                                </div>
                                <div className='pt-1'>
                                    <img src="/Image/pin.png" alt="" />
                                    <span className='ps-3'>  Visit Us </span>
                                    <p> California 62639 </p>

                                </div>
                            </div>

                        </Col>
                        <Col sm={12} md={4} lg={3} className='footer-4'>
                            <h6>Subscribe to Our Newsletter</h6>
                            <p>Nulla at volutpat diam ut venenatis tellus in metus vulputate. Turpis in eu mi bibendum.</p>
                            <div className='d-flex btn-inp'>
                                <input type="email" />
                                <Button className='btn-send'
                                    style={{}}>Send</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


        </>
    )
}

export default Footer
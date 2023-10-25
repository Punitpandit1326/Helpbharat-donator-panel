import React from 'react';
import './createFund.css';
import Footer from '../../../component/footer/Footer';
import { AiOutlineCloud } from "react-icons/ai";
import { Col, Container, Form, Row } from 'react-bootstrap';

const CreateFund = () => {
    return (

        <>
            <div className='main_fund_Section'>
                <h5>
                    Raise funds for a medical fundraiser
                </h5>
                <h6>Please fill the required details below to setup your fundraiser</h6>
            </div>
            <Container className='main-container-form-section'>
                <Row>
                    <Col md={7}>
                        <Form>
                            <h6 className='text-success mt-5'>Description</h6>
                            <p>If required, you can update the information later</p>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text"
                                    as="textarea"
                                    cols={10}
                                    rows={5}
                                />
                            </Form.Group>
                        </Form>

                        <Form>
                            <h6 className='text-success mt-5'>Upload Photos </h6>
                            <p>If required, you can update the information later</p>
                            <Form.Group className="mb-2 upload" controlId="formBasicEmail">
                                <AiOutlineCloud size={26} className='text-success' />
                                <p>
                                    Upload Photos In Jpeg And Png Only</p>
                            </Form.Group>

                        </Form>


                        <Form>
                            <h6 className='text-success mt-5'>Upload Document </h6>
                            <p>Upload Documents In Pdf’s Only</p>
                            <Form.Group className="mb-2 upload" controlId="formBasicEmail">
                                <AiOutlineCloud size={26} className='text-success' />
                                <p>
                                    Upload Photos In Jpeg And Png Only</p>
                            </Form.Group>

                        </Form>

                        <button>Create</button>
                    </Col>


                    <Col md={4}>
                        <div className='faq-section'>
                            <h5 className='text-dark text-start ps-2 pt-2'>View Faq</h5>
                            <div className='anchor-section'>
                                <a href="#"> &gt; How does Monthly Giving work?</a>
                                <a href="#"> &gt; How do I know that my transaction is secure?</a>
                                <a href="#"> &gt; How do I cancel my donation?</a>
                                <a href="#"> &gt; Anyone with a requirement of funds who</a>
                                <a href="#"> &gt; these timelines may get affected due to </a>
                                <a href="#"> &gt; Give charges 0% fees for all fundraisers</a>
                                <a href="#"> &gt; All the funds collected on Give’s fundraising platform</a>
                                <a href="#"> &gt; How does Monthly Giving work?</a>
                            </div>
                        </div>
                        <div className='endSection_faq'>
                            <p className='text-dark'>Have any questions, drop us an email at support@give.do</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default CreateFund;
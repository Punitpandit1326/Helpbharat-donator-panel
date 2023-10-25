import './fund.css';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../../component/footer/Footer';

const ChooseFund = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/fundraiser/createfund');
    };


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
                            <h6 className='text-success mt-5'>Enter Details</h6>
                            <p>If required, you can update the information later</p>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Mobile number of fundraiser</Form.Label>
                                <Form.Control type="tel" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Patient's full name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Relation</Form.Label>
                                <Form.Select>
                                    <option>mother</option>
                                    <option>father</option>
                                    <option>spouse</option>
                                    <option>other</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Categories</Form.Label>
                                <Form.Select>
                                    <option>other</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formMedical">
                                <Form.Label>Ailment/Medical condition*</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                        </Form>
                        <div className='form-section mb-3'>
                            <div>
                                <label htmlFor="fundsRequired">Funds required</label>
                                <br />
                                <input id='fundsRequired' type="text" value='₹ ' />
                            </div>
                            <br />
                            <div>
                                <label >End date for fundraiser</label>
                                <br />
                                <input type="date" placeholder='₹ ' />
                            </div>
                        </div>
                        <p className='text-dark'>Funds shall only be transferred to relevant Beneficiary bank account</p>
                        <button onClick={handleNavigation}>Create</button>
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

export default ChooseFund;
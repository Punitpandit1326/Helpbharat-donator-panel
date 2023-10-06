import React, { useState, useEffect } from 'react';
import './Myprofile.css';
import CustomTab from '../../component/customTabs/CustomTab'
import Footer from '../../component/footer/Footer';
import Accordion from 'react-bootstrap/Accordion';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { donatorUrl } from '../../utils/url';
import Cookies from 'universal-cookie';

const Myprofile = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState('')
    const [validated, setValidated] = useState(false);

    const cookie = new Cookies();
    const tokenWeb = cookie.get('token_web');
    console.log(tokenWeb, "token recived");

    const fetchUser = async () => {
        try {
            const response = await fetch(`${donatorUrl}user`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenWeb}`
                }
            });
            const data = await response.json();
            if (!data.success) {
                setError(data.message)
                return
            }
            setUser(data.response.data);
            setLoading(false);
        }
        catch (error) {
            setError(false)
            setLoading(false);
        }
    }

    useEffect(() => {
        return () => fetchUser();
    }, [])

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (

        <div style={{ backgroundColor: '#F5F5F5' }}>
            <CustomTab activeLink={"myprofile"} />

            {/* --------AccordianSection----------- */}

            <Container>
                <Accordion defaultActiveKey="0">

                    <Accordion.Item eventKey="0">
                        <Accordion.Header
                            style={{
                                fontFamily: 'Inter',
                                fontWeight: '500',
                                fontSize: '15px'
                            }}>
                            <h6>Personal Details</h6></Accordion.Header>
                        <Accordion.Body>

                            {user && <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Nishant Choudhary"
                                            defaultValue={user.name}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='form-input'>
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            required
                                            type="telnumber"
                                            placeholder="+91 0987654321"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <br />
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control
                                            required
                                            type="email"
                                            placeholder="Nishu12364gmail.com"
                                            defaultValue={user.email}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" controlId="validationCustom04" className='form-input'>
                                        <Form.Label>Country</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Select Country</option>
                                            <option value="1">India</option>
                                            <option value="2">United State</option>
                                            <option value="3">Ohter</option>
                                        </Form.Select>
                                        <br />
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" controlId="validationCustom05">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="New Delhi"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom06" className='form-input'>
                                        <Form.Label>Pincode</Form.Label>
                                        <Form.Control
                                            required
                                            type="telnumber"
                                            placeholder="110044"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <br />
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom07">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="h-132 lal kuan new delhi"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <br />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom08">
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control
                                            required
                                            type="date"
                                            placeholder=""
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <br />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom09">
                                        <Form.Label>Pan Card Number</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="GJDBKF6765M"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <br />
                                    </Form.Group>
                                    <Col className='d-flex justify-content-end  save-btn'>
                                        <button type='submit'>Save Settings</button>
                                    </Col>
                                </Row>
                            </Form>}
                        </Accordion.Body>
                    </Accordion.Item>

                    <br />
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><h6>Update Password</h6></Accordion.Header>
                        <Accordion.Body>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustom01" >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            required
                                            type="password"
                                            placeholder="Password"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='form-input'>
                                        <Form.Label>New Password</Form.Label>
                                        <Form.Control
                                            required
                                            type="password"
                                            placeholder="New Password"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <br />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control
                                            required
                                            type="password"
                                            placeholder="Confirm Password"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <div className='d-flex justify-content-end  save-btn'>
                                        <Button>Save Settings</Button>
                                    </div>
                                </Row>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <br />
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h6>KYC & Bank Details</h6></Accordion.Header>
                        <Accordion.Body>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label>Bank Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Label>Bank Account No.</Form.Label>
                                        <Form.Control
                                            required
                                            type="telnumber"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <br />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Label>IFSC Code</Form.Label>
                                        <Form.Control
                                            required
                                            type="telnumber"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Label>Branch Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <br />
                                    </Form.Group>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Upload Cancel Cheque</Form.Label>
                                        <Form.Control type="file" />
                                        <span
                                            style={{ fontSize: '10px', fontWeight: '500', paddingLeft: '5px' }}>Please Upload max size of file is 2mb</span>
                                    </Form.Group>

                                    <div className='d-flex justify-content-end  save-btn'>
                                        <Button>Save Settings</Button>
                                    </div>
                                </Row>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </Container>

            {/* --------FooterSection----------- */}

            <div>
                <Footer />
            </div>


        </div>

    );
};
export default Myprofile;

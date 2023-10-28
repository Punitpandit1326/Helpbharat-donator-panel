import React, { useState, useEffect } from 'react';
import './Myprofile.css';
import CustomTab from '../../component/customTabs/CustomTab'
import Footer from '../../component/footer/Footer';
import Accordion from 'react-bootstrap/Accordion';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { donatorUrl } from '../../utils/url';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';


const Myprofile = () => {
    const [user, setUser] = useState({
        name: '',
        number: '',
        email: '',
        country: '',
        city: '',
        pincode: '',
        address: '',
        birth: '',
        panCard: ''
    });
    const [detail, setDetails] = useState({
        bank_name: '',
        bank_account_no: '',
        ifsc: '',
        branch: '',
        document: ''
    });

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isEditable, setIsEditable] = useState(false)
    const [validated, setValidated] = useState(false);
    const [passwordData, setPasswordData] = useState({
        old_password: '',
        new_password: '',
        confirm_Password: ''
    });

    const cookie = new Cookies();
    const tokenWeb = cookie.get('token_web');
    const authUser = cookie.get('user');
    const userId = authUser?._id;

    const fetchUser = async () => {

        const toastID = toast.loading('Please wait...')
        const response = await fetch(`${donatorUrl}user`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenWeb}`
            }
        });
        const data = await response.json();

        if (!data.success) {
            setError(data.message)
            toast.update(toastID, {
                render: data.message,
                type: 'error',
                autoClose: 1500,
                isLoading: false
            })
            return
        }
        toast.update(toastID, {
            render: data.message,
            type: 'success',
            autoClose: 1500,
            isLoading: false
        })

        setUser(data.data);
    }

    useEffect(() => {
        fetchUser();
        return () => toast.dismiss();
    }, []);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();

        if (passwordData.new_password !== passwordData.confirmPassword) {
            alert('New password and confirm password do not match.');
            return;
        }

        console.log(authUser);

        try {
            const response = await fetch(`${donatorUrl}change-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenWeb}`,
                },
                body: JSON.stringify({
                    old_password: passwordData.old_password,
                    new_password: passwordData.new_password,
                    email: authUser.email
                }),
            });

            if (!response.success) {
                throw new Error('Password change failed');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswordData({ ...passwordData, [name]: value });
    };

    const handleFileChange = (e) => {
        setDetails({ ...detail, document: e.target.files[0] });
    };

    // ---------Edit-Users-Api----------

    const fetchEditUsers = async (e) => {
        e.preventDefault();
        try {
            toast.info('Please wait...', { autoClose: false });

            const res = await fetch(`${donatorUrl}user/${userId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenWeb}`
                },
                body: JSON.stringify(user),

            });

            const data = await res.json();
            console.log(data, "api was calling");
            if (!data.success) {
                toast.dismiss();
                toast.error('Error: ' + data.response.message, { autoClose: 5000 });
                throw new Error(data.message || 'Request failed');
            }
            setLoading(false);
            toast.dismiss();
        }
        catch (error) {
            setError(error.message || 'An error occurred');
            setLoading(false);
            toast.dismiss(); // Hide the loading toast
            toast.error('An error occurred. Please try again later.', { autoClose: 5000 });
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    };

    const handleDocChange = (e) => {
        const { name, value } = e.target;
        setDetails({ ...detail, [name]: value })
    };

    // -----------get-user-account----------

    const fetchDetails = async () => {
        try {
            const resp = await fetch(`${donatorUrl}account?user_id=${userId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenWeb}`
                },
            });

            const data = await resp.json();

            console.log(data, "error1");

            if (!data.success) {
                setError(data.message);
            }

            setDetails(data.data[0]);
            console.log(data);

            if (data.data.length >= 1) {
                console.log("yes account is available");
                setIsEditable(true)
            } else {
                console.log("no account is not available");
                setIsEditable(false)
            }

            console.log(data.data, "error2");
            setLoading(false);
        }

        catch (error) {
            setError(error.message)
            setLoading(false)
        }
    };

    const postAccountDetails = async (e) => {
        e.preventDefault();
        console.log("form is submitting");

        try {

            const formData = new FormData();
            // formData.append('user_id', userId);
            formData.append('document', detail.document);
            formData.append('branch', detail.branch);
            formData.append('ifsc', detail.ifsc);
            formData.append('bank_account_no', detail.bank_account_no);
            formData.append('bank_name', detail.bank_name);


            console.log("is form data loaded", formData);

            const resp = await fetch(`${donatorUrl}account`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${tokenWeb}`
                },
                body: formData
            });
            const result = await resp.json();

            if (!result.success) {
                console.log("response error", result.message);
                setError(result.message);
            }
            setDetails(result.data);
            console.log(result.data, "error2");
            setLoading(false);
        }

        catch (error) {
            console.log("catch error", error);
            setError(error.message)
            setLoading(false)
        }
    };

    const editAccountDetails = async (e) => {
        e.preventDefault();
        const toastId = toast.loading('Please wait...');
        try {

            const formData = new FormData();
            formData.append('user_id', userId);
            formData.append('document', detail.document);
            formData.append('branch', detail.branch);
            formData.append('ifsc', detail.ifsc);
            formData.append('bank_account_no', detail.bank_account_no);
            formData.append('bank_name', detail.bank_name);


            const response = await fetch(`${donatorUrl}account`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${tokenWeb}`
                },
                body: formData,
            });

            const data = await response.json();
            console.log(data, "api was calling");

            if (!data.success) {
                console.log("response error", response.message);
                setError(response.message);
                toast.update(toastId, data.response.message)
            }
            console.log(response.data, "error2");
            setLoading(false);
            toast.dismiss();
        }
        catch (error) {
            setError(error.message || 'An error occurred');
            setLoading(false);
            toast.dismiss(); // Hide the loading toast
            toast.error(error.message, { autoClose: 2000 });
        }
    }

    useEffect(() => {
        fetchDetails();
        return () => {

        };
    }, [])

    return (

        <div style={{ backgroundColor: '#F5F5F5' }}>
            <CustomTab activeLink={"myprofile"} />

            {/* --------AccordianSection----------- */}

            <Container>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header
                            style={{
                                fontFamily: 'Inter',
                                fontWeight: '500',
                                fontSize: '15px'
                            }}>
                            <h6>Personal Details</h6></Accordion.Header>
                        <Accordion.Body>
                            {user && <Form noValidate validated={validated} onSubmit={fetchEditUsers}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name='name'
                                            placeholder="name"
                                            defaultValue={user.name}
                                            onChange={handleInputChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='form-input'>
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            required
                                            type="tel"
                                            name='number'
                                            placeholder="+91"
                                            defaultValue={user.mobile_number}
                                            onChange={handleInputChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <br />
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                        <Form.Label>Email </Form.Label>
                                        <Form.Control
                                            required
                                            type="email"
                                            name='email'
                                            placeholder="xxx@mail.com"
                                            defaultValue={user.email}
                                            onChange={handleInputChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" controlId="validationCustom04" className='form-input'>
                                        <Form.Label>Country</Form.Label>
                                        <Form.Select aria-label="Default select example"
                                            name='country' onChange={handleInputChange}>
                                            <option>Select Country</option>
                                            <option value="1">India</option>
                                            <option value="2">United State</option>
                                            <option value="3">Other</option>
                                        </Form.Select>
                                        <br />
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" controlId="validationCustom05">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="New Delhi"
                                            name='city'
                                            onChange={handleInputChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom06" className='form-input'>
                                        <Form.Label>Pincode</Form.Label>
                                        <Form.Control
                                            required
                                            type="tel"
                                            name='pincode'
                                            placeholder="110044"
                                            onChange={handleInputChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <br />
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom07">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name='address'
                                            placeholder="h-132 lal kuan new delhi"
                                            onChange={handleInputChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <br />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom08">
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control
                                            required
                                            type="date"
                                            name='birth'
                                            onChange={handleInputChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <br />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom09">
                                        <Form.Label>Pan Card Number</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name='panCard'
                                            placeholder="Enter Your Pan"
                                            onChange={handleInputChange}
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
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h6>Update Password</h6></Accordion.Header>
                        <Accordion.Body>
                            <Form noValidate validated={validated} onSubmit={handleChangePassword}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustom01" >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            required
                                            type="password"
                                            placeholder="Current Password"
                                            name="old_password"
                                            value={passwordData.old_password}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='form-input'>
                                        <Form.Label>New Password</Form.Label>
                                        <Form.Control
                                            required
                                            type="password"
                                            placeholder="New Password"
                                            name="new_password"
                                            value={passwordData.new_password}
                                            onChange={handleChange}
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
                                            name="confirm_Password"
                                            value={passwordData.confirmPassword}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <div className='d-flex justify-content-end  save-btn'>
                                        <Button type='submit'>Save Settings</Button>
                                    </div>
                                </Row>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <br />

                    <Accordion.Item eventKey="3">
                        <Accordion.Header><h6>KYC & Bank Details</h6></Accordion.Header>
                        <Accordion.Body>
                            {<Form noValidate validated={validated} onSubmit={isEditable ? editAccountDetails : postAccountDetails}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label>Bank Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            defaultValue={detail?.bank_name}
                                            name='bank_name'
                                            onChange={handleDocChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Label>Bank Account No.</Form.Label>
                                        <Form.Control
                                            required
                                            type="tel"
                                            defaultValue={detail?.bank_account_no}
                                            name='bank_account_no'
                                            onChange={handleDocChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <br />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Label>IFSC Code</Form.Label>
                                        <Form.Control
                                            required
                                            type='text'
                                            defaultValue={detail?.ifsc}
                                            name='ifsc'
                                            onChange={handleDocChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Label>Branch Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            defaultValue={detail?.branch}
                                            name='branch'
                                            onChange={handleDocChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <br />
                                    </Form.Group>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Upload Cancel Cheque</Form.Label>
                                        <Form.Control type="file" onChange={handleFileChange} />
                                        <span
                                            style={{ fontSize: '10px', fontWeight: '500', paddingLeft: '5px' }}>Please Upload max size of file is 2mb</span>
                                    </Form.Group>

                                    <div className='d-flex justify-content-end  save-btn'>
                                        <Button type='submit'>Save Settings</Button>
                                    </div>
                                </Row>
                            </Form>}
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

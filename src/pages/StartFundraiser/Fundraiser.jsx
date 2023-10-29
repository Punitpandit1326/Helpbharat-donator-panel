import './fund.css';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../../component/footer/Footer';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { donatorUrl } from '../../utils/url';
import { toast } from 'react-toastify';

const ChooseFund = () => {

    const [campaign, setCampaign] = useState({
        campaign_name: '',
        benefeciary_name: '',
        end_date: '',
        mobiile_number: '',
        relation_with_beneficiary_name: '',
        medical_condition: ''


    });
    const cookie = new Cookies();
    const tokenWeb = cookie.get('token_web');
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/fundraiser/createfund');
    };

    const fetchCampaignData = async (e) => {
        e.preventDefault();

        const toastID = toast.loading('Please wait...')

        const formData = new FormData();
        formData.append('campaign_name', campaign.campaign_name);
        formData.append('benefeciary_name', campaign.benefeciary_name);
        formData.append('end_date', campaign.end_date);

        const response = await fetch(`${donatorUrl}campaign`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${tokenWeb}`
            },
            body: formData
        })
        const data = await response.json();

        if (!data.success) {
            toast.update(toastID, {
                render: data.message.message,
                type: 'error',
                autoClose: 1500,
                isLoading: false
            })
            return
        }
        toast.update(toastID, {
            render: data.message.message,
            type: 'success',
            autoClose: 1500,
            isLoading: false
        })
        // console.log(data.data.docs, "data show");
        setCampaign(data.data);
    }

    useEffect(() => {
        fetchCampaignData()
        return () => toast.dismiss()
    }, [])

    const handleFormUpdate = (e, name) => {
        const { value } = e.target;
        setCampaign({ ...campaign, [name]: value });
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
                        <Form onSubmit={fetchCampaignData}>
                            <h6 className='text-success mt-5'>Enter Details</h6>
                            <p>If required, you can update the information later</p>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Mobile number of fundraiser</Form.Label>
                                <Form.Control type="tel"
                                    value={campaign.name} // Set the value here
                                    onChange={handleFormUpdate}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Patient's full name</Form.Label>
                                <Form.Control type="text"
                                    value={campaign.name}
                                    onChange={handleFormUpdate}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Relation</Form.Label>
                                <Form.Select onChange={handleFormUpdate}>
                                    <option value={campaign.relation_with_beneficiary_name}></option>
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
                                <Form.Control type="text"
                                    value={campaign.medical_condition}
                                    onChange={handleFormUpdate} />
                            </Form.Group>

                            <div className='form-section mb-3'>
                                <div>
                                    <label htmlFor="fundsRequired">Funds required</label>
                                    <br />
                                    <input id='fundsRequired' type="text" value={campaign.funds} onChange={handleFormUpdate} />
                                </div>
                                <br />
                                <div>
                                    <label >End date for fundraiser</label>
                                    <br />
                                    <input type="date" value={campaign.end_date} onChange={handleFormUpdate} />
                                </div>
                            </div>

                            <p className='text-dark'>Funds shall only be transferred to relevant Beneficiary bank account</p>
                            <button type='submit' onClick={handleNavigation}>Create</button>

                        </Form>

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
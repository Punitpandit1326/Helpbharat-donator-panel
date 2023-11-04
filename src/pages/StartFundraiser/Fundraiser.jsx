import './fund.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../../component/footer/Footer';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import { donatorUrl } from '../../utils/url';


const ChooseFund = () => {
    const [campaign, setCampaign] = useState({
        campaign_name: '',
        benefeciary_name: '',
        end_date: '',
        mobiile_number: '',
        relation_with_beneficiary_name: '',
        medical_condition: '',
        funds: '',
        category_id: ''
    });

    const cookie = new Cookies();
    const tokenWeb = cookie.get('token_web');
    const navigate = useNavigate();

    const fetchCampaignData = async (e) => {
        e.preventDefault();
        const toastID = toast.loading('Please wait...')

        const formData = new FormData();
        formData.append('campaign_name', campaign.campaign_name);
        formData.append('benefeciary_name', campaign.benefeciary_name);
        formData.append('end_date', campaign.end_date);
        formData.append('funds', campaign.funds)
        formData.append('medical_condition', campaign.medical_condition);
        formData.append('relation_with_beneficiary_name', campaign.relation_with_beneficiary_name);

        const response = await fetch(`${donatorUrl}campaign`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${tokenWeb}`
            },
            body: formData
        })
        const data = await response.json();

        console.log(data);

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
            render: data.message,
            type: 'success',
            autoClose: 1500,
            isLoading: false
        })

        navigate(`/fundraiser/createfund/${data.data.campaignResponse.slug}`);
        console.log(`/fundraiser/createfund/${data.data.campaignResponse.slug}`);
    }

    useEffect(() => {
        // fetchCampaignData()
        return () => toast.dismiss()
    }, [])

    const handleFormUpdate = (e) => {
        const { value, name } = e.target;
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
                        <Form onSubmit={(e) => fetchCampaignData(e)}>
                            <h6 className='text-success mt-5'>Enter Details</h6>
                            <p>If required, you can update the information later</p>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Campaign Name</Form.Label>
                                <Form.Control type="tel"
                                    defaultValue={campaign.campaign_name} // Set the value here
                                    onChange={handleFormUpdate}
                                    name='campaign_name'
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Mobile number of fundraiser</Form.Label>
                                <Form.Control type="tel"
                                    defaultValue={campaign.mobiile_number} // Set the value here
                                    onChange={handleFormUpdate}
                                    name='mobiile_number'
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Patient's full name</Form.Label>
                                <Form.Control type="text"
                                    name='benefeciary_name'
                                    defaultValue={campaign.benefeciary_benefeciary_name}
                                    onChange={handleFormUpdate}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Relation</Form.Label>
                                <Form.Select name='relation_with_beneficiary_name' onChange={handleFormUpdate}>
                                    <option defaultValue={campaign.relation_with_beneficiary_name}>Spouse</option>
                                    <option defaultValue={campaign.relation_with_beneficiary_name}>Father</option>
                                    <option defaultValue={campaign.relation_with_beneficiary_name}>Daughter</option>
                                    <option defaultValue={campaign.relation_with_beneficiary_name}>Other</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label name="category_id" onChange={handleFormUpdate}>Categories</Form.Label>
                                <Form.Select>
                                    <option defaultValue={campaign.categories}>other</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formMedical">
                                <Form.Label>Ailment/Medical condition*</Form.Label>
                                <Form.Control type="text"
                                    name='medical_condition'
                                    defaultValue={campaign.medical_condition}
                                    onChange={handleFormUpdate} />
                            </Form.Group>

                            <div className='form-section mb-3'>
                                <div>
                                    <label htmlFor="fundsRequired">Funds required</label>
                                    <br />
                                    <input id='fundsRequired' type="text" name='funds' value={campaign.funds} onChange={handleFormUpdate} />
                                </div>
                                <br />
                                <div>
                                    <Form.Group>
                                        <Form.Label>End Date:</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="end_date"
                                            value={campaign.end_date}
                                            onChange={handleFormUpdate}
                                        />
                                    </Form.Group>


                                </div>
                            </div>

                            <p className='text-dark'>Funds shall only be transferred to relevant Beneficiary bank account</p>
                            <button type='submit'>Create</button>
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
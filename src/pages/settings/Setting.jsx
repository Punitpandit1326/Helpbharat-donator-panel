import React, { useState } from 'react';
import './Setting.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaPencilAlt, } from 'react-icons/fa';
import Footer from '../../component/footer/Footer';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { donatorUrl } from '../../utils/url';
import NavSection from '../../component/NavSection/NavSection';
import Cookies from 'universal-cookie';
import { AiOutlineCloud } from 'react-icons/ai';
import { toast } from 'react-toastify';


const Setting = () => {
    const [deleted, setDeleted] = useState(false);
    const { _id } = useParams();
    const navigate = useNavigate()
    const cookie = new Cookies();
    const tokenWeb = cookie.get('token_web');

    const deleteCampaign = async () => {
        const toastID = toast.loading('please Wait')
        const response = await fetch(`${donatorUrl}delete-Campaign/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${tokenWeb}`

            }
        })
        if (response.status === 204) {
            toast.update(toastID, {
                render: response.message.message,
                type: 'error',
                autoClose: 1500,
                isLoading: false
            })
            return
        }
        toast.update(toastID, {
            render: response.message,
            type: 'success',
            autoClose: 1500,
            isLoading: false
        })
        setDeleted(true);
        navigate('/myfundraiser')
    }

    return (
        <>
            {/* -------TopHeaderSection---------- */}

            <NavSection />

            {/* -----------SettingHeroSection-------------- */}

            <Container>
                <div className='settingSection'>
                    <h3>Setting</h3>
                    <h4>You can change your account settings for the following options</h4>
                    <div className="curreny-section">
                        <p>Currency</p>

                        <select name="cars" id="dropoption2">
                            <option value="volvo">INR</option>
                            <option value="saab">USD</option>
                            <option value="opel">EUR</option>
                            <option value="audi">YEN</option>
                        </select>
                    </div>
                </div>

                {/* ---------EndSection--------- */}

                <Row>
                    <Form>
                        <Form.Group className="mt-3" controlId="formBasicDesc">
                            <h6>Post an Update</h6>
                            <Form.Control type="text"
                                as="textarea"
                                cols={10}
                                rows={5}
                                name="description"
                            />
                            <div className='post_btn'>

                                <button>Post</button>
                            </div>

                        </Form.Group>

                        <Form.Group className="mt-3 upload" controlId="formBasicImage">
                            <h6>Upload Photos</h6>
                            <AiOutlineCloud size={26} className='text-success' />
                            <p>Upload Photos In Jpeg And Png Only</p>
                            <input
                                type="file"
                                // ref={photoInputRef}
                                style={{ display: 'none' }}
                                accept=".jpeg, .jpg, .png"
                                name="images"
                            />
                            {/* <div>
                                <img
                                    src={''}
                                    alt="Thumb"
                                    // ref={imageRef}
                                    width='100px'
                                    height='100px'
                                    onError={({ currentTarget }) => {
                                        currentTarget.src = "/image/placeholder.png";
                                    }}
                                />
                            </div> */}
                        </Form.Group>
                        <div className='post_btn'>

                            <button>Upload</button>
                        </div>

                    </Form>

                </Row>

                <div className="endSection">
                    <p>Close this fundraiser</p>
                    <span>You can always reopen the fundraiser once it is closed</span>
                    <button onClick={deleteCampaign}>Close this fundraiser</button>
                </div>
            </Container>

            {/* --------FooterSection----------- */}

            <div>
                <Footer />
            </div>
        </>
    )
}

export default Setting;

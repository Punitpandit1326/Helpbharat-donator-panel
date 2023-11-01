import React, { useState } from 'react';
import './Setting.css';
import { Link, useParams } from 'react-router-dom';
import { FaPencilAlt, } from 'react-icons/fa';
import Footer from '../../component/footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { donatorUrl } from '../../utils/url';
import NavSection from '../../component/NavSection/NavSection';
import Cookies from 'universal-cookie';

const Setting = () => {
    const [deleted, setDeleted] = useState(false);
    const { _id } = useParams();

    const cookie = new Cookies();
    const tokenWeb = cookie.get('token_web');

    const deleteCampaign = async () => {
        try {
            const response = await fetch(`${donatorUrl}delete-Campaign/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenWeb}`

                }
            })
            if (response.status === 204) {
                // 204 means the resource was successfully deleted
                setDeleted(true);
            } else {
                // Handle other status codes, e.g., resource not found (404) or unauthorized (401).
                console.error('Failed to delete campaign');
            }
        } catch (error) {
            console.error('Error:', error);
        }
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
                    <Col className='mt-3'>
                        <h6 >  Post an Update</h6>
                        <div className='update_section'></div>
                    </Col>
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

import React from 'react';
import './Setting.css';
import { Link } from 'react-router-dom';
import { FaPencilAlt, } from 'react-icons/fa';
import Footer from '../../component/footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import NavSection from '../../component/NavSection/NavSection';

const Setting = () => {
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

                <div className="endSection">
                    <p>Close this fundraiser</p>
                    <span>You can always reopen the fundraiser once it is closed</span>
                    <button>Close this fundraiser</button>
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

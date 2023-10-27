import React, { useEffect, useRef, useState } from 'react';
import './EditDonationTab.css';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FaPen, FaCalendarAlt } from "react-icons/fa";
import Footer from '../../component/footer/Footer';
import { donatorUrl } from '../../utils/url';
import { useParams } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditDonationTab = () => {
    const [coverPhoto, setCoverPhoto] = useState("");
    const [document, setDocument] = useState("");
    const [error, setError] = useState(null);
    const [donationTab, setDonationTab] = useState({});
    const [editCampaign, setEditCampaign] = useState({});
    const [supporters, setSupporters] = useState(null)
    const [activeImage, setActiveImage] = useState("/Image/Img1.png");
    const [activeDoc, setActiveDoc] = useState("/Image/doc1.png");
    const [activeTab, setActiveTab] = useState("About");
    const [donarTab, setDonarTab] = useState(true);
    const [isFade, setIsFade] = useState(true);
    const [currentValue, setCurrentValue] = useState(0);
    const documtToRef = useRef();
    const aboutToRef = useRef();
    const updatesToRef = useRef();
    const commentToRef = useRef();
    const { slug } = useParams();
    const cookie = new Cookies();
    const tokenWeb = cookie.get('token_web');
    const [detail, setDetail] = useState({
        name: '',
        description: '',
        goal: '',
    })

    const updateCampaign = async () => {
        const toastId = toast.loading('Please wait...');
        try {
            const response = await fetch(`${donatorUrl}campaign?slug=${slug}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${tokenWeb}`
                },
                body: JSON.stringify(detail)
            });
            const data = await response.json();

            if (!data.success) {
                setError(data.message)
                toast.update(toastId, data.response.message)
            }
            console.log(response.data, "error2");
            toast.dismiss();
        }
        catch (error) {
            setError(error.message || 'An error occurred');
            toast.dismiss(); // Hide the loading toast
            toast.error(error.message, { autoClose: 2000 });
        }
    }

    const handleInputChange = (event, name) => {
        setDetail({ ...detail, [event.target.name]: event.target.value });
    };


    const handleToggleImage = (src) => {
        setIsFade(false)
        setActiveImage(src)

        setTimeout(() => {
            setIsFade(true)
        }, [500])
    }

    // const handleButtonClick = (value) => {
    //     setCurrentValue(value);
    // };

    const fetchDonationTab = async () => {
        try {
            const response = await fetch(`${donatorUrl}get-Campaign-By-Slug?slug=${slug}`, {
                headers: {
                    'Content-type': 'application/jsonl',
                    'Authorization': `Bearer ${tokenWeb}`
                }
            })
            const data = await response.json()
            if (!data.success) {
                setError(data.message)
                return
            }
            setSupporters(data.data)
            setDonationTab(data.data.response)

            setDetail(() => {
                const { name, description, goal } = data.data.response
                return {
                    name,
                    description,
                    goal
                }
            })
            setCoverPhoto(data.data.response.images[0].imageUrl)
            setDocument(data.data.response.documents[0].imageUrl)
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchDonationTab()
        return () => { }
    }, [])



    return (
        <div>
            <div className="bottomNav">
                <p>Page is curently on Edit Mode <a href="#">Cancel</a>
                    <a href="#" style={{ color: '#fff', border: '2px solid #000', backgroundColor: '#000', padding: '2px 25px' }}>Finish</a></p>

            </div>

            <Container className='DonationCont2'>
                <FaPen className='pencilIcon' />
                <input type="text" placeholder='' name='name' onInput={handleInputChange} onChange={updateCampaign} value={detail?.name} />
                <Row>

                    {/* --------leftSection---------- */}

                    <Col md={7} className='DonationLeft DonationLeft2'>
                        <img className={`${isFade ? 'active' : ''} main-image`} src={coverPhoto} alt="Image" />

                        <div className='Imagesleft'>
                            {
                                donationTab?.images?.map((item, index) => (<img
                                    key={index}
                                    style={{ width: '80px' }}
                                    src={item.imageUrl}
                                    alt="Image"
                                    onClick={() => handleToggleImage(item.imageUrl)} />))
                            }
                        </div>

                        <div className="Sectionleftt">
                            <li className={`${activeTab === 'About' ? 'active-tab' : ''}`} onClick={() => aboutToRef.current.scrollIntoView
                                ()}> About</li>
                            <li className={`${activeTab === 'Documents' ? 'active-tab' : ''}`} onClick={() => documtToRef.current.scrollIntoView()}>Documents</li>
                            <li className={`${activeTab === 'Updates' ? 'active-tab' : ''}`} onClick={() => updatesToRef.current.scrollIntoView
                                ()}>Updates</li>
                            <li className={`${activeTab === 'Comments' ? 'active-tab' : ''}`} onClick={() => commentToRef.current.scrollIntoView
                                ()}>Comments</li>
                        </div>
                        <hr className='donation-underline bg-dark' />

                        <div className="paraLeft" ref={aboutToRef}>
                            <textarea onInput={handleInputChange} onChange={updateCampaign} name='description' rows={4} type="text" placeholder='Hello You are active now'>
                                {detail.description}
                            </textarea>

                            <img src="/Image/Img5.png" alt="Image" />
                        </div>

                        <div className="paraLeft d-head mt-5" ref={updatesToRef}>
                            <h5> Updates</h5>
                            <p>Check Your Updates Now</p>
                        </div>

                        <div className="paraLeft d-head mt-5" ref={commentToRef}>
                            <h5> Comment</h5>
                            <p>Hello World</p>
                        </div>

                    </Col>

                    {/* --------RightSection---------- */}

                    <Col md={5}>
                        <div className='DonationRight2' >
                            <h1>Donate Now</h1>

                            <div className='PriceDeatailsLeft'>
                                <p>{donationTab.amount_raised} <span>Raised</span> </p>
                                <input type="text" id='fund-input' value={detail.goal} name='goal' onInput={handleInputChange} onChange={updateCampaign} />
                            </div>
                            <br />

                            <ProgressBar variant="success" style={{ height: '10px' }}
                                now={Number(donationTab.amount_raised) / Number(donationTab.goal) * 100} />

                            <div className='PriceDeatailsLeft'>
                                <p>{supporters?.supporters} Supporters</p>
                                <p className='d-lefts'><FaCalendarAlt /> 60 Days Left</p>
                            </div>

                            <div className='topdonor2'>
                                <p className={`${donarTab && 'active'}`} onClick={() => setDonarTab(true)}>Top Donors</p>
                                <p className={`${!donarTab && 'active'}`} onClick={() => setDonarTab(false)}>Recent Donors</p>

                            </div>
                            <hr style={{ margin: '0', width: '100%' }} />

                            {donarTab && <div className="donorInfo-main p-0 mt-3">
                                <div>
                                    <div className="donarInfo">
                                        <FontAwesomeIcon icon={faUserCircle} size="2x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa" }} />
                                        <p>Someone donated INR <strong>500</strong> </p>

                                    </div>
                                    <p className='donoted-inr'>8 nov 2022</p>

                                </div>


                            </div>}

                            {!donarTab && <div className="Recent-main-section">
                                <div>
                                    <div className="donarInfo">
                                        <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa" }} />
                                        <p>Someone donated INR <strong>500</strong> </p>

                                    </div>
                                    <p className='donoted-inr'>8 nov 2022</p>

                                </div>
                            </div>}


                        </div>
                        <div>
                        </div>


                        <div className='Documentright-main2'>
                            <div className="product-price">
                                <div className="product-price-child1" style={{
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    padding: '10px, 0'
                                }}>
                                    Tax Deduction
                                    <div className="i-btn" style={{ marginLeft: '10px' }}>i
                                        <div className="hover-box">
                                            <strong>Information</strong>
                                            <p>Actual price may be differ based on multiple factor Click to know more</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="btn donate-btn another-btn border-0">
                                <button>80 G</button>
                                <button>501(c)(3)</button>
                                <button>Gift Aid</button>
                            </div>

                            <div className='icon-main-cont'>
                                <h2>Share This Fundraiser</h2>

                                <div className="social-media-icon">
                                    <i className="social-icon fab fa-facebook-f"></i>
                                    <i className="social-icon fab fa-twitter"></i>
                                    <i className="social-icon fab fa-instagram"></i>
                                    <i className="social-icon fab fa-whatsapp"></i>
                                </div>
                            </div>

                            <div className="supportfund supportfund2">
                                <h2>Supporting Fundraiser</h2>
                                <div className='fontAwesomeSec'>
                                    <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa", marginTop: '10px', marginLeft: 'px' }} />
                                    <p>I am raising funds for the education of a 3 year old girl. There's no family support. Your small donation can make the little girl's future better.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>


            {/* ---------DocumentSection--------     */}

            <Container className='DocumentSection'>
                <Row>
                    <div className="d-head">
                        <h5>Document</h5>
                    </div>
                    <Col md={7} className='DocumentLeft' >
                        <div ref={documtToRef}>
                            <div style={{ backgroundColor: '#EBEBEB' }}>
                                <img className='document-image-section' src={document} alt="Image" />
                            </div>

                            <div className='Imagesleft'>
                                {
                                    donationTab?.documents?.map((item, index) => (<img
                                        key={index}
                                        style={{ width: '80px' }}
                                        src={item.imageUrl}
                                        alt="Image"
                                        onClick={() => setActiveDoc(item.imageUrl)} />))
                                }
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>

            {/* --------FooterSection----------- */}

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default EditDonationTab;

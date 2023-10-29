import React, { useEffect, useRef, useState } from 'react';
import './DonationTab.css'
import { Link, useParams } from 'react-router-dom';
import Footer from '../../component/footer/Footer';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { donatorUrl, url } from '../../utils/url';
import Cookies from 'universal-cookie';
import moment from 'moment/moment';
import { toast } from 'react-toastify';


const DonationTab = () => {
    const { slug } = useParams();
    const [donationTab, setDonationTab] = useState({});
    const [coverPhoto, setCoverPhoto] = useState("");
    const [tabDonor, setTabDonor] = useState(null);
    const [recentDonor, setRecentDonor] = useState(null);
    const [error, setError] = useState(null)
    const [documnetPhoto, setDocumnetPhoto] = useState("");
    const [endDate, setEndDate] = useState("");
    const [currentValue, setCurrentValue] = useState(0);
    const [days, setDays] = useState("");
    const [activeImage, setActiveImage] = useState("/Image/Img1.png")
    const [activeDoc, setActiveDoc] = useState("/Image/doc1.png")
    const [activeTab, setActiveTab] = useState("About")
    const [donarTab, setDonarTab] = useState(true)
    const [isFade, setIsFade] = useState(true);
    const aboutToRef = useRef();
    const docToRef = useRef();
    const updatesToRef = useRef();
    const commentToRef = useRef();


    const cookie = new Cookies();
    const tokenWeb = cookie.get('token_web');


    const fetchTabDonor = async (_id) => {
        try {
            const response = await fetch(`${url}top-Donors?fund_raiser_id=${_id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenWeb}`
                }
            }

            )
            const data = await response.json();

            if (!data.success) {
                setError(data.message)
                return
            }
            setTabDonor(data.data)
        } catch (error) {
            setError(error.message)
        }
    }

    const fetchRecentDonor = async (_id) => {
        try {
            const response = await fetch(`${url}recent-Donors?fund_raiser_id=${_id}`, {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${tokenWeb}`
                }
            }

            )
            const data = await response.json();

            if (!data.success) {
                setError(data.message)
                return
            }
            setRecentDonor(data.data)
        } catch (error) {
            setError(error.message)
        }
    }

    const fetchDonationTab = async () => {
        const toastID = toast.loading('Please wait...')
        const response = await fetch(`${donatorUrl}get-Campaign-By-Slug?slug=${slug}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${tokenWeb}`
            }
        })
        const data = await response.json()

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
        setDocumnetPhoto(data.data.response.documents[0].imageUrl)
        setCoverPhoto(data.data.response.images[0].imageUrl)
        setDonationTab(data.data.response)
        setEndDate(data.data.response.end_date)
        setDays(moment(data.data.response.end_date).diff(new Date(), 'days'))
        fetchTabDonor(data.data.response._id)
        fetchRecentDonor(data.data.response._id)
    }

    useEffect(() => {
        fetchDonationTab();
        return () => toast.dismiss()
    }, [])


    const handleToggleImage = (src) => {
        setIsFade(false)
        setActiveImage(src)

        setTimeout(() => {
            setIsFade(true)
        }, [300])
    };

    const handleButtonClick = (value) => {
        setCurrentValue(value);
    };


    return (
        <>
            <div>
                <Container className='DonationCont'>
                    <h1>{donationTab?.name}</h1>
                    <button className='border-0'><Link to={`/editdonationtab/${slug}`}><i className="fa fa-pencil pecilIcon"></i></Link></button>
                    <Row key={donationTab?.id}>

                        {/* --------leftSection---------- */}

                        <Col md={7} className='DonationLeft'>
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

                            <div className='Sectionleft_main'>
                                <div className="Sectionleftt">
                                    <li className={activeTab === "About" && 'active'} onClick={() => aboutToRef.current.scrollIntoView()}> About</li>
                                    <li className={activeTab === "Documents" && 'active'} onClick={() => docToRef.current.scrollIntoView()}>Documents</li>
                                    <li className={activeTab === "Updates" && 'active'} onClick={() => updatesToRef.current.scrollIntoView()} >Updates</li>
                                    <li className={activeTab === "Comments" && 'active'} onClick={() => commentToRef.current.scrollIntoView()}>Comments</li>
                                </div>
                            </div>
                            <hr className='donation-underline' />
                            <div className="paraLeft mb-5" ref={aboutToRef}>
                                <p>About Section</p>
                                <img src="/Image/Img5.png" alt="Image" />
                            </div>

                            <div className="paraLeft d-head mb-5" ref={updatesToRef}>
                                <h5>Updates</h5>

                                <p>Hello World</p>
                            </div>

                            {donationTab?.comments?.map((item, index) => (<div key={index} className="paraLeft d-head mt-2" ref={commentToRef}>
                                <h5 className='m-0'>Comment</h5>
                                <p>{item.text}</p>
                                {/* <span>{item.}</span> */}
                            </div>
                            ))
                            }

                        </Col>

                        {/* --------RightSection---------- */}

                        <Col md={5}>
                            <div className='DonationRight_Main'>
                                <h2>Donate Now</h2>
                                <div className='BlackBox-main'>
                                    <div className='BlackBox'><h4>G</h4></div>
                                    <p className='fraiserpara'>Fundraiser by Give</p>
                                </div>

                                <div className='PriceDeatailsLeft'>
                                    <p>{donationTab.amount_raised} <span>Raised</span> </p>
                                    <p>{donationTab.goal} </p>
                                </div>

                                <ProgressBar variant="success" style={{ height: '10px' }}
                                    now={Number(donationTab.amount_raised) / Number(donationTab.goal) * 100} />

                                <div className='donation-price-paragraph'>
                                    <p>{donationTab.supporters}</p>
                                    {endDate ? (
                                        <p>{days < 0 ? 0 : days} Days </p>
                                    ) : (
                                        <p>Loading...</p>
                                    )}
                                </div>

                                <div className='topdonor tr-donor'>
                                    <p className={`${donarTab && 'active'}`} onClick={() => setDonarTab(true)}>Top Donors</p>
                                    <p className={`${!donarTab && 'active'}`} onClick={() => setDonarTab(false)}>Recent Donors</p>

                                </div>

                                <hr className='dt-line' />

                                {donarTab && <div className="donorInfo-main p-0 mt-3">

                                    {tabDonor?.map((item, index) => (<div key={index}>
                                        <div className="donarInfo">
                                            <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa", }} />
                                            <p>
                                                {item.is_annonymous ? 'Someone' : item.user_id.name} donated INR {item.amount} <br />
                                            </p>
                                        </div>
                                        <p className='donoted-inr'>{moment(item.createdAt).format("DD MMM  YYYY")}</p>
                                    </div>
                                    )
                                    )}
                                </div>}

                                {!donarTab && (<div className='recent-main'>

                                    {recentDonor?.map((item, index) => (<div key={index}>
                                        <div className="donarInfo">
                                            <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa", }} />
                                            <p>
                                                {item.is_annonymous ? 'Someone' : item.user_id.name} donated INR {item.amount} <br />
                                            </p>
                                        </div>
                                        <p className='donoted-inr'>{moment(item.createdAt).format("DD MMM  YYYY")}</p>
                                    </div>))}


                                </div>
                                )}

                            </div>

                            <div className='documentright-main'>
                                <div className="product-price">
                                    <div className="product-price-child1" style={{
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        padding: '10px 0'
                                    }}>
                                        Tax Deduction
                                        <div className="i-btn">i
                                            <div className="hover-box">
                                                <strong>Information</strong>
                                                <p>Actual price may be differ based on multiple factor Click to know more</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="value-btn border-0">
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

                                <div className="supportfund">
                                    <h2>Supporting Fundraiser</h2>
                                    <div className='fontAwesomeSec'>
                                        <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa", marginTop: '10px', marginLeft: 'px' }} />
                                        <p>I am raising funds for the education of a 3 year old girl. There's no family support. Your small donation can make the little girl's future better.</p>
                                    </div>

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

                <Container className='DocumentSection' >
                    <Row>
                        <Col md={7} className='DocumentLeft' >
                            <div ref={docToRef}>
                                <div className="d-head">
                                    <h5>Document</h5>
                                </div>

                                <div style={{ backgroundColor: '#EBEBEB' }}>
                                    <img className='document-image-section' src={documnetPhoto} alt="Image" />
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

            </div>

            {/* --------FooterSection----------- */}

            <div>
                <Footer />
            </div>
        </>
    )
}

export default DonationTab

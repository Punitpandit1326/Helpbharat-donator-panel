import React, { useEffect, useRef, useState } from 'react';
import './EditDonationTab.css';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FaPen, FaCalendarAlt } from "react-icons/fa";
import Footer from '../../component/footer/Footer';
import { donatorUrl, url } from '../../utils/url';
import { useParams } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import { AiOutlineDownload } from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const EditDonationTab = () => {
    const [tabDonor, setTabDonor] = useState(null);
    const [recentDonor, setRecentDonor] = useState(null);
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
    const docToRef = useRef();
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

        const formdata = new FormData();

        formdata.append('name', detail.name);
        formdata.append('description', detail.description);
        formdata.append('goal', detail.goal);
        try {
            const response = await fetch(`${donatorUrl}campaign/${slug}`, {
                method: 'PATCH',
                headers: {

                    Authorization: `Bearer ${tokenWeb}`
                },
                body: formdata
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

    //    ---------topDonor----Api------------
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

    // ---------RecentDonor----Api------------

    const fetchRecentDonor = async (_id) => {
        try {
            const response = await fetch(`${url}recent-Donors?fund_raiser_id=${_id}`, {
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
            setRecentDonor(data.data)
        } catch (error) {
            setError(error.message)
        }
    }

    const fetchDonationTab = async () => {
        try {
            const response = await fetch(`${donatorUrl}get-Campaign-By-Slug?slug=${slug}`, {
                headers: {
                    'Content-type': 'application/jsonl',
                    Authorization: `Bearer ${tokenWeb}`
                }
            })
            const data = await response.json()
            if (!data.success) {
                setError(data.message)
                return
            }
            setSupporters(data.data)
            setDonationTab(data.data.response)
            fetchTabDonor(data.data.response._id)
            fetchRecentDonor(data.data.response._id)

            setDetail(() => {
                const { name, description, goal } = data.data.response
                return {
                    name,
                    description,
                    goal
                }
            })
            setCoverPhoto(data.data.response.cover_photo[0] ? data.data.response.cover_photo[0].imageUrl : null)

        }
        catch (error) {
            console.error(error)
        }
    }

    // ---------------Delete-Post----------

    const deletePost = async (id) => {

        const toastID = toast.loading('please wait')

        const deletePost = {
            delete_logs: [id]
        }

        const response = await fetch(`${donatorUrl}post-Update-Campaign/${donationTab._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${tokenWeb}`
            },
            body: JSON.stringify(deletePost)
        });
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

        setDonationTab((prev) => {
            return { ...prev, logs: data.data.response.logs }
        })

        toast.update(toastID, {
            render: data.message,
            type: 'success',
            autoClose: 1500,
            isLoading: false
        })

    }


    useEffect(() => {
        fetchDonationTab()
        return () => { }
    }, [])

    // --------For_date--------------

    const createdAt = "2023-10-25T05:48:09.437Z";
    const formattedDate = moment(createdAt).format("DD/MM/YYYY");

    // console.log(formattedDate);

    return (
        <div>
            <div className="bottomNav">
                <p>Page is curently on Edit Mode <a href="#">Cancel</a>
                    <a href="#" style={{ color: '#fff', border: '2px solid #000', backgroundColor: '#000', padding: '2px 25px' }}>Finish</a></p>

            </div>

            <Container className='DonationCont2'>
                <FaPen className='pencilIcon' />

                <input type="text" placeholder='' name='name' onInput={handleInputChange} onBlur={updateCampaign} value={detail?.name} />
                <Row>

                    {/* --------leftSection---------- */}

                    <Col md={7} className='DonationLeft DonationLeft2'>
                        <img className={`${isFade ? 'active' : ''} main_image`} src={coverPhoto} alt="Image" onError={({ currentTarget }) => {
                            currentTarget.src = "/image/placeholder.png";
                        }} />

                        <div className='Imagesleft'>

                            <Swiper
                                spaceBetween={0}
                                slidesPerView={4}
                                autoplay={{
                                    delay: 1000,
                                }}
                            >
                                {donationTab?.images?.map((item, index) => (
                                    <SwiperSlide style={{ width: '100px' }} key={index}>
                                        <img
                                            style={{ width: '80px' }}
                                            src={item.imageUrl}
                                            alt="Image"
                                            onClick={() => handleToggleImage(item.imageUrl)}
                                            onError={({ currentTarget }) => {
                                                currentTarget.src = "/image/placeholder.png";
                                            }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className="Sectionleftt">
                            <li className={`${activeTab === 'About' ? 'active-tab' : ''} `} onClick={() => aboutToRef.current.scrollIntoView
                                ()}> About</li>
                            <li className={`${activeTab === 'Documents' ? 'active-tab' : ''} `} onClick={() => docToRef.current.scrollIntoView()}>Documents</li>
                            <li className={`${activeTab === 'Updates' ? 'active-tab' : ''} `} onClick={() => updatesToRef.current.scrollIntoView
                                ()}>Updates</li>
                            <li className={`${activeTab === 'Comments' ? 'active-tab' : ''} `} onClick={() => commentToRef.current.scrollIntoView
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
                            {
                                donationTab?.logs?.map((item, index) => (<div key={index}>
                                    <span>Date: {formattedDate}</span>
                                    <div className='d-flex justify-content-between'>
                                        <p>{item.text}</p>
                                        <img className='me-4' onClick={() => deletePost(item._id)} src="/Image/trash.png" alt="#" style={{ width: '15px', height: '15px', marginBottom: '20px' }} />
                                    </div>
                                </div>))
                            }
                        </div>

                        <div className="paraLeft d-head mt-5" ref={commentToRef}>
                            <h5> Comment</h5>
                            {
                                donationTab?.comments?.map((item, index) => (<div key={index}>
                                    <span>Date: {formattedDate}</span>
                                    <p>{item.text}</p>
                                </div>))

                            }
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
                                <p className={`${donarTab && 'active'} `} onClick={() => setDonarTab(true)}>Top Donors</p>
                                <p className={`${!donarTab && 'active'} `} onClick={() => setDonarTab(false)}>Recent Donors</p>

                            </div>
                            <hr style={{ margin: '0', width: '100%' }} />

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

            <Container className='DocumentSection' >
                <Row>
                    <Col md={7} className='DocumentLeft' >
                        <div ref={docToRef}>
                            <div className="d-head">
                                <h5>Documents</h5>
                            </div>

                            <div>
                                {
                                    donationTab?.documents?.map((item, index) => (
                                        <div key={index} className='document-preview'>
                                            <AiOutlineDownload size={22} />
                                            <a href={item.imageUrl} target="_blank" rel="noopener noreferrer">
                                                <span>Download</span>
                                            </a>
                                        </div>

                                    ))}
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

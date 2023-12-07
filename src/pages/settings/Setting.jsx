import React, { useEffect, useRef, useState } from 'react';
import './Setting.css';
import { Link, json, useNavigate, useParams } from 'react-router-dom';
import Footer from '../../component/footer/Footer';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { donatorUrl } from '../../utils/url';
import NavSection from '../../component/NavSection/NavSection';
import Cookies from 'universal-cookie';
import { AiOutlineCloud, AiOutlineCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';


const Setting = () => {
    const imageRef = useRef();
    const photoInputRef = useRef(null);
    const [deleted, setDeleted] = useState(false);
    const { _id, slug } = useParams();
    const navigate = useNavigate()
    const [postUpdate, setPostUpdate] = useState({
        text: ''
    })
    const [uploadImage, setUploadImage] = useState(null)

    const [error, setError] = useState(null)
    const [images, setImages] = useState([]);

    const cookie = new Cookies();
    const tokenWeb = cookie.get('token_web');


    // ------------Patch_update-Campaign--------------

    const fetchApi = async () => {
        const toastID = toast.loading('Please wait..');
        const response = await fetch(`${donatorUrl}get-Campaign-By-Slug?slug=${slug}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${tokenWeb}`
            },
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

        setImages(data.data.response.images);

        toast.update(toastID, {
            render: data.message.message,
            type: 'success',
            autoClose: 1500,
            isLoading: false
        })

    }

    const updatePost = async (e) => {

        e.preventDefault();
        const toastID = toast.loading('please wait')

        const payload = {
            logs: [
                postUpdate
            ],
        }

        const response = await fetch(`${donatorUrl}post-Update-Campaign/${slug}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${tokenWeb}`
            },
            body: JSON.stringify(payload)
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

        toast.update(toastID, {
            render: data.message.message,
            type: 'success',
            autoClose: 1500,
            isLoading: false
        })

    }

    const handleChange = (e) => {
        setPostUpdate({ ...postUpdate, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        fetchApi();
        return () => toast.dismiss();
    }, []);

    // ------------------------------update-image-api------------------

    const uploadData = async (e) => {
        e.preventDefault();

        if (uploadImage) {
            const formData = new FormData();
            formData.append('images[]', uploadImage);

            const toastID = toast.loading('Please Wait for Image');


            const response = await fetch(`${donatorUrl}campaign/${slug}`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${tokenWeb}`,
                },
                body: formData,
            });

            const data = await response.json();

            if (!data.success) {
                toast.update(toastID, {
                    render: data.message,
                    type: 'error',
                    autoClose: 1500,
                    isLoading: false,
                });
                return
            }
            toast.update(toastID, {
                render: data.message,
                type: 'success',
                autoClose: 1500,
                isLoading: false,
            });

            fetchApi()

        }
    };

    const deleteImage = async (id) => {
        const formData = new FormData();
        formData.append('delete_images[]', id);
        try {
            const response = await fetch(`${donatorUrl}campaign/${slug}`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${tokenWeb}`,
                },
                body: formData,
            });

            const data = await response.json();
            if (!data.success) {
                setError(data.message);
            }
            fetchApi();

        } catch (error) {
            setError(error.message)

        };
    }


    const handlePhotoClick = (e) => {
        photoInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setUploadImage(file);
    };


    // -----------Delete-Api------------

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
                    <Form onSubmit={updatePost}>
                        <Form.Group className="mt-3" controlId="formBasicDesc">
                            <h6>Post an Update</h6>
                            <Form.Control type="text"
                                as="textarea"
                                cols={10}
                                rows={5}
                                name="text"
                                value={postUpdate.text}
                                onChange={handleChange}
                            />
                            <div className='post_btn'>

                                <button>Post</button>
                            </div>

                        </Form.Group>
                    </Form>

                    <Form onSubmit={uploadData}>

                        <Form.Group className="mt-3 upload" controlId="formBasicImage" onClick={handlePhotoClick}>
                            <h6>Upload Photos</h6>
                            <AiOutlineCloud size={26} className='text-success' />
                            <p>Upload Photos In Jpeg And Png Only</p>
                            <input
                                type="file"
                                ref={photoInputRef}
                                style={{ display: 'none' }}
                                accept=".jpeg, .jpg, .png"
                                name='uploadImages'
                                onChange={handleFileChange}
                            />
                        </Form.Group>

                        <div className='img_section'>
                            <div className='img-hero-section d-flex gap-2'>
                                {images.map((item, index) => {
                                    return (<div className='image-preview-container' key={index}>
                                        <img src={item.imageUrl} alt="" onError={({ currentTarget }) => {
                                            currentTarget.src = "/image/placeholder.png";
                                        }} />
                                        <AiOutlineCloseCircle onClick={() => deleteImage(item._id)} className='icon' /></div>)
                                }
                                )}
                            </div>
                        </div>

                        <div className='post_btn'>

                            <button type='submit'>Upload</button>
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

import React, { useRef, useState } from 'react';
import './createFund.css';
import Footer from '../../../component/footer/Footer';
import { AiOutlineCloud } from "react-icons/ai";
import { Col, Container, Form, Row } from 'react-bootstrap';
import { donatorUrl } from '../../../utils/url';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';


const CreateFund = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate()
    const photoInputRef = useRef(null);
    const imageRef = useRef();
    const docRef = useRef();
    const documentInputRef = useRef(null);
    const { slug } = useParams();
    const [uploadData, setUploadData] = useState({
        description: '',
        images: '',
        docs: '',
    })

    const cookie = new Cookies();
    const tokenWeb = cookie.get('token_web')

    const handlePhotoClick = (e) => {
        photoInputRef.current.click();
    };

    const handleDocumentClick = () => {
        documentInputRef.current.click();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('description', uploadData.description);
        formData.append('images[]', uploadData.images);
        formData.append('documents[]', uploadData.docs);

        const toastID = toast.loading('please Wait...')

        const response = await fetch(`${donatorUrl}campaign/${slug}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${tokenWeb}`
            },
            body: formData,
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
            render: data.message,
            type: 'success',
            autoClose: 1500,
            isLoading: false
        })
        navigate('/myfundraiser')
    };

    const handleFileChange = (event) => {
        const { name, files, value } = event.target;

        if (files) {
            if (name === 'images') {
                const fileURL = URL.createObjectURL(files[0]);
                if (imageRef.current) {
                    imageRef.current.src = fileURL;
                }
                setSelectedImage(fileURL);
            }
            setUploadData({
                ...uploadData,
                [name]: files[0],
            });

            if (name === 'docs') {
                const fileURL = URL.createObjectURL(files[0]);
                docRef.current.href = fileURL;
            }
            setUploadData({
                ...uploadData,
                [name]: files[0],
            });
        }
        else {
            setUploadData({
                ...uploadData,
                [name]: value,
            });
        }
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
                        <Form onSubmit={handleSubmit}>
                            <h6 className='text-success mt-5'>Description</h6>
                            <p>If required, you can update the information later</p>
                            <Form.Group className="mb-3" controlId="formBasicDesc">
                                <Form.Control type="text"
                                    as="textarea"
                                    cols={10}
                                    rows={5}
                                    name="description"
                                    onChange={handleFileChange}
                                />
                            </Form.Group>


                            <h6 className='text-success mt-5'>Upload Photos </h6>
                            <p>If required, you can update the information later</p>
                            <Form.Group className="mb-2 upload" controlId="formBasicImage" onClick={handlePhotoClick}>
                                {selectedImage ? (
                                    <img
                                        src={selectedImage}
                                        alt="Thumb"
                                        ref={imageRef}
                                        width='100px'
                                        height='100px'
                                    />
                                ) : (
                                    <>
                                        <AiOutlineCloud size={26} className='text-success' />
                                        <p>Upload Photos In Jpeg And Png Only</p>
                                        <input
                                            type="file"
                                            ref={photoInputRef}
                                            style={{ display: 'none' }}
                                            accept=".jpeg, .jpg, .png"
                                            name="images"
                                            onChange={handleFileChange}
                                        />
                                    </>
                                )}
                            </Form.Group>

                            <div>
                                <h6 className='text-success mt-5'>Upload Document</h6>
                                <p>Upload Documents In Pdf’s Only</p>

                                <Form.Group className="mb-2 upload" controlId="formBasicEmail" onClick={handleDocumentClick}>
                                    <AiOutlineCloud size={26} className='text-success' />
                                    <p>Upload Documents In Pdf’s Only</p>
                                    <input
                                        type="file"
                                        ref={documentInputRef}
                                        style={{ display: 'none' }}
                                        accept=".pdf"
                                        name="docs"
                                        onChange={handleFileChange}
                                    />
                                </Form.Group>

                                <div className='btn_section_fund'>
                                    <a ref={docRef} target="_blank" rel="noopener noreferrer">Preview</a>
                                </div>
                            </div>

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

export default CreateFund;
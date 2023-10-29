import React, { useState, useEffect } from 'react';
import './Myfundraiser.css';
import { useNavigate, useParams } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Footer from '../../component/footer/Footer';
import CustomTab from '../../component/customTabs/CustomTab'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { donatorUrl } from '../../utils/url';
import Cookies from 'universal-cookie';
import Pagination from '../../component/Pagination/Pagination';
import asset from '../../utils/asset';
import { toast } from 'react-toastify';

const Myfundraiser = () => {
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  const handleClickChnage = (slug) => {
    navigate(`/myfundraiser/donationtab/${slug}`);
  }
  const handleEditClick = (slug) => {
    navigate(`/editdonationtab/${slug}`);
  };

  const cookie = new Cookies();
  const tokenWeb = cookie.get('token_web');

  const fetchUsers = async () => {

    const toastID = toast.loading('Please wait...')

    const response = await fetch(`${donatorUrl}get-campaigns-by-user?limit=12&page=${page}`, {
      headers: {
        'Content-Type': 'applicaton/json',
        Authorization: `Bearer ${tokenWeb}`
      }
    }
    )
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
    setUsers(data.data.response);
    setTotal(data.data.total);

  }

  useEffect(() => {
    fetchUsers()
    return () => toast.dismiss()
  }, [page])

  return (
    <div style={{ backgroundColor: '#F5F5F5' }}>
      <CustomTab activeLink={"MyFundraiser"} />

      {/* --------AccordianSection----------- */}
      <Container>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header><h6>My Fundraiser</h6></Accordion.Header>
            <Accordion.Body>
              {users.map((item, index) =>
              (
                <Container key={index} className='main-child'>
                  <Row className='main-child-row' onClick={() => handleClickChnage(item.slug)} >
                    <Col lg={3} className='left-child'>
                      {item.cover_photo && item.cover_photo.length > 0 && item.cover_photo[0] && (
                        <img src={asset(item.cover_photo[0].name)} alt={item.name}
                          onError={({ currentTarget }) => {
                            currentTarget.src = "/image/placeholder.png";
                          }} />)}
                    </Col>
                    <Col lg={9} className='Right-child'>
                      <h6>{item.name}</h6>
                      <p>{item.description}  &nbsp; <a href="#" className='text-success text-decoration-underline'>More</a> </p>
                      <div className="raised-section">
                        <h4>{item.amount_raised}<span>Raised</span></h4>
                        <h3>Goal <span style={{ fontSize: '15px', fontWeight: '600', color: '#00A978' }}>{item.goal} </span></h3>
                      </div>
                      <ProgressBar variant="success" now={40} className='progress-bar-1' />
                    </Col>
                  </Row>

                  <div className='btn-view'>
                    <button className='bg-white text-success' onClick={() => navigate(`/myfundraiser/dashboard/${item._id}`)} style={{ border: '1px solid #00A978' }}>View Dashboard</button>
                    <button onClick={() => handleEditClick(item.slug)}>Edit Fundraiser</button>
                  </div>

                </Container>))}

              <Pagination total={total} page={page} pageSetter={setPage} />

              {/* --------Conatiner-2-Section----------- */}

              {/* <Container className='main-child mt-5'>
                <Row className='main-child-row-2'>
                  <Col lg={3} className='left-child'>
                    <img src="/Image/Child.png" alt="" />
                  </Col>
                  <Col lg={9} className='Right-child'>
                    <h6>Help Ashok save kids orphaned by farmer suicides. Donate Now</h6>
                    <p>Time stood still for 12-year-old Shrikant when he got the news that his father, a debt-ridden farmer from Beed, had taken his own life.<a href="#" className='text-success text-decoration-underline'>More</a> </p>
                    <div className="raised-section">
                      <h4>₹1700 <span>Raised</span></h4>
                      <h3>Goal <span style={{ fontSize: '15px', fontWeight: '600', color: '#00A978' }}>₹5000</span></h3>
                    </div>
                    <ProgressBar variant="success" now={60} className='progress-bar-1' />
                  </Col>
                </Row>
                <div className='btn-view'>
                  <button className='bg-white text-success' style={{ border: '1px solid #00A978' }} onClick={() => navigate("/donationtab")}>View Dashboard</button>
                  <button onClick={() => navigate("/editdonationtab")}>Edit Fundraiser</button>
                </div>
              </Container> */}

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      {/* --------FooterSection----------- */}

      <div>
        <Footer />
      </div>


    </div>
  )
}

export default Myfundraiser;

import React, { useState, useEffect } from 'react';
import './Myfundraiser.css';
import { useNavigate, useParams } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Footer from '../../component/footer/Footer';
import CustomTab from '../../component/customTabs/CustomTab'
import { Container, Row, Col, ProgressBar, Badge } from 'react-bootstrap';
import { donatorUrl } from '../../utils/url';
import Cookies from 'universal-cookie';
import Pagination from '../../component/Pagination/Pagination';
import asset from '../../utils/asset';
import { toast } from 'react-toastify';


const Myfundraiser = () => {
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1)
  // const [error, setError] = useState(null)
  // const [loading, setLoading] = useState(true)
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
                      <div className='left-child-image'>
                        <img src={asset(item?.cover_photo[0]?.name)} alt={item.name}
                          onError={({ currentTarget }) => {
                            currentTarget.src = "/image/placeholder.png";
                          }} />
                      </div>
                    </Col>
                    <Col lg={9} className='Right-child'>
                      <div className='d-flex justify-content-end'> {!item.is_active && <Badge bg="danger">Closed</Badge>}</div>
                      <h6>{item.name}</h6>
                      <p>{item.description}  &nbsp; <a href="#" className='text-success text-decoration-underline'>More</a> </p>
                      <div className="raised-section">
                        <h4>{item.amount_raised}<span>Raised</span></h4>
                        <h3>Goal <span style={{ fontSize: '15px', fontWeight: '600', color: '#00A978' }}>{item.goal} </span></h3>
                      </div>
                      <ProgressBar variant="success" now={Number(item.amount_raised) / Number(item.goal) * 100} className='progress-bar-1' />
                    </Col>
                  </Row>

                  <div className='btn-view'>
                    <button className='bg-white text-success' onClick={() => navigate(`/myfundraiser/dashboard/${item._id}/${item.slug}`)} style={{ border: '1px solid #00A978' }}>View Dashboard</button>
                    <button onClick={() => handleEditClick(item.slug)}>Edit Fundraiser</button>
                  </div>

                </Container>))}

              <Pagination total={total} page={page} pageSetter={setPage} />

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

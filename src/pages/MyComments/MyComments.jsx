import React, { useEffect, useState } from 'react';
import './MyComments.css';
import CustomTab from '../../component/customTabs/CustomTab'
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import Footer from '../../component/footer/Footer';
import Cookies from 'universal-cookie';
import { donatorUrl } from '../../utils/url';
import { toast } from 'react-toastify';


const MyComments = () => {
  const [comments, setComments] = useState([]);

  const cookie = new Cookies();
  const tokenWeb = cookie.get('token_web');
  const authUser = cookie.get('user');
  const userId = authUser?._id;


  const fetchUserComments = async () => {
    const toastID = toast.loading('Please Wait')
    const response = await fetch(`${donatorUrl}get-User-Comments?user_id=${userId}&limit=10&offset=0`, {
      headers: {
        'Content_Type': 'application/json',
        Authorization: `Bearer ${tokenWeb}`
      }
    })
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
    setComments(data.data)
  }

  useEffect(() => {
    fetchUserComments()
  }, [])
  return (
    <>
      <CustomTab activeLink={"mycomments"} />


      {/* --------AccordianSection----------- */}

      <Container>
        <Accordion defaultActiveKey="0">
          {
            comments.map((item, index) => (<Accordion.Item className='mb-2' eventKey="0" key={index}>
              <Accordion.Header> <h6 className='text-decoration-underline text-success'>{item.description}</h6></Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col xl={12}>
                    <div className='commentSection'>
                      <div className='Comment-Header'>
                        <img src="/Image/Client.png" alt="Client" />
                        <span>{item.benefeciary_name}</span>
                        <p>{item.comments}</p>
                      </div>
                    </div>
                  </Col>



                  {/* <Col xl={12}>
                  <div className='commentSection mt-2'>
                    <div className='Comment-Header'>
                      <img src="/Image/Client2.png" alt="Client2" />
                      <span>Daniel Redcliff</span>
                      <p>Kudos to the team behind this fantastic fundraiser! Your dedication and hard work are evident in every aspect of this event. I'm inspired by your commitment to making a difference and helping those in need. This fundraiser not only raises funds but also raises awareness about the pressing issues we face.</p>
                    </div>
                    <div className='Comment-footer'>
                      <p>Reply</p>
                      <p>Send Thanks</p>
                    </div>
                  </div>
                </Col> */}
                </Row>
              </Accordion.Body>
            </Accordion.Item>))
          }
        </Accordion>
      </Container>

      {/* --------FooterSection----------- */}

      <div>
        <Footer />
      </div>
    </>
  )
}

export default MyComments;

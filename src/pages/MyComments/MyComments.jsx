import React from 'react';
import './MyComments.css';
import CustomTab from '../../component/Navigation/customTabs/CustomTab';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import Footer from '../../component/footer/Footer';


const MyComments = () => {
  return (
    <>
      <CustomTab activeLink={"mycomments"} />


      {/* --------AccordianSection----------- */}

      <Container>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header> <h6 className='text-decoration-underline text-success'>Plant Tree, Save Earth & Lives Secure the Future</h6></Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col xl={12}>
                  <div className='commentSection'>
                    <div className='Comment-Header'>
                      <img src="/Image/Client.png" alt="Client" />
                      <span>Aman Choudhary</span>
                      <p>Wow, what an incredible fundraiser! I'm deeply moved by the cause you're supporting and the passion you've shown in organizing this event. It's heartening to see people coming together to make a positive impact and bring about real change.  I wholeheartedly support your efforts and will contribute to help reach the fundraising goal.</p>
                    </div>
                    <div className='Comment-footer'>
                      <p>Reply</p>
                      <p>Send Thanks</p>
                    </div>
                  </div>
                </Col>

                <Col xl={12}>
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
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <br />
          <Accordion.Item eventKey="1">
            <Accordion.Header> <h6 className='text-decoration-underline text-success'>Plant Tree, Save Earth & Lives Secure the Future</h6></Accordion.Header>
            <Accordion.Body>
              <h5 className='d-flex justify-content-center my-5'>No Comments Yet</h5>
            </Accordion.Body>
          </Accordion.Item>
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

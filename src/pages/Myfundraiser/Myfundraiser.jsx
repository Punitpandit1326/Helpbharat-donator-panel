import React from 'react';
import './Myfundraiser.css';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import CustomTab from '../../component/Navigation/customTabs/CustomTab';
import Accordion from 'react-bootstrap/Accordion';
import Footer from '../../component/footer/Footer';

const Myfundraiser = () => {
  return (
    <div style={{ backgroundColor: '#F5F5F5' }}>
      <CustomTab activeLink={"MyFundraiser"} />

      {/* --------AccordianSection----------- */}
      <Container>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header><h6>My Fundraiser</h6></Accordion.Header>
            <Accordion.Body>
              <Container className='main-child'>
                <Row className='main-child-row'>
                  <Col lg={3} className='left-child'>
                    <img src="/Image/Child.png" alt="" />
                  </Col>
                  <Col lg={9} className='Right-child'>
                    <h6>Help Ashok save kids orphaned by farmer suicides. Donate Now</h6>
                    <p>Time stood still for 12-year-old Shrikant when he got the news that his father, a debt-ridden farmer from Beed, had taken his own life.<a href="#" className='text-success text-decoration-underline'>More</a> </p>
                    <div className="raised-section">
                      <h4>₹1700 <span>Raised</span></h4>
                      <h3>Goal <span>₹5000</span></h3>
                    </div>
                    <ProgressBar variant="success" now={40} className='progress-bar-1' />
                  </Col>
                </Row>
                <div className='btn-view'>
                  <button className='bg-white text-success' style={{ border: '1px solid #00A978' }}>View Dashboard</button>
                  <button>Edit Fundraiser</button>
                </div>

              </Container>


              {/* --------Conatiner-2-Section----------- */}

              <Container className='main-child mt-5'>
                <Row className='main-child-row-2'>
                  <Col lg={3} className='left-child'>
                    <img src="/Image/Child.png" alt="" />
                  </Col>
                  <Col lg={9} className='Right-child'>
                    <h6>Help Ashok save kids orphaned by farmer suicides. Donate Now</h6>
                    <p>Time stood still for 12-year-old Shrikant when he got the news that his father, a debt-ridden farmer from Beed, had taken his own life.<a href="#" className='text-success text-decoration-underline'>More</a> </p>
                    <div className="raised-section">
                      <h4>₹1700 <span>Raised</span></h4>
                      <h3>Goal <span>₹5000</span></h3>
                    </div>
                    <ProgressBar variant="success" now={60} className='progress-bar-1' />
                  </Col>
                </Row>
                <div className='btn-view mx-auto'>
                  <button className='bg-white text-success' style={{ border: '1px solid #00A978' }}>View Dashboard</button>
                  <button>Edit Fundraiser</button>
                </div>
              </Container>

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

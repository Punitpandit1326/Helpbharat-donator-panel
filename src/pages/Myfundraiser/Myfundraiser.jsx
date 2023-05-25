import React from 'react';
import './Myfundraiser.css';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import CustomTab from '../../component/Navigation/customTabs/CustomTab';

const Myfundraiser = () => {
  return (
    <>
      <CustomTab activeLink={"MyFundraiser"} />

      <Container>
        <Row className='fundPage'>
          <Col lg={4} style={{ height: '265px' }}>
            <img src="/Image/child.png" alt="child" />
          </Col>

          <Col lg={8}>
            <div className='fp-section'>
              <div className='fp-hero-section'>
                <h6>Help Ashok save kids orphaned by farmer suicides. Donate Now</h6>
                <p>Time stood still for 12-year-old Shrikant when he got the news that his father, a debt-ridden farmer from Beed,
                  had taken his own life. <a href="" style={{ color: '#009368', fontWeight: '600' }}>More</a> </p>

                <p className='rup-fund'>₹1700 &nbsp;<span style={{ fontSize: '12px', color: '#000' }}>Raised</span></p>
                <p className='rup-fund2'>₹5000</p>
                <ProgressBar variant="success" className='progressBarRow' now={45} />
              </div>
              <i className="fa-2x fas fa-ellipsis-v dot"></i>
            </div>


            <Row className='rimage'>

              <Col lg={2} sm={6}>
                <div className="WalletSection">
                  <i class="icon-wallet-sec  fa fa-wallet"></i>
                  <div className='p-wallet'>
                    <h6>Fund Raised</h6>
                    <p>₹1700</p>
                  </div>
                </div>
              </Col>

              <Col lg={2} sm={6}>
                <div className="WalletSection">
                  <i className="fa-2x icon-wallet-sec fas fa-eye icon"></i>
                  <div className='p-wallet'>
                    <h6>Views</h6>
                    <p>56</p>
                  </div>

                </div>
              </Col>

              <Col lg={2} sm={6}>
                <div className="WalletSection">
                  <i className="fa-2x icon-wallet-sec  fas fa-calendar-alt"></i>
                  <div className='p-wallet'>
                    <h6> Start Date </h6>
                    <p>20/8/2022</p>
                  </div>
                </div>
              </Col>
              <Col lg={2} sm={6}>
                <div className="WalletSection ws-end">
                  <i className="fa-2x icon-wallet-sec  fas fa-calendar-minus" ></i>
                  <div className='p-wallet'>
                    <h6> Days left </h6>
                    <p>60Days</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* -------Container2Section------- */}

      <Container className='mt-5' >
        <Row className='fundPage fundPage2'>

          <Col lg={4} style={{ height: '265px' }}>
            <img src="/Image/ladieImage.png" alt="child" />
          </Col>



          <Col lg={8}>
            <div className='fp-section'>
              <div className="fp-hero-section">
                <h6>Help Manavlok save elderly people from malnutrition and starvation</h6>
                <p className='large-para'>Dattu Sopan Bhandare, 80, lives alone in Mudegaon village of the Beed district in Maharashtra. Hit by drought, his children have
                  moved to urban areas and after his wife died a few years back, <a href="" style={{ color: '#009368', fontWeight: '600' }}>...More</a></p>

                <p className='rup-fund3'>₹5600 &nbsp; <span style={{ fontSize: '12px', color: '#000' }}>Raised</span></p><p className='rup-fund4'>₹15000</p>
                <ProgressBar variant="success" className='progressBarRow' now={35} />
              </div>
              <i className="fa-2x fas fa-ellipsis-v dot"></i>
            </div>

            <Row className='rimage'>
              <Col lg={2} sm={6}>
                <div className="WalletSection">
                  <i class="icon-wallet-sec  fa fa-wallet"></i>
                  <div className='p-wallet'>
                    <h6>Fund Raised</h6>
                    <p>₹1700</p>
                  </div>
                </div>
              </Col>

              <Col lg={2} sm={6}>
                <div className="WalletSection">
                  <i className="fa-2x icon-wallet-sec fas fa-eye icon"></i>
                  <div className='p-wallet'>
                    <h6>Views</h6>
                    <p>56</p>
                  </div>

                </div>
              </Col>


              <Col lg={2} sm={6}>
                <div className="WalletSection">
                  <i className="fa-2x icon-wallet-sec  fas fa-calendar-alt"></i>
                  <div className='p-wallet'>
                    <h6> Start Date </h6>
                    <p>20/8/2022</p>
                  </div>
                </div>
              </Col>

              <Col lg={2} sm={6}>
                <div className="WalletSection ws-end">
                  <i className="fa-2x icon-wallet-sec  fas fa-calendar-minus" ></i>
                  <div className='p-wallet'>
                    <h6> Days left </h6>
                    <p>60Days</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Myfundraiser;

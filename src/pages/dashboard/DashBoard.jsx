import React, { useState } from 'react';
import './DashBoard.css';
import { FaPencilAlt } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPen, FaImage, FaFileAlt, FaLocationArrow } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




const DashBoard = () => {
  const [donarTab, setDonarTab] = useState("donorInfo-main")
  return (
    <>
      {/* -------TopHeaderSection---------- */}

      <Container>
        <div className="emptybox-section">
          <div className="eb1"></div>
          <div className="eb2"></div>
        </div>
      </Container>

      <Container className='mb-5'>
        <Row>
          <Col lg={8} md={8}>
            <div className="dashboard">
              <div className="listDash">
                <Link className='linkItem2 active' to={'/dashBoard'}><li>Dashboard</li></Link>
                <Link className='linkItem2' to={'/donationdb'}> <li>Donation</li></Link>
                <Link className='linkItem2' to={'/promotePage'}> <li>Promotions</li></Link>
                <Link className='linkItem2' to={'/setting'}><li>Settings</li></Link>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="edit-btn text-end">
              <button>Edit Fundraiser <FaPencilAlt /></button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* ---------HeroSection----------- */}

      <Container>
        <Row className='HeadHeroSection'>
          <Col md={12} xl={4} className='HeroSectionBox'>
            <p>Total Donors</p>
            <div className="wallet-sec">
              <p>₹ 15</p>
              <img src="/Image/wallet3.png" alt="wallet" />
            </div>
          </Col>
          <Col md={12} xl={4} className='HeroSectionBox'>
            <p>Amount raised today</p>
            <div className="wallet-sec">
              <p>₹ 1700</p>
              <img src="/Image/wallet3.png" alt="wallet" />
            </div>

          </Col>
          <Col md={12} xl={4} className='HeroSectionBox'>
            <p>Total amount raised</p>
            <div className="wallet-sec">
              <p>₹ 2400</p>
              <img src="/Image/wallet3.png" alt="wallet" />
            </div>
          </Col>
        </Row>
      </Container>

      {/* ------------GoalSection--------- */}

      <Container className='p-0'>
        <Row className='lhs_row_container'>
          <Col md={6} xl={6}>
            <Row>
              <Col md={12} xl={12} className='GoalSection'>
                <div className='GoalSectionleft'>
                  <p>Current Goal Status</p>
                  <p style={{ paddingTop: '20px', fontSize: '40px' }}>₹ 2400</p>
                  <h6>raised on a goal of ₹ 1,500</h6>
                </div>
                <div class="ui-widgets">
                  <div class="ui-values">35%</div>
                  <div class="ui-labels">Complete</div>
                </div>

              </Col>
              <Col md={12} xl={12} className='updateSection'>
                <div className='Updatepara'>
                  <div className='penIcon'><FaPen style={{ fontSize: '22px' }} />
                  </div>
                  <div>
                    <p>Post an update</p>
                    <h6>Your donors care about your cause, let them know<br />
                      what’s happening.</h6>
                  </div>
                  <a href='#'>Update</a>
                </div>
                <div className='Updatepara'>
                  <div className='penIcon'><FaPen style={{ fontSize: '22px' }} />
                  </div>
                  <div>
                    <p>Post an update</p>
                    <h6>Your donors care about your cause, let them know<br />
                      what’s happening.</h6>
                  </div>
                  <a href='#'>Update</a>
                </div>
                <div className='Updatepara'>
                  <div className='penIcon'><FaPen style={{ fontSize: '18px' }} />
                  </div>
                  <div>
                    <p>Post an update</p>
                    <h6>Your donors care about your cause, let them know<br />
                      what’s happening.</h6>
                  </div>
                  <a href='#'>Update</a>
                </div>

                {/* <div className='Updatepara'>
                  <div className='penIcon'><FaImage style={{ fontSize: '22px', position: 'absolute', top: '12px', left: '15px' }} />
                  </div>
                  <p>Upload photos</p>
                  <a href='#'>Update</a>
                  <h6>Good pictures increase donations by 5x! Upload at<br /> least  3 images.</h6>
                </div>

                <div className='Updatepara'>
                  <div className='penIcon'><FaFileAlt style={{ fontSize: '22px', position: 'absolute', top: '12px', left: '15px' }} />
                  </div>
                  <p style={{ marginRight: '220px' }}>Improve your Story</p>
                  <a href='#'>Update</a>
                  <h6 style={{ marginRight: '150px' }}> Add more details and emotions to drive <br /> faster donations..</h6>
                </div>

                <div className='Updatepara'>
                  <div className='penIcon'><FaLocationArrow style={{ fontSize: '22px', position: 'absolute', top: '12px', left: '15px' }} />
                  </div>
                  <p> Post an update</p>
                  <a href='#'>Update</a>
                  <h6>Your donors care about your cause, let them know<br />
                    what’s happening.</h6>
                </div> */}
              </Col>
            </Row>
          </Col>

          <Col md={6} xl={6} className='Donors-Section'>
            <div className='topdonor3'>
              <p className='t-donor' onClick={() => setDonarTab("donorInfo-main")}>Top Donors</p>
              <p className='r-donor'>Recent Donors</p>

            </div>
            <hr style={{ width: '94%', marginLeft: '20px' }} />


            {donarTab === "donorInfo-main" && <div className="donorInfo-main">
              <div className="donarInfo">
                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa" }} />
                <p>Someone donated INR <strong>500</strong> </p>

              </div>
              <p className='donoted-inr'>8 nov 2022</p>


              <div className="donarInfo m-0">
                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa" }} />
                <p>Someone donated INR <strong>500</strong> </p>

              </div>
              <p className='donoted-inr'>8 nov 2022</p>


              <div className="donarInfo m-0">
                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa" }} />
                <p>Someone donated INR <strong>500</strong> </p>

              </div>
              <p className='donoted-inr'>8 nov 2022</p>

              <div className="donarInfo m-0">
                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa" }} />
                <p>Someone donated INR <strong>500</strong> </p>

              </div>
              <p className='donoted-inr'>8 nov 2022</p>
              <div className="donarInfo m-0">
                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa" }} />
                <p>Someone donated INR <strong>500</strong> </p>

              </div>
              <p className='donoted-inr'>8 nov 2022</p>
            </div>}
          </Col>
        </Row>
      </Container>

      {/* --------------updateSection------------ */}

      {/* <Container>
        <Row>
          <Col md={12} xl={6} className='updateSection'>
            <div className='Updatepara'>
              <div className='penIcon'><FaPen style={{ fontSize: '22px', position: 'absolute', top: '12px', left: '15px' }} />
              </div>
              <p> Post an update</p>
              <a href='#'>Update</a>
              <h6>Your donors care about your cause, let them know<br />
                what’s happening.</h6>
            </div>

            <div className='Updatepara'>
              <div className='penIcon'><FaImage style={{ fontSize: '22px', position: 'absolute', top: '12px', left: '15px' }} />
              </div>
              <p>Upload photos</p>
              <a href='#'>Update</a>
              <h6>Good pictures increase donations by 5x! Upload at<br /> least  3 images.</h6>
            </div>

            <div className='Updatepara'>
              <div className='penIcon'><FaFileAlt style={{ fontSize: '22px', position: 'absolute', top: '12px', left: '15px' }} />
              </div>
              <p style={{ marginRight: '220px' }}>Improve your Story</p>
              <a href='#'>Update</a>
              <h6 style={{ marginRight: '150px' }}> Add more details and emotions to drive <br /> faster donations..</h6>
            </div>

            <div className='Updatepara'>
              <div className='penIcon'><FaLocationArrow style={{ fontSize: '22px', position: 'absolute', top: '12px', left: '15px' }} />
              </div>
              <p> Post an update</p>
              <a href='#'>Update</a>
              <h6>Your donors care about your cause, let them know<br />
                what’s happening.</h6>
            </div>
          </Col>
        </Row>
      </Container > */}

    </>
  )
}

export default DashBoard;

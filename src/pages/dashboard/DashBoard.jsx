import React, { useEffect, useState } from 'react';
import './DashBoard.css';
import { FaPencilAlt } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPen } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { TbFileText, TbBrandTelegram } from "react-icons/tb";
import Footer from '../../component/footer/Footer';
import { Link, } from 'react-router-dom';




const DashBoard = () => {

  const [donarTab, setDonarTab] = useState(true)

  return (
    <div style={{ backgroundColor: '#F5F5F5' }}>
      {/* -------TopHeaderSection---------- */}

      <Container className='donation-head'>
        <Row className='heading-nav mb-3'>
          <Col lg={9} md={9}>
            <div className="dashboard">
              <div className="listDash">
                <Link className='linkItem2 active' to={'/dashboard'}><li>Dashboard</li></Link>
                <Link className='linkItem2' to={'/donationdb'}> <li>Donation</li></Link>
                <Link className='linkItem2' to={'/promotePage'}> <li>Promotions</li></Link>
                <Link className='linkItem2' to={'/mywithdraw'}> <li>My Withdrawals</li></Link>
                <Link className='linkItem2' to={'/setting'}><li>Settings</li></Link>
              </div>
            </div>
          </Col>

          {<Col lg={3} md={3}>
            <div className="edit-fund text-end">
              <button>Edit Fundraiser <FaPencilAlt /></button>
            </div>
          </Col>}
        </Row>
      </Container>

      {/* ---------HeroSection----------- */}

      <Container>
        <Row className='HeadHeroSection'>
          <Col md={12} xl={4} sm={12} className='HeroSectionBox'>
            <p>Total Donors</p>
            <div className="wallet-sec">
              <p style={{ color: '#00a978' }}> 15</p>
            </div>
          </Col>
          <Col md={12} xl={4} sm={12} className='HeroSectionBox'>
            <p>Amount raised today</p>
            <div className="wallet-sec">
              <p style={{ color: '#00a978' }}>₹ 1700</p>
            </div>

          </Col>
          <Col md={12} xl={4} sm={12} className='HeroSectionBox'>
            <p>Total amount raised</p>
            <div className="wallet-sec">
              <p style={{ color: '#00a978' }}>₹ 2400</p>

            </div>
          </Col>
        </Row>
      </Container>

      {/* ------------GoalSection--------- */}

      <Container className='p-0'>
        <Row className='lhs_row_container'>
          <Col md={6} xl={6} sm={12}>
            <Row>
              <Col md={12} xl={12} className='GoalSection'>
                <div className='GoalSectionleft'>
                  <p>Current Goal Status</p>
                  <h5>₹2400</h5>
                  <h6>raised on a goal of ₹ 1,500</h6>
                </div>
                <div class="ui-widgets">
                  <div class="ui-values">35%</div>
                  <div class="ui-labels">Complete</div>
                </div>


              </Col>
              <Col md={12} xl={12} sm={12} className='updateSection'>
                <div className='Updatepara'>
                  <div className='penIcon'><FaPen className='icon-item' />
                  </div>
                  <div>
                    <p>Post an update</p>
                    <h6>Your donors care about your cause, let them know<br />
                      what’s happening.</h6>
                  </div>
                  <a href='#'>Update</a>
                </div>
                <div className='Updatepara'>
                  <div className='penIcon'><MdOutlinePhotoSizeSelectActual className='icon-item' />
                  </div>
                  <div>
                    <p>Post an update</p>
                    <h6>Your donors care about your cause, let them know<br />
                      what’s happening.</h6>
                  </div>
                  <a href='#'>Update</a>
                </div>
                <div className='Updatepara'>
                  <div className='penIcon'><TbFileText className='icon-item' />
                  </div>
                  <div>
                    <p>Post an update</p>
                    <h6>Your donors care about your cause, let them know<br />
                      what’s happening.</h6>
                  </div>
                  <a href='#'>Update</a>
                </div>
                <div className='Updatepara'>
                  <div className='penIcon'><TbBrandTelegram className='icon-item' />
                  </div>
                  <div>
                    <p>Post an update</p>
                    <h6>Your donors care about your cause, let them know<br />
                      what’s happening.</h6>
                  </div>
                  <a href='#'>Update</a>
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={6} xl={6} className='Donors-Section'>
            <div className='donor-paragraph'>
              <li className={`${donarTab && 'active'}`} onClick={() => setDonarTab(true)}>Top Donors</li>
              <li className={`${!donarTab && 'active'}`} onClick={() => setDonarTab(false)}> Recent Donors </li>

            </div>

            {donarTab && <div className="donorInfo-main">
              <div className="donarInfo-para">
                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa" }} />
                <p>Someone donated INR <span>500</span> </p>

              </div>
              <p className='donoted-para'>8 nov 2022</p>
              <div className="donarInfo-para m-0">
                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa" }} />
                <p>Someone donated INR <span>500</span> </p>

              </div>
              <p className='donoted-para'>8 nov 2022</p>


              <div className="donarInfo-para m-0">
                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa" }} />
                <p>Someone donated INR <span>500</span> </p>

              </div>
              <p className='donoted-para'>8 nov 2022</p>

              <div className="donarInfo-para m-0">
                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa" }} />
                <p>Someone donated INR <span>500</span> </p>

              </div>
              <p className='donoted-para'>8 nov 2022</p>
              <div className="donarInfo-para m-0">
                <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa" }} />
                <p>Someone donated INR <span>500</span> </p>

              </div>
              <p className='donoted-para'>8 nov 2022</p>
            </div>}

            {!donarTab && <div className="recent-main">
              <h6>Hello World</h6>
            </div>}
          </Col>
        </Row>
      </Container>

      {/* --------FooterSection----------- */}

      <div>
        <Footer />
      </div>

    </div >
  )
}

export default DashBoard;

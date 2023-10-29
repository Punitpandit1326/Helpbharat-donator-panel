import React, { useState, useRef, useEffect } from 'react';
import './DashBoard.css';
import { FaPencilAlt } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPen } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { TbFileText, TbBrandTelegram } from "react-icons/tb";
import Footer from '../../component/footer/Footer';
import { Link, useParams, } from 'react-router-dom';
import { donatorUrl } from '../../utils/url';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import NavSection from '../../component/NavSection/NavSection';


const DashBoard = () => {
  const [donarTab, setDonarTab] = useState(true);
  const [dashboard, setDashboard] = useState({});
  const { _id } = useParams();

  const cookie = new Cookies();
  const tokenWeb = cookie.get('token_web');


  const fetchDashboard = async () => {

    const toastID = toast.loading('Please wait...')

    const response = await fetch(`${donatorUrl}get-campaign-data?fund_raiser_id=${_id}`, {
      headers: {
        'Content-Type': 'application/json',
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
      render: data.message.message,
      type: 'success',
      autoClose: 1500,
      isLoading: false
    })
    setDashboard(data.data)
  }

  useEffect(() => {
    fetchDashboard()
    return () => toast.dismiss()
  }, [])

  return (
    <>
      {/* -------TopHeaderSection---------- */}

      <NavSection />

      {/* ---------HeroSection----------- */}

      <Container>
        <Row className='HeadHeroSection'>

          <Col md={12} xl={4} sm={12} className='HeroSectionBox'>
            <p>Total Donors</p>
            <div className="wallet-sec">
              <p style={{ color: '#00a978' }}> ₹ {dashboard.donorsResponse}</p>
            </div>
          </Col>
          <Col md={12} xl={4} sm={12} className='HeroSectionBox'>
            <p>Amount raised today</p>
            <div className="wallet-sec">
              <p style={{ color: '#00a978' }}> ₹ {dashboard.amount_raised}</p>
            </div>

          </Col>
          <Col md={12} xl={4} sm={12} className='HeroSectionBox'>
            <p>Total amount raised</p>
            <div className="wallet-sec">
              <p style={{ color: '#00a978' }}>₹ {dashboard.totalAmountRaisedToday}</p>

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
                  <h5>{dashboard.totalAmountRaisedToday}</h5>
                  <h6>raised on a goal of ₹ {dashboard.goal}</h6>
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

    </>
  )
}

export default DashBoard;

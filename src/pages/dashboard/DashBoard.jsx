import React, { useState, useRef, useEffect } from 'react';
import './DashBoard.css';
import { FaPencilAlt } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPen } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { TbFileText } from "react-icons/tb";
import Footer from '../../component/footer/Footer';
import { useNavigate, useParams, } from 'react-router-dom';
import { donatorUrl, url } from '../../utils/url';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import NavSection from '../../component/NavSection/NavSection';
import moment from 'moment/moment';
import Progress from '../../component/Progress/Progress';

const DashBoard = () => {
  const [recentDonor, setRecentDonor] = useState(null);
  const [tabDonor, setTabDonor] = useState(null);
  const [error, setError] = useState(null)
  const [donarTab, setDonarTab] = useState(true);
  const [dashboard, setDashboard] = useState({});
  const { _id, slug } = useParams();
  const navigate = useNavigate();

  const cookie = new Cookies();
  const tokenWeb = cookie.get('token_web');

  // -------------TopDonor-Api---------

  const fetchTabDonor = async (_id) => {
    try {
      const response = await fetch(`${url}top-Donors?fund_raiser_id=${_id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenWeb}`
        }
      }

      )
      const data = await response.json();

      if (!data.success) {
        setError(data.message)
        return
      }
      setTabDonor(data.data)
    } catch (error) {
      setError(error.message)
    }
  }

  // ------------RecentDonor-Api------------

  const fetchRecentDonor = async (_id) => {
    try {
      const response = await fetch(`${url}recent-Donors?fund_raiser_id=${_id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenWeb}`
        }
      }

      )
      const data = await response.json();

      if (!data.success) {
        setError(data.message)
        return
      }
      setRecentDonor(data.data)
    } catch (error) {
      setError(error.message)
    }
  }

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
    fetchRecentDonor(_id)
    fetchTabDonor(_id)

  }

  function calculateCompletionPercentage(dashboard) {
    if (dashboard.goal === 0) {
      return 0;
    }
    return Math.floor((dashboard.amount_raised / dashboard.goal) * 100);
  }

  function getCompletionStatus(dashboard) {
    const completionPercentage = calculateCompletionPercentage(dashboard);
    if (completionPercentage < 100) {
      return "Incomplete";
    } else {
      return "Complete";
    }
  }

  useEffect(() => {
    fetchDashboard()

    return () => toast.dismiss()
  }, [])


  // ------------Navigate-Section------------

  const gotoUpdate = () => {
    navigate(`/setting/${_id}`)
  }
  return (
    <React.Fragment>
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
              <p style={{ color: '#00a978' }}> ₹ {dashboard.totalAmountRaisedToday}</p>
            </div>

          </Col>
          <Col md={12} xl={4} sm={12} className='HeroSectionBox'>
            <p>Total amount raised</p>
            <div className="wallet-sec">
              <p style={{ color: '#00a978' }}>₹ {dashboard.amount_raised}</p>

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
                  <h5>{dashboard.amount_raised}</h5>
                  <h6>raised on a goal of ₹ {dashboard.goal}</h6>
                </div>

                <div className="ui-widgets">
                  <Progress strokeWidth={8} percentage={calculateCompletionPercentage(dashboard)} />
                  <div className="ui-labels">{getCompletionStatus(dashboard)}</div>
                </div>


              </Col>
              <Col md={12} xl={12} sm={12} className='updateSection'>
                <div className='Updatepara'>
                  <div className='penIcon'><FaPen className='icon-item' />
                  </div>
                  <div className='updatePostSection'>
                    <p>Post an update</p>
                    <h6>Your donors care about your cause, let them know<br />
                      what’s happening.</h6>
                  </div>
                  <a href='#' onClick={gotoUpdate}>Update</a>
                </div>

                <div className='Updatepara'>
                  <div className='penIcon'><MdOutlinePhotoSizeSelectActual className='icon-item' />
                  </div>
                  <div>
                    <p>Upload photos</p>
                    <h6>Good pictures increase donations by 5x! Upload at least 3 images.</h6>
                  </div>
                  <a href='#' onClick={gotoUpdate}>Update</a>
                </div>

                <div className='Updatepara mb-0'>
                  <div className='penIcon'><TbFileText className='icon-item' />
                  </div>
                  <div>
                    <p>Share your fundraiser</p>
                    <h6>The farther and faster you share the more funds you receive.</h6>
                  </div>
                  <a href='#'>Share</a>
                </div>

              </Col>
            </Row>
          </Col>

          <Col md={6} xl={6} className='Donors-Section'>
            <div className='donor-paragraph'>
              <li className={`${donarTab && 'active'}`} onClick={() => setDonarTab(true)}>Top Donors</li>
              <li className={`${!donarTab && 'active'}`} onClick={() => setDonarTab(false)}> Recent Donors </li>
            </div>

            {donarTab && <div className="donorInfo-main p-0 mt-3">

              {tabDonor?.map((item, index) => (<div key={index}>
                <div className="donarInfo">
                  <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa", }} />
                  <p>
                    {item.is_annonymous ? 'Someone' : item.user_id.name} donated INR {item.amount} <br />
                  </p>
                </div>
                <p className='donoted-inr'>{moment(item.createdAt).format("DD MMM  YYYY")}</p>
              </div>
              )
              )}
            </div>}

            {!donarTab && (<div className='recent-main'>

              {recentDonor?.map((item, index) => (<div key={index}>
                <div className="donarInfo">
                  <FontAwesomeIcon icon={faUserCircle} size="3x" style={{ "--fa-primary-color": "#F3E8FF", "--fa-secondary-color": "#f5f7fa", }} />
                  <p>
                    {item.is_annonymous ? 'Someone' : item.user_id.name} donated INR {item.amount} <br />
                  </p>
                </div>
                <p className='donoted-inr'>{moment(item.createdAt).format("DD MMM  YYYY")}</p>
              </div>))}


            </div>
            )}

          </Col>
        </Row>
      </Container>

      {/* --------FooterSection----------- */}

      <div>
        <Footer />
      </div>

    </React.Fragment>
  )
}

export default DashBoard;

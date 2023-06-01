import React from 'react';
import './DonationDb.css';
import { FaPencilAlt, FaRegCalendar, FaSortAmountDown, FaLocationArrow, FaPlus } from 'react-icons/fa';
import Footer from '../../component/footer/Footer';
import { Container, Table, Row, Col } from 'react-bootstrap';
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';

const DonationDb = () => {
  return (
    <>
      {/* -------TopHeaderSection---------- */}

      <Container>
        <Row>
          <Col lg={9} md={9}>
            <div className="dashboard">
              <div className="listDash">
                <Link className='linkItem2' to={'/dashBoard'}><li>Dashboard</li></Link>
                <Link className='linkItem2 active' to={'/donationdb'}> <li >Donation</li></Link>
                <Link className='linkItem2' to={'/promotePage'}> <li>Promotions</li></Link>
                <Link className='linkItem2' to={'/mywithdraw'}> <li>My withdraw</li></Link>
                <Link className='linkItem2' to={'/setting'}><li>Settings</li></Link>
              </div>
            </div>
          </Col>
          <Col lg={3} md={3}>
            <div className="edit-fund text-end">
              <button>Edit Fundraiser <FaPencilAlt /></button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* -----------DonationHeroSection--------- */}

      <Container className='export-Cont'>
        <h3>Donation</h3>
        <div className='export-Sec'>
          <p>Here’s all that you need to know about your donors. Appreciate their generosity, send a Thank You note.
          </p>
          <button>Export <FaDownload /></button>
        </div>

        {/* -----------TableSection---------- */}

        <span>You have recieved 0 donations with a total amount of ₹ 0 </span>

        <div className='Btn-SecTion'>
          <div className="btn-RighT">
            <p> <FaRegCalendar /> &nbsp; Date Range</p>
          </div>

          <div className="btn-LefT">
            <p> <FaSortAmountDown /> &nbsp; Sort Items</p>
          </div>
        </div>
        <Container fluid className='table-container-section'>
          <Table striped className='donation-table'>
            <thead>
              <tr>
                <th>Fundraiser</th>
                <th>Donated On</th>
                <th>Fundraiser Name</th>
                <th style={{ textAlign: 'right' }}>Donation Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nishant</td>
                <td>20/8/2022</td>
                <td><a href="#">Save infant orphans with urgent .....</a></td>
                <td style={{ textAlign: 'right' }}>₹ 400</td>
              </tr>
              <tr>
                <td>Ankur</td>
                <td>20/8/2022</td>
                <td><a href="#">Save infant orphans with urgent .....</a></td>
                <td style={{ textAlign: 'right' }}>₹ 200</td>
              </tr>
              <tr>

                <td>Mithun</td>
                <td>20/8/2022</td>
                <td><a href="#">Save infant orphans with urgent .....
                </a></td>
                <td style={{ textAlign: 'right' }}>₹ 600</td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <div className="right_BtN">
          <button>Send Thanks <FaLocationArrow /></button>
          <button>Add to Contact <FaPlus /></button>
        </div>

      </Container>

      {/* --------FooterSection----------- */}

      <div>
        <Footer />
      </div>
    </>
  )
}

export default DonationDb;

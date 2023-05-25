import React from 'react';
import './DonationDb.css';
import { FaPencilAlt, FaRegCalendar, FaSortAmountDown, FaLocationArrow, FaPlus } from 'react-icons/fa';
import { Container, Table, Row, Col } from 'react-bootstrap';
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';
const DonationDb = () => {
  return (
    <>
      {/* -------TopHeaderSection---------- */}

      <Container>
        <div className="emptybox-2">
          <div className="emptybox3"></div>
          <div className="emptybox4"></div>
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

        <Table striped className='tabl2'>
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
              <td>@20/8/2022</td>
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

        <div className="right_BtN">
          <button>Send Thanks <FaLocationArrow /></button>
          <button>Add to Contact <FaPlus /></button>
        </div>

      </Container>


    </>
  )
}

export default DonationDb;

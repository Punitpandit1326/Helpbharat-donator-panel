import React from 'react';
import './MyWithdraw.css'
import { Container, Row, Col, Table } from 'react-bootstrap';
import { FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../../component/footer/Footer';

const MyWithdraw = () => {
    return (
        <div>
            <Container>
                <Row className='heading-nav mb-3'>
                    <Col lg={9} md={9}>
                        <div className="dashboard">
                            <div className="listDash">
                                <Link className='linkItem2' to={'/dashBoard'}><li>Dashboard</li></Link>
                                <Link className='linkItem2' to={'/donationdb'}> <li>Donation</li></Link>
                                <Link className='linkItem2' to={'/promotePage'}> <li>Promotions</li></Link>
                                <Link className='linkItem2 active' to={'/withdraw'}> <li>My Withdrawals</li></Link>
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
                <Row>
                    <Col xl={12} className='hero-withdraw-section'>
                        <p>Total Raised</p>
                        <h5>₹19,000</h5>
                        <h6>See the Funds breakup in the</h6>
                        <a href="#">Funds Summary</a>
                        <button className='req-btn'>Request Withdrawal</button>
                    </Col>
                </Row>
            </Container>

            {/* ---------TableSection----------- */}


            <Container className='withdraw-table-section'>
                <h6 className='past-withdraw'>Past Withdrawals</h6>
                <Table striped className='table2'>
                    <thead>
                        <tr>
                            <th>Payment Date</th>
                            <th>Amount</th>
                            <th>UTR No.</th>
                            <th>Status </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>20/05/2023</td>
                            <td>₹1000</td>
                            <td>N156200401494241</td>
                            <td>Paid</td>
                        </tr>
                        <tr>
                            <td>20/8/2022</td>
                            <td >₹1000</td>
                            <td>N156200401494241</td>
                            <td>Paid</td>
                        </tr>
                        <tr>
                            <td>20/8/2022</td>
                            <td>₹1000</td>
                            <td>-----</td>
                            <td>Paid</td>
                        </tr>
                        <tr>
                            <td>20/8/2022</td>
                            <td>₹1000</td>
                            <td>-----</td>
                            <td>Paid</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            <Container >
                <p className='table-footer'>
                    Note:- <br /> The amount eligible for withdrawal may show lesser than the total amount raised as there may be some amount in transition. Helpharat works with multiple payment processors and gateways, and takes at least 2 working days for the money to reach Helpharat account.
                    <br />
                    <br />
                    Once the withdrawal request is processed, you should receive the credit in your bank account within 2-5 business days.
                    <br />
                    <br />
                    Fund withdrawal request are not processed on Saturdays and requests on weekend will be processed on the following Monday.

                    Helpharat uses the conversion rate of 1 USD = 80 INR for display purposes, but the amount in USD will be disbursed as per actual conversion rate as of the day the amount is transferred.</p>
            </Container>

            {/* --------FooterSection----------- */}

            <div>
                <Footer />
            </div>
        </div>
    )
};

export default MyWithdraw;
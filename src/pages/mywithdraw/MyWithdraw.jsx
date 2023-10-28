import React, { useState } from 'react';
import './MyWithdraw.css'
import { Container, Row, Col, Table } from 'react-bootstrap';
import Footer from '../../component/footer/Footer';
import NavSection from '../../component/NavSection/NavSection';
import { donatorUrl } from '../../utils/url';
import Cookies from 'universal-cookie';


const MyWithdraw = () => {
    const [payment, setPayment] = useState([]);
    const cookie = new Cookies();
    const tokenWeb = cookie.get('token_web');

    const fetchPaymentData = async () => {
        const response = await fetch(`${donatorUrl}get-All-Payment-Withdrawls`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${tokenWeb}`
            }
        })
    }

    return (
        <div>

            <NavSection />

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
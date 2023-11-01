import React, { useEffect, useState } from 'react';
import './MyWithdraw.css'
import { Container, Row, Col, Table } from 'react-bootstrap';
import Footer from '../../component/footer/Footer';
import NavSection from '../../component/NavSection/NavSection';
import { donatorUrl } from '../../utils/url';
import Cookies from 'universal-cookie';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Pagination from '../../component/Pagination/Pagination';


const MyWithdraw = () => {
    const [payment, setPayment] = useState({});
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [tablePayment, setTablePayment] = useState({});
    const { _id } = useParams();
    const cookie = new Cookies();
    const tokenWeb = cookie.get('token_web');


    // -----------Payment-Withdraw-------------

    const fetchPaymentData = async () => {

        const toastID = toast.loading('Please wait...')

        const response = await fetch(`${donatorUrl}get-withdrawable-amount?fund_raiser_id=${_id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${tokenWeb}`
            }
        })

        const data = await response.json();
        // console.log(data);

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
            render: data.message,
            type: 'success',
            autoClose: 1500,
            isLoading: false
        })
        setPayment(data.data);
    }

    // -----------PaymentApi-------------

    const fetchTablePayment = async () => {
        const toastID = toast.loading()
        const response = await fetch(`${donatorUrl}get-All-Payment-Withdrawls?campaign_id=${_id}&limit=10&page=${page}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${tokenWeb}`
            }
        }
        )
        const data = await response.json();
        console.log(data);
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
            render: data.message,
            type: 'success',
            autoClose: 1500,
            isLoading: false
        })
        setTablePayment(data.data.docs)
        setTotal(data.data.totalDocs)
    }

    // -----------Withdraw-Api-------------

    const fetchWithdraw = async () => {

        const toastID = toast.loading('Please Wait...')

        const response = await fetch(`${donatorUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${tokenWeb}`
            },
            body: JSON.stringify({
                amount: payment.withdrawable_amount,
                campaign_id: _id
            })
        })
        const data = await response.json()

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
            render: data.message,
            type: 'success',
            autoClose: 1500,
            isLoading: false
        })
    }

    useEffect(() => {
        fetchPaymentData()
        fetchTablePayment()
        return () => toast.dismiss()
    }, [page])

    return (
        <div>

            <NavSection />

            {/* ---------HeroSection----------- */}

            <Container>
                <Row>
                    <Col xl={12} className='hero-withdraw-section'>
                        <p>Total Raised</p>
                        <h5>{payment.withdrawable_amount}</h5>
                        <h6>See the Funds breakup in the</h6>
                        <a href="#">Funds Summary</a>
                        <button type='submit' onClick={fetchWithdraw} className='req-btn'>Request Withdrawal</button>
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
                            <td>{tablePayment.createdAt}</td>
                            <td>{tablePayment.amount}</td>
                            <td>{tablePayment.campaign_id}</td>
                            <td>{tablePayment.status}</td>
                        </tr>
                    </tbody>
                </Table>

                <Pagination total={total} page={page} pageSetter={setPage} />

            </Container>

            {/* ---------Table-footer-section----------- */}

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
import React, { useEffect, useState } from 'react';
import './DonationDb.css';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { FaDownload } from "react-icons/fa";
import Footer from '../../component/footer/Footer';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Table } from 'react-bootstrap';
import { FaPencilAlt, FaRegCalendar, FaSortAmountDown, FaLocationArrow, FaPlus } from 'react-icons/fa';
import Cookies from 'universal-cookie';
import { donatorUrl } from '../../utils/url';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavSection from '../../component/NavSection/NavSection';
import Pagination from '../../component/Pagination/Pagination';
import moment from 'moment/moment';

const DonationDb = () => {
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [donation, setDonation] = useState([]);
  const { _id, slug } = useParams()
  const cookie = new Cookies();
  const tokenWeb = cookie.get('token_web');


  const fetchDonationData = async () => {
    const toastID = toast.loading('Please wait...')
    const response = await fetch(`${donatorUrl}campaign-donations?_id=${_id}&limit=5&page=${page}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenWeb}`
      }
    });
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
    // console.log(data.data.docs, "data show");
    setDonation(data.data.docs)
    setTotal(data.data.total);
  }

  useEffect(() => {
    fetchDonationData()
    return () => toast.dismiss()
  }, [page])

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleClick = () => {
    setShowCalendar(true);
  };

  return (
    <>
      <NavSection />

      {/* -----------DonationHeroSection--------- */}

      <Container className='export-Cont'>
        <h3>Donation</h3>
        <div className='export-Sec'>
          <p>Here’s all that you need to know about your donors. Appreciate their generosity, send a Thank You note.
          </p>
          <button>Export <FaDownload /></button>
        </div>

        {/* -----------TableSection---------- */}

        <div className='Btn-SecTion'>
          <div className="btn-RighT">
            {selectedDate ? (
              <button onClick={handleClick}>{selectedDate.toDateString()}</button>
            ) : (
              <button className='calendar-btn' onClick={handleClick}><FaRegCalendar /> Date Range</button>
            )}
            {showCalendar && (
              <DatePicker selected={selectedDate} onChange={handleDateChange} inline />
            )}

          </div>

          <div className="btn-LefT">
            <p> <FaSortAmountDown /> &nbsp; Sort Items</p>
          </div>
        </div>
        <Container fluid className='table-container-section p-0'>
          <Table striped className='donation-table'>
            <thead>
              <tr>
                <th>Fundraiser</th>
                <th>Donated On</th>
                <th>Donation Amount</th>
              </tr>
            </thead>
            {
              donation?.map((item, index) => (<tbody key={index}>
                <tr>
                  <td>{item.user_id.name}</td>
                  <td>{moment(item.createdAt).format("DD MMM  YYYY")}</td>
                  <td>₹ 400</td>
                </tr>
              </tbody>))}
          </Table>
          <Pagination total={total} page={page} pageSetter={setPage} />
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

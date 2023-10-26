import React, { useState, useEffect } from 'react';
import './MyDonation.css';
import { Container, Accordion } from 'react-bootstrap';
import CustomTab from '../../component/customTabs/CustomTab'
import Footer from '../../component/footer/Footer';
import { donatorUrl } from '../../utils/url';
import Cookies from 'universal-cookie';
import Pagination from '../../component/Pagination/Pagination';


const MyDonation = () => {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)
  const [usersDonation, setUsersDonation] = useState([]);
  const moment = require('moment');

  const createdAt = "2023-10-25T05:48:09.437Z";
  const formattedDate = moment(createdAt).format("DD/MM/YYYY");

  console.log(formattedDate); // Output: "25/10/2023"


  const cookie = new Cookies();
  const tokenWeb = cookie.get('token_web');
  const authUser = cookie.get('user');
  const userId = authUser?._id;


  const fetchDonation = async () => {
    try {
      const response = await fetch(`${donatorUrl}donations-By-User?user_id=${userId}&limit=1&page=${page}`, {
        headers: {
          'Content-Type': 'applicaton/json',
          'Authorization': `Bearer ${tokenWeb}`
        }
      }
      )

      const data = await response.json();
      // console.log(data, 'response1');
      if (!data.message) {
        setError(data.message)
        return
      }
      setUsersDonation(data.data.response);
      setTotal(data.data);
    }
    catch (error) {
      console.error(error)
    }
    finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    fetchDonation();
    return () => { }
  }, [page])

  if (loading) {
    return (<div>...Loading please Wait</div>)
  }
  if (error) {
    return (<div>...Error : {error}</div>)
  }

  return (
    <>

      <CustomTab activeLink={"MyDonation"} />

      {/* --------AccordianSection----------- */}

      <Container>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>My Donations</Accordion.Header>
            <Accordion.Body>
              <div className="row w-100 m-0">

                <div div className="col-12 table-section" >
                  <table responsive="sm" className="table">
                    <thead className='pb-5'>
                      <tr>
                        <th>
                          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        </th>
                        <th scope="col">Fundraiser Name</th>
                        <th scope="col">Donation Date</th>
                        <th scope="col">Category</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Tax Exemption</th>
                      </tr>
                    </thead>
                    {usersDonation.map((item, index) =>

                    (<tbody key={item.id}>
                      <tr>
                        <th>
                          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        </th>
                        <td>{item.campaign[0].name}</td>
                        <td >{formattedDate}</td>
                        <td>{item.category[0].name}</td>
                        <td>{item.amount}</td>
                        <td className='anchor text-start'>
                          {item.is_tax_relaxation ? (
                            <a href="#">Claim Tax</a>
                          ) : (
                            <a href="#" disabled>Claim Tax</a>
                          )}
                        </td>
                      </tr>
                    </tbody>
                    ))}
                  </table>

                  <Pagination total={total} page={page} pageSetter={setPage} />

                </div>


              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      {/* --------FooterSection----------- */}

      <div>
        <Footer />
      </div>

    </>
  );
}

export default MyDonation;

import React from 'react';
import './MyDonation.css';
import { Container, Accordion } from 'react-bootstrap';
import CustomTab from '../../component/Navigation/customTabs/CustomTab';
import Footer from '../../component/footer/Footer';

const MyDonation = () => {
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
                <div className="col-12 table-section">
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
                    <tbody>
                      <tr>
                        <th>
                          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        </th>
                        <td>Plant Tree, Save Earth & Lives Secure the Future</td>
                        <td >20/05/2023</td>
                        <td>Nishant</td>
                        <td>₹400</td>
                        <td className='anchor'><a href="#">Claim</a></td>
                      </tr>
                      <tr>
                        <th>
                          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        </th>
                        <td>Help Mangaltai give 150 abandoned...</td>
                        <td>20/05/2023</td>
                        <td>Aman</td>
                        <td>₹700</td>
                        <td className='anchor'><a href="#" >Claim</a></td>
                      </tr>
                      <tr>
                        <th>
                          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        </th>
                        <td>Save 40 blind girls from....</td>
                        <td>20/05/2023</td>
                        <td>Rohit</td>
                        <td>₹900</td>
                        <td className='anchor'><a href="#">Claim</a></td>
                      </tr>
                      <tr>
                        <th>
                          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        </th>
                        <td>After fighting for India, former Air...</td>
                        <td>20/05/2023</td>
                        <td>Punit</td>
                        <td>₹200</td>
                        <td className='anchor'><a href="#">Claim</a></td>
                      </tr>
                    </tbody>
                  </table>
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

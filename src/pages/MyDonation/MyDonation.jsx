import React from 'react';
import './MyDonation.css';
import { Table, Button, Container, Row, Col,  Nav, Navbar,} from 'react-bootstrap';
import CustomTab from '../../component/Navigation/customTabs/CustomTab';

const MyDonation = () => {
  return (
    <>

<CustomTab activeLink={"MyDonation"} />

    <Container>
         <Table style={{width:'85%', marginLeft:'10%'}}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Donation Amount</th>
          <th>Fundraiser Name</th>
          <th>Category</th>
          <th>Details</th>
        </tr>
      </thead>

      <tbody className='tableCont'>
        <tr>
          <td>20/8/2022</td>
          <td>₹400</td>
          <td>Nishant Malhotra</td>
          <td>Medical</td>
          <td><a href="">View</a></td>
        </tr>
        <tr>
          <td>20/8/2022</td>
          <td>₹400</td>
          <td>Nishant Malhotra</td>
          <td>Medical</td>
          <td><a href="">View</a></td>
        </tr>
        <tr>
          <td>20/8/2022</td>
          <td>₹400</td>
          <td>Nishant Malhotra</td>
          <td>Medical</td>
          <td><a href="">View </a></td>
        </tr>
        <tr>
          <td>20/8/2022</td>
          <td>₹400</td>
          <td>Nishant Malhotra</td>
          <td>Medical</td>
          <td><a href="">View </a></td>
        </tr>
      </tbody>
    </Table>
    </Container>
    </>
  );
}

export default MyDonation;

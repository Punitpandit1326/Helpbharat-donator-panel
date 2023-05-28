import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./customTab.css"

const CustomTab = ({ activeLink }) => {

    const tabs = [
        {
            name: "My Profile",
            class: 'myprofile'
        },
        {
            name: "My Fundraiser",
            class: 'MyFundraiser'
        },
        {
            name: "My Donation",
            class: 'MyDonation'
        },
        {
            name: "My Comments",
            class: 'mycomments'
        },
    ]

    return (
        <>
            <Container>
                <Row>
                    <Col className='another-listNav'>
                        <ul>
                            {
                                tabs.map((item) => {
                                    return (
                                        <li> <Link to={`/${item.class}`} className={`customTabs ${(activeLink === item.class) ? 'active' : ''}`}>{item.name}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CustomTab

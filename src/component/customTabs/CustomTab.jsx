import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import "./customTab.css"
import { useRef } from 'react'

const CustomTab = ({ activeLink }) => {
    const [activeTab, setActiveTab] = useState()
    const location = useLocation();
    const activeTabRef = useRef(null);

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

    useEffect(() => {
        const currentTab = tabs.find(tab => location.pathname.includes(tab.class));
        if (currentTab) {
            setActiveTab(currentTab.class);
        }
    }, [location, tabs]);

    useEffect(() => {
        // Scroll to the active tab when it changes
        if (activeTabRef.current) {
            activeTabRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, [activeTab]);

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col className='another-listNav'>
                        <div style={{ overflowX: 'auto' }}>
                            <ul>
                                {
                                    tabs.map((item, index) => {
                                        return (
                                            <li key={index}>  <Link
                                                to={`/${item.class}`}
                                                className={`customTabs ${(activeTab === item.class) ? 'active' : ''}`}
                                                ref={activeTab === item.class ? activeTabRef : null}
                                            >{item.name}</Link></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>

        </React.Fragment>
    )
}

export default CustomTab

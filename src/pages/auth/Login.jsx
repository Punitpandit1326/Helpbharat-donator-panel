import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';
import { url } from '../../utils/url';
import Cookies from 'universal-cookie';
import { useAuth } from '../../App';
import { toast } from 'react-toastify';



const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });
    const { loggedIn, login } = useAuth();


    const hanldeSubmit = async (e) => {
        e.preventDefault();
        try {
            toast.info('Please wait...', { autoClose: false });
            const response = await fetch(`${url}signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userLogin),
            });
            const data = await response.json();
            console.log(data);

            if (!data.response.success) {
                console.log(data);
                toast.dismiss();
                toast.error('Error: ' + data.response.message, { autoClose: 5000 });
                return
            }
            const token = data.response.data.access_token;
            console.log(data.response.data.access_token, 'data');
            const cookie = new Cookies();
            const user = data.response.data.user;
            cookie.set('token_web', token)
            cookie.set('user', user)
            login();
            navigate("/");
            toast.dismiss();
        }
        catch (error) {
            console.log('api error throw', error);
            toast.dismiss(); // Hide the loading toast
            toast.error('An error occurred. Please try again later.', { autoClose: 5000 });
        }
    }

    useEffect(() => {
        hanldeSubmit();
        return () => toast.dismiss();
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserLogin({ ...userLogin, [name]: value });
    };

    return (
        <>
            <div className="signup">
                <div className="container">
                    <div className="form_box">

                        <form onSubmit={hanldeSubmit}>
                            <h2>Login </h2>
                            <p>Enter your details to get started</p>

                            <Tabs
                                defaultActiveKey="email"
                                id="uncontrolled-tab-example"
                                className="mb-3 w-100"
                            >
                                <Tab eventKey="email" title="Email Address">
                                    <div className="form-group mb-4">
                                        <label>Email </label>
                                        <input
                                            onChange={handleChange}
                                            type="email"
                                            name="email"
                                            value={userLogin.email}
                                            className="form-control" />
                                    </div>
                                    <div className="form-group mb-5">
                                        <label>Password</label>
                                        <input
                                            onChange={handleChange}
                                            value={userLogin.password}
                                            type="password"
                                            name="password"
                                            className="form-control"
                                        />
                                        {/* <IoIosUnlock /> */}
                                    </div>

                                    <button className="start" type="submit">Get Started</button>
                                    <Link to="/signup" className="account">Dont't Have Any Account Yet </Link>

                                    <p className='agree pt-2'>By continuing, you are agreeing to the<Link> Terms and Conditions</Link> and<Link> Privacy Policy.</Link></p>
                                </Tab>

                            </Tabs>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
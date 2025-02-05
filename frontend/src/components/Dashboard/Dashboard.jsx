import { Link } from 'react-router-dom';
import './style.css';
import { useUser } from "../UserProvider/UserProvider";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { logout } from '../utils/auth';
import Navbar from '../Navbar';
import Footer from '../Footer';



const Dashboard = () => {
    const { user } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const teamMembers = [
        {
            name: "OFFRES",
            role: "Trouver des offres",
            image: "src\\assets\\Mes_images\\destianation.jpg",
        },
        {
            name: "RESERVATIONS",
            role: "Faire des réservations",
            image: "src\\assets\\Mes_images\\travel-bags-airport.jpg",
        },
        {
            name: "VERIFICATION",
            role: "verifier les réservations",
            image: "src\\assets\\Mes_images\\17233017_2008.i301.001_personal_data_protection_gdpr_isometric_icons-07.jpg",
        },
    ];

    return (
        <>
            <div className='welcomewelcome'>
                <h3 className='welcomeh3 text-center'>
                    Bienvenue sur votre espace personnel <br /> ici vous pouvez trouver des offres et faire ou vérifier des réservations
                </h3>
            </div>
            <section id="team" className="team section">
                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Team</h2>
                    <div>
                        <span>Check Our</span> <span className="description-title">offers</span>
                    </div>
                </div>
                {/* End Section Title */}

                <div className="container">
                    <div className="row gy-5">
                        {teamMembers.map((member, index) => (
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={(index + 1) * 100} key={index}>
                                <div className="member">
                                    <div className="pic">
                                        <img src={member.image} className="img-fluid" alt={member.name} />
                                    </div>
                                    <div className="member-info">
                                        <h4>{member.name}</h4>
                                        <span>{member.role}</span>
                                        <Link to="/client-offers">
                                            <button className="btn btn-secondary">Voir offres</button>
                                        </Link>
                                        
                                        {/* <div className="social">
                                            <a href="#"><i className="bi bi-twitter-x"></i></a>
                                            <a href="#"><i className="bi bi-facebook"></i></a>
                                            <a href="#"><i className="bi bi-instagram"></i></a>
                                            <a href="#"><i className="bi bi-linkedin"></i></a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className='dash1'>
                <Navbar />
                <div className="dashboard">
                    <Link to="/client-offers">
                        <div id='offers' style={{ width: "450px", rowGap: "0px", margin: 0 }} className="dashboard-item">
                            <Link to="/client-offers">Offers</Link>
                        </div>
                    </Link>

                    <Link to="/client-reservations">
                        <div id='reservations' className="dashboard-item" style={{ width: "450px", rowGap: "0px", margin: 0 }}>
                            <Link to="/client-reservations">Reservations</Link>
                        </div>
                    </Link>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Dashboard;
import React, { useState, useEffect } from 'react'
import './Contact.css'
import Newsletter from './Newsletter'
import Search from './Search';
import Navbar from './Navbar';
import Loader from './Loader';
export default function Contact() {

    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)


    }, []);

    const iframeStyle = {
        border: '0',
        padding: '80px 30px',
    };
    return (
        loading ? <Loader /> :
            <>
                <Navbar />

                <section className='con-section'>
                    <h3>Connect & Collaborate: Contact Us</h3>
                    <br />
                    <div>
                        <p>Embark on a journey of connection and collaboration with us. Our doors are open, and we're eager to hear from you. Whether you have a project in mind, a partnership proposal, or simply want to explore synergies, we're here to make ideas come alive.
                             By reaching out to us, you're taking the first step towards meaningful collaboration.</p>
                    </div>
                </section>

                <Search />

                <div className='map'>
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3550.290528441921!2d78.03757878105031!3d27.1471477894241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1691574338884!5m2!1sen!2sin"
                        width="100%"
                        height="750px"
                        style={iframeStyle}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                </div>

                <div className='c-container'>
                    <div className='con-container'>
                        <div className='c-row'>
                            <div className="c-section-title c-pack">
                                <h2>Contact Me</h2>
                            </div>
                        </div>


                        <h3 className="contact-title c-pack">Have You Any Question ? </h3>
                        <h4 className="contact-sub-title c-pack">I'M AT YOUR SERVICES</h4>
                        <div className="c-row">

                            <div className="contact-info-item pack">
                                <div className="icon"><i className="fa fa-phone"></i></div>
                                <h4>Call Us On</h4>
                                <p>+91 9928609667</p>
                            </div>

                            <div className="contact-info-item pack">
                                <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
                                <h4>Office</h4>
                                <p>Agra</p>
                            </div>

                            <div className="contact-info-item pack">
                                <div className="icon"><i className="fa fa-envelope"></i></div>
                                <h4>Email</h4>
                                <p>sg423234@gmail.com</p>
                            </div>

                            <div className="contact-info-item c-pack">
                                <div className="icon"><i className="fa fa-globe-europe"></i></div>
                                <h4>Website</h4>
                                <p>www.Travello.com</p>
                            </div>

                        </div>
                        <h3 className="contact-title c-pack">SEND ME AN EMAIL </h3>
                        <h4 className="contact-sub-title c-pack">I'M VERY RESPONSIVE TO MESSAGE</h4>
                        <form action="" method="POST">
                            <div className="c-row">
                                <div className="contact-form c-pack">
                                    <div className="c-row">
                                        <div className="form-item col-6 c-pack">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="form-item col-6 c-pack">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-row">
                                        <div className="form-item col-12 c-pack">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Subject" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-row">
                                        <div className="form-item col-12 c-pack">
                                            <div className="form-group">
                                                <textarea className="form-control" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-row">
                                        <div className="form-item col-12 c-pack">
                                            <button type="submit" className="c-btn">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

                <Newsletter />
            </>
    )
}

import React, { useState, useEffect } from 'react'
import './Services.css'
import Loader from './Loader';
import Newsletter from './Newsletter'
import Search from './Search';
import Navbar from './Navbar';
export default function Services() {

    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)


    }, []);

    return (
        loading ? <Loader /> :
            <>

                <Navbar />
                
                <section className='service-section'>
                    <h3>Your Travel, Our Services</h3>
                    <br />
                    <div>
                        <p>Experience smooth and worry-free travel with <span>Travello </span> as Our dedicated team is committed to handling all the intricacies of your journey, allowing you to focus on making memories. From meticulous planning to on-the-spot assistance, we've got your back at every step of the way.</p>
                    </div>
                </section>

                <Search />

                <div className='getaway'>
                    <div className='about-row'>
                        <div className='pack-header'>
                            <h1>How to get Away</h1>

                        </div>
                    </div>
                    <div className='getaway-row'>
                        <div>
                            <img src='getaway1.webp' />

                            <h3>Book your Escape</h3>
                            <p>Choose your Outpost, cabin size, and dates. We’ll send you the exact address of your cabin upon booking.</p>

                        </div>
                        <div>
                            <img src='getaway2.webp'></img>
                            <h3>We’ll Do the Rest</h3>
                            <p>We’ll be in touch with everything you’ll need for your Getaway. Our team is available all day, every day by email and text should you need anything.</p>
                        </div>
                        <div>
                            <img src='getaway3.webp'></img>
                            <h3>Disconnect to Reconnect</h3>
                            <p>Lock away your phone, connect with those who matter most, and enjoy free time in nature. You’ll have everything you need to truly relax.</p>
                        </div>
                    </div>
                </div>

                <div className='service-banner'>
                    <div className='banner-left'>
                        <div className='sustainable__subtitle'>It's easy to do better</div>
                        <div className='sustainable__title'>
                            Sustainable
                            <br />
                            Travel
                        </div>
                        <p>Sustainable travel means traveling slow, with different transport, packing eco-friendly, stay local and much more!</p>
                        <a href='#' className='service-btn'>Sustainable travel tips</a>
                    </div>

                    <div className='banner-right'>
                        <div className='sustainable__articles'>
                            <div className='article-text-block'>
                                <div className='article-text-block__image'>
                                    <div className='article-text-block__image-link'>
                                        <img src='post2.webp' />
                                    </div>
                                </div>

                                <div className='article-text-block__content'>
                                    <h3 className='article-text-block__title'>13 Easy Tips to Reduce Plastic & Travel Plastic-Free</h3>

                                </div>
                            </div>

                            <div className='article-text-block'>
                                <div className='article-text-block__image'>
                                    <div className='article-text-block__image-link'>
                                        <img src='post1.webp' />
                                    </div>
                                </div>

                                <div className='article-text-block__content'>
                                    <h3 className='article-text-block__title'>Sustainable Travel Tips – 10 Easy Tips for You to Use Now!</h3>

                                </div>
                            </div>

                            <div className='article-text-block'>
                                <div className='article-text-block__image'>
                                    <div className='article-text-block__image-link'>
                                        <img src='post3.webp' />
                                    </div>
                                </div>

                                <div className='article-text-block__content'>
                                    <h3 className='article-text-block__title'>SHow to Become Vegetarian: 8 Super Simple Steps</h3>

                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
           

                <div className='our-services'>
                    <div className='pack-row'>
                        <div className='pack-header'>
                            <span className='sub-heading'>Our Services</span>
                            <h2>Why we're better than Others</h2>
                        </div>
                    </div>

                    <div className='servicesection-row'>
                        <div className='servicesection-row-div'>
                            <img src='paragliding.png' className='imager' />
                            <h3>Tours and Activities</h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                        </div>

                        <div className='servicesection-row-div'>
                            <img src='destination.png' className='imager' />
                            <h3>Travel Arrangements</h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                        </div>

                        <div className='servicesection-row-div'>
                            <img src='tourist.png' className='imager' />
                            <h3>Private Guide</h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                        </div>

                        <div className='servicesection-row-div'>
                            <img src='map.png' className='imager' />
                            <h3>Location Manager</h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                        </div>

                        <div className='servicesection-row-div'>
                            <img src='paragliding.png' className='imager' />
                            <h3>Group Travel</h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                        </div>

                        <div className='servicesection-row-div'>
                            <img src='map.png' className='imager' />
                            <h3>Emergency Support</h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                        </div>

                    </div>



                </div>

                <Newsletter />
            </>
    )
}

import React, { useState, useEffect } from 'react'
import './Package.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS
import Newsletter from './Newsletter'
import Navbar from './Navbar';
import Loader from './Loader';
import Search from './Search';

export default function Package() {


    const [loading, setLoading] = useState(false)


    useEffect(() => {
        // Initialize AOS here
        AOS.init({

        });

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }, []);

    return (
        loading ? <Loader /> :
            <>
                <Navbar />

                <section className='blog-section'>
                    <h3>Elevate Your Needs: Our Packages</h3>
                    <br />
                    <div>
                        <p>Elevate Your Experience with a curated selection of our meticulously crafted packages.Designed to meet your diverse needs and exceed expectations,
                            our packages bring a touch of distinction to every aspect of your journey. Whether you're seeking transformative solutions, innovative approaches,
                            or streamlined experiences,
                            our packages are designed to provide the ultimate value. Explore the possibilities, choose the package that resonates with your vision, and let us elevate your experience to new heights.</p>
                    </div>

                </section>

                <Search />


                <div className='naturereach'>
                    <div className='nr-small'>
                        <img src='naturereach1.webp' />
                    </div>
                    <div className='nr-big'>
                        <h3>Nature Within Reach</h3>
                        <p>At <span>Travello</span>, we believe in making space for more free time. An easy drive from the city, our tiny cabins are your window
                            into nature—giving you the wide-open space you need to rest and rediscover the best part of you.<span>Learn More...</span></p>
                    </div>
                    <div className='nr-small'>
                        <img src='naturereach2.webp' />
                    </div>
                </div>

                <div className='package-banner'>
                    <div>
                        <h3>Down to Earth</h3>
                        <p>Did you know... Every time you book a Getaway, we make a donation to <span>One Tree Planted.</span> </p>
                        <button className='pb-btn'>Book Your Escape</button>
                    </div>

                </div>

                <div className='package-container'>

                    <div className='pack-row'>
                        <div className='pack-header'>
                            <span className='sub-heading'>Our Collections</span>
                            <h2>Special Tour Packages</h2>
                        </div>
                    </div>

                    <div className='pack-row'>

                        <div className='pack-div' data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" data-aos-delay="100">
                            <div className='project-wrap'>
                                <a href='#' className='imaging' style={{ backgroundImage: `url("pic1.jpg")` }}  >
                                    <span className='price'>$550/person</span>
                                </a>

                                <div className='text'>
                                    <span className='days'>8 Days Tour</span>
                                    <h3>
                                        <a href='#'>Banaue Rice Terraces</a>
                                    </h3>

                                    <p className='location'>
                                        <span className='fa fa-map-marker'></span>
                                        Banaue, Ifugao, Philippines
                                    </p>

                                    <ul>
                                        <li><img src='bath.png' className='flaticon' /> <span  >  2</span></li>
                                        <li><img src='bed.png' className='flaticon' />  <span className=''>4</span></li>
                                        <li><img src='mountain.png' className='flaticon' />  <span className=''>Near Mountain</span> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='pack-div' data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" data-aos-delay="600">
                            <div className='project-wrap'  >
                                <a href='#' className='imaging' style={{ backgroundImage: `url("pic2.jpg")` }}  >
                                    <span className='price'>$550/person</span>
                                </a>

                                <div className='text'>
                                    <span className='days'>8 Days Tour</span>
                                    <h3>
                                        <a href='#'>Banaue Rice Terraces</a>
                                    </h3>

                                    <p className='location'>
                                        <span className='fa fa-map-marker'></span>
                                        Banaue, Ifugao, Philippines
                                    </p>

                                    <ul>
                                        <li><img src='bath.png' className='flaticon' /> <span  >  2</span></li>
                                        <li><img src='bed.png' className='flaticon' />  <span className=''>4</span></li>
                                        <li><img src='sunset.png' className='flaticon' />  <span className=''>Near Mountain</span> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='pack-div' data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" data-aos-delay="1000">
                            <div className='project-wrap'>
                                <a href='#' className='imaging' style={{ backgroundImage: `url("pic3.jpg")` }}  >
                                    <span className='price'>$550/person</span>
                                </a>

                                <div className='text'>
                                    <span className='days'>8 Days Tour</span>
                                    <h3>
                                        <a href='#'>Banaue Rice Terraces</a>
                                    </h3>

                                    <p className='location'>
                                        <span className='fa fa-map-marker'></span>
                                        Banaue, Ifugao, Philippines
                                    </p>

                                    <ul>
                                        <li><img src='bath.png' className='flaticon' /> <span  >  2</span></li>
                                        <li><img src='bed.png' className='flaticon' />  <span className=''>4</span></li>
                                        <li><img src='sunset.png' className='flaticon' />  <span className=''>Near Beach</span> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='pack-div' data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" data-aos-delay="100">
                            <div className='project-wrap'>
                                <a href='#' className='imaging' style={{ backgroundImage: `url("pic4.jpg")` }}  >
                                    <span className='price'>$550/person</span>
                                </a>

                                <div className='text'>
                                    <span className='days'>8 Days Tour</span>
                                    <h3>
                                        <a href='#'>Banaue Rice Terraces</a>
                                    </h3>

                                    <p className='location'>
                                        <span className='fa fa-map-marker'></span>
                                        Banaue, Ifugao, Philippines
                                    </p>

                                    <ul>
                                        <li><img src='bath.png' className='flaticon' /> <span  >  2</span></li>
                                        <li><img src='bed.png' className='flaticon' />  <span className=''>4</span></li>
                                        <li><img src='sunset.png' className='flaticon' />  <span className=''>Near Beach</span> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='pack-div' data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" data-aos-delay="600">
                            <div className='project-wrap'>
                                <a href='#' className='imaging' style={{ backgroundImage: `url("pic5.jpg")` }}  >
                                    <span className='price'>$550/person</span>
                                </a>

                                <div className='text'>
                                    <span className='days'>8 Days Tour</span>
                                    <h3>
                                        <a href='#'>Banaue Rice Terraces</a>
                                    </h3>

                                    <p className='location'>
                                        <span className='fa fa-map-marker'></span>
                                        Banaue, Ifugao, Philippines
                                    </p>

                                    <ul>
                                        <li><img src='bath.png' className='flaticon' /> <span  >  2</span></li>
                                        <li><img src='bed.png' className='flaticon' />  <span className=''>4</span></li>
                                        <li><img src='mountain.png' className='flaticon' />  <span className=''>Near Mountain</span> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='pack-div' data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" data-aos-delay="1000">
                            <div className='project-wrap'>
                                <a href='#' className='imaging' style={{ backgroundImage: `url("pic6.jpg")` }}  >
                                    <span className='price'>$550/person</span>
                                </a>

                                <div className='text'>
                                    <span className='days'>8 Days Tour</span>
                                    <h3>
                                        <a href='#'>Banaue Rice Terraces</a>
                                    </h3>

                                    <p className='location'>
                                        <span className='fa fa-map-marker'></span>
                                        Banaue, Ifugao, Philippines
                                    </p>

                                    <ul>
                                        <li><img src='bath.png' className='flaticon' /> <span  >  2</span></li>
                                        <li><img src='bed.png' className='flaticon' />  <span className=''>4</span></li>
                                        <li><img src='mountain.png' className='flaticon' />  <span className=''>Near Mountain</span> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pack-row'>

                        <div className='pack-div' data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" data-aos-delay="100">
                            <div className='project-wrap'>
                                <a href='#' className='imaging' style={{ backgroundImage: `url("pic1.jpg")` }}  >
                                    <span className='price'>$550/person</span>
                                </a>

                                <div className='text'>
                                    <span className='days'>8 Days Tour</span>
                                    <h3>
                                        <a href='#'>Banaue Rice Terraces</a>
                                    </h3>

                                    <p className='location'>
                                        <span className='fa fa-map-marker'></span>
                                        Banaue, Ifugao, Philippines
                                    </p>

                                    <ul>
                                        <li><img src='bath.png' className='flaticon' /> <span  >  2</span></li>
                                        <li><img src='bed.png' className='flaticon' />  <span className=''>4</span></li>
                                        <li><img src='mountain.png' className='flaticon' />  <span className=''>Near Mountain</span> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='pack-div' data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" data-aos-delay="600">
                            <div className='project-wrap'  >
                                <a href='#' className='imaging' style={{ backgroundImage: `url("pic2.jpg")` }}  >
                                    <span className='price'>$550/person</span>
                                </a>

                                <div className='text'>
                                    <span className='days'>8 Days Tour</span>
                                    <h3>
                                        <a href='#'>Banaue Rice Terraces</a>
                                    </h3>

                                    <p className='location'>
                                        <span className='fa fa-map-marker'></span>
                                        Banaue, Ifugao, Philippines
                                    </p>

                                    <ul>
                                        <li><img src='bath.png' className='flaticon' /> <span  >  2</span></li>
                                        <li><img src='bed.png' className='flaticon' />  <span className=''>4</span></li>
                                        <li><img src='sunset.png' className='flaticon' />  <span className=''>Near Mountain</span> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='pack-div' data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" data-aos-delay="1000">
                            <div className='project-wrap'>
                                <a href='#' className='imaging' style={{ backgroundImage: `url("pic3.jpg")` }}  >
                                    <span className='price'>$550/person</span>
                                </a>

                                <div className='text'>
                                    <span className='days'>8 Days Tour</span>
                                    <h3>
                                        <a href='#'>Banaue Rice Terraces</a>
                                    </h3>

                                    <p className='location'>
                                        <span className='fa fa-map-marker'></span>
                                        Banaue, Ifugao, Philippines
                                    </p>

                                    <ul>
                                        <li><img src='bath.png' className='flaticon' /> <span  >  2</span></li>
                                        <li><img src='bed.png' className='flaticon' />  <span className=''>4</span></li>
                                        <li><img src='sunset.png' className='flaticon' />  <span className=''>Near Beach</span> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='pack-div' data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" data-aos-delay="100">
                            <div className='project-wrap'>
                                <a href='#' className='imaging' style={{ backgroundImage: `url("pic4.jpg")` }}  >
                                    <span className='price'>$550/person</span>
                                </a>

                                <div className='text'>
                                    <span className='days'>8 Days Tour</span>
                                    <h3>
                                        <a href='#'>Banaue Rice Terraces</a>
                                    </h3>

                                    <p className='location'>
                                        <span className='fa fa-map-marker'></span>
                                        Banaue, Ifugao, Philippines
                                    </p>

                                    <ul>
                                        <li><img src='bath.png' className='flaticon' /> <span  >  2</span></li>
                                        <li><img src='bed.png' className='flaticon' />  <span className=''>4</span></li>
                                        <li><img src='sunset.png' className='flaticon' />  <span className=''>Near Beach</span> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='pack-div' data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" data-aos-delay="600">
                            <div className='project-wrap'>
                                <a href='#' className='imaging' style={{ backgroundImage: `url("pic5.jpg")` }}  >
                                    <span className='price'>$550/person</span>
                                </a>

                                <div className='text'>
                                    <span className='days'>8 Days Tour</span>
                                    <h3>
                                        <a href='#'>Banaue Rice Terraces</a>
                                    </h3>

                                    <p className='location'>
                                        <span className='fa fa-map-marker'></span>
                                        Banaue, Ifugao, Philippines
                                    </p>

                                    <ul>
                                        <li><img src='bath.png' className='flaticon' /> <span  >  2</span></li>
                                        <li><img src='bed.png' className='flaticon' />  <span className=''>4</span></li>
                                        <li><img src='mountain.png' className='flaticon' />  <span className=''>Near Mountain</span> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='pack-div' data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" data-aos-delay="1000">
                            <div className='project-wrap'>
                                <a href='#' className='imaging' style={{ backgroundImage: `url("pic6.jpg")` }}  >
                                    <span className='price'>$550/person</span>
                                </a>

                                <div className='text'>
                                    <span className='days'>8 Days Tour</span>
                                    <h3>
                                        <a href='#'>Banaue Rice Terraces</a>
                                    </h3>

                                    <p className='location'>
                                        <span className='fa fa-map-marker'></span>
                                        Banaue, Ifugao, Philippines
                                    </p>

                                    <ul>
                                        <li><img src='bath.png' className='flaticon' /> <span  >  2</span></li>
                                        <li><img src='bed.png' className='flaticon' />  <span className=''>4</span></li>
                                        <li><img src='mountain.png' className='flaticon' />  <span className=''>Near Mountain</span> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='blog-pagination'>
                        <ul className='pagination'>
                            <li className='page-item'>
                                <a href='#' className='page-link' aria-label='Previous'>
                                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                </a>
                            </li>

                            <li className='page-item'>
                                <a href='#' className='page-link'>
                                    1
                                </a>
                            </li>

                            <li className='page-item active'>
                                <a href='#' className='page-link' >
                                    2
                                </a>
                            </li>

                            <li className='page-item'>
                                <a href='#' className='page-link' aria-label='Nexts'>
                                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                        <span></span>
                    </div>

                </div>





                <Newsletter />
            </>
    )
}

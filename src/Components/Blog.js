import React, {useState, useEffect } from 'react'
import './Blog.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS
import Newsletter from './Newsletter'
import Navbar from './Navbar';
import Loader from './Loader';
import Search from './Search';
export default function Blog() {

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
            <h3>Our Blog: Insights & Ideas"</h3>
        <br />
        <div>
          <p>Welcome to Our Blog: Insights & Ideas. Here, we open the doors to a realm of knowledge and creativity. Immerse yourself in a collection of thought-provoking articles, 
            expert opinions, and innovative concepts that reflect the pulse of Travel Industry, challenges perceptions, and fosters a deeper understanding. Our blog is your gateway to staying informed, inspired, and engaged. Explore, learn, and ignite your own ideas as you navigate through a landscape of endless possibilities</p>
        </div>

        <a href='#' className='b-btn'><span>Add Your Valuable Blog<i class="fa fa-pencil-square-o" aria-hidden="true"></i></span></a>
            </section>

            <Search />

            <section className='blog-area'>
                <div className='container'>
                    <div className='blog-row'>
                        <div className='blog-left'>

                            <div className='blog_item' data-aos="fade-up" data-aos-easing="ease-in-out-cubic" data-aos-duration="1000" >
                                <div className='blog_item_img'>
                                    <img src='blog1.webp' className='card-img' />
                                    <a className='blog_item_date' href='#'>
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>
                                </div>

                                <div className='blog_details'>
                                    <a>
                                        <h2>Google inks pact for new 35-storey office</h2>
                                    </a>
                                    <p>   That dominion stars lights dominion divide years for fourth have don't stars is that
                                        he earth it first without heaven in place seed it second morning saying.</p>

                                    <ul className='blog-info-link'>
                                        <li>
                                            <a href='#'>
                                                <i className='fa fa-user'></i>
                                                Travel, Lifestyle
                                            </a>
                                        </li>

                                        <li>
                                            <a href='#'>
                                                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                                43
                                            </a>
                                        </li>

                                        <li>
                                            <a href='#'>
                                                <i className='fa fa-user'></i>
                                                03 Comments
                                            </a>
                                        </li>


                                    </ul>
                                </div>
                            </div>

                            <div className='blog_item' data-aos="fade-up" data-aos-easing="ease-in-out-cubic" data-aos-duration="2000">
                                <div className='blog_item_img'>
                                    <img src='blog_5.webp' className='card-img' />
                                    <a className='blog_item_date' href='#'>
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>
                                </div>

                                <div className='blog_details'>
                                    <a>
                                        <h2>Google inks pact for new 35-storey office</h2>
                                    </a>
                                    <p>   That dominion stars lights dominion divide years for fourth have don't stars is that
                                        he earth it first without heaven in place seed it second morning saying.</p>

                                    <ul className='blog-info-link'>
                                        <li>
                                            <a href='#'>
                                                <i className='fa fa-user'></i>
                                                Travel, Lifestyle
                                            </a>
                                        </li>

                                        <li>
                                            <a href='#'>
                                                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                                43
                                            </a>
                                        </li>

                                        <li>
                                            <a href='#'>
                                                <i className='fa fa-user'></i>
                                                03 Comments
                                            </a>
                                        </li>


                                    </ul>
                                </div>
                            </div>

                            <div className='blog_item' data-aos="fade-up" data-aos-easing="ease-in-out-cubic" data-aos-duration="2000">
                                <div className='blog_item_img'>
                                    <img src='blog2.jpg' className='card-img' />
                                    <a className='blog_item_date' href='#'>
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>
                                </div>

                                <div className='blog_details'>
                                    <a>
                                        <h2>Google inks pact for new 35-storey office</h2>
                                    </a>
                                    <p>   That dominion stars lights dominion divide years for fourth have don't stars is that
                                        he earth it first without heaven in place seed it second morning saying.</p>

                                    <ul className='blog-info-link'>
                                        <li>
                                            <a href='#'>
                                                <i className='fa fa-user'></i>
                                                Travel, Lifestyle
                                            </a>
                                        </li>

                                        <li>
                                            <a href='#'>
                                                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                                43
                                            </a>
                                        </li>

                                        <li>
                                            <a href='#'>
                                                <i className='fa fa-user'></i>
                                                03 Comments
                                            </a>
                                        </li>


                                    </ul>
                                </div>
                            </div>

                            <div className='blog_item' data-aos="fade-up" data-aos-easing="ease-in-out-cubic" data-aos-duration="2000">
                                <div className='blog_item_img'>
                                    <img src='blog3.jpg' className='card-img' />
                                    <a className='blog_item_date' href='#'>
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>
                                </div>

                                <div className='blog_details'>
                                    <a>
                                        <h2>Google inks pact for new 35-storey office</h2>
                                    </a>
                                    <p>   That dominion stars lights dominion divide years for fourth have don't stars is that
                                        he earth it first without heaven in place seed it second morning saying.</p>

                                    <ul className='blog-info-link'>
                                        <li>
                                            <a href='#'>
                                                <i className='fa fa-user'></i>
                                                Travel, Lifestyle
                                            </a>
                                        </li>

                                        <li>
                                            <a href='#'>
                                                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                                43
                                            </a>
                                        </li>

                                        <li>
                                            <a href='#'>
                                                <i className='fa fa-user'></i>
                                                03 Comments
                                            </a>
                                        </li>


                                    </ul>
                                </div>
                            </div>

                            <div className='blog_item' data-aos="fade-up" data-aos-easing="ease-in-out-cubic" data-aos-duration="2000">
                                <div className='blog_item_img'>
                                    <img src='blog4.jpg' className='card-img' />
                                    <a className='blog_item_date' href='#'>
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>
                                </div>

                                <div className='blog_details'>
                                    <a>
                                        <h2>Google inks pact for new 35-storey office</h2>
                                    </a>
                                    <p>   That dominion stars lights dominion divide years for fourth have don't stars is that
                                        he earth it first without heaven in place seed it second morning saying.</p>

                                    <ul className='blog-info-link'>
                                        <li>
                                            <a href='#'>
                                                <i className='fa fa-user'></i>
                                                Travel, Lifestyle
                                            </a>
                                        </li>

                                        <li>
                                            <a href='#'>
                                                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                                43
                                            </a>
                                        </li>

                                        <li>
                                            <a href='#'>
                                                <i className='fa fa-user'></i>
                                                03 Comments
                                            </a>
                                        </li>


                                    </ul>
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
                            </div>

                        </div>

                        <div className='blog-right' >
                            <div className='blog_right_sidebar'>
                                <aside className='single_sidebar_widget search_widget'>
                                    <form>
                                        <div className='form-group'>
                                            <div className='input-group'>
                                                <input type='text' className='form-control' placeholder='Search Keyword' />
                                                <div className='input-group-append'>
                                                    <button className='boxed-btn2'>Search</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </aside>

                                <aside className='single_sidebar_widget post_category_widget'>
                                    <h4 className='widget_title'>Category</h4>
                                    <ul className='list cat-list'>
                                        <li>
                                            <a href='#'>
                                                <p>Restaurent Food (37)</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <p>Travel news (10)</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <p>Modern technology (03)</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <p>Product (11)</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <p>Inspirational (09)</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <p>Health Care (21)</p>
                                            </a>
                                        </li>
                                    </ul>
                                </aside>

                                <aside className='single_sidebar_widget popular_post_widget'>
                                    <h3 className='widget_title'>Recent Post</h3>
                                    <div className='media post_item'>
                                        <img src='post1.webp' />
                                        <div className='media-body'>
                                            <a href='#'>
                                                <h3>From life was you fish...</h3>
                                            </a>
                                            <p>12 January 2022</p>
                                        </div>
                                    </div>
                                    <div className='media post_item'>
                                        <img src='post2.webp' />
                                        <div className='media-body'>
                                            <a href='#'>
                                                <h3>The Amazing Hubble</h3>
                                            </a>
                                            <p>02 hours ago</p>
                                        </div>
                                    </div>
                                    <div className='media post_item'>
                                        <img src='post3.webp' />
                                        <div className='media-body'>
                                            <a href='#'>
                                                <h3>Astronomy Or Astrology</h3>
                                            </a>
                                            <p>02 hours ago</p>
                                        </div>
                                    </div>
                                    <div className='media post_item'>
                                        <img src='post4.webp' />
                                        <div className='media-body'>
                                            <a href='#'>
                                                <h3>Asteroids telescope</h3>
                                            </a>
                                            <p>01 hours ago</p>
                                        </div>
                                    </div>
                                </aside>

                                <aside className='single_sidebar_widget tag_cloud_widget'>
                                    <h3 className='widget_title'>Tag Clouds</h3>
                                    <ul className='list'>
                                        <li> <a href='#'>projects</a> </li>
                                        <li> <a href='#'>love</a> </li>
                                        <li> <a href='#'>technology</a> </li>
                                        <li> <a href='#'>travel</a> </li>
                                        <li> <a href='#'>life style</a> </li>
                                        <li> <a href='#'>design</a> </li>
                                        <li> <a href='#'>illustration</a> </li>
                                    </ul>
                                </aside>

                                <aside className='single_sidebar_widget instagram_feeds'>
                                    <h3 className='widget_title'>Instagram Feeds</h3>
                                    <ul className='instagram_row '>
                                        <li>
                                            <a href='#'>
                                                <img src='post5.webp' />
                                            </a>
                                        </li>

                                        <li>
                                            <a href='#'>
                                                <img src='post6.webp' />
                                            </a>
                                        </li>

                                        <li>
                                            <a href='#'>
                                                <img src='post7.webp' />
                                            </a>
                                        </li>

                                        <li>
                                            <a href='#'>
                                                <img src='post8.webp' />
                                            </a>
                                        </li>

                                        <li>
                                            <a href='#'>
                                                <img src='post9.webp' />
                                            </a>
                                        </li>

                                        <li>
                                            <a href='#'>
                                                <img src='post10.webp' />
                                            </a>
                                        </li>
                                    </ul>


                                </aside>

                                <aside className='single_sidebar_widget newsletter_widget'>
                                    <h3 className='widget_title'>Newsletter</h3>
                                    <form>
<div className='form-group'>
<input type='email' className='form-control' placeholder='Your Email'/>
</div>
<button className='boxed-btn btn_1'>Subscribe</button>
                                    </form>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Newsletter />
        </>
    )
}

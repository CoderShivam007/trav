import React from 'react'
import './Home.css'
export default function Newsletter() {
  return (
    <div className='newsletter-section'>
    <div className='parallax_background parallax-windoow' data-parallax="scroll" ></div>
    <div className='news-container'>
        <div className='cols'>
            <div className='newsletter'>
                <div className='newsletter_title_container'>
                    <div className='newsletter_title'>Subscribe to our newsletter to get the latest trends & news</div>
                    <div className='newsletter_subtitle'>Join our database NOW!</div>
                </div>

                <div className='newsletter_form_container'>
                    <form action='#' className='newsletter_form' id='newsletter_form'>
                        <div className='inputter'>
                            <div>
                                <input type='text' required className='newsletter_input newsletter_input_name' id='newsletter_input_name' placeholder='Name' />
                            </div>
                            <div>
                                <input type='email' required className='newsletter_input newsletter_input_email' id='newsletter_input_email' placeholder='Your Email' />

                            </div>

                            <div>
                                <button type='submit' className='newsletter_button'>Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className='footer_contact_row'>
            <div className='colu'>
                <div className='footer_contact_col'>
                    <div className='footer_contact_item'>
                        <div className='footer_contact_icon'>
                            <img src='signpost.png' />
                        </div>
                        <div className='footer_contact_title'>give us a call</div>
                        <div className='footer_contact_list'>
                            <ul>
                                <li>Office Landline: +44 5567 32 664 567</li>
                                <li>Mobile: +44 5567 89 3322 332</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer_contact_col'>
                    <div className='footer_contact_item'>
                        <div className='footer_contact_icon'>
                            <img src='trekking.png' />
                        </div>
                        <div className='footer_contact_title'>COME & DROP BY</div>
                        <div className='footer_contact_list'>
                            <ul>
                                <li>4124 Barnes Street, Sanford,</li>
                                <li>FL 32771</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer_contact_col'>
                    <div className='footer_contact_item'>
                        <div className='footer_contact_icon'>
                            <img src='travel.png' />
                        </div>
                        <div className='footer_contact_title'>SEND US A MESSAGE</div>
                        <div className='footer_contact_list'>
                            <ul>
                                <li>sg423234g@gmail.com</li>
                                <li>Office@travello.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className='col'>
        <span className='foot'> Copyright ©2023 All rights reserved | This template is made by <i class="fa fa-user-secret" aria-hidden="true"></i></span> <span className='aname'>Shivam Gupta</span>
    </div>
</div>
  )
}

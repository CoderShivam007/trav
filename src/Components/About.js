import React, { useEffect } from 'react'
import './About.css'
import Newsletter from './Newsletter'
import Search from './Search';
import Navbar from './Navbar';

export default function About() {


  useEffect(() => {

    let valuedisplay = document.querySelectorAll(".mc");
    let interval = 5000;
    let count = 0;


    window.onscroll = function () {
      if (window.scrollY >= 165 && count == 0) {
        count++;
        valuedisplay.forEach((value) => {
          let startvalue = 0;
          let end = parseInt(value.getAttribute("data-target"));
          let duration = Math.floor(interval / end);
          let counter = setInterval(() => {
            startvalue += 1;
            value.textContent = startvalue;
            if (startvalue === end) {
              clearInterval(counter);
            }
          }, duration);
        });
      }


    }
    return () => {
      valuedisplay.forEach((value) => {
        value.textContent = 0; // Reset the value to 0 when the component unmounts
      });
    };




  }, []);







  return (

    <>

      <Navbar />

      <div className='about-section'>
        
        <h3>Unveiling Our Purpose</h3>
        <br />
        <div>
          <p>Experience smooth and worry-free travel with <span>Travello </span> as Our dedicated team is committed to handling all the intricacies of your journey, allowing you to focus on making memories. From meticulous planning to on-the-spot assistance, we've got your back at every step of the way.</p>
        </div>
        </div>

      <Search />

      <div className='about-container'>
        <div className='about-row'>
          <span className='t-sub'>simply amazing places</span>
          <div className='t'>
            <h2>A few words about us</h2>
          </div>

        </div>

        <div className='about-content'>
          <div className='left-div'>
            <div className='text_highlight'>
              Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet .Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.
            </div>

            <div className='about_text'>
              <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet .Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed eu laoreet ante, sollicitudin volutpat quam. Vestibulum posuere malesuada ultrices. In pulvinar rhoncus lacus at aliquet. Nunc vitae lacus
                varius, auctor nisi sit amet, consectetur mauris. Curabitur sodales semper est, vel faucibus
                urna laoreet vel. Ut justo diam, sodales non pulvinar at, vulputate quis neque. Etiam aliquam purus vel ultricies consequat.</p>
            </div>

            <div className='about-button button'>
              <a href='#' className=''>Read More...</a>
            </div>
          </div>
          <div className='right-div'></div>
        </div>


      </div>

      <div className='milesstone'>

        <div className='mdiv'>
          <div className='milestone'>
            <div className='milestone_icon'>
              <img src='mountain.png' />
            </div>
            <div className='milestone_counter' >
              <span className='mc' data-target="5">0</span>+
            </div>
            <div className='milestone_text'>Year's Experience</div>
          </div>
        </div>
        <div className='mdiv'>
          <div className='milestone'>
            <div className='milestone_icon'>
              <img src='sunset.png' />
            </div>
            <div className='milestone_counter'>
              <span className='mc' data-target="265">0</span>
            </div>
            <div className='milestone_text'>Active Plans</div>
          </div>
        </div>

        <div className='mdiv'>
          <div className='milestone'>
            <div className='milestone_icon'>
              <img src='traveler.png' />
            </div>
            <div className='milestone_counter'>
              <span className='mc' data-target="800">0</span>+
            </div>
            <div className='milestone_text'>Happy Constumers</div>
          </div>
        </div>

        <div className='mdiv'>
          <div className='milestone'>
            <div className='milestone_icon'>
              <img src='plain.png' />
            </div>
            <div className='milestone_counter'>
              <span className='mc' data-target="27">0</span>
            </div>

            <div className='milestone_text'>Countries</div>
          </div>
        </div>

      </div>

      <div className='choose-section'>
        <div className='why'>
          <div className='about-row'>
            <span className='t-sub'>simply amazing places</span>
            <div className='t'>
              <h2>Why Choose Us ???</h2>
            </div>
          </div>

          <div className='why-row'>
            <div className='why-column'>
              <div className='why_item'>
                <div className='why_image'>
                  <img src='why1.jpg' />
                  <div className='why_icon'>
                    <img src='plain.png' />
                  </div>
                </div>

                <div className='why_content'>
                  <div className='why_title'>Fast Services</div>
                  <div className='why_text'>
                    <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='why-column'>
              <div className='why_item'>
                <div className='why_image'>
                  <img src='team.jpg' />
                  <div className='why_icon'>
                    <img src='traveler.png' />
                  </div>
                </div>

                <div className='why_content'>
                  <div className='why_title'>Great Team</div>
                  <div className='why_text'>
                    <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='why-column'>
              <div className='why_item'>
                <div className='why_image'>
                  <img src='why2.jpg' />
                  <div className='why_icon'>
                    <img src='sunset.png' />
                  </div>
                </div>

                <div className='why_content'>
                  <div className='why_title'>Best Deals</div>
                  <div className='why_text'>
                    <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>

      <div className='team-section'>
        <div className='about-row'>
          <span className='t-sub'>Highly Talented People</span>
          <div className='t'>
            <h2>Meet the Team</h2>
          </div>

          <div className='team-row'>
            <div className='team-div'>
              <div className='box'>
                <div className='content'>
                  <img src='t1.jpg' />
                  <h2>Sonam Bhardawaj<br />
                    <span>UX/UI Designer</span>
                    <br />
                    <div>
                      <i className='fab fa-facebook'></i>
                      <i className='fab fa-instagram'> </i>
                      <i className='fab fa-twitter'></i>
                    </div>
                  </h2>

                </div>
              </div>
            </div>

            <div className='team-div'>
              <div className='box'>
                <div className='content'>
                  <img src='t2.jpg' />
                  <h2>Rahul Bhatt<br />
                    <span>Frontend Developer</span>
                    <br />
                    <div className='div'>
                      <i className='fab fa-facebook'></i>
                      <i className='fab fa-instagram'> </i>
                      <i className='fab fa-twitter'></i>
                    </div>
                  </h2>

                </div>
              </div>
            </div>

            <div className='team-div'>
              <div className='box'>
                <div className='content'>
                  <img src='t3.jpg' />
                  <h2>Shivam Gupta<br />
                    <span>Backend Developer</span>
                    <br />
                    <div className='div'>
                      <i className='fab fa-facebook'></i>
                      <i className='fab fa-instagram'> </i>
                      <i className='fab fa-twitter'></i>
                    </div>
                  </h2>

                </div>
              </div>
            </div>

            <div className='team-div'>
              <div className='box'>
                <div className='content'>
                  <img src='t4.jpg' />
                  <h2>Ram Mehta<br />
                    <span>Database Admin</span>
                    <br />
                    <div className='div'>
                      <i className='fab fa-facebook'></i>
                      <i className='fab fa-instagram'> </i>
                      <i className='fab fa-twitter'></i>
                    </div>
                  </h2>

                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      <Newsletter />
    </>
  )
}

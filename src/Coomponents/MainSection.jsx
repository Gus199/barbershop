import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import Image1 from '../assets/images/hero-banner.jpg';
import Image2 from '../assets/images/pricing-bg.jpg';
import Image3 from '../assets/images/pricing-1.jpg';
import ServicesWeProvid from './ServicesWeProvid/ServicesWeProvid';
import LatestPhotoGallery from './LatestPhotoGallery/LatestPhotoGallery';

export default function MainSection() {
  return (
    <>
      <main>
        <article>
          {/* 
      <!-- 
        - #HERO
      --> */}

          <section
            className='section hero has-before has-bg-image'
            id='home'
            aria-label='home'
            style={{ backgroundImage: `url(${Image1})` }}
          >
            <div className='container'>
              <h1 className='h1 hero-title'>Barbers & Hair Cutting</h1>

              <p className='hero-text'>
                Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                suspendisse ultrices gravida
              </p>
              {/* 
              <a href='#' className='btn has-before'>
                <span className='span'>Explore Our Services</span>
                {/* */}
              {/* <ion-icon name='arrow-forward' aria-hidden='true'></ion-icon> */}
              {/* </a> */}
              <FaArrowRight name='arrow-forward' aria-hidden='true' />
            </div>
          </section>

          {/* 
      <!-- 
        - #SERVICE
      --> */}

          <section className='section service' id='services' aria-label='services'>
            <div className='container'>
              <h2 className='h2 section-title text-center'>Service We Provide</h2>

              <p className='section-text text-center'>
                Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua
                suspendisse
              </p>
              <ServicesWeProvid />
              {/* Services We Provide Started Here  */}
              {/* <ul className='grid-list'>
                <li>
                  <div className='service-card'>
                    <div className='card-icon'>
                      <i className='flaticon-salon'></i>
                    </div>

                    <h3 className='h3'>
                      <a href='#' className='card-title'>
                        Hair Cutting Style
                      </a>
                    </h3>

                    <p className='card-text'>
                      Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <a href='#' className='card-btn' aria-label='more'>
                      <ion-icon name='arrow-forward' aria-hidden='true'></ion-icon>
                    </a>
                  </div>
                </li>

                <li>
                  <div className='service-card'>
                    <div className='card-icon'>
                      <i className='flaticon-shampoo'></i>
                    </div>

                    <h3 className='h3'>
                      <a href='#' className='card-title'>
                        Hair Washing
                      </a>
                    </h3>

                    <p className='card-text'>
                      Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <a href='#' className='card-btn' aria-label='more'>
                      <ion-icon name='arrow-forward' aria-hidden='true'></ion-icon>
                    </a>
                  </div>
                </li>

                <li>
                  <div className='service-card'>
                    <div className='card-icon'>
                      <i className='flaticon-hot-stone'></i>
                    </div>

                    <h3 className='h3'>
                      <a href='#' className='card-title'>
                        Body Treatments
                      </a>
                    </h3>

                    <p className='card-text'>
                      Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <a href='#' className='card-btn' aria-label='more'>
                      <ion-icon name='arrow-forward' aria-hidden='true'></ion-icon>
                    </a>
                  </div>
                </li>

                <li>
                  <div className='service-card'>
                    <div className='card-icon'>
                      <i className='flaticon-treatment'></i>
                    </div>

                    <h3 className='h3'>
                      <a href='#' className='card-title'>
                        Beauty & Spa
                      </a>
                    </h3>

                    <p className='card-text'>
                      Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <a href='#' className='card-btn' aria-label='more'>
                      <ion-icon name='arrow-forward' aria-hidden='true'></ion-icon>
                    </a>
                  </div>
                </li>

                <li>
                  <div className='service-card'>
                    <div className='card-icon'>
                      <i className='flaticon-shaving-razor'></i>
                    </div>

                    <h3 className='h3'>
                      <a href='#' className='card-title'>
                        Stylist Shaving
                      </a>
                    </h3>

                    <p className='card-text'>
                      Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <a href='#' className='card-btn' aria-label='more'>
                      <ion-icon name='arrow-forward' aria-hidden='true'></ion-icon>
                    </a>
                  </div>
                </li>

                <li>
                  <div className='service-card'>
                    <div className='card-icon'>
                      <i className='flaticon-hair-dye'></i>
                    </div>

                    <h3 className='h3'>
                      <a href='#' className='card-title'>
                        Multi Hair Colors
                      </a>
                    </h3>

                    <p className='card-text'>
                      Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <a href='#' className='card-btn' aria-label='more'>
                      <ion-icon name='arrow-forward' aria-hidden='true'></ion-icon>
                    </a>
                  </div>
                </li>
              </ul> */}
              {/* Services We Provide End Here  */}
            </div>
          </section>

          {/* <!-- 
        - #PRICING
      --> */}

          <section
            className='section pricing has-bg-image has-before'
            id='pricing'
            aria-label='pricing'
            style={{ backgroundImage: `url(${Image1})` }}
          >
            <div className='container'>
              <h2 className='h2 section-title text-center'>Awesome Pricing Plan</h2>

              <p className='section-text text-center'>
                Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua
                suspendisse
              </p>

              <div className='pricing-tab-container'>
                <ul className='tab-filter'>
                  <li>
                    <button className='filter-btn active' data-filter-btn='all'>
                      <div className='btn-icon'>
                        <i className='flaticon-beauty-salon' aria-hidden='true'></i>
                      </div>

                      <p className='btn-text'>All Pricing</p>
                    </button>
                  </li>

                  <li>
                    <button className='filter-btn' data-filter-btn='beauty-spa'>
                      <div className='btn-icon'>
                        <i className='flaticon-relax' aria-hidden='true'></i>
                      </div>

                      <p className='btn-text'>Beauty & Spa</p>
                    </button>
                  </li>

                  <li>
                    <button className='filter-btn' data-filter-btn='body-treatments'>
                      <div className='btn-icon'>
                        <i className='flaticon-massage' aria-hidden='true'></i>
                      </div>

                      <p className='btn-text'>Body Treatments</p>
                    </button>
                  </li>

                  <li>
                    <button className='filter-btn' data-filter-btn='face-washing'>
                      <div className='btn-icon'>
                        <i className='flaticon-spa' aria-hidden='true'></i>
                      </div>

                      <p className='btn-text'>Face Washing</p>
                    </button>
                  </li>

                  <li>
                    <button className='filter-btn' data-filter-btn='meditations'>
                      <div className='btn-icon'>
                        <i className='flaticon-yoga' aria-hidden='true'></i>
                      </div>

                      <p className='btn-text'>Meditations</p>
                    </button>
                  </li>

                  <li>
                    <button className='filter-btn' data-filter-btn='shaving'>
                      <div className='btn-icon'>
                        <i className='flaticon-razor-blade' aria-hidden='true'></i>
                      </div>

                      <p className='btn-text'>Shaving</p>
                    </button>
                  </li>
                </ul>

                <ul className='grid-list'>
                  <li data-filter='shaving'>
                    <div className='pricing-card'>
                      <figure className='card-banner img-holder' style={{ width: 90, height: 90 }}>
                        <img src={Image3} width='90' height='90' alt='Hair Cutting & Fitting' className='img-cover' />
                        {/* <img src={assets.logo} alt='' className='log' /> */}
                      </figure>

                      <div className='wrapper'>
                        <h3 className='h3 card-title'>Hair Cutting & Fitting</h3>

                        <p className='card-text'>Clean & simple 30-40 minutes</p>
                      </div>

                      <data className='card-price' value='89'>
                        $89
                      </data>
                    </div>
                  </li>

                  <li data-filter='shaving'>
                    <div className='pricing-card'>
                      <figure className='card-banner img-holder' style={{ width: 90, height: 90 }}>
                        <img
                          src='./assets/images/pricing-2.jpg'
                          width='90'
                          height='90'
                          alt='Shaving & Facial'
                          className='img-cover'
                        />
                      </figure>

                      <div className='wrapper'>
                        <h3 className='h3 card-title'>Shaving & Facial</h3>

                        <p className='card-text'>Clean & simple 30-40 minutes</p>
                      </div>

                      <data className='card-price' value='45'>
                        $45
                      </data>
                    </div>
                  </li>

                  <li data-filter='face-washing'>
                    <div className='pricing-card'>
                      <figure className='card-banner img-holder' style={{ width: 90, height: 90 }}>
                        <img
                          src='./assets/images/pricing-3.jpg'
                          width='90'
                          height='90'
                          alt='Hair Color & Wash'
                          className='img-cover'
                        />
                      </figure>

                      <div className='wrapper'>
                        <h3 className='h3 card-title'>Hair Color & Wash</h3>

                        <p className='card-text'>Clean & simple 30-40 minutes</p>
                      </div>

                      <data className='card-price' value='35'>
                        $35
                      </data>
                    </div>
                  </li>

                  <li data-filter='body-treatments'>
                    <div className='pricing-card'>
                      <figure className='card-banner img-holder' style={{ width: 90, height: 90 }}>
                        <img
                          src='./assets/images/pricing-4.jpg'
                          width='90'
                          height='90'
                          alt='Body Massage'
                          className='img-cover'
                        />
                      </figure>

                      <div className='wrapper'>
                        <h3 className='h3 card-title'>Body Massage</h3>

                        <p className='card-text'>Clean & simple 30-40 minutes</p>
                      </div>

                      <data className='card-price' value='56'>
                        $56
                      </data>
                    </div>
                  </li>

                  <li data-filter='beauty-spa'>
                    <div className='pricing-card'>
                      <figure className='card-banner img-holder' style={{ width: 90, height: 90 }}>
                        <img
                          src='./assets/images/pricing-5.jpg'
                          width='90'
                          height='90'
                          alt='Beauty & Spa'
                          className='img-cover'
                        />
                      </figure>

                      <div className='wrapper'>
                        <h3 className='h3 card-title'>Beauty & Spa</h3>

                        <p className='card-text'>Clean & simple 30-40 minutes</p>
                      </div>

                      <data className='card-price' value='27'>
                        $27
                      </data>
                    </div>
                  </li>

                  <li data-filter='face-washing'>
                    <div className='pricing-card'>
                      <figure className='card-banner img-holder' style={{ width: 90, height: 90 }}>
                        <img
                          src='./assets/images/pricing-6.jpg'
                          width='90'
                          height='90'
                          alt='Facial & Face Wash'
                          className='img-cover'
                        />
                      </figure>

                      <div className='wrapper'>
                        <h3 className='h3 card-title'>Facial & Face Wash</h3>

                        <p className='card-text'>Clean & simple 30-40 minutes</p>
                      </div>

                      <data className='card-price' value='63'>
                        $63
                      </data>
                    </div>
                  </li>

                  <li data-filter='body-treatments'>
                    <div className='pricing-card'>
                      <figure className='card-banner img-holder' style={{ width: 90, height: 90 }}>
                        <img
                          src='./assets/images/pricing-7.jpg'
                          width='90'
                          height='90'
                          alt='Backbone Massage'
                          className='img-cover'
                        />
                      </figure>

                      <div className='wrapper'>
                        <h3 className='h3 card-title'>Backbone Massage</h3>

                        <p className='card-text'>Clean & simple 30-40 minutes</p>
                      </div>

                      <data className='card-price' value='43'>
                        $43
                      </data>
                    </div>
                  </li>

                  <li data-filter='meditations'>
                    <div className='pricing-card'>
                      <figure className='card-banner img-holder' style={{ width: 90, height: 90 }}>
                        <img
                          src='./assets/images/pricing-8.jpg'
                          width='90'
                          height='90'
                          alt='Meditation & Massage'
                          className='img-cover'
                        />
                      </figure>

                      <div className='wrapper'>
                        <h3 className='h3 card-title'>Meditation & Massage</h3>

                        <p className='card-text'>Clean & simple 30-40 minutes</p>
                      </div>

                      <data className='card-price' value='74'>
                        $74
                      </data>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* <!-- 
        - #GALLERY
      --> */}
          <LatestPhotoGallery />
          {/* 
      <!-- 
        - #APPOINTMENT
      --> */}

          <section className='section appoin' id='appointment' aria-label='appointment'>
            <div className='container'>
              <div className='appoin-card'>
                <figure className='card-banner img-holder' style={{ width: 250, height: 774 }}>
                  <img
                    src='./assets/images/appoin-banner-1.jpg'
                    width='250'
                    height='774'
                    loading='lazy'
                    alt=''
                    className='img-cover'
                  />
                </figure>

                <div className='card-content'>
                  <h2 className='h2 section-title'>Make Appointment</h2>

                  <p className='section-text'>
                    Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua
                    suspendisse
                  </p>

                  <form action='' className='appoin-form'>
                    <div className='input-wrapper'>
                      <input type='text' name='name' placeholder='Your Full Name' required className='input-field' />

                      <input
                        type='email'
                        name='email_address'
                        placeholder='Email Address'
                        required
                        className='input-field'
                      />
                    </div>

                    <div className='input-wrapper'>
                      <input type='text' name='phone' placeholder='Phone Number' required className='input-field' />

                      <select name='category' className='input-field'>
                        <option value='Select category'>Select category</option>
                        <option value='Beauty & spa'>Beauty & spa</option>
                        <option value='Body massage'>Body massage</option>
                        <option value='Shaving & Facial'>Shaving & Facial</option>
                        <option value='Hair Color'>Hair Color</option>
                      </select>
                    </div>

                    <input type='date' name='date' required className='input-field date' />

                    <textarea name='message' placeholder='Write Message' required className='input-field'></textarea>

                    <button type='submit' className='form-btn'>
                      <span className='span'>Appointment Now</span>

                      <ion-icon name='arrow-forward' aria-hidden='true'></ion-icon>
                    </button>
                  </form>
                </div>

                <figure className='card-banner img-holder' style={{ width: 250, height: 774 }}>
                  <img
                    src='./assets/images/appoin-banner-2.jpg'
                    width='250'
                    height='774'
                    loading='lazy'
                    alt=''
                    className='img-cover'
                  />
                </figure>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

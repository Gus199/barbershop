import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-top'>
        <div className='container'>
          <ul className='header-top-list'>
            <li className='header-top-item'>
              <ion-icon name='call-outline' aria-hidden='true'></ion-icon>

              <p className='item-title'>Call Us :</p>

              <a href='tel:01234567895' className='item-link'>
                012 (345) 67 895
              </a>
            </li>

            <li className='header-top-item'>
              <ion-icon name='time-outline' aria-hidden='true'></ion-icon>

              <p className='item-title'>Opening Hour :</p>

              <p className='item-text'>Sunday - Friday, 08 am - 09 pm</p>
            </li>

            <li>
              <ul className='social-list'>
                <li>
                  <a href='#' className='social-link'>
                    <ion-icon name='logo-facebook'></ion-icon>
                  </a>
                </li>

                <li>
                  <a href='#' className='social-link'>
                    <ion-icon name='logo-twitter'></ion-icon>
                  </a>
                </li>

                <li>
                  <a href='#' className='social-link'>
                    <ion-icon name='logo-youtube'></ion-icon>
                  </a>
                </li>

                <li>
                  <a href='#' class='social-link'>
                    <ion-icon name='chatbubble-ellipses-outline'></ion-icon>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class='header-bottom' data-header>
        <div class='container'>
          <a href='#' class='logo'>
            Tizi Salon
            <span class='span'>Hair Salon</span>
          </a>

          <nav class='navbar container' data-navbar>
            <ul class='navbar-list'>
              <li class='navbar-item'>
                <a href='#home' class='navbar-link' data-nav-link>
                  Home
                </a>
              </li>

              <li class='navbar-item'>
                <a href='#services' class='navbar-link' data-nav-link>
                  Services
                </a>
              </li>

              <li class='navbar-item'>
                <a href='#pricing' class='navbar-link' data-nav-link>
                  Pricing
                </a>
              </li>

              <li class='navbar-item'>
                <a href='#gallery' class='navbar-link' data-nav-link>
                  Gallery
                </a>
              </li>

              <li class='navbar-item'>
                <a href='#appointment' class='navbar-link' data-nav-link>
                  Appointment
                </a>
              </li>

              <li class='navbar-item'>
                <a href='#' class='navbar-link' data-nav-link>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <button class='nav-toggle-btn' aria-label='toggle menu' data-nav-toggler>
            <ion-icon name='menu-outline' aria-hidden='true'></ion-icon>
          </button>

          <a href='#' class='btn has-before'>
            <span class='span'>Appointment</span>

            <ion-icon name='arrow-forward' aria-hidden='true'></ion-icon>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

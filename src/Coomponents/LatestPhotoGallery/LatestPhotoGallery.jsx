import React from 'react';
import Image1 from '../../assets/images/gallery-1.jpg';
import Image2 from '../../assets/images/gallery-2.jpg';
import Image3 from '../../assets/images/gallery-3.jpg';
import Image4 from '../../assets/images/gallery-4.jpg';

function LatestPhotoGallery() {
  return (
    <section className='section gallery' id='gallery' aria-label='photo gallery'>
      <div className='container'>
        <div className='title-wrapper'>
          <div>
            <h2 className='h2 section-title'>Latest Photo Gallery</h2>

            <p className='section-text'>
              Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua
              suspendisse
            </p>
          </div>

          <a href='#' className='btn has-before'>
            <span className='span'>Explore More Gallery</span>

            <ion-icon name='arrow-forward' aria-hidden='true'></ion-icon>
          </a>
        </div>

        <ul className='grid-list'>
          <li>
            <div className='gallery-card'>
              <figure className='card-banner img-holder' style={{ width: 422, height: 550 }}>
                <img
                  //   src='./assets/images/gallery-1.jpg'
                  src={Image1}
                  width='422'
                  height='550'
                  loading='lazy'
                  alt='Hair Cutting'
                  className='img-cover'
                />
              </figure>

              <div className='card-content'>
                <h3 className='h3 card-title'>Hair Cutting</h3>

                <p className='card-text'>Barbers & Salon Services</p>

                <a href='#' className='card-btn' aria-label='Read more'>
                  <ion-icon name='arrow-forward' aria-hidden='true'></ion-icon>
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className='gallery-card'>
              <figure className='card-banner img-holder' style={{ width: 422, height: 550 }}>
                <img src={Image2} width='422' height='550' loading='lazy' alt='Hair Cutting' className='img-cover' />
              </figure>

              <div className='card-content'>
                <h3 className='h3 card-title'>Hair Cutting</h3>

                <p className='card-text'>Barbers & Salon Services</p>

                <a href='#' className='card-btn' aria-label='Read more'>
                  <ion-icon name='arrow-forward' aria-hidden='true'></ion-icon>
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className='gallery-card'>
              <figure className='card-banner img-holder' style={{ width: 422, height: 550 }}>
                <img src={Image3} width='422' height='550' loading='lazy' alt='Hair Cutting' className='img-cover' />
              </figure>

              <div className='card-content'>
                <h3 className='h3 card-title'>Hair Cutting</h3>

                <p className='card-text'>Barbers & Salon Services</p>

                <a href='#' className='card-btn' aria-label='Read more'>
                  <ion-icon name='arrow-forward' aria-hidden='true'></ion-icon>
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className='gallery-card'>
              <figure className='card-banner img-holder' style={{ width: 422, height: 550 }}>
                <img src={Image4} width='422' height='550' loading='lazy' alt='Hair Cutting' className='img-cover' />
              </figure>

              <div className='card-content'>
                <h3 className='h3 card-title'>Hair Cutting</h3>

                <p className='card-text'>Barbers & Salon Services</p>

                <a href='#' className='card-btn' aria-label='Read more'>
                  <ion-icon name='arrow-forward' aria-hidden='true'></ion-icon>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default LatestPhotoGallery;

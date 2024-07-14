import React from 'react';

function ServiceItem() {
  return (
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
        Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <a href='#' className='card-btn' aria-label='more'>
        <ion-icon name='arrow-forward' aria-hidden='true'></ion-icon>
      </a>
    </div>
  );
}

export default ServiceItem;

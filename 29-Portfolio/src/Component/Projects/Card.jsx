import React, { useState } from 'react';

const Card = (props) => {
  const [modal, setModal] = useState(false)
  // console.log(props);

  const toggleModal = ()=>{
    setModal(!modal);
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal}/>
        </div>
       
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title_one}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i className='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>


      {/* Popup box */}
      {modal && (
        <div className='modal modal-blog'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text right'>
              <span>{props.date}</span>
              <h1>{props.title_one}</h1>
              <p>{props.desc_one}</p>

              <h1>{props.title_two}</h1>
              <p>{props.desc_two}</p>

              <h1>{props.title_three}</h1>
              <p>{props.desc_three}</p>
              <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
              <div className='button f_flex mtop'>
                <a href={props.url} target='_blank'>
                  <button className='btn_shadow'>
                      DEMO LINK<i className='fas fa-chevron-right'></i>
                  </button>
                </a>
                <a href={props.github} target='_blank'>
                  <button className='btn_shadow'>
                      GITHUB<i className='fas fa-chevron-right'></i>
                  </button>
                </a>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i className='fas fa-times'></i>
              </button>

              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

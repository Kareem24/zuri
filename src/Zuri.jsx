import React from 'react';
import { links } from './data';
// import image from './images/avatar.png'

function Zuri() {
    return (
      <section>
            {/* <img src={image} alt="" /> */}
      <div className='btn-container'>
          {
              links.map((data) => {
                  const { id, text, link } = data
                  return (
                      <a key={id} href={link} className='btn' > { text}</a>
                )  
              })
          }
      
    </div>
      </section>
  )
}

export default Zuri

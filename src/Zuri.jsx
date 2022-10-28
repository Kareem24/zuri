import React from 'react';
import { links } from './data';
import image from './images/kareem.jpg'
import ingressive from './images/Vector.png'
import i4g from './images/I4G.png'

function Zuri() {
    return (
      <section>
        <header className="image">

          <img src={image} alt="" />
          <p> Kareem Roqib</p>
        </header>
      <main className='btn-container'>
          {
              links.map((data) => {
                const { id, text, link} = data;
                
                return (
                    
                      <a key={id} href={link} className='btn' id={id}> { text}</a>
                )  
              })
          }
      
        </main>
        <footer>
          <img src={ingressive} alt="" />
          <p>HNG Internship 9 Frontend Task</p>
          <img src={i4g} alt="" />

        </footer>
        
      </section>
  )
}

export default Zuri

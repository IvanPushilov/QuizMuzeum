import React from 'react'
import '../styles/footer.css'
function Footer(): JSX.Element {
  return (
    <div className='container1'>
      <div>
        <p>Организаторы:</p>
        <div className='container_org'>
    <img className='img1' src="../../../public/profileimg/dep.png" alt="" />
    <img className='img2' src="../../../public/profileimg/efcf6923f27a2593c68c15a714da2e9a.png" alt="" />
    <img className='img3' src="../../../public/profileimg/123.png" alt="" />
    </div>
      </div>
      <div>
        <p>Партнеры:</p>
        <div className='container_part'>
      <img className='img4' src="../../../public/profileimg/logo 1.png" alt="" />
      <img className='img5' src="../../../public/profileimg/LGO-СНГПР-с-надписью-07-12-18 1.png" alt="" />
      <img className='img6' src="../../../public/profileimg/рго 1.png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default Footer
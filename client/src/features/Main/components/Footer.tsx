import React from 'react'
import '../styles/footer.css'
function Footer(): JSX.Element {
  return (
    <div className='container1'>
      <div>
        <p>Организаторы:</p>
        <div className='container_org'>
    <img className='img1' src="../../../../public/profileImg/dep.png" alt="" />
    <img className='img2' src="../../../../public/profileImg/efcf6923f27a2593c68c15a714da2e9a.png" alt="" />
    <img className='img3' src="../../../../public/profileImg/123.png" alt="" />
    </div>
      </div>
      <div>
        <p>Партнеры:</p>
        <div className='container_part'>
      <img className='img4' src="../../../../public/profileImg/logo 1.png" alt="" />
      <img className='img5' src="../../../../public/profileImg/LGO-СНГПР-с-надписью-07-12-18 1.png" alt="" />
      <img className='img6' src="../../../../public/profileImg/рго 1.png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default Footer
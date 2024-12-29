import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='aboutcontainer'>
      <h3 className='abouttile'>
        aim and goals
      </h3>
      <div className="aboutfield">
        <p className='abouttext'>
        psum dolor sit amet consectetur, adipisicing elit.
 A quos architecto delectus accusamus numquam aliquam tenetur aperiam exercitationem illo perferendis atque dolorem iure,
 eum quia reprehenderit voluptatibus laudantiurepellendus

        </p>
    
      </div>

      <div className="aboutmmc">
        <h3 className='discmmc'>about mmc</h3>

        <div className="cards">
            <div className="card1">
                <div className="cardfield">
                    <div className="cardicon">
                    <svg className=" campusicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="M3 19V5.7a1 1 0 0 1 .658-.94l9.671-3.516a.5.5 0 0 1 .671.47v4.953l6.316 2.105a1 1 0 0 1 .684.949V19h2v2H1v-2zm2 0h7V3.855L5 6.401zm14 0v-8.558l-5-1.667V19z"></path></svg>
                <h3 className='cardtitle'>mmc campus</h3>
                    </div>
                </div>

                <p className='para'>
                MMC has a vast green campus with beautiful gardens, diverse varieties of trees, sitting areas,
                 canteens and much more….
                 </p>

            </div>




            <div className="card2">
                <div className="cardfield">
                    <div className="cardicon">
                    <svg  className=" campusicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.75 16.401a1.15 1.15 0 0 0 1.16 1.15a16.7 16.7 0 0 1 3.535.333c1.64.204 3.204.81 4.555 1.761V6.442A10.24 10.24 0 0 0 7.445 4.68a16.6 16.6 0 0 0-3.6-.322a1.15 1.15 0 0 0-1.074 1.15zm18.5 0a1.15 1.15 0 0 1-1.16 1.15a16.7 16.7 0 0 0-3.535.333c-1.64.204-3.204.81-4.555 1.761V6.442a10.24 10.24 0 0 1 4.555-1.762a16.6 16.6 0 0 1 3.6-.322a1.15 1.15 0 0 1 1.073 1.15z"></path></svg>
                <h3 className='cardtitle'> Life at MMC</h3>
                    </div>
                </div>

                <p className='para'>
                MMC has a vast green campus with beautiful gardens, diverse varieties of trees, sitting areas,
                 canteens and much more….
                 </p>
                 
            </div>



            <div className="card3">
                <div className="cardfield">
                    <div className="cardicon">
                    <svg className=" campusicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor"><path d="M8.016 2.002h7.96M5.533 11.15s3-.926 5.5 1.852m7.5-1.389s-.611.98-1.5 1.389m-7 5.002l.009-.003m3.991-3.997l.009-.002"></path><path d="M9.527 2.215v4.042c0 .662-.352 1.233-.933 1.545c-2.985 1.6-5.789 6.132-2.848 10.777c.658 1.14 2.83 3.419 6.254 3.419s5.596-2.28 6.254-3.419c2.941-4.645.137-9.178-2.848-10.777a1.73 1.73 0 0 1-.934-1.545V2.264"></path></g></svg>
                <h3 className='cardtitle'>Laboratories</h3>

                    </div>
                </div>

                <p className='para'>
                MMC has a vast green campus with beautiful gardens, diverse varieties of trees, sitting areas,
                 canteens and much more….
                 </p>
                 
            </div>
        </div>
      </div>
    </div>
  )
}

export default About

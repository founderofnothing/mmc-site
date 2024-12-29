import React from 'react'
import './Managment.css'

const Managment = () => {
  return (
    <div className='managmentcontainer'>
      <div className="manageheader">
        <h3 className='managetitle'>
          managed by 
        </h3>
        <div className="managecard">
          <div className="micon">
          <svg className='micon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></path><path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21"></path></g></svg>

         

          </div>
          <div className="info"> 
          <h3 className='mtitle'>principle</h3>
          <p className='mtext'> atque dolorem iure,
 eum quia reprehenderit </p>
          
          </div>
         

        </div>

      </div>
    </div>
  )
}

export default Managment

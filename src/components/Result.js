import React from 'react'
import { Col } from 'react-bootstrap'

export const Result = ({ totalIncome, totalExpense }) => {
  
  return (
    <div className='inc-exp-container'>
      <div>
      <span>income</span>
      <h3 style={{color:'green'}}>{totalIncome}$</h3>
      </div>
     <div>
     <span>expense</span>
     <h3 style={{color:'red'}}> {totalExpense}$</h3>

     </div>
    </div>
  )
}

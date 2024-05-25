import React from 'react'

export const Balance =({ totalIncome, totalExpense })=> {

  let balancee = (totalIncome +totalExpense )/2;
  return (
    <div className='container'>
      <h3>YOUR BALANCE IS: {balancee} </h3>
    </div>
  )
}

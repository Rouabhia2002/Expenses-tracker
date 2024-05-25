import React from 'react'

export const History = ({transactions}) => {
  return (
    <div>
      <h2>history</h2>
    <div className='list'>
         {transactions.map(transaction => (
          <div key={transaction.id} className={`list-item  ${transaction.amount > 0? 'plus ': 'minus'}`}>
            <span>{transaction.text}</span>
            {transaction.amount > 0 ? `+ ${transaction.amount}` : `${transaction.amount}`}
          </div>
        ))}

    </div>
    </div>
  )
}

import React  , { useState } from 'react'

export const Adding = ({ addTransaction }) => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');



  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '' || amount === '') {
      alert('Please enter both text and amount');
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };
    
    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <div>
      <h2>Adding new transiction</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="text">Text:</label>
        <input
          type="text"
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <h3>Amount</h3>
        <input
          type="number"
          className="input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="btn" type="submit">ADD TRANSACTION</button>
      </form>

    </div>
  )
}

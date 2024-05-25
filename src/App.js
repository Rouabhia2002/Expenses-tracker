import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { History } from "./components/History";
import { Result } from "./components/Result";
import { Adding } from "./components/Adding";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };




  let totalIncome = 0;
  let totalExpense = 0;

  // Iterate through transactions to calculate totals
  transactions.forEach(transaction => {
    if (transaction.amount > 0) {
      totalIncome += transaction.amount;
    } else {
      totalExpense += transaction.amount;
    }
  });


  return (
   <div>
    <Header/>
    <Balance totalIncome={totalIncome} totalExpense={totalExpense}/>
    <Result  totalIncome={totalIncome} totalExpense={totalExpense}/>
    <History transactions={transactions}/>
    <Adding addTransaction={addTransaction} />
   </div>
  );
}

export default App;

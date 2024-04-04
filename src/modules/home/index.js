import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import OverviewCompounds from "./OverviewCompound";

import  TranscationCompounds from "./TranscationCompounds";

// ... (import statements)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  font-family: Montserrat;
`;

const HomeComponent = () => {
  const [transactions, setTransactions] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const addTransaction = (payload) => {
    const updatedTransactions = [...transactions, payload];
    setTransactions(updatedTransactions);
  };

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;

    transactions.forEach((payload) => {
      payload.type === "EXPENSE" ? (exp += payload.amount) : (inc += payload.amount);
    });

    setExpense(exp);
    setIncome(inc);
  };

  useEffect(() => {
    calculateBalance();
  });

  return (
    <Container>
      <OverviewCompounds addTransaction={addTransaction} expense={expense} income={income} />
      <TranscationCompounds transactions={transactions} />
    </Container>
  );
};

export default HomeComponent;

import styled from "styled-components";
import React, { useState } from 'react';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:10px;
font-family:Montserrat;
width:100%;
`;

const BalanceBox=styled.div`
font-size:18px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
font-weight:bold;
width:100%;

`;


const AddTranscation=styled.div`
background:black;
color:white;
padding:5px 10px ; 
border-radius:4px;
cursor:pointer;
font-weight:bold;
font-size:15px;

`;


const AddTranscationContainer=styled.div`
display:flex;
flex-direction:column;
border:1px solid #e6e8e9;
 gap:10px;
 padding:15px 20px;
 margin: 20px;
& input {

  outline:none;
  padding:10px 12px;
  border-radius:4px;
  border:1px solid #e6e8e9;
}
`;

const RadioBox=styled.div`
display:flex;
flex-direction:row;
width:100%;
align-items:center;
& input{
  width:unset;
  margin:0 10px;
}

`;
const AddTransactionView=(props)=>{
  const[amount , setAmount]=useState();
  const[desc , setDesc]=useState();
  const[type , setType]=useState("EXPENSE");

  const addTransaction=()=>{
    props.addTransaction({amount:Number(amount),desc,type,id:Date.now(),});
  props.toggleAddTxn()
  };
  return(
    <AddTranscationContainer>
<input placeholder="Amount" value={amount} type="number" onChange={(e)=>setAmount(e.target.value)}/>
<input placeholder="Descripition"value={desc} onChange={(e)=>setDesc(e.target.value)}/>
<RadioBox>
<input type="radio" id="expense" name="type" value="EXPANSE" checked={type==="EXPENSE"} onChange={(e)=>setType(e.target.value)}/>
<label htmlFor="expense">Expense</label>
<input type="radio" id="income" name="type" value="INCOME" checked={type==="INCOME"} onChange={(e)=>setType(e.target.value)}/>
<label htmlFor="expense">Income</label>
</RadioBox>
<AddTranscation onClick={addTransaction}>Add Transcation</AddTranscation>
    </AddTranscationContainer>
  )
};

 const ExpenseContainer=styled.div`
 
 display:flex;
 flex-direction:row;
 gap:12px;
 margin:20px;
 `;


 const ExpenseBox=styled.div`
 
 display:flex;
 flex-direction:column;
border-radius:4px;
border:1px solid #e6e8e9;
padding:15px 20px;
 width:135px; 
 font-size:14px;

 & span{
  font-weight:bold;
  font-size:20px;
  color: ${(props)=>(props.isIncome ? "green" : "red")}
 }`;




const  OverviewCompounds = (props) => {
  const [isAddTxnVisiable , toggleAddTxn] = useState(false);
  return (
    <Container>
    <BalanceBox>
      Balance: ${props.income - props.expense}
      <AddTranscation onClick={()=>{toggleAddTxn
      (!isAddTxnVisiable)}}>{isAddTxnVisiable ? "Cancel" : "ADD"}</AddTranscation>

    </BalanceBox>
    {isAddTxnVisiable && <AddTransactionView toggleAddTxn={toggleAddTxn} addTransaction={props.addTransaction}/>}

    <ExpenseContainer>
    <ExpenseBox isIncome={false}>
      Expense<span>${props.expense}</span>
    </ExpenseBox>
    <ExpenseBox isIncome={true}>
      Income<span>${props.income}</span>
    </ExpenseBox>


    </ExpenseContainer>
     </Container>
  )
}

export default  OverviewCompounds;
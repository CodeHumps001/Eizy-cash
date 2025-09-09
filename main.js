const showIncomeForm = document.getElementById('t-income')
const showExpenseForm = document.getElementById('t-expenses')
const incomeForm = document.getElementById('income-form')
const expensesForm = document.getElementById('expenses-form')
const incomeAmount = document.getElementById('income-amount')
const expensesAmount = document.getElementById('expenses-amount')
const incomeInput = document.getElementById('income-input')
const addIncome = document.getElementById('add-income')
const expenseName = document.getElementById('expense-name')
const expenseDescription = document.getElementById('expense-description')
const expenseAmount = document.getElementById('expense-amount')
const addExpense = document.getElementById('add-expense')
let tableBody = document.getElementById('t-body')
const errorMessage = document.getElementById('error')
const clearAll = document.getElementById('clear')






function toggleForms(){
     expensesForm.classList.toggle('hidden');
     incomeForm.classList.toggle('hidden');
}

// saving Expeses and income to local storage 
function saveTrack() {
  const data = {
    expenses: expenseList,
    incomes: incomeList,
    totalExpenses: totalExpenses,
    totalIncome: totalIncome,
  };
  localStorage.setItem('mylist', JSON.stringify(data));
}


    //loading data
function loadTrack() {
  const stored = localStorage.getItem('mylist');
  if (stored) {
    const data = JSON.parse(stored);
    expenseList = data.expenses || [];
    incomeList = data.incomes || [];
    totalExpenses = data.totalExpenses || 0;
    totalIncome = data.totalIncome || 0;
  }
}




showIncomeForm.addEventListener('click', toggleForms)
showExpenseForm.addEventListener('click', toggleForms)

//generating date and time 
function getFriendlyDate() {
  return new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short"
  });
}


let incomeList =[]
let totalIncome = 0
//Adding income and dsplaying it 
function addIncomeList(){

    
    
    if(incomeInput.value === ''){
        errorMessage.classList.toggle('hidden')
    }else{
        errorMessage.classList.toggle('hidden')

        // save income to list
        incomeList.push({
            name: "Income",
            description: "monthly income",
            amount:"+ " + Number(incomeInput.value),
            date: getFriendlyDate(),
        })
       
        renderIncome();
        saveTrack();
        fContainer.classList.remove('hello');
    }
    

}

//display income information
function renderIncome(){
    renderExpenses()
     let trHtml = ``
    for(let i=0 ; i < incomeList.length ; i++){

       
        trHtml += `
                            <tr class="row">
                               <td>${incomeList[i].name}</td>
                                <td class="description">${incomeList[i].description}</td>
                                 <td class="positive">${incomeList[i].amount}</td>
                                <td>${incomeList[i].date}</td>
                                 <td><button class="delete" income-index="${i}">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  class="del-icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg></button></td>
        
                                </tr>
            
            
            `;

            
            
            
    }
    tableBody.innerHTML  = trHtml;
    totalIncome += Number(incomeInput.value)
    incomeAmount.innerHTML = totalIncome;
    incomeInput.value = '';
    deleteTransactionIncome()
    
    

}
addIncome.addEventListener('click', addIncomeList)



//adding expenses 
let expenseList = [];
let totalExpenses = 0;


function addExpenses(){
    
    expenseList.push({
        name: expenseName.value,
        description: expenseDescription.value,
        amount:"- " + Number(expenseAmount.value),
        date: getFriendlyDate()
    })

    console.log(expenseList)
    
    renderExpenses();
    saveTrack()
    fContainer.classList.remove('hello');
}

addExpense.addEventListener('click', addExpenses)



//displaying expense to table

function renderExpenses(){
  let TinnerHTML =``
for(let i=0 ; i < expenseList.length ; i++){

        
            TinnerHTML += `
                            <tr>
                               <td>${expenseList[i].name}</td>
                                <td class="description">${expenseList[i].description}</td>
                                 <td class="negative">${expenseList[i].amount}</td>
                                <td>${expenseList[i].date}</td>
                                 <td><button class="delete" date-index="${i}">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  class="del-icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg></button></td>
        
                                </tr>
            
            
            `;
            
              
                
    }
      tableBody.innerHTML = TinnerHTML
        // tr.classList.add('fade-in')
        totalExpenses += Number(expenseAmount.value);
        expensesAmount.innerHTML = totalExpenses;
        expenseAmount.value = '';
        expenseDescription.value = '' ;
        expenseName.value = '';
        deleteTransaction()
    
}



function clearAllList(){
    tableBody.innerHTML = ``
    expenseList = []
    incomeList = []
    
    saveTrack()
    
}

clearAll.addEventListener('click', clearAllList)



//delete specific list from table 

function deleteTransaction(){
    const deleteBtn =  document.querySelectorAll('.delete')
    

    deleteBtn.forEach((btn) =>{
        btn.addEventListener('click', ()=>{
            let index = btn.getAttribute('date-index')

            expenseList.pop(index)
            
            renderExpenses()
            saveTrack()
            
        })
    })

}
function deleteTransactionIncome(){
    const deleteBtn =  document.querySelectorAll('.delete')
    

    deleteBtn.forEach((btn) =>{
        btn.addEventListener('click', ()=>{
            let index = btn.getAttribute('date-index')

            incomeList.pop(index)
            renderIncome()
            saveTrack()
        })
    })

}

let selectElement = document.getElementById("select-case");


function alterDisplay(){
    if(selectElement.value === 'income'){
        renderIncome()
    }else{
        renderExpenses()
    }
}

selectElement.addEventListener('change', alterDisplay)


const middleForm = document.getElementById('d-e')
const fContainer = document.getElementById('f-c')

function showMid(){
    fContainer.classList.toggle('hello');
}

middleForm.addEventListener('click', showMid)






document.addEventListener('DOMContentLoaded', loadTrack)
document.addEventListener('DOMContentLoaded', renderExpenses)
document.addEventListener('DOMContentLoaded', renderIncome)
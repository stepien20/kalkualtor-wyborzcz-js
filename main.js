const butAdd=document.querySelector(`#butAdd`)
const butPrct=document.querySelector(`#butPrct`)
const arrayParties=new Array()
let sum=0
butAdd.addEventListener(`click`,(evt)=>{
    evt.preventDefault()
    const name=document.querySelector(`#name`).value
    const isCoalition=document.querySelector(`#isCoalition`) 
    const votes=parseInt(document.querySelector(`#vote`).value)
    const Party={
        name: name,
        threshold: isCoalition.checked ? 8 : 5,
        votes: votes
    }  
arrayParties.push(Party)
const partyList=document.querySelector(`#partyList`)
const ele=document.createElement(`li`)
if(Party.threshold==5 ){
    ele.innerHTML=`<b class="text-primary">${Party.name}</b> nie jest  koalicją, ilość głosów: <b class="text-primary"> ${Party.votes}</b>`
}
else{
    ele.innerHTML=`<b class="text-primary">${Party.name}</b> jest   koalicją, ilość głosów: <b class="text-primary"> ${Party.votes}</b>`
}
sum+=Party.votes
ele.classList.add(`list-group-item`)
partyList.appendChild(ele)
})
/////////////////////////
butPrct.addEventListener('click',(evt)=>{
evt.preventDefault()
const tbody=document.querySelector(`tbody`)
//czyszczenie tabeli
    tbody.innerHTML=''
 ////////////
const tableDisplay=document.querySelector(`#tableDisplay`)
tableDisplay.classList.remove("d-none")
const table=document.querySelector(`#table`)
let lp=0   
arrayParties.forEach(element => {
    
    const ele=document.createElement(`tr`)
    lp++
    if(((parseFloat(element.votes)/sum)*100).toFixed(2)>element.threshold){
        ele.classList.add(`table-success`)
    }
    else{
        ele.classList.add(`table-danger`)
    }
   ele.innerHTML=`
          <td> ${lp}</td>
          <td>${element.name}</td>
          <td>${element.threshold}</td>
          <td>${element.votes}</td>
          <td>${((parseFloat(element.votes)/sum)*100).toFixed(2)}%</td>
   `
    tbody.appendChild(ele)
    
    });
    table.appendChild(tbody)
    // czyszczenie tablicy
    for (let i=0;i<=arrayParties.length+1;i++){
        arrayParties.shift()
    }
    const partyList=document.querySelector(`#partyList`)
})

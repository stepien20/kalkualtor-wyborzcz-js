const butAdd=document.querySelector(`#butAdd`)
const butPrct=document.querySelector(`#butPrct`)
const arrayParties=new Array()
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
ele.classList.add(`list-group-item`)
partyList.appendChild(ele)
})

butPrct.addEventListener('click',(evt)=>{
evt.preventDefault()
const table=document.querySelector(`#table`)
table.classList.remove()
})

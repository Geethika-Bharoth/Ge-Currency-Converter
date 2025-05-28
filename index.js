// -------------------------------------my own code starts-----------------------
// let btn = document.querySelector("#btn")
// let data= document.querySelector("#luffy")
// let amount = document.querySelector("#amount")

// // user clicked value and img src value for--From currency
// fromValue = document.querySelector("#fromValue")
// fromImg = document.querySelector("#fromImg")

// // user clicked value and img src value for--To currency
// toValue = document.querySelector("#toValue")
// toImg = document.querySelector("#toImg")

 
// // From currency - changer to it's flag
// fromValue.addEventListener("click", ()=>{
//     // data.innerHTML = fromValue.value
//     flag = countryList[fromValue.value]
//     // data.src = `https://flagsapi.com/${flag}/shiny/64.png`
//     fromImg.src = `https://flagsapi.com/${flag}/shiny/64.png`

// })

// // 
// toValue.addEventListener("click", ()=>{
//     // data.innerHTML = fromValue.value
//     flag = countryList[toValue.value]
//     // data.src = `https://flagsapi.com/${flag}/shiny/64.png`
//     toImg.src = `https://flagsapi.com/${flag}/shiny/64.png`

// });

// ------------------------my own code ends-----------------------------


// --------->not worked for adding event listener at a time<----------------------
// let allTest = document.querySelectorAll(".currencyOPt select")
// for (i=0 ;i<allTest.length; i++){
//   allTest[i].addEventListener("click", ()=>{
//     // console.log(alltest) ---not worked so we called function
//     console.log(alltest[0]) --- worked

//   })
// }


// --------------->this worked for add flags at a time with out seperarte code like: -->adding event listener at a time<--------------------
// but ---for only adding flags -----but not add list of items at a time (addind 150 contries at atime) which we can achive by for of loops
// let allTest = document.querySelectorAll(".currencyOPt select")
// for (i=0 ;i<allTest.length; i++){
//   allTest[i].addEventListener("click", (evt)=>{   
//     // console.log(alltest) ---not worked so we called function
//     testfun(evt.target)
//   })
// }

// // let toImg = document.querySelector("#toImg")
// const testfun = (ele) =>{

//   let  flag = countryList[ele.value]
//   toImg = ele.parentElement.querySelector("img")
//   toImg.src = `https://flagsapi.com/${flag}/shiny/64.png`

// }




// rember one point "items" alread selecting which select need to conisder 
// --no need to create documnet.query selector for slecting that element---->list = document.getElementById("myList"); refer to copilot for for in loops dom
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"; 
let allTest = document.querySelectorAll(".currencyOPt select")
let fromCurrValue = document.querySelector("#fromValue")
let toCurrValue = document.querySelector("#toValue")
let menuBtn = document.querySelector("#menuBtn")


menuBtn.addEventListener("click",()=>{
  let menuContent = document.querySelector("#menu")
  menu.classList.toggle('block');
  menu.classList.toggle('hidden');

})

// selects the both select elements
for (let items of allTest){

  // adding list of 150 currency codes at a time for both select statments by creating new element and appeing to parent of select element
  for (currCode in countryList){
    let newOption = document.createElement("option")
    newOption.innerText = currCode
    newOption.value = currCode
    items.append(newOption)
  }


  items.addEventListener("click",()=>{
    let flag = countryList[items.value]
    let currImg = items.parentElement.querySelector("img")
    currImg.src = `https://flagsapi.com/${flag}/shiny/64.png`
  })

}

let btn = document.querySelector("#btn")
btn.addEventListener("click",async (eve)=>{
  eve.preventDefault()
  let msg1 = document.querySelector("#msg1")
  let msg2 = document.querySelector("#msg2")
  let msg3 = document.querySelector("#msg3")
  let amount = document.querySelector("#amount")
  let userAmtValue = amount.value
  if (userAmtValue === "" || userAmtValue<1){
    userAmtValue = 1
    amount.value = "1"

  }

  // console.log(fromCurrValue.value)
  // console.log(toCurrValue.value)

  let URL = `${BASE_URL}/${fromCurrValue.value.toLowerCase()}.json`


  let responce = await fetch(URL)
  let data = await responce.json()
  let rate = data[fromCurrValue.value.toLowerCase()][toCurrValue.value.toLowerCase()]
  let totalAmount =  userAmtValue * rate
  msg1.innerText = `${userAmtValue} ${fromCurrValue.value} =`
  msg2.innerHTML = `${totalAmount} ${toCurrValue.value}`
  msg3.innerText = `1 ${fromCurrValue.value} = ${rate} ${toCurrValue.value}`


})



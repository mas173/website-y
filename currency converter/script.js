// flag_url = "https://flagsapi.com/IN/flat/64.png";
curr_url = `https://api.currencylayer.com/live?access_key=25ca96332203c5877c30b2f75ef05f75`


const selectfrom = document.querySelector(" #select");
const selectto = document.querySelector(".to select");


const dropdowns =  document.querySelectorAll("#select");
 
for(let select of dropdowns) {
  
  for( currcode in countryList) {
  
    let newoption = document.createElement("option");
    newoption.innerText = currcode;
    newoption.value = currcode;
    select.appendChild(newoption); 

   if(select.name === "from" || currcode === "USD"){
    newoption.selected = "selected";
   }
   if(select.name === "to" || currcode === "INR"){
    newoption.selected = "selected";
   }

  }
}

selectfrom.value = "USD";
selectto.value = "INR";

const btn = document.querySelector("button");

let fromval = document.querySelector

let fromcurrflag = document.querySelector(".from img");

// selectfrom.addEventListener("change",(evt) =>{
//   updateflag1(evt.target);

// } )

// const updateflag1 = (curr_code) =>{
//   let currCode = curr_code.value;
//   let cun_code = countryList[currCode];
//   from_curr = currCode.value;
  
  
//   let flag_url = `https://flagsapi.com/${cun_code}/flat/64.png`

  
//   const fromimg = document.querySelector(".from img");
//   fromimg.src = flag_url;
// }

selectto.addEventListener("change",(evt) =>{
  updateflag2(evt.target);
  
} )

const updateflag2 = (curr_code) =>{
  let currCode = curr_code.value;
  let cun_code = countryList[currCode];
  
  to_curr = currCode.value;
  let flag_url = `https://flagsapi.com/${cun_code}/flat/64.png`

  
  const toimg = document.querySelector(".to img");
  toimg.src = flag_url;
}

btn.addEventListener("click", async(event) =>{
  event.preventDefault();
 
  let amt = document.querySelector("form input");
  let amtVal = amt.value;
if(amt.value <= 0){
  amt.value = 1;

  
}

let response = await fetch(curr_url);
let data = await response.json();
let curr = `USD${selectto.value}`;

let final1 =  data.quotes
let final2 = final1[curr];

let output = amtVal*final2;
console.log(output);

const h3 = document.querySelector("h3");
h3.innerText = `${amtVal} USD is equal to ${output.toFixed(3)} ${selectfrom.value}`;


 })






let bill = document.querySelector('.bill');
let tip = document.querySelector('.tip');
let display = document.querySelector('.displaytotal');
let addbutton = document.querySelector('.addbutton');
let subbutton = document.querySelector('.subbutton');
let totalperson = document.querySelector('.totalperson');
let person = Number(totalperson.innerHTML);
let b = document.querySelector('.b');
b.addEventListener("click",a =()=>alert("please select No of people first"),{once:true})
function add() {
    let person = Number(totalperson.innerHTML);
    person+=1;
    totalperson.innerHTML=person;
    action()
}
function sub(){
    let person = Number(totalperson.innerHTML);
    person-=1;
    if(person<1){
        alert('Hey! person can not be less than one');
        return
    }
    totalperson.innerHTML=person;
    action() 
   
}
addbutton.addEventListener("click",add); 
subbutton.addEventListener("click",sub);
function action(){
    let billamount = Number(bill.value);
    let tipamount = Number(tip.value);
    let tippercentage = tipamount/100;
    let tiptotal = billamount * tippercentage;
    let subtotal = billamount + tiptotal;
    let total = subtotal/Number(totalperson.innerHTML);
    display.innerHTML=total.toFixed(2);
    console.log(total);
}

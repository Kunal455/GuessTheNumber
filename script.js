

let attempted = document.querySelector(".av");
let btns = document.querySelector(".btn");
let val = document.querySelector(".data");
let newgame = document.querySelector(".new");
let reals=document.querySelector(".real");
let k = Math.floor(Math.random() * 100) + 1;
console.log(k);
const guess = (val) =>{
    if(count==10){
         console.log("You attempted 5 times, YOU LOST!");
         btns.disabled=true;
         let data = document.querySelector(".show");
         data.innerHTML = val.value;
         let mess = document.querySelector(".message");
        mess.innerHTML = "You attempted 10 times, YOU LOST!"
        attempted.innerHTML=count;
        reals.innerHTML=k;
        val.disabled=true;

    }
    else{
    if(val.value==k){ 
        console.log("Guessed Right");
        let data = document.querySelector(".show");
        data.innerHTML = val.value;
        let mess = document.querySelector(".message");
        mess.innerHTML = "Right! You Won"
        val.disabled=true;
        
        
     }
    else if(val.value>k){
        console.log("Greater! Guess Again");
        let data = document.querySelector(".show");
         data.innerHTML = val.value;
        let mess = document.querySelector(".message");
        mess.innerHTML = "Greater! Guess Again"
        val.value="";

    } 
    else{
         console.log("Smaller! Guess Again");
         let data = document.querySelector(".show");
         data.innerHTML = val.value;
        let mess = document.querySelector(".message");
        mess.innerHTML = "Smaller! Guess Again"
         val.value="";
    }
}

    
    attempted.innerHTML=count;
    count++;

}
let count = 1;
btns.addEventListener('click', () => {
    const value = val.value.trim(); // remove leading/trailing spaces
    const num = Number(value);

    if (value === "" || num <= 0 || num > 100 || !Number.isInteger(num)) {
        alert("Please enter an integer between 1 and 100");
        val.value = "";
    } else {
        guess(val, count);
    }
});


newgame.addEventListener("click", ()=>{
    
    count=1;
      let data = document.querySelector(".show");
         data.innerHTML = 0;
         let mess = document.querySelector(".message");
        mess.innerHTML = "Let's GO"
    val.value="";
    val.disabled = false;
    btns.disabled=false;
})

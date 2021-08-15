var costPrice = document.querySelector("#cost_price");
var quantity = document.querySelector("#stock_quant");
var currPrice = document.querySelector("#current_price");
var calculateBtn = document.querySelector("#calculate-btn");

//event Handler Function
function clickHandler() {
    //Initial Styles
    document.getElementById("result").style.display = "block";
    document.getElementById("result").style.color = "var(--text-color)";
    document.getElementById("result").style.borderColor = "var(--text-color)";
    calculateBtn.style.backgroundColor = "var(--primary-color)";

    //In case of null Values 
    if(costPrice.value === "" || quantity.value === "" || currPrice.value === ""){
        document.getElementById("result-div").innerText = "Fields cannot be empty. please enter values" ;
        
    }
    //In Case of negative Values
    else if(costPrice.value < 0 || quantity.value < 0 || currPrice.value < 0){
        document.getElementById("result").innerText =  "Please enter correct values. Input cannot be negative" ;
           
    }
    //In Case of Correct Values
    else {
    var growth = currPrice.value - costPrice.value;
    var growthPercentage = Math.abs(100*(growth/costPrice.value)) ;
    growthPercentage = growthPercentage.toFixed(2);
    var growthAmount = growth*quantity.value;

        if (growth === 0) {
        //In Case Of no Change
        document.getElementById("result").innerText =  'No Change!' ;
        }
        else if (growth < 0) {
        //In case of Loss
        document.getElementById("result").innerText =  `LOSS : ${Math.abs(growthPercentage)}%.  You have lost ₹${Math.abs(growthAmount)} :(`;
        document.getElementById("result").style.color = "white";
        document.getElementById("result").style.backgroundColor = "var(--secondary-color)";
        document.getElementById("calculate-btn").style.backgroundColor = "var(--secondary-color)";
    }

        else {
            //In Case Of Profit
        document.getElementById("result").innerText =  `PROFIT : ${Math.abs(growthPercentage)}%. You have gained ₹${Math.abs(growthAmount)} :)`;
        document.getElementById("result").style.color = "white";
        document.getElementById("result").style.backgroundColor = "var(--primary-color)";
        
        
    }

    }

   
}

//Event Listener 
calculateBtn.addEventListener("click",clickHandler);
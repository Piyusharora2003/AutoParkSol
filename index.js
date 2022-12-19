function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  const changePricing = () =>{
 let vehicletype = document.getElementById("vehicletype").value;
 if(vehicletype == "car"){
document.getElementById("Yearly").innerText = "$100";    
document.getElementById("monthly").innerText = "$20";    
document.getElementById("asyougo").innerText = "$2*";    
 }
 else if( vehicletype == "bike" ){
    document.getElementById("Yearly").innerText = "$50";    
    document.getElementById("monthly").innerText = "$10";    
    document.getElementById("asyougo").innerText = "$1*";     }
 else{
    document.getElementById("Yearly").innerText = "$40";    
    document.getElementById("monthly").innerText = "$8";    
    document.getElementById("asyougo").innerText = "$0.8*";     }
  }
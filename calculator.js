
document.addEventListener("keydown", function(event){
    console.log(event);
    switch (event.key){

        case "Shift":
            var x = document.getElementById("display1").value;
            alert(eval(x))
            document.getElementById("display1").setAttribute("placeholder","hi");
    
    break;
  case "l":
    var x = document.getElementById("display1").value;
    document.getElementById("display1").setAttribute("placeholder", "eval(x)");
   
    break;
  default:
    }
    this.onkeydown(value)
    
});
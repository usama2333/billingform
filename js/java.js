

    function totalPrice(){

        var coffee = parseInt(document.getElementById("coffee").value);
        var roast = parseInt(document.getElementById("roast").value);
        var berry = parseInt(document.getElementById("berry").value);
        var expresso = parseInt(document.getElementById("expresso").value);
        var blend = parseInt(document.getElementById("blend").value);


        var coffeePrice = coffee * 200;
        var roastPrice = roast * 250;
        var berryPrice = berry * 300;
        var expressoPrice = expresso * 350; 
        var blendPrice = blend * 280;

        var totalPrice = coffeePrice + roastPrice + berryPrice + expressoPrice + blendPrice;

        document.getElementById("display").innerHTML="Rs : "+totalPrice;
        


    }


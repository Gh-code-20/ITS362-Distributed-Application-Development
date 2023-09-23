
    function calcDiscount(){
        var price=document.getElementById('price').value;
        var discount=document.getElementById('discount').value;

        //Check validity of inputs and calculate discount
        var discountVal= price-(price * discount/100);
        document.getElementById('discountp').innerHTML=validateInput(price,discount)? "Total Price After Discount: " + discountVal:"";
    
    }
    //validation function that checks for no input (blank) textboxes before calculating a discount.

    function validateInput(price,discount){
        var valid=true;

        if((price.length<1||discount.length<1||isNaN(price)||isNaN(discount))){
        valid=false;
        alert("Provide valid input, the field can not be blank");
        }
        else
        {
        valid=true;
        }
        return valid;

    }

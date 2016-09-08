/**
 * Created by Asus on 08.09.2016.
 */
function getValueArray(){
    var val = document.getElementById("cardNumber").value;
    var cardNumber = [];
    for(var i=0; i< val.length; i++){
        cardNumber.push(parseInt(val[i]))
    }
    return cardNumber;
}
function checkOnBlur() {
    var cardNumber = getValueArray();
    checkLuhn(cardNumber);
}
function checkOnValChange() {
    checkVisaOrMC();
    var cardNumber = getValueArray();
    if (cardNumber.length >= 15){
        checkLuhn(cardNumber);
    }
}
function checkLuhn(cardNumber){
    var i;
    var j;
    var summ = 0;
    for(i = cardNumber.length - 2; i >= 0  ;i -= 2 ){
        j = cardNumber[i] * 2;
        if (j > 9) j = j - 9;
        cardNumber[i] = j;
    }
    for (i=0; i<cardNumber.length; i++ ){
        summ += cardNumber[i];
    }
    console.log(summ);
    i = !(summ % 10);
    if (i == true )$("#cardNumber").css({"border":"2px solid #11a20d","border-radius":"5px"});
    else  $("#cardNumber").css({"border":"2px solid #d25858","border-radius":"5px"});
    return null;
}
function checkVisaOrMC(){
    var val = document.getElementById("cardNumber").value;
    if (val[0] == "4") $(".cardName").text('VISA');
    else if (val[0] == "5") $(".cardName").text('MasterCard');
    else $(".cardName").text('RandomCard');
}

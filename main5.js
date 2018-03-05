$(document).ready(function(){
    $.ajax({url: "https://api.kraken.com/0/public/Ticker?pair=XXBTZEUR", success: function(result){
        debugger;
        result = result.result;
        var data = result.XXBTZEUR;
        var cValues = data.c;
        var requiredVal = cValues[0];
        requiredVal = parseFloat(requiredVal);

        var multiplier = 1.01;
        var answer = requiredVal * multiplier;
        $("#data").text(answer.toFixed(2));
    }});
});

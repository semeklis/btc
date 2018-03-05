$(document).ready(function(){
    $.ajax({url: "https://api.kraken.com/0/public/Ticker?pair=XXBTZEUR", success: function(result){
        debugger;
        result = result.result;
        var data = result.XXBTZEUR;
        var cValues = data.c;
        var requiredValue = cValues[0];
        var requiredVal = requiredValue.toFixed(2);
        requiredVal = parseFloat(requiredVal);

        var multiplier = 1.05;

        $("#data").text(requiredVal * multiplier);
    }});
});

$(document).ready(function(){

    apiCall();
    function apiCall() {
        $.ajax({url: "https://api.kraken.com/0/public/Ticker?pair=XXBTZEUR", success: function(result){
            result = result.result;
            var data = result.XXBTZEUR;
            var cValues = data.c;
            var requiredVal = cValues[0];
            requiredVal = parseFloat(requiredVal);

            var multiplier = 1.05;
            var answer = requiredVal * multiplier;
            $("#data").text(answer.toFixed(2));
        }});
    }
    window.setInterval(function(){
        apiCall();
    }, 2000);

});

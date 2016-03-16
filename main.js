(function(){
    var firebaseRef = new Firebase("https://johnny-five-led.firebaseio.com/eroltutumlu");
    
    document.getElementById('btnLedOpen').addEventListener("click", upButton);
    document.getElementById('btnLedClose').addEventListener("click", downButton);
    
    function upButton() {
        firebaseRef.set("up");
        
        var ledStatusDiv = document.querySelector('#ledStatus');
        ledStatusDiv.className = "bg-danger";
        ledStatusDiv.innerHTML = "<h4>Open</h4>";
        
        
    }
    
    function downButton() {
        firebaseRef.set("down");
        
        var ledStatusDiv = document.querySelector('#ledStatus');
        ledStatusDiv.className = "bg-success";
        ledStatusDiv.innerHTML = "<h4>Close</h4>";
        
        
    }
    
    
    

}());
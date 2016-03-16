(function(){
    var firebaseRef = new Firebase("https://johnny-five-led.firebaseio.com/eroltutumlu");
    
    
    document.getElementById('btnLedOpen').addEventListener("click", myFunction);
    document.getElementById('btnLedClose').addEventListener("click", myFunction2);
    
    function myFunction() {
        firebaseRef.set("up");
    }
    
    function myFunction2() {
        firebaseRef.set("down");
    }
    

}())
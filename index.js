var johnnyFive = require('johnny-five');
var Firebase = require('Firebase');

var board = new johnnyFive.Board(),
    button, led;

var firebaseRef = new Firebase("https://johnny-five-led.firebaseio.com/eroltutumlu");

board.on("ready", function(){

    button = johnnyFive.Button(2);
    led = new johnnyFive.Led(7);
    
    button.on('up', function(){
        
        led.on();
        firebaseRef.set("up");
        
    });
    
    
    button.on('down', function(){
        led.off();
        firebaseRef.set("down");
        
    });
    
    
    firebaseRef.on("value", function(snapshot){
        
        var buttonState = snapshot.val();
        if(buttonState == "up"){
            led.on();
        }else{
            led.off();
        }
    })
    
});
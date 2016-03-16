(function(){
    
    var johnnyFives = {
        
        setModules: function(){
            this.johnnyFive = require('johnny-five');
            this.firebase = require('Firebase');
            this.firebaseRef = new this.firebase("https://johnny-five-led.firebaseio.com/eroltutumlu");
        },
        
        init: function(){
            this.setModules();
        },
        
        boardReady: function(){
            this.board = new this.johnnyFive.Board();
            
            var self = this;
            
            this.board.on("ready", function(){
                this.button = self.johnnyFive.Button(2);
                this.led = new self.johnnyFive.Led(7);
                
                var board = this;
                
                this.button.on('up', function(){
                    board.led.on();
                    self.firebaseRef.set("up");

                });
                this.button.on('down', function(){
                    board.led.off();
                    self.firebaseRef.set("down");

                });
                
                
                self.firebaseRef.on("value", function(snapshot){

                    var buttonState = snapshot.val();
                    
                    if(buttonState == "up"){
                        board.led.on();
                    }else{
                        board.led.off();
                    }
                });
                
            });
                
        }  
    
    }

    johnnyFives.init();
    johnnyFives.boardReady();
        
    
}());


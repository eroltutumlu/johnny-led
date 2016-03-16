# johnny-led
Mini Internet Of Things with node.js

![alt tag](http://i.hizliresim.com/8ZMZdk.png)

http://i.hizliresim.com/8ZMZdk.png

**Greetings from johnny-five**

>Johnny-Five is the original JavaScript Robotics programming framework. Released by Bocoup in 2012, Johnny-Five is maintained by a community of passionate software developers and hardware engineers. Over 75 developers have made contributions towards building a robust, extensible and composable ecosystem.

Example application using node.js

This is a quick walkthrough on using Node.js to build aurdino application using johnny-five.

![alt tag](http://i.hizliresim.com/nMRMRR.jpg)

Basic commands are:

```
johnnyFives.init();
johnnyFives.boardReady();

```

Some codes

```
        setModules: function(){
            this.johnnyFive = require('johnny-five');
            this.firebase = require('Firebase');
            this.firebaseRef = new this.firebase("https://johnny-five-led.firebaseio.com/eroltutumlu");
        },
        
        init: function(){
            this.setModules();
        },

```

**Also I will _upload_ the files my website thus you can interract my board.**

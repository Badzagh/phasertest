import Phaser, { AUTO } from 'phaser'

//import Background from "./phaserJs-test/"

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('hello-world')
	}

	preload()
    {
        //this.load.setBaseURL('http://labs.phaser.io')

        //this.load.crossOrigin = "Anonymous"

        this.load.image('Background', 'assets/Background.png')
        this.load.image('Spin', 'assets/Spin.png')
        this.load.image('Banana', 'assets/Banana.png')
        this.load.image('Blackberry', 'assets/Blackberry.png')
        this.load.image('Cherry', 'assets/Cherry.png')
        this.load.image('logo', 'assets/sprites/phaser3-logo.png')
        this.load.image('red', 'assets/particles/red.png')
    }

    create()
    {

        this.Spin = this.add.image(window.innerWidth/2, window.innerHeight/2 + 500, 'Spin')
        //
        //this.Banana = this.physics.add.image(window.innerWidth/3.3, window.innerHeight/2, 'Banana')
        /*const BananascaleX = (window.innerWidth / 1600);
        const BananascaleY = (window.innerHeight / 1600);
        const Bananascale = Math.max(BananascaleX, BananascaleY);
        Banana.setScale(Bananascale);*/
        //this.Banana.setScale(0.75)
        //this.Banana.setVelocity(0, 200)

        

        //this.Blackberry = this.add.image(window.innerWidth/2, window.innerHeight/2, 'Blackberry')
        //this.Cherry = this.add.image(window.innerWidth/1.4, window.innerHeight/2, 'Cherry')

        this.Background = this.add.image(window.innerWidth/2, window.innerHeight/2, 'Background')

        /*const BackgroundscaleX = (window.innerWidth / Background.width);
        const BackgroundscaleY = (window.innerHeight / Background.height);
        const Backgroundscale = Math.max(BackgroundscaleX, BackgroundscaleY);
        Background.setScale(Backgroundscale);*/
        this.Background.setScale(0.50)
        this.Background.width = window.innerWidth
        this.Background.height = AUTO

        ///first  reel
        this.firstReel = [{name:"Banana", y: window.innerHeight/2, valocityY: 20},{name: "Banana", y: window.innerHeight/2 - 200, valocityY: 20},{name: "Cherry", y: window.innerHeight/2 - 400 , valocityY: 20},{name: "Blackberry", y: window.innerHeight/2 - 600, valocityY: 20},{name: "Cherry", y: window.innerHeight/2 - 800, valocityY: 20},{name: "Banana", y: window.innerHeight/2 - 1000, valocityY: 20}]

        this.randomTimeArr = [1000, 1210,  1360, 1520, 1670, 1860, 2035, 2230, 2400, 2560, 2715, 2915]
        this.randomTime = Math.floor(Math.random() * 12) + 0;

        this.firstReel.map((symbol, index) => {
            symbol.def = this.add.image(window.innerWidth/3.3, symbol.y, symbol.name)
            symbol.def.setScale(0.50)
            //symbol.def.velocityY = 200
            //symbol.def.setBounce(2, 1)
            //symbol.def.setCollideWorldBounds(true)
            console.log(symbol.def.y)
            /*if(Math.floor(symbol.def.y) >=  1200){
                symbol.def.y = 100
                console.log("uhu")
            }*/
        })

        //second reel
        this.secondReel = [{name:"Blackberry", y: window.innerHeight/2, valocityY: 20},{name: "Cherry", y: window.innerHeight/2 - 200, valocityY: 20},{name: "Cherry", y: window.innerHeight/2 - 400 , valocityY: 20},{name: "Banana", y: window.innerHeight/2 - 600, valocityY: 20},{name: "Blackberry", y: window.innerHeight/2 - 800, valocityY: 20},{name: "Banana", y: window.innerHeight/2 - 1000, valocityY: 20}]

        this.secondReelRandomTimeArr = [3070, 3255,  3420, 3580, 3750, 3950, 4100, 4280, 4460, 4650, 4805, 5980]
        this.secondReelRandomTime = Math.floor(Math.random() * 12) + 0;
        this.secondReelSpinTime = 3000

        this.secondReel.map((symbol, index) => {
            symbol.def = this.add.image(window.innerWidth/2, symbol.y, symbol.name)
            symbol.def.setScale(0.50)
            //symbol.def.velocityY = 200
            //symbol.def.setBounce(2, 1)
            //symbol.def.setCollideWorldBounds(true)
            console.log(symbol.def.y)
            /*if(Math.floor(symbol.def.y) >=  1200){
                symbol.def.y = 100
                console.log("uhu")
            }*/
        })

        //third reel
        this.thirdReel = [{name:"Cherry", y: window.innerHeight/2, valocityY: 20},{name: "Blackberry", y: window.innerHeight/2 - 200, valocityY: 20},{name: "Banana", y: window.innerHeight/2 - 400 , valocityY: 20},{name: "Blackberry", y: window.innerHeight/2 - 600, valocityY: 20},{name: "Cherry", y: window.innerHeight/2 - 800, valocityY: 20},{name: "Banana", y: window.innerHeight/2 - 1000, valocityY: 20}]

        this.thirdReelRandomTimeArr = [5150, 5120, 5320, 5500, 5660, 5825, 6020, 6170, 6330, 6530, 6680, 6820]
        this.thirdReelRandomTime = Math.floor(Math.random() * 12) + 0;
        

        this.thirdReel.map((symbol, index) => {
            symbol.def = this.add.image(window.innerWidth/1.43, symbol.y, symbol.name)
            symbol.def.setScale(0.50)
            //symbol.def.velocityY = 200
            //symbol.def.setBounce(2, 1)
            //symbol.def.setCollideWorldBounds(true)
            console.log(symbol.def.y)
            /*if(Math.floor(symbol.def.y) >=  1200){
                symbol.def.y = 100
                console.log("uhu")
            }*/
        })
        
        /*
        for(let i = 0; i < 6; i++){
            firstReel[i] = 
        }*/
        ///

        //
        /*
        const particles = this.add.particles('red')

        const emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        })

        const logo = this.physics.add.image(400, 100, 'logo')

        logo.setVelocity(100, 200)
        logo.setBounce(1, 1)
        logo.setCollideWorldBounds(true)

        emitter.startFollow(logo)*/
    }
    update(){
        ///
        
        this.firstReel.map((symbol, index) => {
            
            //symbol.def.velocityY = 200
            
            symbol.def.y += symbol.valocityY

            //symbol.def.setBounce(2, 1)
            //symbol.def.setCollideWorldBounds(true)
            console.log(index,symbol.def.y)
            
            if(symbol.def.y >=  650){
                console.log("------------------------------",window.innerHeight/2 - 2800)
                console.log("------------------------------",window.innerHeight/2 - 500)
                console.log("-------------------------------now", symbol.def.y)
                console.log("------------------------------uhu")
                symbol.def.y = window.innerHeight/2 - 930
            }
            
            setTimeout(() => {
                symbol.valocityY = 0
                console.log("stop")
                console.log("time first reel", this.randomTimeArr[this.randomTime])
                this.secondReelSpinTime = this.secondReelRandomTimeArr[this.secondReelRandomTime]
                console.log("time second reel", this.secondReelRandomTimeArr[this.secondReelRandomTime])
                console.log("time third reel", this.thirdReelRandomTimeArr[this.thirdReelRandomTime])
                if(symbol.def.y >=  270 && symbol.def.y <= 400){
                    symbol.def.y = window.innerHeight/2 - 10
                    console.log("------------------symbol--------", symbol.name)
                }

            }, this.randomTimeArr[this.randomTime])
        })


        //second reel
        this.secondReel.map((symbol, index) => {
            
            //symbol.def.velocityY = 200
            
            symbol.def.y += symbol.valocityY

            //symbol.def.setBounce(2, 1)
            //symbol.def.setCollideWorldBounds(true)
            console.log(index,symbol.def.y)
            
            if(symbol.def.y >=  650){
                console.log("------------------------------",window.innerHeight/2 - 2800)
                console.log("------------------------------",window.innerHeight/2 - 500)
                console.log("-------------------------------now", symbol.def.y)
                console.log("------------------------------uhu")
                symbol.def.y = window.innerHeight/2 - 930
            }
            
            setTimeout(() => {
                symbol.valocityY = 0
                console.log("stop")
                console.log("time", this.randomTimeArr[this.randomTime])
                
                if(symbol.def.y >=  270 && symbol.def.y <= 400){
                    symbol.def.y = window.innerHeight/2 - 10
                    console.log("------------------symbol--------", symbol.name)
                }

            }, this.secondReelRandomTimeArr[this.secondReelRandomTime])
        })

        //third reel
        this.thirdReel.map((symbol, index) => {
            
            //symbol.def.velocityY = 200
            
            symbol.def.y += symbol.valocityY

            //symbol.def.setBounce(2, 1)
            //symbol.def.setCollideWorldBounds(true)
            console.log(index,symbol.def.y)
            
            if(symbol.def.y >=  650){
                console.log("------------------------------",window.innerHeight/2 - 2800)
                console.log("------------------------------",window.innerHeight/2 - 500)
                console.log("-------------------------------now", symbol.def.y)
                console.log("------------------------------uhu")
                symbol.def.y = window.innerHeight/2 - 930
            }
            
            setTimeout(() => {
                symbol.valocityY = 0
                console.log("stop")
                console.log("time", this.randomTimeArr[this.randomTime])
                
                if(symbol.def.y >=  270 && symbol.def.y <= 400){
                    symbol.def.y = window.innerHeight/2 - 10
                    console.log("------------------symbol--------", symbol.name)
                }

            }, this.thirdReelRandomTimeArr[this.thirdReelRandomTime])
        })
        //5150, 5120, 5320, 5500, 5660, 5825, 6020, 6170, 6330, 6530, 6680, 6820
        //this.time.events.add(Phaser.Timer.SECOND * 4, valocituY = 10);
    }
}

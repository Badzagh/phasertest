import Phaser, { AUTO } from 'phaser'

let spinBoolean = false
let firstReelvalocityY = 20
let secondReelvalocityY = 20
let thirdReelvalocityY = 20
let firstReelvalue = ""
let secondReelvalue = ""
let thirdReelvalue = ""

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('hello-world')
	}

	preload()
    {
        this.load.image('Background', 'assets/Background.png')
        this.load.image('Spin', 'assets/Spin.png')
        this.load.image('Banana', 'assets/Banana.png')
        this.load.image('Blackberry', 'assets/Blackberry.png')
        this.load.image('Cherry', 'assets/Cherry.png')
        this.load.image('Win', 'assets/Win.png')
    }

    create()
    {

        this.Win = this.add.image(window.innerWidth/2,  window.innerHeight/2 - 170, 'Win')
        this.Win.depth = 3
        this.Win.setScale(0.50)
        this.Win.setAlpha(0);

        this.Spin = this.add.image(window.innerWidth/2,  window.innerHeight/2 + 200, 'Spin').setInteractive();
        this.Spin.depth = 3
        this.Spin.setScale(0.50)
        this.Spin.on('pointerdown', function (pointer) {
            spinBoolean = true
        });
    
        //
        this.BackgroundCoverUp = this.add.rectangle(window.innerWidth/2, 50, window.innerWidth, 350, 0x000000);
        this.BackgroundCoverUp.depth = 1

        this.BackgroundCoverDown = this.add.rectangle(window.innerWidth/2, window.innerHeight - 50, window.innerWidth, 400, 0x000000);
        this.BackgroundCoverDown.depth = 1

        this.BackgroundWhite = this.add.rectangle(window.innerWidth/2 + 20, 280, 610, 360, 0xFFFFFF);

        //
        this.Background = this.add.image(window.innerWidth/2, window.innerHeight/2, 'Background')
        this.Background.setScale(0.50)
        this.Background.width = window.innerWidth
        this.Background.height = AUTO
        this.Background.depth = 1

        ///first  reel
        this.firstReel = [
            {name:"Banana", y: window.innerHeight/2},
            {name: "Banana", y: window.innerHeight/2 - 200},
            {name: "Cherry", y: window.innerHeight/2 - 400},
            {name: "Blackberry", y: window.innerHeight/2 - 600},
            {name: "Cherry", y: window.innerHeight/2 - 800},
            {name: "Banana", y: window.innerHeight/2 - 1000}
        ]

        this.firstReelrandomTimeArr = [1000, 1210,  1360, 1520, 1670, 1860, 2030, 2230, 2400, 2560, 2715, 2915]
        this.firstReelrandomTime = Math.floor(Math.random() * 12) + 0;

        this.firstReel.map((symbol, index) => {
            symbol.def = this.add.image(window.innerWidth/3.3, symbol.y, symbol.name)
            symbol.def.setScale(0.50)
        })

        //second reel
        this.secondReel = [
            {name:"Blackberry", y: window.innerHeight/2},
            {name: "Cherry", y: window.innerHeight/2 - 200},
            {name: "Cherry", y: window.innerHeight/2 - 400},
            {name: "Banana", y: window.innerHeight/2 - 600},
            {name: "Blackberry", y: window.innerHeight/2 - 800},
            {name: "Banana", y: window.innerHeight/2 - 1000}
        ]

        this.secondReelRandomTimeArr = [3070, 3255,  3420, 3580, 3750, 3945, 4100, 4280, 4460, 4640, 4805, 5090]
        this.secondReelRandomTime = Math.floor(Math.random() * 12) + 0;

        this.secondReel.map((symbol, index) => {
            symbol.def = this.add.image(window.innerWidth/2, symbol.y, symbol.name)
            symbol.def.setScale(0.50)
        })

        //third reel
        this.thirdReel = [
            {name:"Cherry", y: window.innerHeight/2},
            {name: "Blackberry", y: window.innerHeight/2 - 200},
            {name: "Banana", y: window.innerHeight/2 - 400},
            {name: "Blackberry", y: window.innerHeight/2 - 600},
            {name: "Cherry", y: window.innerHeight/2 - 800},
            {name: "Banana", y: window.innerHeight/2 - 1000}
        ]

        this.thirdReelRandomTimeArr = [5150, 5120, 5320, 5500, 5660, 5825, 6015, 6170, 6330, 6530, 6680, 6820]
        this.thirdReelRandomTime = Math.floor(Math.random() * 12) + 0;

        this.thirdReel.map((symbol, index) => {
            symbol.def = this.add.image(window.innerWidth/1.43, symbol.y, symbol.name)
            symbol.def.setScale(0.50)
        })
        
    }
    update(){
        ///
        console.log(spinBoolean)
        
        if(spinBoolean){  

            this.Spin.setAlpha(0.5);

            function spinEachReel (reel, reelValocityY, time, whichReel){
                reel.map((symbol, index) => {
        
                    symbol.def.y += reelValocityY
                    
                    if(symbol.def.y >=  650){
                        symbol.def.y = window.innerHeight/2 - 930
                    }
                    
                    setTimeout(() => {
        
                        if(whichReel === "first"){
                            firstReelvalocityY = 0
                        }
                        if(whichReel === "second"){
                            secondReelvalocityY = 0
                        }
                        if(whichReel === "third"){
                            thirdReelvalocityY = 0
                        }
                        
                        console.log("time reel", time)
                        
                        if(symbol.def.y >=  270 && symbol.def.y <= 400){
                            symbol.def.y = window.innerHeight/2 - 10
                            if(whichReel === "first"){
                                firstReelvalue = symbol.name
                            }
                            if(whichReel === "second"){
                                secondReelvalue = symbol.name
                            }
                            if(whichReel === "third"){
                                thirdReelvalue = symbol.name
                            }
                        }
        
                    }, time)
                })
            }

            spinEachReel(this.firstReel, firstReelvalocityY, this.firstReelrandomTimeArr[this.firstReelrandomTime], "first")
            spinEachReel(this.secondReel, secondReelvalocityY, this.secondReelRandomTimeArr[this.secondReelRandomTime], "second")
            spinEachReel(this.thirdReel, thirdReelvalocityY, this.thirdReelRandomTimeArr[this.thirdReelRandomTime], "third")
            
            if(spinBoolean){
                setTimeout(() => {
                    spinBoolean = false
                    firstReelvalocityY = 20
                    secondReelvalocityY = 20
                    thirdReelvalocityY = 20
                    console.log(firstReelvalocityY)
                    this.firstReelrandomTime = Math.floor(Math.random() * 12) + 0;
                    this.secondReelRandomTime = Math.floor(Math.random() * 12) + 0;
                    this.thirdReelRandomTime = Math.floor(Math.random() * 12) + 0;
                    if(firstReelvalue === secondReelvalue && firstReelvalue === thirdReelvalue){
                        console.log("win")
                        this.Win.setAlpha(1);
                    }
                }, 6820)
            }
            setTimeout(() => {
                this.Spin.setAlpha(1);
            }, 14000)
        } 
    }
}

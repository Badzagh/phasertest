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
        const firstReel = [{name:"Banana"},{name: "Banana"},{name: "Cherry"},{name: "Blackberry"},{name: "Cherry"},{name: "Banana"}]


        const Spin = this.add.image(window.innerWidth/2, window.innerHeight/2 + 500, 'Spin')
        //
        const Banana = this.physics.add.image(window.innerWidth/3.3, window.innerHeight/2, 'Banana')
        /*const BananascaleX = (window.innerWidth / 1600);
        const BananascaleY = (window.innerHeight / 1600);
        const Bananascale = Math.max(BananascaleX, BananascaleY);
        Banana.setScale(Bananascale);*/
        Banana.setScale(0.75)
        Banana.setVelocity(0, 200)

        

        const Blackberry = this.add.image(window.innerWidth/2, window.innerHeight/2, 'Blackberry')
        const Cherry = this.add.image(window.innerWidth/1.4, window.innerHeight/2, 'Cherry')

        const Background = this.add.image(window.innerWidth/2, window.innerHeight/2, 'Background')

        /*const BackgroundscaleX = (window.innerWidth / Background.width);
        const BackgroundscaleY = (window.innerHeight / Background.height);
        const Backgroundscale = Math.max(BackgroundscaleX, BackgroundscaleY);
        Background.setScale(Backgroundscale);*/
        Background.setScale(0.75)
        Background.width = window.innerWidth
        Background.height = AUTO

        ///

        firstReel.map((symbol, index) => {
            symbol.def = this.physics.add.image(window.innerWidth/3.3, window.innerHeight/2 - 500 * index, symbol.name)
            symbol.def.velocityY = 200
            //symbol.def.setBounce(2, 1)
            //symbol.def.setCollideWorldBounds(true)
            console.log(symbol.def.y)
            if(Math.floor(symbol.def.y) >=  1200){
                symbol.def.y = 100
                console.log("uhu")
            }
        })
        
        /*
        for(let i = 0; i < 6; i++){
            firstReel[i] = 
        }*/
        ///

        //
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

        emitter.startFollow(logo)
    }
}

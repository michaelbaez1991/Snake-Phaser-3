class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }

    // init() {
    //     console.log('Soy init');
    // }

    preload() { // 
        console.log('Soy Bootloader');
        
        this.load.image('cuerpo', './assets/body.png');
        this.load.image('comida', './assets/food.png');
        this.load.image('tablero', './assets/tablero.png');

        this.load.json('fontJSON', './assets/font/font.json');
        this.load.image('font', './assets/font/font.png');

        this.load.on('complete', () => {
            this.scene.start('Menu');
            const fontJSON = this.cache.json.get('fontJSON');
            // console.log(fontJSON);
            this.cache.bitmapFont.add('pixel', Phaser.GameObjects.RetroFont.Parse(this, fontJSON));
        });
    }

    // create() {
    //     this.scene.start('Play');
    // }

    // update() {
    //     console.log('Bucle');
    // }
}

export default Bootloader;
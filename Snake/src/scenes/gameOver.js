class GameOver extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }

    // init() {
    //     console.log('Soy init');
    // }

    preload() {
        console.log('Soy GameOver');
    }

    create() {
        this.scene.stop('UI');
        this.add.dynamicBitmapText(this.sys.game.config.width / 2, this.sys.game.config.height / 2 - 30, 'pixel', 'GAMEOVER', 20).setOrigin(0.5);
        
        this.evento = setTimeout(() => {
            this.salirEscene();
        }, 5000);

        this.input.keyboard.on('keydown_ENTER', () => {
            this.salirEscene();
        });

        this.input.on('pointerdown', () => {
            this.salirEscene();
        });
    }

    salirEscene() {
        clearTimeout(this.evento);
        this.scene.start('Menu');
    }

    // update() {
    //     console.log('Bucle');
    // }
}

export default GameOver;
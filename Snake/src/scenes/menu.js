class Menu extends Phaser.Scene {
    constructor() {
        super('Menu');
    }

    preload() {
        console.log('Soy Menu');
    }

    create() {
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2 - 50, 'comida').setScale(6);
        this.add.dynamicBitmapText(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'pixel', 'SNAKE', 18).setOrigin(0.5);

        const pressButton = this.add.dynamicBitmapText(this.sys.game.config.width / 2, this.sys.game.config.height - 40, 'pixel', 'PRESS ANY BUTTON', 8).setOrigin(0.5);

        this.tweens.add({
            targets: pressButton,
            alpha: 0, 
            ease: (x) => x < 0.5 ? 0 : 1,
            duration: 500,
            yoyo: true,
            repeat: -1
        });

        this.input.keyboard.on('keydown-LEFT', () => { // Captura evento del teclado, en este caso a la izquierda
            this.scene.start('Play');
        });

        this.input.keyboard.on('keydown-UP', () => { // Captura evento del teclado, en este caso hacia arriba
            this.scene.start('Play');
        });

        this.input.keyboard.on('keydown-DOWN', () => { // Captura evento del teclado, en este caso hacia abajo
            this.scene.start('Play');
        });

        this.input.keyboard.on('keydown_ENTER', () => {
            this.scene.start('Play');
        });

        this.input.on('pointerdown', () => {
            this.scene.start('Play');
        });
    }
}

export default Menu;
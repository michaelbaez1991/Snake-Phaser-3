import Bootloader from "./bootloader.js";
import Play from "./scenes/play.js";
import GameOver from "./scenes/gameOver.js";
import UI from "./scenes/ui.js";
import Menu from "./scenes/menu.js";

const config = {
    title: 'Snake',
    width: 320,
    height: 180,
    type: Phaser.AUTO,
    parent: 'container',
    backgroundColor: '#f9ca24',
    pixelArt: true,
    physics: {
        default: 'arcade', 
        // arcade: {
        //     gravity: { y: 100 }
        // }
    },
    scene: [Bootloader, Play, GameOver, UI, Menu]
};

new Phaser.Game(config);
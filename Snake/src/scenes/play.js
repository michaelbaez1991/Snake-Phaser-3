import Snake from "../gameObjetcs/Snake.js";
import Food from "../gameObjetcs/Food.js";

class Play extends Phaser.Scene {
    constructor() {
        super('Play'); 
    }

    // init() { // El administrador de escenas llama a este método cuando comienza la escena, antes de preload() y create()
    //     console.log('Soy init');
    // }

    preload() { // Úselo para cargar activos. El administrador de escena llama a este método, después init()y antes create(), solo si la escena tiene un LoaderPlugin. Una vez que se completa este método, si la cola de LoaderPlugin no está vacía, LoaderPlugin se iniciará automáticamente.
        console.log('Escena Play');
        // this.add.image(10, 10, 'tablero');
        this.snake = new Snake(this);
        this.food = new Food(this);
    }

    create() { // Úsalo para crear tus objetos de juego. El administrador de escenas llama a este método cuando comienza la escena, después de init()y preload(). Si LoaderPlugin comenzó después preload()de , este método se llama solo después de que se completa la carga.
        // this.add.dynamicBitmapText(10, 10, 'pixel', 'PUNTOS', 8);
        this.scene.launch('UI');
        const sceneUi = this.scene.get('UI');
        
        this.input.keyboard.on('keydown-RIGHT', () => { // Captura evento del teclado, en este caso a la derecha
            this.snake.changeMov('derecha');
        });

        this.input.keyboard.on('keydown-LEFT', () => { // Captura evento del teclado, en este caso a la izquierda
            this.snake.changeMov('izquierda');
        });

        this.input.keyboard.on('keydown-UP', () => { // Captura evento del teclado, en este caso hacia arriba
            this.snake.changeMov('arriba');
        });

        this.input.keyboard.on('keydown-DOWN', () => { // Captura evento del teclado, en este caso hacia abajo
            this.snake.changeMov('abajo');
        });

        // Colision de serpiente con comida
        this.physics.add.collider(this.snake.cuerpo[0], this.food.food, () => {
            this.food.crearComida();
            this.snake.crece();
            sceneUi.addPoint();
        });
    }

    update(time) { // Debe ser anulado por sus propias escenas. Este método se llama una vez por paso del juego mientras se ejecuta la escena. 
        // console.log(time); // Time: La hora actual. O bien un valor de Temporizador de alta resolución si proviene de Solicitar fotograma de animación, o Date.now si usa SetTimeout.
        this.snake.update(time);
    }
}

export default Play;
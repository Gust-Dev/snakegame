//Para fazer a movimentação do bloco - vou precisar fazer -->
// Att do estado do bloco no Canva
//Movimentação por PX com variação das Teclas 

//inicio -- input do teclado - captura de input


const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");


const size = 20;
const snake = [ 
    {x: 200, y:200},
    {x: 220, y:200}
  
];  //posição da cobra no mapa

let direction = "up"

const drawSnake = () => {
    ctx.fillStyle = "#ddd"
    snake.forEach((position, index)=> {
        if (index == snake.length - 1 ) {
            ctx.fillStyle = "red"
        }

        ctx.fillRect(position.x, position.y, size, size)
    })

    
}

const moveSnake = () => {

    if (!direction) return

    const head = snake[snake.length - 1]

    if (direction == "rigth") {
        snake.push({x:head.x+size, y:head.y})

    }

    if (direction == "left") {
        snake.push({x:head.x-size, y:head.y})

    }

    if (direction == "up") {
        snake.push({x:head.x, y:head.y-size})

    }

    if (direction == "down") {
        snake.push({x:head.x, y:head.y+size})

    }


    snake.shift()
}


const gameLoop = () => {
    ctx.clearRect(0,0, 600, 600)
    drawSnake()
    moveSnake()

    setTimeout (()=> {
        gameLoop()
    }, 300)
}

// responsavel pela movimentção atraves das teclas

const keyboard = () => {
    


}

gameLoop()


//  Isso aqui embaixo não ta pronto era teste pra aprender

//document.addEventListener("keydown", event => {
//    if(event.key.startsWith("Arrow")) {
//
//        switch(event.key) {
//            case "ArrowUp":
//
//        }
//
//
//
//    }
//
//});







// A cobra é um array com posições e cada quadrado é um elemento -
// Seguindo essa logica, entenda que para ela se movimentar remover o ultimo bloco do array
// E o colocar na frente vai ser a logica a ser utilizada.
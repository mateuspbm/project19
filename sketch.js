var estrada
var ciclista
var bicicleta
var lombada1
var lombada2 
var lombada3
var lombada
var buraco
var buraco1
var buraco2



function preload(){
estrada=loadImage("estrada-curva.png")
ciclista=loadImage("ciclista.png")
lombada=loadImage("lombada.png")
buraco=loadImage("buraco.png")
}

function setup() {
 createCanvas(windowWidth,windowHeight)
 bicicleta=createSprite(30,35)
 bicicleta.addImage(ciclista)
 bicicleta.scale=0.2

lombada1=createSprite(220,300)
lombada1.addImage(lombada)
lombada1.scale=0.1
lombada1.rotation=75
lombada2=createSprite(600,400)
lombada2.addImage(lombada)
lombada2.scale=0.3
lombada2.rotation=-20
lombada3=createSprite(1065,300)
lombada3.addImage(lombada)
lombada3.scale=0.3
lombada3.rotation=50

buraco1=createSprite(160,200)
buraco1.addImage(buraco)
buraco1.scale=0.2
buraco2=createSprite(900,100)
buraco2.addImage(buraco)
buraco2.scale=0.2
}

function draw() {
 background(estrada)
 drawSprites()
 if(keyDown("up")){bicicleta.y-=10

 }
if (keyDown("left")) {bicicleta.x-=10
    
}
if (keyDown("right")) {bicicleta.x+=10
    
}
if (keyDown("down")) {bicicleta.y+=10
}
if (bicicleta.isTouching(buraco1)||(bicicleta.isTouching(buraco2))||bicicleta.isTouching(lombada1)
||bicicleta.isTouching(lombada2)||bicicleta.isTouching(lombada3) ) {bicicleta.x=30
    bicicleta.y=35
    
}
}
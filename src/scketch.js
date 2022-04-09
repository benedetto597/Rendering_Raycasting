let walls = []; 
let ray; 
let particle; 

// Mover la particula automaticamente
let xoff = 0;
let yoff = 10000; 

const sceneW = 400;
const sceneH = 400;
let sliderFOV;

function setup(){
    createCanvas(800, 400);

    for (let i = 0; i < 5; i++) {
        let x1 = random(sceneW);
        let y1 = random(sceneH);
        let x2 = random(sceneW);
        let y2 = random(sceneH);
        walls[i] = new Boundary(x1, y1, x2, y2);
    }

    // Crear boundarie para los limites del canvas
    walls.push(new Boundary(0, 0, sceneW, 0));
    walls.push(new Boundary(sceneW, 0, sceneW, sceneH));
    walls.push(new Boundary(sceneW, sceneH, 0, sceneH));
    walls.push(new Boundary(0, sceneH, 0, 0));

    particle = new Particle();
    sliderFOV = createSlider(0, 360, 45);
    sliderFOV.input(changeFOV)
}

function changeFOV(){
    const fov = sliderFOV.value();
    particle.updateFOV(fov);
}

function draw(){
    // Rotar la particula a la izquierda
    if(keyIsDown(LEFT_ARROW)){
        particle.rotate(0.05);
    // Rotar la particula a la derecha
    }else if (keyIsDown(RIGHT_ARROW)){
        particle.rotate(-0.05);
    }else if (keyIsDown(UP_ARROW)){
        particle.move(1);
    }else if (keyIsDown(DOWN_ARROW)){
        particle.move(-1);
    }

    background(0);
    for (let wall of walls) {
        wall.show();
    } 

    // Mover la particula con el mouse
    // particle.update(mouseX, mouseY);
    // particle2.show();
    // particle2.look(walls);
    
    // Mover la particula automaticamente
    // particle.update(noise(xoff) * width, noise(yoff) * height);
    particle.show();
    // xoff += 0.01;
    // yoff += 0.01;

    // Almacenar la distancia de todos los rayos
    const scene = particle.look(walls);
    const w = sceneW/scene.length;
    push();
    translate(sceneW, 0);
    for(let i = 0; i<scene.length; i++){
        noStroke();
        const sq = scene[i] * scene[i];
        const wSq = sceneW * sceneW;  
        const b = map(sq, 0, wSq, 255, 0); 
        const h = map(scene[i], 0, sceneW, sceneH, 0);
        fill(b);
        rectMode(CENTER);
        rect(i*w + w/2, sceneH/2, w+1, h);
    }
    pop();

   
    
}
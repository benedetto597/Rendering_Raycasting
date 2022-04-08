let walls = []; 
let ray; 
let particle1; 
let particle2; 

// Mover la particula automaticamente
let xoff = 0;
let yoff = 10000; 

// Laberinto
let maze = [];
let grid = 36;
let counter = grid/(grid/2);

function setup(){
    createCanvas(400, 400);
    if(grid % 0 !== 0){
        grid = grid - 1;
        counter = counter - 1;
    }
        for (let i = 0; i < grid/4; i++) {
            // Paredes aleatorias
            walls.push(new Boundary(random(width), random(height), random(width), random(height)));
        
        /* Paredes verticales
        walls.push(new Boundary(0, i * height/8, width/8, i * height/8));
        walls.push(new Boundary(width/8 * counter, i * height/8, width, i * height/8));
        
        // Paredes horizontales
        walls.push(new Boundary(i * width/8, 0, i * width/8, height/8));
        walls.push(new Boundary(i * width/8, height/8 * counter, i * width/8, height));
        
        counter = counter - 1;
        */
    }

    console.log(walls);
    // Crear boundarie para los limites del canvas
    walls.push(new Boundary(0, 0, width, 0));
    walls.push(new Boundary(width, 0, width, height));
    walls.push(new Boundary(width, height, 0, height));
    walls.push(new Boundary(0, height, 0, 0));

    particle1 = new Particle();
    particle2 = new Particle();
}

function draw(){
    background(0);
    for (let wall of walls) {
        wall.show();
    } 
    
    // Mover la particula automaticamente
    particle1.update(noise(xoff) * width, noise(yoff) * height);
    particle1.show();
    particle1.look(walls);

    // Mover la particula con el mouse
    // particle2.update(mouseX, mouseY);
    // particle2.show();
    // particle2.look(walls);

    xoff += 0.01;
    yoff += 0.01;
    
    // ---------- Tratamiento de un ray individual ---------- // 
    /* ray.show();
    --> Hacer que el rayo siga al mouse
    ray.looAt(mouseX, mouseY);

    --> retornar el punto del ray si intercepta o choca con el boundary o wall
    let pt = ray.cast(wall);
     if(pt){
        fill(255);
        ellipse(pt.x, pt.y, 8, 8);
    }
    */
}
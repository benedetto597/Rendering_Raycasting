class Particle {
    constructor() {
        this.fov = 45; // Field of view
        this.pos = createVector(width/2, height/2);
        this.rays = [];
        this.heading = 0;  
        // Hacer que la particula solo vea hacia enfrente
        // for(let a = 0; a < 360; a += 1){
        for (let a = -this.fov; a < this.fov / 2; a += 1){
            this.rays.push(new Ray(this.pos, radians(a)));
        }
    }

    updateFOV(fov){
        this.fov = fov;
        this.rays = [];
        for (let a = -this.fov; a < this.fov / 2; a += 1){
            this.rays.push(new Ray(this.pos, radians(a) + this.heading));
        }
    }

    // Rotar el angulo de los rayos
    rotate(angle){   
        this.heading += angle;
        let index = 0;
        for(let i = -this.fov; i < this.fov / 2; i++){
            this.rays[index].setAngle(radians(i)+this.heading);
            index++;
        }
    }

    // Mover la particula
    move(amt){
        const vel = p5.Vector.fromAngle(this.heading);
        vel.setMag(amt);
        this.pos.add(vel);
    }

    update(x, y){
        this.pos.set(x, y);
    }

    look(walls){
        const scene = [];
        // Validar si los rayos interceptan algun boundary
        for(let i = 0; i < this.rays.length; i++){
            const ray = this.rays[i];
            let closest = null;
            let record = Infinity;
            for (let wall of walls) {
                const pt = ray.cast(wall);
                if(pt){ // Dibujar los rayos que interceptan el boundary                
                    let distance = p5.Vector.dist(this.pos, pt); // Función de p5 para calcular distancia
                    const a = ray.direction.heading() - this.heading;
                    if(!mouseIsPressed){
                        distance *= cos(a);
                    }
                    if(distance < record){
                        record = distance;
                        closest = pt;
                    }
                }
            }
            if(closest){
                stroke(255, 100);
                line(this.pos.x, this.pos.y, closest.x, closest.y);
            }
            scene[i] = record;
        }
        return scene;
    }

    show(){
        fill(255);
        ellipse(this.pos.x, this.pos.y, 4);
        for(let ray of this.rays){
            ray.show();
        }
    }
}
class Particle {
    constructor() {
        this.pos = createVector(width/2, height/2);
        this.rays = [];

        for(let a = 0; a < 360; a += 1){
            this.rays.push(new Ray(this.pos, radians(a)));
        }
    }

    update(x, y){
        this.pos.set(x, y);
    }

    look(walls){
        // Validar si los rayos interceptan algun boundary
        for(let ray of this.rays){
            let closest = null;
            let record = Infinity;
            for (let wall of walls) {
                const pt = ray.cast(wall);
                if(pt){ // Dibujar los rayos que interceptan el boundary                
                    const distance = p5.Vector.dist(this.pos, pt); // Función de p5 para calcular distancia
                    if(distance < record){
                        record = distance;
                        closest = pt;
                    }
                    // Distancia minima entre el rayo y el boundary
                    // record = min(distance, record)
                }
            }
            if(closest){
                stroke(255, 100);
                line(this.pos.x, this.pos.y, closest.x, closest.y);
            }
        }
    }

    show(){
        fill(255);
        ellipse(this.pos.x, this.pos.y, 4);
        for(let ray of this.rays){
            ray.show();
        }
    }
}
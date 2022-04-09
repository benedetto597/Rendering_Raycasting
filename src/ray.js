class Ray {
    constructor(pos, angle){
        this.position = pos;
        this.direction = p5.Vector.fromAngle(angle);
    }

    setAngle(angle){
        this.direction = p5.Vector.fromAngle(angle);
    }

    looAt(x, y){
        // Vector de dirección del ray
        this.direction.x = x - this.position.x;
        this.direction.y = y - this.position.x;
        this.direction.normalize();
    }

    show(){
        stroke(255);
        push();
        translate(this.position.x, this.position.y);
        line(0, 0, this.direction.x * 10, this.direction.y * 10);
        pop();
     }

     cast(boundary){
        // retornar el punto del ray si intercepta o choca con el boundary o wall
        // Puntos  de inicio y de fin del boundary  
        const x1 = boundary.a.x;
        const y1 = boundary.a.y;
        const x2 = boundary.b.x;
        const y2 = boundary.b.y;
        // Posición y punto final del ray  
        const x3 = this.position.x;
        const y3 = this.position.y;
        const x4 = this.position.x + this.direction.x;
        const y4 = this.position.y + this.direction.y;

        let den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if(den == 0){ // si el denominador es 0, no hay intersección, son paralelas
            return; 
        }

        let t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
        let u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

        if(t > 0 && t < 1 && u > 0){
            const pt = createVector();
            pt.x = x1 + t * (x2 - x1);
            pt.y = y1 + t * (y2 - y1);
            return pt;
        } else{
            return;
        }
    }
}

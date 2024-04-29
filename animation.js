//code from https://www.freecodecamp.org/news/how-to-create-animated-bubbles-with-html5-canvas-and-javascript/

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particleArray = [];
class Particle {
	constructor(x = 0, y = 0, xPerlin = 0, yPerlin = 0, radius = 0) {
		this.x = x;
        this.xOrigin = x;
		this.y = y;
        this.xPerlin = xPerlin;
        this.yPerlin = yPerlin;
		this.radius = radius;
        this.color = radius * 2;
		this.dx = -5;
		this.dy = 0;
		this.hue = 200;
	}

	//draw circle
	draw() {
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        //context.fillStyle = 'rgb(' + this.color + ', ' + this.color + ',' + this.color + ')'; //uncomment this one for black and white
        context.fillStyle = 'hsl(' + this.color + ', 50%, 50%)';
		context.fill();
	}

	// move circle
    //need to fix:
    //seem is not perfect got to calculate correct values
    //update so works at different window sizes
	move() {
		this.x = this.x + this.dx;
		if (this.x < -50){
            this.x = window.innerWidth + 50;
            this.xOrigin = this.xOrigin + this.x;
            //this.xPerlin = this.xPerlin + (1950 / (parseInt(window.innerWidth) / 2));
            this.xPerlin = this.xOrigin / parseInt(window.innerWidth) / 2;
            this.radius = Math.abs(parseInt(perlin.get(this.xPerlin, this.yPerlin) * 250))/2;
            this.color = this.radius * 2;
        }
	}
}

const handleDrawCircle = (event) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    console.log("got here");
    particleArray.length = 0;
	//a = event.pageX;
	//b = event.pageY;
    perlin.seed();
    for(let y = -50; y < window.innerHeight + 50; y= y + 50){
        for(let x = -50; x < window.innerWidth + 50; x = x + 50){
            let xPerlin = x / parseInt(window.innerWidth) / 2;
            let yPerlin = y / parseInt(window.innerHeight) / 2;
            let radius = Math.abs(parseInt(perlin.get(xPerlin, yPerlin) * 250))/2;
            const particle = new Particle(x, y, xPerlin, yPerlin, radius);
            particleArray.push(particle);
            
        }
    }
	
};

const animate = () => {
	context.clearRect(0, 0, canvas.width, canvas.height);

	particleArray.forEach((particle) => {
		particle?.move();
		particle?.draw();
	});

	requestAnimationFrame(animate);
};

animate();

handleDrawCircle();
//canvas.addEventListener("click", handleDrawCircle);
canvas.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

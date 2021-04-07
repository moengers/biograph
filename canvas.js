var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c = canvas.getContext('2d');

//Rechteck
c.fillStyle = 'rgba(0,0,255,0.2)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(255,0,0,0.2)';
c.fillRect(150, 150, 100, 100);
c.fillStyle = 'rgba(0,255,0,0.2)';
c.fillRect(200, 200, 100, 100);


//Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#fa34a3"
c.stroke();



for (var i = 0; i < 100; ++i) {
    //Arc/Circle
    c.beginPath();
    //c.arc(300 + i * 50, 300 + i * 50, 30, 0, Math.PI * 2);
    c.arc(300 + i * Math.random() * 50, 300 + i * Math.random() * 50, 30, 0, Math.PI * 2);
    c.strokeStyle = 'blue';
    c.stroke();

}


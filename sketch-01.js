const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const h = height * 0.10;
    const w = width * 0.10;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;
    const x = (i) => ix + (w + gap) * i;
    const y = (j) => iy + (h + gap) * j;

    const off = width * 0.02;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        context.beginPath();
        context.rect(x(i), y(j), w, h);
        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x(i) + (off / 2), y(j) + (off / 2), w - off, h - off);
          context.stroke();
        }
      }
    }

  };
};

canvasSketch(sketch, settings);

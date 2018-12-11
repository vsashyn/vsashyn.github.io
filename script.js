var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d')
for (let i = 0; i < 60; i++) {
  for (let j = 0; j < 60; j++) {
    c.fillStyle = `rgb(${i * 5}, ${j * 5}, ${(i+j) * 50})`
    c.fillRect(j * 2, i * 2, 1, 1)
  }
}

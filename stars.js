function createStars() {
  const layers = [
    { el: document.getElementById('layer1'), count: 150, types: ['small','medium'] },
    { el: document.getElementById('layer2'), count: 100, types: ['small','medium','large'] },
    { el: document.getElementById('layer3'), count: 70,  types: ['medium','large'] }
  ];
  layers.forEach(layer => {
    for (let i=0;i<layer.count;i++) {
      const star = document.createElement('div');
      const type = layer.types[Math.floor(Math.random()*layer.types.length)];
      star.className = `star ${type}`;
      star.style.left = Math.random()*100+'%';
      star.style.top  = Math.random()*100+'%';
      layer.el.appendChild(star);
    }
  });
}
createStars();

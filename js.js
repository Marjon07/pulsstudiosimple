function calculateCost() {
  const concreteCost = Number(document.getElementById('concrete').value);
  const woodCost = Number(document.getElementById('wood').value);
  const steelCost = Number(document.getElementById('steel').value);
  const glassCost = Number(document.getElementById('glass').value);

  const width = Number(document.getElementById('width').value);
  const length = Number(document.getElementById('length').value);
  const height = Number(document.getElementById('height').value);

  const area = width * length;
  const volume = width * length * height;

  const concreteNeeded = area * 2;
  const woodNeeded = area * 4;
  const steelNeeded = area * 1;
  const glassNeeded = area * 2;

  const concreteTime = concreteNeeded / 100;
  const woodTime = woodNeeded / 200;
  const steelTime = steelNeeded / 150;
  const glassTime = glassNeeded / 50;

  const totalCost = (concreteCost * concreteNeeded) + (woodCost * woodNeeded) + (steelCost * steelNeeded) + (glassCost * glassNeeded);
  const totalTime = concreteTime + woodTime + steelTime + glassTime;

  const resultElement = document.getElementById('result');
  const resultText = `<h3>Total Cost: $${totalCost.toFixed(2)}</h3><p>Total Time: ${totalTime.toFixed(2)} hours</p>`;
  
  resultElement.innerHTML = resultText;
  resultElement.style.display = 'block';
}

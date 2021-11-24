/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
  let steps = 0;
  let water = capacity;
  //浇完所有植物结束
  for (let x = 0; x < plants.length; x++) {
    //浇水
    if (water >= plants[x]) {
      steps = steps + 1;
      water = water - plants[x];
    } else {
      water = capacity;
      water = water - plants[x];
      steps = x + x + 1 + steps;
    }
    console.log(steps);
  }
  return steps;
};

wateringPlants([2, 2, 3, 3], 5);
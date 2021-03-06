//Calcualte Rectangle Area
function calculateRectangleArea(length, width) {
  rectangleArea = length * width;
  if (rectangleArea > 0) {
    return rectangleArea;
  };
}

// Calculate Triangle Area
function calculateTriangleArea(base, hieght) {
  triangleArea = (base * hieght) / 2;
  if (triangleArea > 0) {
    return triangleArea;
  };
}

// Calculate Circle Area
function calculateCircleArea(raduis) {
  var circleArea = Math.PI * Math.pow(raduis, 2);
  if (raduis > 0) {
    return circleArea;
  };
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined

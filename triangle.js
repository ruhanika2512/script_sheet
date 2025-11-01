function triangleType(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "Invalid triangle ";
    }
    
    
    
    if (a === b && b === c) {
        return "Equilateral triangle";
    }
    if (a === b || b === c || a === c) {
        return "Isosceles triangle";
    }
    return "Scalene triangle";
}


console.log(triangleType(3, 4, 5)); 
console.log(triangleType(2, 2, 2)); 
console.log(triangleType(2, 2, 3)); 
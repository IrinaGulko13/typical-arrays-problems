
exports.min = function min (array) {
  if(array === undefined || array.length === 0)  {
      return 0;
  } else {
      let min = array[0]
      for (element of array) {
          if (element < min) {
              min = element;     
          }  
       }
       return min; 
  } 
}

exports.max = function max (array) {
    if(array === undefined || array.length === 0)  {
        return 0;
    } else {
        let max = array[0]
        for (element of array) {
            if (element > max) {
                max = element;     
            }  
         }
        return max; 
    } 
}

exports.avg = function avg (array) {
    if(array === undefined || array.length === 0)  {
        return 0;
    } else {
        let average = 0;
        let sum = 0;
        for (element of array) {
            sum += element;
            average = sum/array.length;
        }
        return average;
    }
}

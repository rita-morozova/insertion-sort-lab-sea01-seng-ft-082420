function findMinAndRemove(array){
  let min = array[0]
  let indexOfmin = 0

  for(let i=0; i< array.length; i++){
      if(min > array[i]){
          min = array[i]
          indexOfmin = i
      }
  }
  array.splice(indexOfmin, 1)
  return min
}

function selectionSort(array){
  let newMin;
  let sorted = []
  while(array.length !=0){
      newMin = findMinAndRemove(array)
      sorted.push(newMin)
  }
  return sorted 
}

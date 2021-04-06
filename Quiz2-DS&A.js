function moveElementToEnd(array, toMove) {
   
    const data = [];
    let top = 0;

    data[top] = array[top]
    // console.log(array[top])

    

    if(array[top] === toMove) 
        data.push(array[top])
    else(data.unshift(array[top]))
    console.log(array.pop[top]) //undefined
    
    top = top + 1;

    console.log(data)

  }


const array = [2, 1, 2, 2, 2, 3, 4, 2] // 8 elements
const toMove = 2
moveElementToEnd(array, toMove)
function spiralize (n) {
  const initBox = []
  
  for (let i = 0; i < n; i++) {
    initBox.push([])
    for (let j = 0; j < n; j++) {
      initBox[i].push(0)
    }
  }

  let x = 0, y = 0,
    direction = 0, // 0 - right, 1 - down, 2 - left, 3 - top
    currentLoop = 0,
    length = n
      
  function startSnake() {
    while (currentLoop < n) {
      if (currentLoop > 2 && currentLoop % 2) length -= 2

      if (direction % 2) {
        if (direction === 1) {
          insertVertical(x, y, y + length)
          y = y + length - 1
        } else {
          insertVertical(x, y - length + 1, y)
          y = y - length + 1
        }
      } else {
        if (direction === 0) {
          insertHorizontal(y, x, x + length)
          x = x + length - 1
        } else {
          insertHorizontal(y, x - length + 1, x)
          x = x - length + 1
        }
      }

      currentLoop++
      changeDirection()
    }
  }
  
  function insertVertical(x, y1, y2) {
    for (let i = y1; i < y2; i++) {
      initBox[i][x] = 1
    }
  }
  function insertHorizontal(y, x1, x2) {
    for (let i = x1; i < x2; i++) {
      initBox[y][i] = 1
    }
  }
  
  function changeDirection(){
    if (direction < 3) {
      direction++
    } else {
      direction = 0
    }
  }
  
  startSnake()
  
  return initBox;
}

let pointsArray = Point.createPoints(5000)

// let h
eatMap = new HeatMap(document.getElementsByClassName('rg')[0])

setInterval(() => {
  let Xarr = []
  let Yarr = []
  pointsArray.forEach((p) => {
    p.update()
    // Xarr.push(p.values[0])
    // Yarr.push(p.values[1])
  })

  //heatMap.update(Xarr, Yarr)

},10)

let plotHolder = document.createElement('div')
plotHolder.style.width = "100%"
plotHolder.style.height = "100%"
document.body.appendChild(plotHolder)

Plotly.plot(plotHolder,
  [
    {
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16]
    }
  ],
  {
    margin: { t: 0 }
  }
)

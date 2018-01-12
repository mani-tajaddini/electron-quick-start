let Point = (() => {
  let priv = new WeakMap()
  let _ = (instance) => { return priv.get(instance)}
  let ps = 0

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  class Point{
    constructor(doc){
      noise.seed(Math.random)
      let tmp = doc.createElement("div")
      doc.body.appendChild(tmp)
      let privMembers = {
        div: tmp
      }
      priv.set(this, privMembers)

      _(this).div.style.width = "5px"
      _(this).div.style.height = "5px"
      _(this).div.style.background = getRandomColor().toString()
      _(this).div.style.borderRadius = "50%"
      _(this).div.style.position = "absolute"

      _(this).perl1 = ps + 10
      _(this).perl2 = ps + 30
      _(this).perl3 = ps + 50
      _(this).perl4 = ps + 70
      ps = ps + 5

      // _(this).perl1 = Math.random()*100
      // _(this).perl2 = Math.random()*100
      // _(this).perl3 = Math.random()*100
      // _(this).perl4 = Math.random()*100
    }

    update(){
      _(this).perl1 = _(this).perl1+0.1
      _(this).perl2 = _(this).perl2+0.1

      _(this).perl3 = _(this).perl3+0.1
      _(this).perl4 = _(this).perl4+0.1

      _(this).value1 = noise.perlin2(_(this).perl1 / 100, _(this).perl2 / 100)*window.innerWidth+300
      _(this).value2 = noise.perlin2(_(this).perl3 / 100, _(this).perl4 / 100)*window.innerWidth+300

      _(this).div.style.left = `${_(this).value1}px`
      _(this).div.style.top = `${_(this).value2}px`
    }

    get values(){
      return [_(this).value1, _(this).value2]
    }

    static createPoints(n){
      let arr = new Array(n)
      for (let i = 0; i < n; i++) {
        arr[i] = new Point(document)
      }
      return arr
    }
  }
  return Point
})()

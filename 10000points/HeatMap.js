let HeatMap = (() => {
  let priv = new WeakMap()
  let _ = (instance) => { return priv.get(instance)}

  class HeatMap{
    //give it an empty div
    constructor(div, startingRGBA="rgba(255,0,0,1)", endingRGBA="rgba(255,0,0,0)", fadeAt=70){
      let privMembers = {
        hm: div
      }
      priv.set(this, privMembers)

      _(this).hm.style.width = "100px";
      _(this).hm.style.height = "100px";
      _(this).hm.style.background = `radial-gradient(${startingRGBA}, ${endingRGBA} ${fadeAt}%)`;
      _(this).hm.style.borderRadius = "50%"
      _(this).hm.style.position = "absolute"
    }

    update(Xs, Ys, startingRGBA="rgba(255,0,0,1)", endingRGBA="rgba(255,0,0,0)", fadeAt=70){
      let sumX = 0
      for (let i = 0; i < Xs.length; i++) {
        sumX = sumX + Xs[i]
      }
      let aveX = sumX/Xs.length

      let sumY = 0
      for (let i = 0; i < Ys.length; i++) {
        sumY = sumY + Ys[i]
      }
      let aveY = sumY/Ys.length

      let variability = 0
      for (let i = 0; i < Xs.length; i++) {
        variability = variability + Math.sqrt(Math.pow((Xs[i]-aveX), 2) + Math.pow((Ys[i]-aveY), 2))
      }

      let std = variability/Xs.length

      _(this).hm.style.left = `${aveX-parseInt(_(this).hm.style.width)/2}px`
      _(this).hm.style.top = `${aveY-parseInt(_(this).hm.style.height)/2}px`

      _(this).hm.style.width = `${std*3+50}px`
      _(this).hm.style.height = `${std*3+50}px`

      let tmp = startingRGBA.replace(/,\s*([^,]+)$/, function(s){
    	   return `,${1/std*50})`
      });
      _(this).hm.style.background = `radial-gradient(${tmp}, ${endingRGBA} ${fadeAt}%)`
    }
  }
  return HeatMap
})()

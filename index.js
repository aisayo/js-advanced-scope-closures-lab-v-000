function produceDrivingRange(blockRange) {
  return function(begin, end) {
    let distance = parseInt(end) - parseInt(begin)
    if ( distance < blockRange ) {
      return `within range by ${Math.abs(blockRange - distance)}`
    } else {
      return `${Math.abs(blockRange - distance)} blocks out of range`
    }
  }
}

function produceTipCalculator(rate) {
  return function(fare) {
    return fare * rate
  }
}

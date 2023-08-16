const beans = [
    { year: "2015", result: "L"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  
  superbowlWin = (record) => {
    let result = record.find( record => record.result === "W" )
    console.log(result)
    if (typeof result === 'undefined') return undefined
    else return result.year
  }

console.log(superbowlWin(beans))
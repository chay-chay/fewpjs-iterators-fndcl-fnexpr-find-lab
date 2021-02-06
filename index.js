// superBowlWin = record.find(function(record){record.result === "W"} )

superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined
}
// code your solution here


function superbowlWin(record) {
    let winYear = record.find(record => record.result === "W")
    if (winYear) {
        return winYear.year
    } else {
        return undefined
    }
    }

 //Additional notes: record is an array of objects (each element {year: "2000", result: "W"} is an object). In let winYear = record.find(record => record.result === "W") is basically array.find(object => object.property === "W")   
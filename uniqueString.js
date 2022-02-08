function uniqueString(word) {
    let safeWord = String(word).toLowerCase()
    let rtnString = ""

    for (let i = 0; i < safeWord.length; i++) {
        if (rtnString.includes(safeWord[i])) {
            continue
        } else {
            rtnString += safeWord[i]
        }
    }

    return rtnString
}

console.log(uniqueString("helloworld"))
console.log(uniqueString("iwanttoclimbamountain"))
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false
    const sArray = getIsomorphicArray(s)
    const tArray = getIsomorphicArray(t)
    console.log(sArray)
    console.log(tArray)
    for(let i = 0; i < sArray.length; i++) {
        if(sArray[i] !== tArray[i]) {
            console.log(sArray[i], tArray[i])
            return false
        }
    }
    return true
};

const getIsomorphicArray = str => {
    const arry = []
    const map = {}
    let index = 1
    for(let value of str) {
        if(map[value]) {
            arry.push(map[value])
        } else {
            map[value] = index
            arry.push(index)
            index++
        }
    }

    return arry
}

console.log(isIsomorphic("ab", "aa"))
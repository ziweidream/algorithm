/**
 * original problem on hackerRank:
 * https://www.hackerrank.com/challenges/countingsort4/problem
 */
function countSort(arr) {
    const len = arr.length
    for (let i=0; i<Math.floor(len/2); i++) {
        arr[i][1] = '-'
        arr[i][0] = parseInt(arr[i][0])
    }
    for (let j=Math.floor(len/2); j<len; j++) {
        arr[j][0] = parseInt(arr[j][0])
    }
    const sorted = arr.sort((a, b) => a[0]-b[0])
    let res = ''
    for (let m=0; m<sorted.length; m++) {
        res += sorted[m][1] + " "
    }
    console.log(res)
}


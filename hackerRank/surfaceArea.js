/**
 * original problem on hackerRank:
 * https://www.hackerrank.com/challenges/3d-surface-area/problem
 */
function surfaceArea(A) {
    let a = 0
    for (let i=0; i<A.length; i++) {
        for (let j=0; j<A[0].length; j++) {
            a += A[i][j] * 4 + 2
            if (j >= 1) {
                a -= Math.min(A[i][j-1], A[i][j]) * 2;
            }
            if (i >= 1) {
                a -= Math.min(A[i-1][j], A[i][j]) * 2
            }
        }
    }
    return a
}


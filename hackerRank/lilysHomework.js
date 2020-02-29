function lilysHomework(arr) {
  function count(arr) {
    let D = {};
    for (let i = 0; i < arr.length; i++) {
      D[arr[i]] = i;
    }

    let a = arr.slice();
    let sorted = arr.sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < a.length; i++) {
      if (a[i] != sorted[i]) {
        count++;
        let index = D[sorted[i]];
        let temp = a[i];
        D[a[i]] = D[sorted[i]];
        a[i] = sorted[i];
        a[index] = temp;
      }
    }
    return count;
  }

  let ar = arr.slice()
  let reverse = ar.reverse()
  return Math.min(count(arr), count(reverse))
}



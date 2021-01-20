let n = 5; 
let l = '';
let l2 = '*';
let inp = n;
let lIndex;
let inp2 = '';

for (lIndex = 0; lIndex < n; lIndex += 1) {
  for (let index2 = 1; index2 <= n; index2 +=1){
    if(index2 < inp ) {
      l += ' ';
    } else if (index2 >= 4) {
      l += ' '
    } else {
      l += '*'
    }
  }
  console.log(l);
  l = '';
  inp -= 1
};

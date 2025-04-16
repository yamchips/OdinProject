let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a === 2) {
    resolve('success');
  } else {
    reject('fail');
  }
})

p.then((val) => console.log('this is from then ' + val))
  .catch((val) => console.log('this is from catch ' + val))
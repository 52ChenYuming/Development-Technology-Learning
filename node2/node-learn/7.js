function interview(callback) {
  setTimeout(() => {
    if (Math.random() < 0.8) {
      callback()
    } else {
      throw new Error('fail');
    }
  }, 500)
}

try {
  interview(function () {
    console.log('smile');
  })
} catch (error) {
  console.log('cry', error);
}
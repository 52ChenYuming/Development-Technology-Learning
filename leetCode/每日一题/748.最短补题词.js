var shortestCompletingWord = function (licensePlate, words) {
  const licenseArr = new Array(26).fill(0)
  const baseCode = 'a'.charCodeAt();
  let minIndex = -1;
  for (const char of licensePlate) {
    // console.log(baseCode);
    if (/^[a-zA-Z]+$/.test(char)) {
      licenseArr[char.toLowerCase().charCodeAt() - baseCode]++;
    }
  }
  for (let i = 0; i < words.length; i++) {
    const wordsArr = new Array(26).fill(0);
    for (let j = 0; j < words[i].length; j++) {
      const char = words[i][j];
      wordsArr[char.charCodeAt() - baseCode]++;
    }
    let isdone = true;
    for (let k = 0; k < 26; k++) {
      if (wordsArr[k] < licenseArr[k]) {
        isdone = false;
        break;
      }
    }
    if (isdone && (minIndex < 0 || words[i].length < words[minIndex].length)) {
      minIndex = i;
    }
  }
  console.log(words[minIndex]);
  return words[minIndex];
};
shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]);
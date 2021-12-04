/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// var canConstruct = function (ransomNote, magazine) {
//   let ransomNotes = Array.from(ransomNote);
//   let magazines = Array.from(magazine);

//   for (note of ransomNotes) {

//     if (!magazines.includes(note)) {
//       return false;
//     }
//     magazines.splice(magazines.findIndex(item => item == note), 1);

//   }
//   return true
// }


var canConstruct = function (ransomNote, magazine) {
  const map = new Map();
  for (let char of magazine)
    map[char] = map[char] ? map[char] + 1 : 1;
  for (let char of ransomNote) {

    if (!map[char] || map[char] == 0) return false;
    map[char]--;
    // console.log(map);
  }
  return true;
}
canConstruct("aa", "aab");
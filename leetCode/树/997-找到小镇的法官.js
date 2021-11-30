/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
  // 去相信
  let attack = Array(n).fill(0);
  // 被相信
  let accept = Array(n).fill(0);
  for(let [a,b] of trust){
    attack[a-1]++;
    accept[b-1]++;
  }
  for(let i=0 ;i<n;i++){
    // 被所有人相信，但是自己不信任所有人
    if(attack[i]==0&&accept[i]==n-1){
      return i+1;
    }
  }
  return -1;
};
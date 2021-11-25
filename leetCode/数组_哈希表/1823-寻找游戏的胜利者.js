/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  // 建立存储伙伴的数组
  const friends = [];
  for (let i = 1; i <= n; i++) {
    friends.push(i);
  }
  // index表示要淘汰小伙伴的索引，第一轮淘汰位置为k-1的小伙伴
  let index = k - 1;
  // 当还剩最后一人时停止循环
  while (friends.length > 1) {
    // 淘汰索引为index的小伙伴
    friends.splice(index, 1);
    // 记录下一个要淘汰的小伙伴
    index = (index + k - 1) % friends.length;
  }
  // 返回最后的胜利者
  return friends[0];
};

作者：cym052
链接：https://leetcode-cn.com/problems/find-the-winner-of-the-circular-game/solution/jsjie-fa-by-cym052-k8vs/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
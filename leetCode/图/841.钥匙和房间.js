/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Set();
  const dfs = key => {
    // 访问当前房间，将当前房间加入已访问集合中
    visited.add(key);
    // 访问房间中所有钥匙对应的房间
    for (let otherKey of rooms[key]) {
      // 有没访问的房间继续访问
      if (!visited.has(otherKey)) {
        dfs(otherKey);
      }
    }
  }
  dfs(0);
  return visited.size === rooms.length;
};
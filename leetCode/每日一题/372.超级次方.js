/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
const MOD = BigInt(1337);

var superPow = function (a, b) {
  let ans = BigInt(1);
  for (let i = b.length - 1; i >= 0; i--) {
    ans = ans * pow(BigInt(a), b[i]) % MOD;
    a = pow(BigInt(a), 10);
  }
  return ans;
};

const pow = (x, n) => {
  let res = BigInt(1);
  while (n !== 0) {
    if (n % 2 !== 0) res = res * BigInt(x) % MOD;
    x = x * x % MOD;
    n = Math.floor(n / 2);
  }
  return res;
}
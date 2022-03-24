// let twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target && i !== j) {
//         return [i, j];
//       }
//     }
//   }
// };


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 示例： nums = [2,7,11,15]  target = 9
let twoSum = function (nums, target) {
  // 定义一个对象存储需要的值
  // key  为需要的值 value  为 当前值索引
  let obj = {};
  // 循环数组 逐层拿出数据  target == 9
  for (let i = 0; i < nums.length; i++) {
    //   获取当前值
    const num = nums[i];
    // 1.( num = 2)
    // 2.( num = 7)

    // 计算需要的值
    let n = target - num;
    // 1. (n = 7)
    // 2. (n = 2)

    // 判断 num 在 obj 中是否存在
    // 1.(2 in obj) false  =>  obj = {7:0}
    // 2.(7 in obj) true  =>  return [1,0]
    if (num in obj) {
      // 如果存在就返回 [当前索引，以及 obj 中需要值的 value ]
      return [i, obj[num]];
    } else {
      // 如果不存在 就将这个值存入到 obj 中去
      obj[n] = i;
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));

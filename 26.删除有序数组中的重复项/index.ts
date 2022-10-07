/**
 * @param {number[]} nums
 * @return {number}
 */

function removeDuplicates(nums: number[]):number {
	// 先获取数组长度
	let n = nums.length;
	if( n === 0) {
		return 0;
	}

	let fast = 1;
	let slow  =1;

	while(fast < n) {
		if(nums[fast] !== nums[fast-1]) {
			nums[slow] = nums[fast];
			slow++;
		}
		fast++;
	}
	return slow;
}


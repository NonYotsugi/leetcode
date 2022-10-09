function searchInsert(nums, target) {
	let n = nums.length;
	let left = 0;
	let right = n - 1;
	while(left <= right) {
		let mid = Math.floor((left + right) / 2);
		if(nums[mid] > target) {
			right = mid - 1;
		} else if(nums[mid] < target) {
			left = mid + 1;
		} else {
			return mid;
		}
	}
	return left;
}

const result = searchInsert([1,3,5,6], 5);
console.log('resulte',result)
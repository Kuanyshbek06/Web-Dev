def centered_average(nums):
    total = sum(nums)
    total = total - min(nums) - max(nums)
    return total // (len(nums) - 2)
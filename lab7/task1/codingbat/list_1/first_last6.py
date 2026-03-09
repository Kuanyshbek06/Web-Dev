def first_last6(nums):
  if nums[0] == 6 or nums[len(nums)-1] == 6:
    return True
  else:
    return False

first_last6([1, 2, 6]) 
first_last6([6, 1, 2, 3]) 
first_last6([13, 6, 1, 2, 3])
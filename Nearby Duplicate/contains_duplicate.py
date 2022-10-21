"""
Given an integer array nums and an integer k, 
return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
"""
class Solution(object):

    def containsNearbyDuplicate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """
        collections = {}
        for i in range(len(nums)):
            if nums[i] in collections and i - collections[nums[i]] <= k:
                return True
            collections[nums[i]] = i
        return False

#test code
nums = [1,2,3,1]
k = 3            
print(Solution().containsNearbyDuplicate(nums, k))

# JavaScript NaN Handling Bug

This repository demonstrates a common but subtle bug in JavaScript related to handling NaN (Not a Number) values in conditional statements.

## Bug Description
The `foo` function intends to handle null, negative numbers, and positive numbers differently. However, it fails to correctly handle NaN. Because NaN compares unequal to any value, including itself.  The conditional logic skips over all cases and implicitly returns `NaN`. This behavior might lead to unexpected results or errors in applications.  The problem lies in the conditional statement's inability to explicitly detect and handle NaN cases, leading to unintended behavior.

## Solution
The solution involves explicitly checking for NaN using the `isNaN()` function and providing a specific handling mechanism (returning a special value, throwing an error, or using a default value).  Proper handling ensures robustness and predictable function behavior. 

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and examine the problematic `foo` function.
3. Run the code: `node bug.js`
4. Observe the unexpected NaN output. 
5. Compare with the solution in `bugSolution.js`.

## Lessons Learned
* Always account for NaN in conditional logic when working with numerical values that might contain unexpected inputs.
* Utilize `isNaN()` for explicit NaN detection.
* Write comprehensive tests to cover edge cases and avoid unexpected behavior. 

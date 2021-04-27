// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

import { branchSums } from "../src/problems/branch-sums"
import { expect } from "chai"

it("Test Case #1", function () {
  const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10])
  expect(branchSums(tree)).to.deep.equal([15, 16, 18, 10, 11])
})

class BinaryTree extends branchSums.BinaryTree {
  constructor(value) {
    super(value)
  }

  insert(values, i = 0) {
    if (i >= values.length) return
    const queue = [this]
    while (queue.length > 0) {
      let current = queue.shift()
      if (current.left === null) {
        current.left = new BinaryTree(values[i])
        break
      }
      queue.push(current.left)
      if (current.right === null) {
        current.right = new BinaryTree(values[i])
        break
      }
      queue.push(current.right)
    }
    this.insert(values, i + 1)
    return this
  }
}

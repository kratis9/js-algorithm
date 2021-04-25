import { sortedSquaredArray } from "../src/algo/squaredArray"

describe("test", () => {
  test("verify a valid string as a palindrom", () => {
    //A man, a plan, a canal: Panama
    expect(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])).toBe([
      1,
      4,
      9,
      25,
      36,
      64,
      81,
    ])
  })
})

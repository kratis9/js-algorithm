import { isPalindrom } from "../src/palindrom";

describe("test", () => {
  test("verify a valid string as a palindrom", () => {
    //A man, a plan, a canal: Panama
    expect(isPalindrom("A man, a plan, a canal: Panama")).toBe(true);
  });
  test("lal", () => {
    //A man, a plan, a canal: Panama
    expect(isPalindrom("lal")).toBe(true);
  });
  test("love", () => {
    //A man, a plan, a canal: Panama
    expect(isPalindrom("love")).toBe(false);
  });

  test("verify a invalid string is not a palindrom", () => {
    expect(isPalindrom("abas")).toBe(false);
  });
});


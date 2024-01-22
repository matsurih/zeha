import { describe, it, expect } from "@jest/globals";

import { zen_to_han, han_to_zen } from "../src";

describe("zen_to_han", () => {
  it("should convert zenkaku ASCII characters to hankaku ASCII characters", () => {
    const result = zen_to_han("ＡＢＣＤＥＦＧ１２３４");
    expect(result).toBe("ABCDEFG1234");
  });

  it("should convert zenkaku kana characters to hankaku kana characters", () => {
    const result = zen_to_han("アイウエオ１２３４");
    expect(result).toBe("ｱｲｳｴｵ1234");
  });

  it("should convert zenkaku digit characters to hankaku digit characters", () => {
    const result = zen_to_han("１２３４５６７８９０ｘｘｘｘ");
    expect(result).toBe("1234567890xxxx");
  });

  // options test
  it("should not convert zenkaku ASCII characters to hankaku ASCII characters", () => {
    const result = zen_to_han("ＡＢＣＤＥＦＧ１２３４", { ascii: false });
    expect(result).toBe("ＡＢＣＤＥＦＧ1234");
  });

  it("should not convert zenkaku kana characters to hankaku kana characters", () => {
    const result = zen_to_han("アイウエオ１２３４", { kana: false });
    expect(result).toBe("アイウエオ1234");
  });

  it("should not convert zenkaku digit characters to hankaku digit characters", () => {
    const result = zen_to_han("１２３４５６７８９０", { digit: false });
    expect(result).toBe("１２３４５６７８９０");
  });
});

describe("han_to_zen", () => {
  it("should convert hankaku ASCII characters to zenkaku ASCII characters", () => {
    const result = han_to_zen("ABCDEFG");
    expect(result).toBe("ＡＢＣＤＥＦＧ");
  });

  it("should convert hankaku kana characters to zenkaku kana characters", () => {
    const result = han_to_zen("ｱｲｳｴｵ");
    expect(result).toBe("アイウエオ");
  });

  it("should convert hankaku digit characters to zenkaku digit characters", () => {
    const result = han_to_zen("1234567890");
    expect(result).toBe("１２３４５６７８９０");
  });
});

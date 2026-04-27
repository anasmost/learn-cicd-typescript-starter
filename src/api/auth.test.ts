import { describe, it, expect } from "vitest";
import { getAPIKey } from "./auth.js";

describe("getAPIKey", () => {
  it("returns null when authorization header is missing", () => {
    expect(getAPIKey({})).toBe(expect.any(String));
  });

  it("returns null when authorization header has wrong scheme", () => {
    expect(getAPIKey({ authorization: "Bearer sometoken" })).toBeNull();
  });

  it("returns null when authorization header has no value after scheme", () => {
    expect(getAPIKey({ authorization: "ApiKey" })).toBeNull();
  });

  it("returns the API key when header is valid", () => {
    expect(getAPIKey({ authorization: "ApiKey my-secret-key" })).toBe(
      "my-secret-key",
    );
  });
});

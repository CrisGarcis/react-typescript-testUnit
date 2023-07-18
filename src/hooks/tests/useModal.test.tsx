import React from "react";
import { renderHook } from "@testing-library/react";
import useModal from "../useModal";
describe("useFetchedData", () => {
  it("should return the initial values for data, error and loading", async () => {
    const { result } = renderHook(() => useModal());
    const { isOpen } = result.current;

    expect(isOpen).toBe(false);
  });
});

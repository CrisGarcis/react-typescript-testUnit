import { Products } from "../hooks/types/products";
import * as request from "./request.utilities";
import jsonData from "../data/test.data.json";
function setupFetchStub(data: Products) {
  return function fetchStub(_url: string) {
    return new Promise((resolve) => {
      resolve({
        json: () =>
          Promise.resolve({
            data,
          }),
      });
    });
  };
}

it("doesnt really fetch", async () => {
  const fakeData = {
    results: jsonData,
    page: 1,
    per_page: 1,
    support: {
      text: "te",
      url: "fd",
    },
    total: 2,
    total_pages: 2,
  };
  jest
    .spyOn(global, "fetch")
    .mockImplementation(() => setupFetchStub(fakeData) as never);

  const res = await fetch("https://peticiones.online/api/products?page=1");
  const json = await res.json();
  expect(json).toEqual(fakeData);

  //global.fetch.mockClear();
});

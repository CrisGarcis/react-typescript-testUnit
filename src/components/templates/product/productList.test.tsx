import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import ProductsList from "./ProductList";
import jsonData from "../../../data/test.data.json";
import * as useFetchProducts from "../../../hooks/useFetchProducts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = (props: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {props.children}
  </QueryClientProvider>
);

export default wrapper;

describe("ProductList component", () => {
  it("Displays the loading view", () => {
    jest.spyOn(useFetchProducts, "useFetchProducts").mockImplementation(
      () =>
        ({
          isLoading: true,
        } as never)
    );
    render(<ProductsList />, { wrapper });
    expect(screen.getByTestId("products-loading")).toBeInTheDocument();
    expect(screen.getByText(/Recuperando los productos.../i)).toBeVisible();
  });

  it("Displays the error message", () => {
    jest.spyOn(useFetchProducts, "useFetchProducts").mockImplementation(
      () =>
        ({
          error: true,
        } as never)
    );
    render(<ProductsList />, { wrapper });
    expect(screen.getByTestId("products-error")).toBeInTheDocument();
    expect(screen.getByText(/Error/i)).toBeVisible();
  });

  it("should render products list", () => {
    jest.spyOn(useFetchProducts, "useFetchProducts").mockImplementation(
      () =>
        ({
          status: "success",
          data: {
            results: jsonData,
          },
        } as never)
    );
    render(<ProductsList />, { wrapper });
    expect(screen.getByTestId("product-0")).toBeInTheDocument();
    expect(screen.getByTestId("product-1")).toBeInTheDocument();
    screen.getByText("Vestido Cruzado con Manga Casquillo");
  });
  it("should change page", () => {
    jest.spyOn(useFetchProducts, "useFetchProducts").mockImplementation(
      () =>
        ({
          status: "success",
          data: {
            results: jsonData,
          },
        } as never)
    );
    render(<ProductsList />, { wrapper });
    const buttonNext = screen.getByTestId("button-next");
    //const buttonPrevious = screen.getByTestId("button-previous");

    fireEvent.click(buttonNext);
    //fireEvent.click(buttonPrevious);
  });
});

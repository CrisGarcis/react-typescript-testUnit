import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { render, screen } from "@testing-library/react";
import App from "./App";

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
jest.mock("./components/pages/Main", () => ({
  __esModule: true,
  default: () => <div data-testid="main-view" />,
}));
describe("app commponent", () => {
  it("should render main component", async () => {
    render(<App />, { wrapper });
    await expect(screen.getByTestId("main-view")).toBeInTheDocument();
  });
});

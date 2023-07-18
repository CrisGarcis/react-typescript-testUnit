import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { render, screen, fireEvent } from "@testing-library/react";
import Main from "./Main";
import Modal from "../templates/modal/Modal";

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
jest.mock("../templates/modal/Modal", () => ({
  __esModule: true,
  default: () => <div data-testid="modal-view" />,
}));
describe("main commponent", () => {
  it("should render modal and productlist component", async () => {
    render(<Main />, { wrapper });
    await expect(screen.getByTestId("modal-view")).toBeInTheDocument();
  });
  it("should toggle the dialog on and off", () => {
    render(<Main />, { wrapper });
    const button = screen.getByTestId("button-open-modal");
    fireEvent.click(button);
    expect(screen.getByTestId("modal-view")).toBeInTheDocument();
  });
});

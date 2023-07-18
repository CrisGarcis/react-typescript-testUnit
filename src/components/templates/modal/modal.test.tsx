import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { render, screen, renderHook, act } from "@testing-library/react";
import Modal from "./Modal";
import useModal from "../../../hooks/useModal";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const mockFn = jest.fn();
const wrapper = (props: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {props.children}
  </QueryClientProvider>
);
export default wrapper;
// jest.mock("./Modal", () => ({
//   __esModule: true,
//   default: () => <div data-testid="modal-view" />,
// }));
describe("main commponent", () => {
  it("If isOpen true is passed the isOpen prop Modal is rendered", () => {
    render(<Modal isOpen={true} toggle={mockFn} />, {
      wrapper,
    });
    expect(screen.getByTestId("modal-view")).toBeInTheDocument();
  });
  it("If isOpen false is passed the isOpen prop Modal is not rendered", () => {
    render(<Modal isOpen={false} toggle={mockFn} />, {
      wrapper,
    });
    expect(screen.queryByTestId("modal-view")).not.toBeInTheDocument();
  });
  it("should close modal after click on close", () => {
    const { result } = renderHook(() => useModal());
    const { isOpen, toggle } = result.current;
    expect(isOpen).toBe(false);
    render(<Modal isOpen={isOpen} toggle={toggle} />, {
      wrapper,
    });
    act(() => {
      toggle();
    });
  });
});

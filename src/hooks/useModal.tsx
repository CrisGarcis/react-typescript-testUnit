import { useState } from "react";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return {
    isOpen,
    toggle,
  };
}

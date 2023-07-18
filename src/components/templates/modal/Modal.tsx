import React, { ReactNode } from "react";
import "./modal.css";
import Button from "../../UI/atoms/buttons/Button";
interface IModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: IModalType) {
  const { isOpen, children, toggle } = props;
  return (
    <div>
      {isOpen && (
        <div className="flex">
          <div
            data-testid="modal-view"
            className="modal-overlay"
            onClick={toggle}
          ></div>
          <div className="modal-box">
            <Button data-testid="button-close-modal" onClick={toggle}>
              Cerrar
            </Button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

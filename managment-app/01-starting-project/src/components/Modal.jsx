import { createPortal } from "react-dom";
import { useImperativeHandle, useRef } from "react";
import Button from "./ui/button";

function Modal({ children, ref, buttonCaption }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="modal">
      {children}
      <form method="dialog">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
}

export default Modal;

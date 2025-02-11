import React from "react";
import "@/styles/modal-dialog.css"

function ModalDialog(props) {
  const { isShown, closeModal, onClose, children, ...invalidProps } = props;
  for (let invalidPropKey in invalidProps) {
    console.warn(
      `Component "ModalDialog" does not accept a ${invalidPropKey} prop`
    );
  }

  // Add onClose event
  React.useEffect(() => {
    if (isShown) {
      return;
    }

    if (onClose) {
      onClose();
    }
  }, [isShown]);

  return (
    <>
      {isShown && (
        <div className="modal-outside" onClick={closeModal}>
          <div className="modal-container" onClick={(event) => {event.stopPropagation()}}>{children}</div>
        </div>
      )}
    </>
  );
}

export default ModalDialog;

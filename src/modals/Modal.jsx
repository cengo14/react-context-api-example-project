import React, { useState } from "react";

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        Modal {isOpen ? "Gizle" : "Göster"}
      </button>
      {isOpen && (
        <div
          className="modal d-block bg-black bg-opacity-50 text-black"
          tabindex="-1"
        >
          <div className="modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  onClick={() => setIsOpen(false)}
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">{children}</div>
              <div className="modal-footer">
                <button
                  onClick={() => setIsOpen(false)}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Kapat
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  type="button"
                  className="btn btn-primary"
                >
                  Tamam
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

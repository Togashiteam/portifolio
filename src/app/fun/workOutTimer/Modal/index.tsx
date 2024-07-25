interface ModalProps {
  isModalOpen: boolean;
  handleOptionSelect: (option: string) => void;
  handleCloseModal: () => void;
  closeOpen: boolean;
  handleClose: () => void;
  selectedOption: string | null;
  setMinutes: (value: number) => void;
  setSeconds: (value: number) => void;
}

const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  handleOptionSelect,
  handleCloseModal,
  closeOpen,
  handleClose,
  selectedOption,
  setMinutes,
  setSeconds,
}) => (
  <>
    {isModalOpen && (
      <div className="modal text-danger-300 text-2xl">
        <div className="modal-content">
          <button onClick={() => handleOptionSelect("Count up")}>
            Count up
          </button>
          <span> </span>
          <button onClick={() => handleOptionSelect("Countdown")}>
            Countdown
          </button>
          {selectedOption == "Countdown" && closeOpen && (
            <div>
              <div className="input box-border">
                <input
                  type="number"
                  placeholder="Minute"
                  min={0}
                  onChange={(e) => setMinutes(Number(e.target.value))}
                />
              </div>
              <br />
              <div className="input box-border">
                <input
                  type="number"
                  placeholder="Seconds"
                  min={0}
                  onChange={(e) => setSeconds(Number(e.target.value))}
                />
              </div>
              <br />
            </div>
          )}
          <button
            className="text-secondary flex justify-center items-center right-96 box-border rounded-full w-4 h-4 bg-danger-700 shadow-sm hover:shadow-danger-400 text-light-300 text-xl"
            onClick={handleCloseModal}
          >
            x
          </button>
        </div>
      </div>
    )}
  </>
);
export default Modal;

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
  selectedOption,
  setMinutes,
  setSeconds,
}) => {
  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSeconds(value.length <= 2 ? Number(value) : Number(value.slice(0, 2)));
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinutes(value.length <= 2 ? Number(value) : Number(value.slice(0, 2)));
  };

  return (
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
                    onChange={handleMinutesChange}
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (e.target.value.length > 2)
                        e.target.value = e.target.value.slice(0, 2);
                    }}
                  />
                </div>
                <br />
                <div className="input box-border">
                  <input
                    type="number"
                    placeholder="Seconds"
                    min={0}
                    onChange={handleSecondsChange}
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (e.target.value.length > 2)
                        e.target.value = e.target.value.slice(0, 2);
                    }}
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
};
export default Modal;

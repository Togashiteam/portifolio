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
          <div className="modal-content text-lg">
            <span> </span>
            <select onChange={(e) => handleOptionSelect(e.target.value)}>
              <option className="count up" value="Count up">
                Count up
              </option>
              <option className="countdown" value="Countdown">
                Countdown
              </option>
            </select>
            <span> </span>
            {selectedOption == "Countdown" && !closeOpen && (
              <div>
                <div className="input ">
                  <input
                    className="w-5/12 h-7"
                    type="number"
                    placeholder=" Minute"
                    min={0}
                    onChange={handleMinutesChange}
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (e.target.value.length > 2)
                        e.target.value = e.target.value.slice(0, 2);
                    }}
                  />
                </div>

                <div className="input box-border">
                  <input
                    className="w-5/12 h-7"
                    type="number"
                    placeholder=" Seconds"
                    min={0}
                    onChange={handleSecondsChange}
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (e.target.value.length > 2)
                        e.target.value = e.target.value.slice(0, 2);
                    }}
                  />
                </div>
              </div>
            )}
            <span> </span>
            <button
              className="text-secondary flex justify-center items-center right-96 box-border rounded-full w-2 h-2 bg-danger-700 shadow-sm hover:shadow-danger-400 text-light-300 text-xs"
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

interface ControlsProps {
  handlePause: () => void;
  handleReset: () => void;
  handleOpenModal: () => void;
  isActive: boolean;
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

import { MdOutlineHourglassTop } from "react-icons/md";
import { SlOptions } from "react-icons/sl";

const Controls: React.FC<ControlsProps> = ({
  handleReset,
  handleOpenModal,
  isActive,
  isModalOpen,
  handleCloseModal,
}) => (
  <div className="grid justify-items-center">
    <div className="item-wrapper justify-center">
      <button
        className="action-button success flex items-center w-11 h-11 sm:w-14 sm:h-14 space-x-4 m-4 place-content-around sm:flex-col"
        onClick={handleReset}
      >
        <MdOutlineHourglassTop />
      </button>
      {!isActive && (
        <button
          className="action-button success flex items-center w-11 h-11 sm:w-14 sm:h-14 space-x-4 m-4 place-content-around sm:flex-col"
          onClick={isModalOpen ? handleCloseModal : handleOpenModal}
        >
          <SlOptions />
        </button>
      )}
    </div>
  </div>
);
export default Controls;

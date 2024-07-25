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
import { TbHandStop } from "react-icons/tb";

const Controls: React.FC<ControlsProps> = ({
  handlePause,
  handleReset,
  handleOpenModal,
  isActive,
  isModalOpen,
  handleCloseModal,
}) => (
  <div className="grid justify-items-center">
    <div className="item-wrapper justify-center">
      {!isActive && (
        <button
          className="action-button success flex flex-col w-24 h-24 sm:w-24 sm:h-24 space-x-4 m-4 place-content-around sm:flex-col"
          onClick={isModalOpen ? handleCloseModal : handleOpenModal}
        >
          <SlOptions size={80} />
          <div className="item-box hidden sm:flex">Option</div>
        </button>
      )}
      <button
        className="action-button success flex flex-col w-24 h-24 sm:w-24 sm:h-24 space-x-4 m-4 place-content-around sm:flex-col"
        onClick={handlePause}
        disabled={!isActive}
      >
        <TbHandStop size={80} />
        <div className="item-box hidden sm:flex">Pause</div>
      </button>
      <button
        className="action-button success flex flex-col w-24 h-24 sm:w-24 sm:h-24 space-x-4 m-4 place-content-around sm:flex-col"
        onClick={handleReset}
      >
        <MdOutlineHourglassTop size={80} />
        <div className="item-box hidden visible sm:flex place-content-end">
          Reset
        </div>
      </button>
    </div>
  </div>
);
export default Controls;

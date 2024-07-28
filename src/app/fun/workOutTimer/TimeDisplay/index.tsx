import { DiVim } from "react-icons/di";

interface TimerDisplayProps {
  minutes: number;
  seconds: number;
  isActive: boolean;
  selectedOption: string | null;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({
  minutes,
  seconds,
  isActive,
  selectedOption,
}) => {
  const formatTime = (time: number) =>
    time < 10 && time >= 0 ? `0${time}` : time;

  return (
    <div className="grid justify-items-center">
      <div className="item-wrapper">
        <div
          className="flex place-content-center font-semibold sm:w-72 h-80 text-9xl"
          style={{ fontSize: "12rem" }}
        >
          {isActive === false &&
            selectedOption === "Count up" &&
            seconds < 0 &&
            minutes == 0 && <div>00:00</div>}

          {isActive === true &&
            selectedOption === "Count up" &&
            (minutes == 0 && seconds < 0
              ? ["READY!", "SET!", "GO!"][seconds + 3]
              : `${formatTime(minutes)}:${formatTime(seconds)}`)}

          {selectedOption === "Count up" &&
            isActive === false &&
            seconds > 0 && (
              <div>
                {formatTime(minutes)}:{formatTime(seconds)}
              </div>
            )}

          {selectedOption === "Countdown" && (
            <div>
              {formatTime(minutes)}:{formatTime(seconds)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default TimerDisplay;

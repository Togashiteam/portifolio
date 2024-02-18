interface IAlertComponent {
  text: string;
}

const AlertComponent = ({ text }: IAlertComponent) => {
  return (
    <div
      className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4 absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      role="alert"
    >
      <p className="font-bold">{text}</p>
    </div>
  );
};

export default AlertComponent;

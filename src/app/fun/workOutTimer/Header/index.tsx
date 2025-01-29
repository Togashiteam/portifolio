const Header: React.FC = () => (
  <header>
    <div className="rps">
      <a href="./">
        <h2 className="text-secondary items-end flex right-52 box-border rounded-lg w-24 h-9 bg-danger-700 shadow-sm hover:shadow-danger-400 text-3xl sm:right-80">
          Home
        </h2>
      </a>
      <div className="text-secondary paper"> Work </div>
      <div className="text-spacey and"> Out </div>
      <div className="text-secondary scissors"> Timer </div>
    </div>
  </header>
);
export default Header;

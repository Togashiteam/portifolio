export default function Page() {
  return (
    <div className="wrapper w-screen h-screen">
      <header>
        <div className="logo">
          <span className="text-secondary port"> PORT </span>
          <span className="text-secondary io"> io </span>
          <span className="text-funny fun"> Fun </span>
        </div>
      </header>

      <div className="container-wrapper">
        <div className="content">
          <div className="list-item">
            <a href="./style">
              <div className="action-button danger w-40 h-40">
                <span className="title"> STL </span>
                <span className="icon"> S </span>
                <span className="description"> style </span>
              </div>
            </a>
            <div className="action-button-description">
              <span> Making design less stressful </span>
            </div>
          </div>

          <div className="list-item">
            <a href="./style">
              <div className="action-button success w-40 h-40">
                <span className="title"> FUN </span>
                <span className="icon"> F </span>
                <span className="description"> playtime </span>
              </div>
            </a>
            <div className="action-button-description">
              <span> Making life less stressful </span>
            </div>
          </div>

          <div className="list-item">
            <a href="./style">
              <div className="action-button alert w-40 h-40">
                <span className="title"> DEV </span>
                <span className="icon"> # </span>
                <span className="description"> worktime </span>
              </div>
            </a>
            <div className="action-button-description">
              <span> Making productivity less stressful </span>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <span> @portfunio - All rights reserved - since 2024 </span>
      </footer>
    </div>
  );
}

import Icon from "@/components/Icon";

export default function Home() {
  return (
    <>
      <>
        <div className="wrapper w-screen h-screen">
          <header>
            <div className="logo">
              <span className="text-secondary port"> PORT </span>
              <span className="text-secondary io"> io </span>
              <span className="text-funny fun"> Fun </span>
            </div>
          </header>
          {/*
          <div className="content-wrapper">
            <nav className="menu">
              <ul>
                <li> Items do Menu</li>
                <li> Items do Menu</li>
                <li> Items do Menu</li>
              </ul>
            </nav>  
          </div>
*/}
          <div className="content-wrapper bg-primary-400">
            <div className="content">
              <div className="item-wrapper flex">
                <a href="./style">
                  <div className="action-button danger flex left w-80 sm:w-36 h-36 space-x-4 m-4 flex-wrap place-content-around sm:flex-col-reverse">
                    <span className="icon">
                      <span className="action-button-mobile flex gap-x-20 sm:gap-x-4">
                        STL{" "}
                        <span className="action-button icon">
                          <Icon name="brush" />{" "}
                        </span>
                      </span>
                    </span>
                    <span className="item-box hidden visible sm:flex place-content-end">
                      STYLE
                    </span>
                    <p className="mobile sm:hidden mt-1 mb-4">
                      {" "}
                      help for designers{" "}
                    </p>
                  </div>
                </a>
                <div className="action-button-description hidden sm:flex space-x-4 m-4">
                  <span> Making design less stressful 1 </span>
                </div>
              </div>
              <div className="item-wrapper">
                <a href="./style">
                  <div className="action-button success flex left w-80 sm:w-36 h-36 space-x-4 m-4 flex-wrap place-content-around sm:flex-col-reverse">
                    <span className="action-button-mobile flex gap-x-20 sm:gap-x-4">
                      {" "}
                      FUN <Icon name="dpad" />{" "}
                    </span>
                    <span className="item-box hidden visible sm:flex place-content-end">
                      Playtime
                    </span>
                    <p className="mobile sm:hidden mt-1 mb-4">
                      to put away stress{" "}
                    </p>
                  </div>
                </a>
                <div className="action-button-description flex-none hidden sm:flex space-x-4 m-4">
                  <span> Making life less stressful 2 </span>
                </div>
              </div>
              <div className="item-wrapper">
                <a href="./style">
                  <div className="action-button alert flex left w-80 sm:w-36 h-36 space-x-4 m-4 flex-wrap place-content-around sm:flex-col-reverse">
                    <span className="action-button-mobile flex gap-x-20 sm:gap-x-4">
                      {" "}
                      DEV <Icon name="codeSlash" />{" "}
                    </span>
                    <span className="item-box hidden visible sm:flex place-content-end">
                      Work
                    </span>
                    <p className="mobile sm:hidden mt-1 mb-4">
                      {" "}
                      help for developers{" "}
                    </p>
                  </div>
                </a>
                <div className="action-button-description hidden sm:visible sm:flex space-x-4 m-4">
                  <span> Making productivity less stressful 3 </span>
                </div>
              </div>
            </div>
          </div>

          <footer>
            <span className="footer">
              {" "}
              @portfunio - All rights reserved - since 2024{" "}
            </span>
          </footer>
        </div>
      </>
    </>
  );
}

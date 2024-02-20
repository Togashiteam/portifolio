import Icon from "@/components/Icon";

export default function Page() {
  return (
    <>
      <div className="wrapper w-screen h-screen">
        <header>
          <div className="logo">
            <div className="text-secondary port"> PORT </div>
            <div className="text-secondary io"> io </div>
            <div className="text-funny fun"> Fun </div>
          </div>
        </header>
        <div className="content-wrapper bg-primary-400">
          <div className="content">
            <div className="item-wrapper flex">
              <a href="./style">
                <div className="action-button danger flex w-80 sm:w-36 h-36 space-x-4 m-4 flex-wrap place-content-around sm:flex-col-reverse">
                  <div className="icon">
                    <div className="action-button-mobile flex gap-x-20 sm:gap-x-4">
                      STL
                      <div className="action-button pulse flex justify-center items-center">
                        <Icon name="brush" />
                      </div>
                    </div>
                  </div>
                  <div className="item-box hidden sm:flex place-content-end">
                    STYLE
                  </div>
                  <p className="mobile sm:hidden mt-1 mb-4">
                    help for designers
                  </p>
                </div>
              </a>
              <div className="action-button-description hidden sm:flex space-x-4 m-4">
                <p> Making design less stressful 1 </p>
              </div>
            </div>
            <div className="item-wrapper">
              <a href="./style">
                <div className="action-button success flex w-80 sm:w-36 h-36 space-x-4 m-4 flex-wrap place-content-around sm:flex-col-reverse">
                  <div className="action-button-mobile flex gap-x-20 sm:gap-x-4">
                    FUN
                    <div className="action-button pulse flex justify-center items-center">
                      <Icon name="dpad" />
                    </div>
                  </div>
                  <div className="item-box hidden visible sm:flex place-content-end">
                    Playtime
                  </div>
                  <p className="mobile sm:hidden mt-1 mb-4">
                    to put away stress
                  </p>
                </div>
              </a>
              <div className="action-button-description flex-none hidden sm:flex space-x-4 m-4">
                <p> Making life less stressful 2 </p>
              </div>
            </div>
            <div className="item-wrapper">
              <a href="./style">
                <div className="action-button alert flex w-80 sm:w-36 h-36 space-x-4 m-4 flex-wrap place-content-around sm:flex-col-reverse">
                  <div className="action-button-mobile flex gap-x-20 sm:gap-x-4">
                    DEV
                    <div className="action-button pulse flex justify-center items-center">
                      <Icon name="codeSlash" />
                    </div>
                  </div>
                  <div className="item-box hidden visible sm:flex place-content-end">
                    Work
                  </div>
                  <p className="mobile sm:hidden mt-1 mb-4">
                    help for developers
                  </p>
                </div>
              </a>
              <div className="action-button-description hidden sm:visible sm:flex space-x-4 m-4">
                <p> Making productivity less stressful 3 </p>
              </div>
            </div>
            <div className="footer">
              <div className="footer home flex pl-32 visible sm:hidden">
                @PORTFUN
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="footer">
            <div className="footer home hidden sm:flex">
              @portfunio - All rights reserved - since 2024
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

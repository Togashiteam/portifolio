export default function Home() {
  const test = "oi";
  return (
    <>
      <>
        {/*
        <div className="wrapper w-screen h-screen">
          <header>
            <div className="logo">
              <span className="text-secondary port"> PORT </span>
              <span className="text-secondary io"> io </span>
              <span className="text-funny fun"> Fun </span>
            </div>
          </header>
          
          <div className="content-wrapper">
            <nav className="menu">
              <ul>
                <li> Items do Menu</li>
                <li> Items do Menu</li>
                <li> Items do Menu</li>
              </ul>
            </nav>  
          </div>

          <div className="content-wrapper bg-primary-400">
            <div className="content">
              <div className="item-wrapper flex">
                <a href="./style">
                  <div className="action-button danger flex left w-80 sm:w-36 h-36 space-x-4 m-4">
                    <span className="description invisible display-none sm:visible left-10 ml-6">
                      {" "}
                      STL{" "}
                    </span>
                    <span className="icon animated left-10 mb-4">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-brush"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04M4.705 11.912a1.2 1.2 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.4 3.4 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3 3 0 0 0 .126-.75zm1.44.026c.12-.04.277-.1.458-.183a5.1 5.1 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005zm3.582-3.043.002.001h-.002z" />
                      </svg>{" "}
                    </span>
                    <span className="item-box invisible sm:visible relative right-8 bottom-24 m-2">
                      STYLE
                    </span>
                    <span className="action-button-mobile visible sm:invisible">
                      STL MOBILE
                      <p className="mobile"> help for designers </p>
                    </span>
                  </div>
                </a>
                <div className="action-button-description flex-none hidden sm:flex space-x-4 m-4">
                  <span> Making design less stressful 1 </span>
                </div>
              </div>

              <div className="item-wrapper">
                <a href="./style">
                  <div className="action-button success flex w-80 sm:w-36 h-36 m-4">
                    <span className="description invisible display-none sm:visible left-10 ml-6">
                      {" "}
                      FUN{" "}
                    </span>
                    <span className="icon animated left-2 mb-4 ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-dpad"
                        viewBox="0 0 16 16"
                      >
                        <path d="m7.788 2.34-.799 1.278A.25.25 0 0 0 7.201 4h1.598a.25.25 0 0 0 .212-.382l-.799-1.279a.25.25 0 0 0-.424 0Zm0 11.32-.799-1.277A.25.25 0 0 1 7.201 12h1.598a.25.25 0 0 1 .212.383l-.799 1.278a.25.25 0 0 1-.424 0ZM3.617 9.01 2.34 8.213a.25.25 0 0 1 0-.424l1.278-.799A.25.25 0 0 1 4 7.201V8.8a.25.25 0 0 1-.383.212Zm10.043-.798-1.277.799A.25.25 0 0 1 12 8.799V7.2a.25.25 0 0 1 .383-.212l1.278.799a.25.25 0 0 1 0 .424Z" />
                        <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v3a.5.5 0 0 1-.5.5h-3A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11h3a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 6.5 16h3a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 0 16 9.5v-3A1.5 1.5 0 0 0 14.5 5h-3a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 9.5 0zM6 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 11.5 6h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a1.5 1.5 0 0 0-1.5 1.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 4.5 10h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 0 6 4.5z" />
                      </svg>
                    </span>
                    <span className="item-box invisible sm:visible relative right-12 bottom-24 m-2">
                      Playtime
                    </span>
                    <span className="action-button-mobile visible sm:invisible flex m-2">
                      FUN mobile
                      <p className="mobile">to put away stress </p>
                    </span>
                  </div>
                </a>
                <div className="action-button-description flex-none hidden sm:flex space-x-4 m-4">
                  <span> Making life less stressful 2 </span>
                </div>
              </div>

              <div className="item-wrapper">
                <a href="./style">
                  <div className="action-button alert flex w-80 sm:w-36 h-36 space-x-4 m-4">
                    <span className="description invisible display-none sm:visible left-10 ml-6">
                      {" "}
                      DEV{" "}
                    </span>
                    <span className="icon animated left-10 mb-4">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-code-slash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                      </svg>{" "}
                    </span>
                    <span className="item-box invisible sm:visible relative right-10 bottom-24 m-2">
                      Work
                    </span>
                    <span className="action-button-mobile sm:invisible">
                      DEV MOBILE
                      <p className="mobile"> help for developers </p>
                    </span>
                  </div>
                </a>
                <div className="action-button-description invisible sm:visible sm:flex space-x-4 m-4">
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
        */}
      </>
    </>
  );
}

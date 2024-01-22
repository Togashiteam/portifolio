export default function StyleBorder() {
  return (
    <>
      <h1> Border </h1>

      <div className="grid grid-cols-2 gap-8">
        <div style={{ backgroundColor: "red" }}>
          <form>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Border Width
              </label>
              <div className="mt-2">
                <input type="range" name="" id="" min={0} max={255} value={5} />
              </div>
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Border Style
              </label>
              <div className="mt-2">
                <select className="selectpicker" id="borderStyle">
                  <option selected> solid </option>
                  <option> dotted </option>
                  <option> dashed </option>
                  <option> double </option>
                  <option> groove </option>
                  <option> ridge </option>
                  <option> inset </option>
                  <option> outset </option>
                  <option> none </option>
                  <option> hidden </option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Border Color
              </label>
              <div className="mt-2">
                <input type="color" id="favcolor" name=""></input>
              </div>
            </div>
          </form>
        </div>
        <div style={{ backgroundColor: "red" }}></div>
      </div>
    </>
  );
}

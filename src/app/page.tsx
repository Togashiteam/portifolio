import "./global.scss";

export default function Home() {
  return (
    <div className="w-full h-svh p-10 space-y-5">
      <p className="text-7xl">Portfunio</p>

      <div className="wrapper-square flex space-x-10">
        <div className="square w-40 h-40 bg-slate-100 text-slate-900">
          <p>style</p>
          <p>STL</p>
          <p>Icon</p>
        </div>
        <div className="text text-pink-700">making design less stressful</div>
      </div>
      <div className="wrapper-square flex space-x-10">
        <div className="square primeiro w-40 h-40 bg-slate-100 text-slate-900">
          <p>style</p>
          <p>STL</p>
          <p>Icon</p>
        </div>
        <div className="text text-pink-700">making life less stressful</div>
      </div>
      <div className="wrapper-square flex space-x-10">
        <div className="square w-40 h-40 bg-slate-100 text-slate-900">
          <p>style</p>
          <p>STL</p>
          <p>Icon</p>
        </div>
        <div className="text text-pink-700">
          making productivity less stressful
        </div>
      </div>
    </div>
  );
}

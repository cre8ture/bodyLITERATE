import "./styles.css";
import Rotate from "./components/Rotate";
import RotateYellow from "./components/RotateYellow";
import yellowFlower from "./images/yellowFlower.png";
import redFlower from "./images/redFlower.png";

export default function App() {
  return (
    <>
      <div className="photo-left-container">
        <Rotate src={redFlower} />
      </div>
      {/* great example below of side by side components */}
      {/* <div className="container">
  <p> he <br/> llo </p> <Rotate src={redFlower} /> 
</div> */}
      <span>Start editing to see some! </span>

      <div className="photo-right-container">
        <h1 className="text-2x1 font-medium text-primary rounded-lg border border-primaryBorder shadow-default py-10 px-16">
          {" "}
          HELLOW
        </h1>
        <p className="float-right"> hello I'm right! </p>
        {/* <Rotate src={yellowFlower} /> */}
        <RotateYellow />
      </div>
    </>
  );
}

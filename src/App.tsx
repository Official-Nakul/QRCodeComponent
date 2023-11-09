import "./App.css";
import imgurl from "./assets/qrCode.jpg";
function App() {
  // document.querySelector(".qrImg").src = imgurl;
  return (
    <>
      <div className="cardBody">
        <img src={imgurl} alt="" className="qrImg" />
        <p className="heading">
          Improve your front-end skills by building projects
        </p>
        <br />
        <p className="txt">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </>
  );
}

export default App;

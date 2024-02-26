import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HxH from "./images/hh.jpg";

function App() {
  return (
    <>
      <div className="imageBanner">
        <img src={HxH} className="img-fluid d-flex align-self-center m-auto" alt="hunter hunter protagonists" />
      </div>

      <div className="bingoContainer text-center d-flex align-items-center grid gap-1">
        <div className="col bingoRows" >
          <div className="row bingoSquares">one</div>
          <div className="row bingoSquares">two</div>
          <div className="row bingoSquares">three</div>
          <div className="row bingoSquares">four</div>
          <div className="row bingoSquares">five</div>
        </div>
        <div className="col bingoRows" >
          <div className="row bingoSquares">one</div>
          <div className="row bingoSquares">two</div>
          <div className="row bingoSquares">three</div>
          <div className="row bingoSquares">four</div>
          <div className="row bingoSquares">five</div>
        </div>
        <div className="col bingoRows" >
          <div className="row bingoSquares">one</div>
          <div className="row bingoSquares">two</div>
          <div className="row bingoSquares">
            <div className="star"></div>
          </div>
          <div className="row bingoSquares">four</div>
          <div className="row bingoSquares">five</div>
        </div>
        <div className="col bingoRows" >
          <div className="row bingoSquares">one</div>
          <div className="row bingoSquares">two</div>
          <div className="row bingoSquares">three</div>
          <div className="row bingoSquares">four</div>
          <div className="row bingoSquares">five</div>
        </div>
        <div className="col bingoRows" >
          <div className="row bingoSquares">one</div>
          <div className="row bingoSquares">two</div>
          <div className="row bingoSquares">three</div>
          <div className="row bingoSquares">four</div>
          <div className="row bingoSquares">five</div>
        </div>
      </div>
    </>
  );
}

export default App;

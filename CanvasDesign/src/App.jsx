import "./App.css";
import ReactPainter from "react-painter";

function App() {
  return (
    <>
      <ReactPainter
        width={1000}
        height={600}
        render={({
          canvas,
          triggerSave,
          setColor,
          setLineWidth,
          imageDownloadUrl,
          setLineCap,
          setLineJoin,
        }) => (
          <div>
            <h1>Painting Book</h1>
            <div className="toolbox">
              <div className="flex">
                <label htmlFor="">Brush Color</label>
                <input
                  type="color"
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div className="flex">
                <label htmlFor="">Brush Size</label>
                <input
                  defaultValue={"1"}
                  type="range"
                  min={"1"}
                  max={"50"}
                  onChange={(e) => setLineWidth(e.target.value)}
                />
              </div>

              {imageDownloadUrl ? (
                <a href={imageDownloadUrl} download={"Painting.png"}>
                  Download
                </a>
              ) : (
                <button onClick={triggerSave}>Save</button>
              )}
            </div>
            <div className="">{canvas}</div>
          </div>
        )}
      />
    </>
  );
}

export default App;

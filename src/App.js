import './App.css';

function App() {
  return (
    <div id="appMaster" className="FCAIC">
      <div id="titleBox" className="FCAIC">
        <h1 id="title">SPACE</h1>
        <h2 id="subTitle">QUIZ</h2>
      </div>
      <div id="solarSystemContainer" className="FCAIC">
        <div id="jupiterOrbit" className="FCAIC">
          <div id="jupiterShadowBox" className="FCAIC">
            <div id="jupiterShadow" />
            <img alt="Jupiter" id="jupiter" src="images/jupiter.png" />
          </div>
        </div>
        <div id="marsOrbit" className="FCAIC">
          <div id="marsShadowBox" className="FCAIC">
            <div id="marsShadow" />
            <img alt="Mars" id="mars" src="images/mars.png" />
          </div>
        </div>
        <div id="earthOrbit" className="FCAIC">
          <div id="moonOrbit" className="FCAIC">
            <div id="moonShadowBox" className="FCAIC">
              <div id="moonShadow" />
              <img alt="Moon" id="moon" src="images/moon.png" />
            </div>
          </div>
          <div id="earthShadowBox" className="FCAIC">
            <div id="earthShadow" />
            <img alt="Earth" id="earth" src="images/earth.png" />
          </div>
        </div>
        <div id="venusOrbit" className="FCAIC">
          <div id="venusShadowBox" className="FCAIC">
            <div id="venusShadow" />
            <img alt="Venus" id="venus" src="images/venus.png" />
          </div>
        </div>
        <div id="mercuryOrbit" className="FCAIC">
          <div id="venusShadowBox" className="FCAIC">
            <div id="mercuryShadow" />
            <img alt="Mercury" id="mercury" src="images/mercury.png" />
          </div>
        </div>
        <div id="sunBox">
          <img alt="Sun" id="sun" src="images/the-sun.png" />
        </div>
      </div>
    </div>
  );
}

export default App;

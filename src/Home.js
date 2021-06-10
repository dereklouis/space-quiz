import './Home.css';
import { useState, useRef } from 'react';

function Home() {
  const beginRipple = useRef(null);
  const infoRipple = useRef(null);
  const comet = useRef(null);
  const letterS = useRef(null);
  const letterP = useRef(null);
  const letterA = useRef(null);
  const letterC = useRef(null);
  const letterE = useRef(null);
  const letterQ = useRef(null);
  const letterU = useRef(null);
  const letterI = useRef(null);
  const letterZ = useRef(null);
  const infoPanel = useRef(null);

  const [infoPanelState, setInfoPanelState] = useState(false);

  const handleClick = (e) => {
    const x =
      e.clientX - (e.target.offsetLeft + e.target.parentNode.offsetLeft);
    const y = e.clientY - (e.target.offsetTop + e.target.parentNode.offsetTop);
    if (e.target.innerText === 'BEGIN') {
      beginRipple.current.style.left = `${x}px`;
      beginRipple.current.style.top = `${y}px`;
      beginRipple.current.className = 'ripple';
      if (infoPanelState) {
        setInfoPanelState(false);
      }
      comet.current.className = 'cometAnimation';
      letterA.current.className = 'spaceAnimation1';
      letterP.current.className = 'spaceAnimation2';
      letterC.current.className = 'spaceAnimation2';
      letterU.current.className = 'spaceAnimation2';
      letterI.current.className = 'spaceAnimation2';
      letterS.current.className = 'spaceAnimation3';
      letterE.current.className = 'spaceAnimation3';
      letterQ.current.className = 'spaceAnimation3';
      letterZ.current.className = 'spaceAnimation3';
    } else if (e.target.innerText === 'INFO') {
      infoRipple.current.style.left = `${x}px`;
      infoRipple.current.style.top = `${y}px`;
      infoRipple.current.className = 'ripple';
      setInfoPanelState(!infoPanelState);
    }
  };

  const resetAnimation = (e, ref) => {
    ref.current.className = '';
  };

  return (
    <div id="appMaster" className="FCAIC">
      <div id="navBar">
        <button className="navButton" onClick={handleClick}>
          BEGIN
          <span
            ref={beginRipple}
            onAnimationEnd={(e) => resetAnimation(e, beginRipple)}
          />
        </button>
        <div id="titleBox" className="FCAIC">
          <h1 id="title">
            <span
              ref={letterS}
              onAnimationEnd={(e) => resetAnimation(e, letterS)}
            >
              S
            </span>
            <span
              ref={letterP}
              onAnimationEnd={(e) => resetAnimation(e, letterP)}
            >
              P
            </span>
            <span
              ref={letterA}
              onAnimationEnd={(e) => resetAnimation(e, letterA)}
            >
              A
            </span>
            <span
              ref={letterC}
              onAnimationEnd={(e) => resetAnimation(e, letterC)}
            >
              C
            </span>
            <span
              ref={letterE}
              onAnimationEnd={(e) => resetAnimation(e, letterE)}
            >
              E
            </span>
          </h1>
          <h2 id="subTitle">
            <span
              ref={letterQ}
              onAnimationEnd={(e) => resetAnimation(e, letterQ)}
            >
              Q
            </span>
            <span
              ref={letterU}
              onAnimationEnd={(e) => resetAnimation(e, letterU)}
            >
              U
            </span>
            <span
              ref={letterI}
              onAnimationEnd={(e) => resetAnimation(e, letterI)}
            >
              I
            </span>
            <span
              ref={letterZ}
              onAnimationEnd={(e) => resetAnimation(e, letterZ)}
            >
              Z
            </span>
          </h2>
        </div>
        <button className="navButton" onClick={handleClick}>
          INFO
          <span
            ref={infoRipple}
            onAnimationEnd={(e) => resetAnimation(e, infoRipple)}
          />
        </button>
      </div>
      <div
        id="infoPanel"
        className={infoPanelState ? 'panelShow' : 'panelHide'}
        ref={infoPanel}
      >
        <h2 id="infoPanelTitle">MODEL SOLAR SYSTEM INFORMATION</h2>
        <ul id="mainUL">
          <li className="mainLI">
            Oribital Periods <span className="equalMargin">=</span> 1 /
            1,000,000 Scale
          </li>
          <li className="mainLI">
            Rotational Periods <span className="equalMargin">=</span> 1 /
            100,000 Scale
          </li>
        </ul>
        <div id="panelBottomRow">
          <div className="panelBottomRowColumn">
            <h4>ACCURATE</h4>
            <ul className="subUL">
              <li className="subLI">
                Mercury, Venus, Moon and Mars diameters are accurate relative to
                the Earth diameter
              </li>
              <li className="subLI">
                Orbital and rotational periods are accurate to the scales listed
                above
              </li>
            </ul>
          </div>
          <div id="infoPanelLine" />
          <div className="panelBottomRowColumn">
            <h4>INACCURATE</h4>
            <ul className="subUL">
              <li className="subLI">
                Sun and Jupiter diameters are not accurate in any way other than
                to look good on screen
              </li>
              <li className="subLI">
                Orbital diameters are not accurate in any way
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="solarSystemContainer" className="FCAIC">
        <img
          alt="comet"
          src="images/comet.png"
          id="comet"
          ref={comet}
          onAnimationEnd={(e) => resetAnimation(e, comet)}
        />
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

export default Home;

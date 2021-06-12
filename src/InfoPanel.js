import './styles/infoPanel.css';

const InfoPanel = (props) => {
  return (
    <div
      id="infoPanel"
      className={props.infoPanelState ? 'panelShow' : 'panelHide'}
      ref={props.infoPanel}
    >
      <h2 id="infoPanelTitle">MODEL SOLAR SYSTEM INFORMATION</h2>
      <ul id="mainUL">
        <li className="mainLI">
          Oribital Periods <span className="equalMargin">=</span> 1 / 1,000,000
          Scale
        </li>
        <li className="mainLI">
          Rotational Periods <span className="equalMargin">=</span> 1 / 100,000
          Scale
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
  );
};

export default InfoPanel;

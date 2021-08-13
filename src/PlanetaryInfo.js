import './styles/PlanetaryInfo.css';
import { planetClickKey, planetInfoObject } from './planetInfo';

const PlanetaryInfo = (props) => {
  const resetPlanetaryInfoState = (e) => {
    if (e.target.className === 'panelHide') {
      props.setPlanetaryInfoSelector('');
    }
  };

  return (
    <div
      id="planetaryInfoPanel"
      className={props.planetaryInfoSelector === '' ? 'panelHide' : 'panelShow'}
      ref={props.planetaryInfoPanel}
      onTransitionEnd={resetPlanetaryInfoState}
    >
      <img
        alt={planetClickKey[props.planetaryInfoSelector]}
        src={`images/${planetClickKey[props.planetaryInfoSelector]}Surface.jpg`}
        id="planetSurface"
      />
      {props.planetaryInfoSelector !== '' && (
        <div id="planetaryInfoContainer">
          <img
            alt={planetClickKey[props.planetaryInfoSelector]}
            src={`images/${
              planetClickKey[props.planetaryInfoSelector]
            }Side.png`}
            id="planetaryFactsImage"
          />
          <ul id="planetaryFactsUl">
            <h2 id="planetaryInfoTitle">
              {
                planetInfoObject[planetClickKey[props.planetaryInfoSelector]]
                  .name
              }
            </h2>
            <li className="planetFact">
              Diameter:
              <span className="planetFactSpan">
                {props.units === 'metric'
                  ? planetInfoObject[
                      planetClickKey[props.planetaryInfoSelector]
                    ].diameterMetric
                  : planetInfoObject[
                      planetClickKey[props.planetaryInfoSelector]
                    ].diameterImperial}
              </span>
            </li>
            <li className="planetFact">
              Orbital Period:
              <span className="planetFactSpan">
                {
                  planetInfoObject[planetClickKey[props.planetaryInfoSelector]]
                    .orbitalPeriod
                }
              </span>
            </li>
            <li className="planetFact">
              Rotational Period:
              <span className="planetFactSpan">
                {
                  planetInfoObject[planetClickKey[props.planetaryInfoSelector]]
                    .rotationalPeriod
                }
              </span>
            </li>
            {planetInfoObject[planetClickKey[props.planetaryInfoSelector]]
              .distanceFromSunMetric === null ? (
              <li className="planetFact">
                Distance From Earth:
                <span className="planetFactSpan">
                  {props.units === 'metric'
                    ? planetInfoObject[
                        planetClickKey[props.planetaryInfoSelector]
                      ].distanceFromEarthMetric
                    : planetInfoObject[
                        planetClickKey[props.planetaryInfoSelector]
                      ].distanceFromEarthImperial}
                </span>
              </li>
            ) : (
              <li className="planetFact">
                Distance From Sun:
                <span className="planetFactSpan">
                  {props.units === 'metric'
                    ? planetInfoObject[
                        planetClickKey[props.planetaryInfoSelector]
                      ].distanceFromSunMetric
                    : planetInfoObject[
                        planetClickKey[props.planetaryInfoSelector]
                      ].distanceFromSunImperial}
                </span>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlanetaryInfo;

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
                {
                  planetInfoObject[planetClickKey[props.planetaryInfoSelector]]
                    .diameter
                }
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
              .distanceFromSun === null ? (
              <li className="planetFact">
                Distance From Earth:
                <span className="planetFactSpan">
                  {
                    planetInfoObject[
                      planetClickKey[props.planetaryInfoSelector]
                    ].distanceFromEarth
                  }
                </span>
              </li>
            ) : (
              <li className="planetFact">
                Distance From Sun:
                <span className="planetFactSpan">
                  {
                    planetInfoObject[
                      planetClickKey[props.planetaryInfoSelector]
                    ].distanceFromSun
                  }
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

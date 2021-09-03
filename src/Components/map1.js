import React, { useState, useEffect, useContext } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "./map1.css";
import { CoorContext } from "../Context/CoorContext";
import { VacContext } from "../Context/VacContext";

function Map() {
  const { data } = useContext(CoorContext);
  const { data1 } = useContext(VacContext);
  const [tooltipData, setTooltipData] = useState();
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 0,
    longitude: 0,
    zoom: 2.5,
  });

  useEffect(() => {
    const listner = (e) => {
      if (e.key === "Escape") {
        setTooltipData(null);
      }
    };
    window.addEventListener("keydown", listner);
    return () => {
      window.removeEventListener("keydown", listner);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_API_KEY}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle={process.env.REACT_APP_STYLE}
      >
        {data &&
          data.map((item, key) => (
            <Marker
              key={key}
              latitude={item.countryInfo.lat}
              longitude={item.countryInfo.long}
            >
              <div
                style={{ height: 15, width: 15 }}
                className="map-marker"
                onClick={() => setTooltipData(item)}
              ></div>
              {console.log(tooltipData, "hello")}
            </Marker>
          ))}
        {tooltipData && (
          <Popup
            latitude={tooltipData.countryInfo.lat}
            longitude={tooltipData.countryInfo.long}
            anchor="bottom"
            closeButton={true}
            onClose={() => setTooltipData(null)}
          >
            <div className="tooltip-card">
              <div className="tooltip-header">
                <img
                  className="tooltip-img"
                  src={tooltipData.countryInfo.flag}
                  alt=""
                ></img>
                {tooltipData.country}
              </div>
              <div className="tooltip-content">
                <div className="content-row">
                  <div className="small heading text-secondary me-2">
                    Total doses given :
                  </div>
                  <div className="h6 heading">
                    {data1 &&
                      data1.map((item) => (
                        <>
                          {Object.values(item.timeline).map((i) => (
                            <>
                              {JSON.stringify(item.country) ===
                              JSON.stringify(tooltipData.country) ? (
                                <div>{i.toLocaleString()}</div>
                              ) : null}
                            </>
                          ))}
                        </>
                      ))}
                  </div>
                </div>
                <div className="content-row">
                  <div className="small heading text-secondary me-2">
                    Total Population :
                  </div>
                  <div className="h6 heading">
                    {tooltipData.population.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
}

export default Map;

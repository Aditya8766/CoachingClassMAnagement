import React, { useRef, useEffect } from 'react';
import './map.scss';

const MapContainer = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = mapRef.current;

    const marker = document.createElement('div');
    marker.className = 'marker';
    marker.style.left = '50%';
    marker.style.top = '50%';
    map.appendChild(marker);

    return () => {
      map.innerHTML = '';
    };
  }, []);

  return (
    <div className="map-container" ref={mapRef}>
      <iframe
        title="Map"
        className="map"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-74.06%2C40.68%2C-73.9%2C40.79"
        width="100%"
        height="300"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default MapContainer;

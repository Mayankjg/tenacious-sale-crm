
"use client";
import { useEffect, useRef } from "react";
import "./trackyourSalesperson.css";

export default function trackyourSalesperson() {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      if (window.google && mapRef.current) {
        const surat = { lat: 21.1702, lng: 72.8311 };

        const map = new window.google.maps.Map(mapRef.current, {
          center: surat,
          zoom: 12,
          mapTypeId: "roadmap",
        });

        new window.google.maps.Marker({
          position: surat,
          map: map,
          title: "Surat, Gujarat",
        });
      }
    };

    const existingScript = document.getElementById("googleMaps");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAGnh7RxGYff4duHrFbmikhKwZaSVKLUy8`;
      script.id = "googleMaps";
      script.async = true;
      script.defer = true;
      script.onload = loadMap;
      document.body.appendChild(script);
    } else {
      loadMap();
    }
  }, []);

  return (
    <div className="page-container">
      <div className="header">
        <div className="left-section">
          <button className="btn primary">Display On Map</button>
          <div className="message-box">
            Please Click <strong>Display On Map</strong> To View Your Sales Person On Map
          </div>
        </div>

        <div className="right-section">
          <button className="btn refresh">Refresh</button>
          <button className="btn show-online">Show Online Salespersons</button>
        </div>
      </div>

      <div className="map-container" ref={mapRef}></div>
    </div>
  );
}

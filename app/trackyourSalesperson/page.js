"use client";
import { useEffect, useRef, useState } from "react";
import "./trackyourSalesperson.css";

export default function trackyourSalesperson() {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const initMap = () => {
    if (!window.google || !mapRef.current) return;

    const surat = { lat: 21.1702, lng: 72.8311 };
    const map = new window.google.maps.Map(mapRef.current, {
      center: surat,
      zoom: 12,
      mapTypeId: "roadmap",
    });

    new window.google.maps.Marker({
      position: surat,
      map,
      title: "Surat, Gujarat",
    });

    setTimeout(() => {
      setMapLoaded(true);
      setLoading(false);
    }, 3000);
  };

  const loadGoogleMaps = (showLoading = false) => {
    if (showLoading) {
      setLoading(true);
      setMapLoaded(false);
    }
    if (window.google && window.google.maps) {
      setLoading(true);
      initMap();
      return;
    }

    const existingScript = document.getElementById("googleMapsScript");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyBq9FfHZWuO0OZMcEmAKceK6-yEVxzxltM";
      script.id = "googleMapsScript";
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.body.appendChild(script);
    } else {
      existingScript.addEventListener("load", initMap);
    }
  };

  const handleDisplayOnMap = () => {
    loadGoogleMaps(true);
  }

  const handleRefresh = () => {
    loadGoogleMaps(false);
  }

  useEffect(() => {
    loadGoogleMaps(false);
  }, []);

  return (
    <div className="page-container">
      <div className="header">
        <div className="left-section">
          <button className="btn primary" onClick={handleDisplayOnMap}>
            Display On Map
          </button>
          <div className="message-box">
            Please Click <strong> Display On Map </strong> To View Your Sales Person On Map
          </div>
        </div>

        <div className="right-section">
          <button className="btn refresh" onClick={handleRefresh}>
            Refresh
          </button>
          <button className="btn show-online"> Show Online Salespersons</button>
        </div>
      </div>

      {loading && (
        <div className="loading">
          Please Wait While Map is Loading...
        </div>
      )}

      <div className="map-container"
        ref={mapRef}
        style={{
          display: mapLoaded ? "block" : "none",
        }}
      >
      </div>
    </div>
  );
}

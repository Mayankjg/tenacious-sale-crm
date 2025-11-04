"use client";
import { useEffect, useRef, useState } from "react";

export default function TrackYourSalesperson() {
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
    }, 2000);
  };

  const loadGoogleMaps = (showLoading = false) => {
    if (showLoading) {
      setLoading(true);
      setMapLoaded(false);
    }

    if (window.google && window.google.maps) {
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

  const handleDisplayOnMap = () => loadGoogleMaps(true);
  const handleRefresh = () => loadGoogleMaps(false);

  useEffect(() => {
    loadGoogleMaps(false);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-5 font-sans">
      {/* Header Bar */}
      <div className="bg-[#f9fafb] border border-gray-300 rounded-md shadow-sm flex items-center justify-between px-5 py-3">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleDisplayOnMap}
            className="bg-[#0d2c54] hover:bg-[#133b74] text-[#ffffff] text-white font-semibold text-[18px] px-6 py-2 rounded-[4px] shadow-sm transition"
          >
            Display On Map
          </button>

          <div className="border border-[#f8d0d0] bg-[#fff5f5] text-[#b91c1c] text-[18px] px-6 py-2 rounded-[4px] shadow-sm font-medium whitespace-nowrap">
            Please Click <strong>Display On Map</strong> To View Your Sales Person On Map
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleRefresh}
            className="bg-[#1d9bf0] hover:bg-[#0c84d9] text-[#ffffff] text-white font-semibold text-[18px] px-6 py-2 rounded-[4px] shadow-sm transition"
          >
            Refresh
          </button>

          <button className="w-[250px] bg-[#9b174c] hover:bg-[#b81c58] text-[#ffffff] text-white font-semibold text-[18px] px-6 py-2 rounded-[4px] shadow-sm transition">
            Show Online Salespersons
          </button>
        </div>
      </div>

      {/* Loading Message */}
      {loading && (
        <div className="text-center text-gray-700 bg-yellow-100 border border-yellow-300 rounded-md py-3 px-6 text-lg font-medium shadow-sm mt-4">
          Please Wait While Map is Loading...
        </div>
      )}

      {/* Map Container */}
      <div
        ref={mapRef}
        className={`w-full h-[700px] mt-4 border border-gray-200 rounded-lg shadow-sm ${
          mapLoaded ? "block" : "hidden"
        }`}
      ></div>
    </div>
  );
}
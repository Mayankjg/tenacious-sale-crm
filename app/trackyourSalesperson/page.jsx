// "use client";
// import { useEffect, useRef, useState } from "react";
// import "./trackyourSalesperson.css";

// export default function TrackYourSalesperson() {
//   const mapRef = useRef(null);
//   const [mapLoaded, setMapLoaded] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const initMap = () => {
//     if (!window.google || !mapRef.current) return;

//     const surat = { lat: 21.1702, lng: 72.8311 };
//     const map = new window.google.maps.Map(mapRef.current, {
//       center: surat,
//       zoom: 12,
//       mapTypeId: "roadmap",
//     });

//     new window.google.maps.Marker({
//       position: surat,
//       map,
//       title: "Surat, Gujarat",
//     });

//     setTimeout(() => {
//       setMapLoaded(true);
//       setLoading(false);
//     }, 2000);
//   };

//   const loadGoogleMaps = (showLoading = false) => {
//     if (showLoading) {
//       setLoading(true);
//       setMapLoaded(false);
//     }

//     if (window.google && window.google.maps) {
//       initMap();
//       return;
//     }

//     const existingScript = document.getElementById("googleMapsScript");
//     if (!existingScript) {
//       const script = document.createElement("script");
//       script.src =
//         "https://maps.googleapis.com/maps/api/js?key=AIzaSyBq9FfHZWuO0OZMcEmAKceK6-yEVxzxltM";
//       script.id = "googleMapsScript";
//       script.async = true;
//       script.defer = true;
//       script.onload = initMap;
//       document.body.appendChild(script);
//     } else {
//       existingScript.addEventListener("load", initMap);
//     }
//   };

//   const handleDisplayOnMap = () => loadGoogleMaps(true);
//   const handleRefresh = () => loadGoogleMaps(false);

//   useEffect(() => {
//     loadGoogleMaps(false);
//   }, []);

//   return (
//     <div className="page-container">
//       <div className="header">
//         <div className="left-section">
//           <button className="btn primary" onClick={handleDisplayOnMap}>
//             Display On Map
//           </button>
//           <div className="message-box">
//             Please Click <strong>Display On Map</strong> To View Your Salesperson On Map
//           </div>
//         </div>

//         <div className="right-section">
//           <button className="btn refresh" onClick={handleRefresh}>
//             Refresh
//           </button>
//           <button className="btn show-online">
//             Show Online Salespersons
//           </button>
//         </div>
//       </div>

//       {loading && <div className="loading">Please Wait While Map is Loading...</div>}

//       <div
//         className="map-container"
//         ref={mapRef}
//         style={{
//           display: mapLoaded ? "block" : "none",
//         }}
//       ></div>
//     </div>
//   );
// }

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
      zoom: 12,
      center: surat,
    });
    new window.google.maps.Marker({ position: surat, map });
    setMapLoaded(true);
    setLoading(false);
  };

  const loadMap = () => {
    setLoading(true);
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBq9FfHZWuO0OZMcEmAKceK6-yEVxzxltM`;
    script.onload = initMap;
    document.body.appendChild(script);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Track Your Salesperson
      </h2>

      <button
        onClick={loadMap}
        disabled={loading}
        className="mb-5 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
      >
        {loading ? "Loading..." : "Load Map"}
      </button>

      <div
        ref={mapRef}
        className="w-full max-w-3xl h-[500px] border border-gray-300 rounded-2xl shadow-md"
      >
        {!mapLoaded && !loading && (
          <div className="h-full flex items-center justify-center text-gray-500">
            Click “Load Map” to view
          </div>
        )}
      </div>
    </div>
  );
}


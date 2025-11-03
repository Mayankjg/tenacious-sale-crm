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

import { useEffect, useRef } from "react";

export default function TrackYourSalesperson() {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      if (window.google && mapRef.current) {
        const surat = { lat: 21.1702, lng: 72.8311 };
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 12,
          center: surat,
        });
        new window.google.maps.Marker({
          position: surat,
          map: map,
        });
      }
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyBq9FfHZWuO0OZMcEmAKceK6-yEVxzxltM";
      script.async = true;
      script.onload = loadMap;
      document.body.appendChild(script);
    } else {
      loadMap();
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Outer Card */}
      <div className="bg-white shadow-md border border-gray-200 rounded-[8px] p-4">
        {/* Top Bar */}
        <div className="flex flex-wrap items-center justify-between bg-[#f9fafb] border border-gray-200 rounded-[8px] px-8 py-3 shadow-sm">
          {/* Display On Map */}
          <button className="bg-[#0d2c54] hover:bg-[#133b74] text-[#ffffff] text-white text-[20px] font-semibold px-6 py-2 rounded-[4px] shadow-md transition">
            Display On Map
          </button>

          {/* Center Alert Message */}
          <div className="flex-1 mx-4 text-center border border-red-200 bg-[#fff5f5] text-[#b91c1c] font-medium rounded-[4px] py-2 px-6 text-[20px] shadow-sm gap-4">
            Please Click{" "}
            <span className="font-bold text-[#b91c1c]">Display On Map</span> To
            View Your Sales Person On Map
          </div>

          {/* Refresh */}
          <button className="bg-[#1d9bf0] hover:bg-[#0c84d9] text-[#ffffff] text-white text-[20px] font-semibold px-6 py-2 rounded-[4px] shadow-md transition">
            Refresh
          </button>

          {/* Show Online Salespersons */}
          <button className="bg-[#9b174c] hover:bg-[#b81c58] text-[#ffffff] text-white text-[20px] font-semibold px-6 py-2 rounded-[4px] shadow-md transition">
            Show Online Salespersons
          </button>
        </div>

        {/* Google Map */}
        <div
          ref={mapRef}
          className="w-full h-[700px] mt-4 border border-gray-200 rounded-lg shadow-sm"
        ></div>
      </div>
    </div>
  );
}





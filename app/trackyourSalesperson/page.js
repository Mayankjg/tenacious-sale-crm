
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
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBq9FfHZWuO0OZMcEmAKceK6-yEVxzxltM`;
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


// "use client";

// import { useRef, useState, useEffect } from "react";
// import "./trackyourSalesperson.css";

// export default function trackyourSalesperson() {
//   const mapRef = useRef(null);
//   const [loading, setLoading] = useState(false);
//   const [map, setMap] = useState(null);

//   const loadGoogleMaps = () => {
//     return new Promise((resolve, reject) => {
//       if (window.google && window.google.maps) {
//         resolve();
//         return;
//       }

//       const existingScript = document.getElementById("googleMaps");
//       if (existingScript) {
//         existingScript.addEventListener("load", resolve);
//         existingScript.addEventListener("error", reject);
//         return;
//       }

//       const script = document.createElement("script");
//       script.id = "googleMaps";
//       script.src =
//         "https://maps.googleapis.com/maps/api/js?key=AIzaSyBq9FfHZWuO0OZMcEmAKceK6-yEVxzxltM";
//       script.async = true;
//       script.defer = true;
//       script.onload = resolve;
//       script.onerror = reject;
//       document.head.appendChild(script); 
//     });
//   };

//   const handleDisplayMap = async () => {
//     setLoading(true);
//     try {
//       await loadGoogleMaps();

//       if (window.google && mapRef.current && !map) {
//         const surat = { lat: 21.1702, lng: 72.8311 };

//         const gMap = new window.google.maps.Map(mapRef.current, {
//           center: surat,
//           zoom: 12,
//           mapTypeId: "roadmap",
//         });

//         new window.google.maps.Marker({
//           position: surat,
//           map: gMap,
//           title: "Surat, Gujarat",
//         });

//         setMap(gMap);
//       }
//     } catch (error) {
//       console.error("Map load failed:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     return () => {
//       if (map) setMap(null);
//     };
//   }, [map]);

//   return (
//     <div className="page-container">
//       <div className="header">
//         <div className="left-section">
//           <button className="btn primary" onClick={handleDisplayMap}>
//             Display On Map
//           </button>
//           <div className="message-box">
//             Please Click <strong>Display On Map</strong> To View Your Sales Person On Map
//           </div>
//         </div>

//         <div className="right-section">
//           <button className="btn refresh">Refresh</button>
//           <button className="btn show-online">Show Online Salespersons</button>
//         </div>
//       </div>

//       <div className="map-container" ref={mapRef}>
//         {loading && (
//           <div
//             style={{
//               textAlign: "center",
//               marginTop: "100px",
//               color: "red",
//               fontWeight: "bold",
//             }}
//           >
//             Please Wait While Map is Loading...
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


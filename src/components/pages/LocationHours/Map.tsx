import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "./Map.css"; // Import the CSS file

// Fix for default marker icon not showing
let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapWithMarker: React.FC = () => {
  return (
    <>
      <title>
        Lone Tree, Colorado
      </title>
      <MapContainer className="map-container" center={[39.5362, -104.8977]} zoom={13} scrollWheelZoom={true} style={{ height: "400px", width: "80%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[39.5362, -104.8977]}>
          <title>
            Lone Tree, Colorado
          </title>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MapWithMarker;

import { useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Marker, Popup, LayersControl, LayerGroup, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { PROVINCES, AIRPORTS, SEAPORTS, type Region } from "@/data/provinces";

// Fix Leaflet default icon paths (Vite/bundler issue)
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

export type MapLayers = {
  provinces: boolean;
  airports: boolean;
  seaports: boolean;
};

export type InvestmentMapProps = {
  layers: MapLayers;
  region: "all" | Region;
  className?: string;
};

const REGION_COLOR: Record<Region, string> = {
  bac: "oklch(0.55 0.18 25)",
  trung: "oklch(0.65 0.16 60)",
  nam: "oklch(0.5 0.15 145)",
};

// Custom divIcon for airport/seaport
const makeIcon = (emoji: string, bg: string) =>
  L.divIcon({
    className: "",
    html: `<div style="background:${bg};color:white;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,.35)">${emoji}</div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
  });

const airportIcon = makeIcon("✈", "oklch(0.5 0.18 250)");
const seaportIcon = makeIcon("⚓", "oklch(0.4 0.12 230)");

export function InvestmentMap({ layers, region, className }: InvestmentMapProps) {
  // Re-invalidate map size on container resize
  useEffect(() => {
    const t = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);
    return () => clearTimeout(t);
  }, []);

  const visibleProvinces = PROVINCES.filter(
    (p) => region === "all" || p.region === region,
  );

  return (
    <MapContainer
      center={[16.0, 107.5]}
      zoom={5}
      minZoom={5}
      maxZoom={12}
      scrollWheelZoom
      zoomControl={false}
      className={className}
      style={{ height: "100%", width: "100%", background: "oklch(0.95 0.01 80)" }}
    >
      <ZoomControl position="topright" />
      <LayersControl position="topleft">
        <LayersControl.BaseLayer checked name="Bản đồ chuẩn">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Vệ tinh">
          <TileLayer
            attribution='Tiles &copy; Esri'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        </LayersControl.BaseLayer>
      </LayersControl>

      {layers.provinces && (
        <LayerGroup>
          {visibleProvinces.map((p) => (
            <CircleMarker
              key={p.slug}
              center={[p.lat, p.lng]}
              radius={9}
              pathOptions={{
                color: "white",
                weight: 2,
                fillColor: REGION_COLOR[p.region],
                fillOpacity: 0.85,
              }}
            >
              <Popup>
                <div style={{ minWidth: 200 }}>
                  <strong style={{ fontSize: 14 }}>{p.name}</strong>
                  <div style={{ fontSize: 12, color: "#666", marginTop: 2 }}>
                    Trung tâm: {p.capital}
                  </div>
                  {p.merged && (
                    <div style={{ fontSize: 11, marginTop: 6, padding: "4px 6px", background: "#fef3c7", borderRadius: 4, color: "#92400e" }}>
                      Sáp nhập từ: {p.merged}
                    </div>
                  )}
                  <a
                    href={`/tinh-thanh/${p.slug}`}
                    style={{ display: "inline-block", marginTop: 8, fontSize: 12, color: "oklch(0.45 0.18 25)", fontWeight: 600 }}
                  >
                    Xem chi tiết →
                  </a>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </LayerGroup>
      )}

      {layers.airports && (
        <LayerGroup>
          {AIRPORTS.map((a) => (
            <Marker key={a.code} position={[a.lat, a.lng]} icon={airportIcon}>
              <Popup>
                <strong>{a.name} ({a.code})</strong>
                <div style={{ fontSize: 12, color: "#666" }}>
                  Sân bay {a.type === "international" ? "quốc tế" : "nội địa"} · {a.province}
                </div>
              </Popup>
            </Marker>
          ))}
        </LayerGroup>
      )}

      {layers.seaports && (
        <LayerGroup>
          {SEAPORTS.map((s) => (
            <Marker key={s.name} position={[s.lat, s.lng]} icon={seaportIcon}>
              <Popup>
                <strong>{s.name}</strong>
                <div style={{ fontSize: 12, color: "#666" }}>
                  Cảng loại {s.class === "special" ? "đặc biệt" : "I"} · {s.province}
                </div>
              </Popup>
            </Marker>
          ))}
        </LayerGroup>
      )}
    </MapContainer>
  );
}

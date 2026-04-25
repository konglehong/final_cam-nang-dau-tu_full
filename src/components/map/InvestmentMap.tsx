import { useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Marker, Popup, LayersControl, LayerGroup, ZoomControl, Polygon, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { PROVINCES, AIRPORTS, SEAPORTS, type Region } from "@/data/provinces";
import { ARCHIPELAGOS, type IslandPoint } from "@/data/archipelagos";

// Label chính cho quần đảo (kiểu Google Maps: chữ in hoa, có viền trắng)
const archipelagoLabelIcon = (name: string, sub: string) =>
  L.divIcon({
    className: "",
    html: `
      <div style="text-align:center;pointer-events:none;transform:translateY(-50%)">
        <div style="
          font-family: -apple-system, system-ui, 'Segoe UI', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #1a1a1a;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          text-shadow:
            -1.5px -1.5px 0 #fff, 1.5px -1.5px 0 #fff,
            -1.5px 1.5px 0 #fff, 1.5px 1.5px 0 #fff,
            0 0 4px rgba(255,255,255,.9);
          white-space: nowrap;
        ">${name}</div>
        <div style="
          font-family: -apple-system, system-ui, sans-serif;
          font-size: 10px;
          font-weight: 500;
          color: #c2410c;
          margin-top: 2px;
          text-shadow:
            -1px -1px 0 #fff, 1px -1px 0 #fff,
            -1px 1px 0 #fff, 1px 1px 0 #fff;
          white-space: nowrap;
        ">🇻🇳 ${sub}</div>
      </div>`,
    iconSize: [200, 40],
    iconAnchor: [100, 20],
  });

// Chấm cho đảo chính (style Google Maps)
const islandDotIcon = (type: IslandPoint["type"]) => {
  const color = type === "bank" ? "#0891b2" : type === "reef" ? "#0ea5e9" : "#dc2626";
  const size = type === "island" ? 8 : 6;
  return L.divIcon({
    className: "",
    html: `<div style="
      width:${size}px;height:${size}px;
      background:${color};
      border:1.5px solid white;
      border-radius:50%;
      box-shadow:0 1px 3px rgba(0,0,0,.5);
    "></div>`,
    iconSize: [size + 3, size + 3],
    iconAnchor: [(size + 3) / 2, (size + 3) / 2],
  });
};

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
      center={[14.5, 110.5]}
      zoom={5}
      minZoom={4}
      maxZoom={12}
      scrollWheelZoom
      zoomControl={false}
      className={className}
      style={{ height: "100%", width: "100%", background: "oklch(0.95 0.01 80)" }}
    >
      <ZoomControl position="topright" />
      <LayersControl position="topleft">
        <LayersControl.BaseLayer checked name="Bản đồ (chuẩn VN)">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            subdomains={["a", "b", "c"]}
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Bản đồ địa hình">
          <TileLayer
            attribution='&copy; <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA)'
            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            subdomains={["a", "b", "c"]}
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Vệ tinh (Esri)">
          <TileLayer
            attribution='Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        </LayersControl.BaseLayer>
      </LayersControl>

      {/* Hoàng Sa & Trường Sa — luôn hiển thị, khẳng định chủ quyền VN */}
      <LayerGroup>
        {VN_ARCHIPELAGOS.map((a) => (
          <LayerGroup key={a.name}>
            <Rectangle
              bounds={a.bounds}
              pathOptions={{
                color: "oklch(0.55 0.18 25)",
                weight: 2,
                fillColor: "oklch(0.55 0.18 25)",
                fillOpacity: 0.08,
                dashArray: "6 4",
              }}
            />
            <Marker position={[a.lat, a.lng]} icon={archipelagoIcon}>
              <Tooltip permanent direction="bottom" offset={[0, 10]} className="vn-archipelago-label">
                <strong>{a.name}</strong>
                <div style={{ fontSize: 10, color: "#666" }}>{a.sub}</div>
              </Tooltip>
              <Popup>
                <div style={{ minWidth: 200 }}>
                  <strong style={{ fontSize: 14 }}>{a.name}</strong>
                  <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>{a.sub}</div>
                  <div style={{ fontSize: 11, marginTop: 6, padding: "4px 6px", background: "#fef3c7", borderRadius: 4, color: "#92400e" }}>
                    Thuộc chủ quyền không thể tranh cãi của Việt Nam
                  </div>
                </div>
              </Popup>
            </Marker>
          </LayerGroup>
        ))}
      </LayerGroup>

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

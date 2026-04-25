import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Marker, Popup, LayersControl, LayerGroup, ZoomControl, Polygon, Tooltip, useMapEvent } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import MarkerClusterGroup from "react-leaflet-cluster";
import { PROVINCES, AIRPORTS, SEAPORTS, type Region } from "@/data/provinces";
import { ARCHIPELAGOS, HOANG_SA, TRUONG_SA, type IslandPoint } from "@/data/archipelagos";
import { VIETNAM_MAINLAND, WORLD_BBOX } from "@/data/vietnam-outline";
import {
  getProvinceName,
  SEA_LABELS,
  COUNTRY_LABELS,
  FOREIGN_CITIES,
} from "@/data/province-i18n";
import { useLanguage } from "@/lib/i18n";
import { getMapStrings, getStandardTile, getTerrainTile, getSatelliteTile } from "@/lib/map-i18n";

// Nhãn tỉnh — chữ nhỏ có viền trắng, không nhận click
const provinceLabelIcon = (name: string) =>
  L.divIcon({
    className: "",
    html: `<div style="
      font-family: -apple-system, system-ui, 'Segoe UI', sans-serif;
      font-size: 11px;
      font-weight: 600;
      color: #1f2937;
      white-space: nowrap;
      pointer-events: none;
      transform: translate(8px, -50%);
      text-shadow:
        -1px -1px 0 #fff, 1px -1px 0 #fff,
        -1px 1px 0 #fff, 1px 1px 0 #fff,
        0 0 3px rgba(255,255,255,.85);
    ">${name}</div>`,
    iconSize: [120, 16],
    iconAnchor: [0, 8],
  });

// Nhãn biển — chữ in nghiêng xanh dương, kích thước tuỳ chỉnh
const seaLabelIcon = (name: string, fontSize = 14) =>
  L.divIcon({
    className: "",
    html: `<div style="
      font-family: -apple-system, system-ui, 'Segoe UI', sans-serif;
      font-size: ${fontSize}px;
      font-weight: 700;
      font-style: italic;
      color: #1e40af;
      letter-spacing: 1px;
      white-space: nowrap;
      pointer-events: none;
      text-align: center;
      transform: translate(-50%, -50%);
      text-shadow:
        -1px -1px 0 #fff, 1px -1px 0 #fff,
        -1px 1px 0 #fff, 1px 1px 0 #fff,
        0 0 4px rgba(255,255,255,.9);
    ">${name}</div>`,
    iconSize: [200, 24],
    iconAnchor: [100, 12],
  });

// Nhãn quốc gia láng giềng — chữ in hoa xám
const countryLabelIcon = (name: string) =>
  L.divIcon({
    className: "",
    html: `<div style="
      font-family: -apple-system, system-ui, 'Segoe UI', sans-serif;
      font-size: 13px;
      font-weight: 700;
      color: #6b7280;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      white-space: nowrap;
      pointer-events: none;
      transform: translate(-50%, -50%);
      text-shadow:
        -1px -1px 0 #fff, 1px -1px 0 #fff,
        -1px 1px 0 #fff, 1px 1px 0 #fff;
    ">${name}</div>`,
    iconSize: [180, 20],
    iconAnchor: [90, 10],
  });

// Nhãn thành phố nước ngoài — chữ xám trung tính, có chấm tròn nhỏ
const foreignCityLabelIcon = (name: string) =>
  L.divIcon({
    className: "",
    html: `<div style="
      display:flex;align-items:center;gap:4px;
      pointer-events:none;
      transform:translate(-50%,-50%);
      white-space:nowrap;
    ">
      <span style="
        width:5px;height:5px;border-radius:50%;
        background:#6b7280;border:1px solid #fff;
        box-shadow:0 1px 2px rgba(0,0,0,.3);
        flex-shrink:0;
      "></span>
      <span style="
        font-family: -apple-system, system-ui, 'Segoe UI', sans-serif;
        font-size: 11px;
        font-weight: 500;
        color: #4b5563;
        text-shadow:
          -1px -1px 0 #fff, 1px -1px 0 #fff,
          -1px 1px 0 #fff, 1px 1px 0 #fff,
          0 0 3px rgba(255,255,255,.85);
      ">${name}</span>
    </div>`,
    iconSize: [120, 14],
    iconAnchor: [60, 7],
  });

function ZoomTracker({ onZoom }: { onZoom: (z: number) => void }) {
  useMapEvent("zoomend", (e) => onZoom(e.target.getZoom()));
  return null;
}

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
  const { lang } = useLanguage();
  const t = useMemo(() => getMapStrings(lang), [lang]);
  const standardTile = useMemo(() => getStandardTile(lang), [lang]);
  const terrainTile = useMemo(() => getTerrainTile(), []);
  const satelliteTile = useMemo(() => getSatelliteTile(), []);
  const [zoom, setZoom] = useState(5);

  // Ngưỡng zoom để hiện chấm đảo HS/TS — dưới ngưỡng chỉ vẽ polygon + label quần đảo
  const SHOW_ISLAND_DOTS_FROM = 7;
  const showIslandDots = zoom >= SHOW_ISLAND_DOTS_FROM;

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

  // Tile options chung — tăng smoothness và giảm số request không cần thiết
  const sharedTileOpts = {
    updateWhenIdle: true as const,
    updateWhenZooming: false as const,
    keepBuffer: 4,
    crossOrigin: true as const,
  };

  // Strings cho 2 quần đảo theo ngôn ngữ — ghi đè dữ liệu mặc định (VI) trong archipelagos.ts
  const archipelagoLabels: Record<string, { name: string; sub: string }> = {
    "hoang-sa": { name: t.hoangSaName, sub: t.hoangSaSub },
    "truong-sa": { name: t.truongSaName, sub: t.truongSaSub },
  };

  return (
    <MapContainer
      center={[14.5, 110.5]}
      zoom={5}
      minZoom={4}
      maxZoom={12}
      scrollWheelZoom
      zoomControl={false}
      preferCanvas
      className={className}
      style={{ height: "100%", width: "100%", background: "oklch(0.95 0.01 80)" }}
    >
      <ZoomControl position="topright" />
      <ZoomTracker onZoom={setZoom} />

      {/* Chỉ tải duy nhất 1 base map cho Việt Nam — bỏ terrain/satellite để giảm request */}
      <TileLayer
        attribution={standardTile.attribution}
        url={standardTile.url}
        subdomains={standardTile.subdomains as string[] | undefined}
        maxZoom={standardTile.maxZoom}
        // Giới hạn vùng tải tile quanh Việt Nam (gồm cả Hoàng Sa & Trường Sa)
        bounds={[
          [6.5, 101.5],
          [24.0, 118.0],
        ]}
        {...sharedTileOpts}
      />

      {/* Mask phủ kín các nước khác — Việt Nam (đất liền + HS + TS) là "lỗ" trong mask.
          Dùng màu nền sáng để các nước khác gần như "biến mất", chỉ còn VN nổi rõ. */}
      <Polygon
        positions={[WORLD_BBOX, VIETNAM_MAINLAND, HOANG_SA.outline, TRUONG_SA.outline]}
        pathOptions={{
          stroke: false,
          fillColor: "#e8eef5",
          fillOpacity: 0.96,
          fillRule: "evenodd",
          interactive: false,
        }}
      />

      {/* Hoàng Sa & Trường Sa — overlay chủ quyền VN, label theo ngôn ngữ đang chọn */}
      <LayerGroup>
        {ARCHIPELAGOS.map((a) => {
          const label = archipelagoLabels[a.id] ?? { name: a.name, sub: a.sub };
          return (
            <LayerGroup key={a.id}>
              <Polygon
                positions={a.outline}
                pathOptions={{
                  color: "#dc2626",
                  weight: 1.5,
                  opacity: 0.85,
                  fillColor: "#dc2626",
                  fillOpacity: 0.05,
                  dashArray: "5 5",
                }}
              >
                <Popup>
                  <div style={{ minWidth: 220 }}>
                    <strong style={{ fontSize: 14 }}>{label.name}</strong>
                    <div style={{ fontSize: 11, color: "#888", fontStyle: "italic" }}>{a.nameEn}</div>
                    <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>{label.sub}</div>
                    <div style={{ fontSize: 11, marginTop: 6, padding: "4px 6px", background: "#fef3c7", borderRadius: 4, color: "#92400e" }}>
                      {t.sovereigntyNote}
                    </div>
                    <div style={{ fontSize: 11, marginTop: 6, color: "#555" }}>
                      {t.islandsCount(a.islands.length)}
                    </div>
                  </div>
                </Popup>
              </Polygon>

              {showIslandDots && a.islands.map((island) => (
                <Marker
                  key={island.name}
                  position={[island.lat, island.lng]}
                  icon={islandDotIcon(island.type)}
                >
                  <Tooltip direction="right" offset={[6, 0]} opacity={0.95}>
                    <strong style={{ fontSize: 11 }}>{island.name}</strong>
                    <div style={{ fontSize: 10, color: "#666" }}>
                      {island.type === "bank" ? t.typeBank : island.type === "reef" ? t.typeReef : t.typeIsland} · {label.name}
                    </div>
                  </Tooltip>
                </Marker>
              ))}

              <Marker
                position={a.center}
                icon={archipelagoLabelIcon(label.name, label.sub)}
                interactive={false}
                keyboard={false}
              />
            </LayerGroup>
          );
        })}
      </LayerGroup>

      {layers.provinces && (
        <LayerGroup>
          {visibleProvinces.map((p) => {
            const localizedName = getProvinceName(p.slug, lang, p.name);
            return (
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
                    <strong style={{ fontSize: 14 }}>{localizedName}</strong>
                    {lang !== "vi" && (
                      <div style={{ fontSize: 11, color: "#888", fontStyle: "italic" }}>
                        {p.name}
                      </div>
                    )}
                    <div style={{ fontSize: 12, color: "#666", marginTop: 2 }}>
                      {t.capital}: {p.capital}
                    </div>
                    {p.merged && (
                      <div style={{ fontSize: 11, marginTop: 6, padding: "4px 6px", background: "#fef3c7", borderRadius: 4, color: "#92400e" }}>
                        {t.mergedFrom}: {p.merged}
                      </div>
                    )}
                    <a
                      href={`/tinh-thanh/${p.slug}`}
                      style={{ display: "inline-block", marginTop: 8, fontSize: 12, color: "oklch(0.45 0.18 25)", fontWeight: 600 }}
                    >
                      {t.viewDetails}
                    </a>
                  </div>
                </Popup>
              </CircleMarker>
            );
          })}
        </LayerGroup>
      )}

      {/* Overlay nhãn cho non-VI: tile nền không có nhãn → tự vẽ tên tỉnh + biển + nước */}
      {lang !== "vi" && (
        <LayerGroup>
          {/* Nhãn tỉnh — hiện từ zoom 6 trở lên để không rối */}
          {zoom >= 6 && layers.provinces && visibleProvinces.map((p) => (
            <Marker
              key={`label-${p.slug}`}
              position={[p.lat, p.lng]}
              icon={provinceLabelIcon(getProvinceName(p.slug, lang, p.name))}
              interactive={false}
              keyboard={false}
            />
          ))}
          {/* Nhãn biển — luôn hiện */}
          {SEA_LABELS.map((s) => (
            <Marker
              key={`sea-${s.id}`}
              position={[s.lat, s.lng]}
              icon={seaLabelIcon(s.names[lang] || s.names.en, s.fontSize)}
              interactive={false}
              keyboard={false}
            />
          ))}
          {/* Nhãn quốc gia láng giềng — chỉ hiện khi zoom thấp/trung bình */}
          {zoom <= 7 && COUNTRY_LABELS.map((c) => (
            <Marker
              key={`country-${c.id}`}
              position={[c.lat, c.lng]}
              icon={countryLabelIcon(c.names[lang] || c.names.en)}
              interactive={false}
              keyboard={false}
            />
          ))}
          {/* Thành phố nước ngoài — tier 1 (thủ đô) hiện sớm, tier 2 hiện khi zoom kỹ hơn */}
          {FOREIGN_CITIES.filter((c) => (c.tier === 1 ? zoom >= 5 : zoom >= 6)).map((c) => (
            <Marker
              key={`fcity-${c.id}`}
              position={[c.lat, c.lng]}
              icon={foreignCityLabelIcon(c.names[lang] || c.names.en)}
              interactive={false}
              keyboard={false}
            />
          ))}
        </LayerGroup>
      )}

      {layers.airports && (
        <MarkerClusterGroup
          chunkedLoading
          maxClusterRadius={40}
          spiderfyOnMaxZoom
          showCoverageOnHover={false}
          disableClusteringAtZoom={9}
        >
          {AIRPORTS.map((a) => (
            <Marker key={a.code} position={[a.lat, a.lng]} icon={airportIcon}>
              <Popup>
                <strong>{a.name} ({a.code})</strong>
                <div style={{ fontSize: 12, color: "#666" }}>
                  {a.type === "international" ? t.airportIntl : t.airportDomestic} · {a.province}
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      )}

      {layers.seaports && (
        <MarkerClusterGroup
          chunkedLoading
          maxClusterRadius={40}
          spiderfyOnMaxZoom
          showCoverageOnHover={false}
          disableClusteringAtZoom={9}
        >
          {SEAPORTS.map((s) => (
            <Marker key={s.name} position={[s.lat, s.lng]} icon={seaportIcon}>
              <Popup>
                <strong>{s.name}</strong>
                <div style={{ fontSize: 12, color: "#666" }}>
                  {s.class === "special" ? t.seaportSpecial : t.seaportClassI} · {s.province}
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      )}
    </MapContainer>
  );
}

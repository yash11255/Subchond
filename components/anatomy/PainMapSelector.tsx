'use client';

import React from 'react';

export type PainZone = 'Front' | 'Inside' | 'Outside' | 'Back' | 'Around kneecap' | 'Diffuse';

interface PainMapSelectorProps {
  selectedZones: PainZone[];
  onChange: (zones: PainZone[]) => void;
}

export const PainMapSelector: React.FC<PainMapSelectorProps> = ({
  selectedZones,
  onChange,
}) => {
  const zones: { id: PainZone; label: string; anatomical: string; pinCoords: { x: number; y: number } }[] = [
    {
      id: 'Front',
      label: 'Front (Anterior)',
      anatomical: 'Patellar tendon / Anterior fat pad region',
      pinCoords: { x: 150, y: 190 },
    },
    {
      id: 'Inside',
      label: 'Inside (Medial)',
      anatomical: 'Medial joint line & medial femoral/tibial condyle',
      pinCoords: { x: 95, y: 155 },
    },
    {
      id: 'Outside',
      label: 'Outside (Lateral)',
      anatomical: 'Lateral joint line & fibular head',
      pinCoords: { x: 205, y: 155 },
    },
    {
      id: 'Around kneecap',
      label: 'Around kneecap',
      anatomical: 'Retropatellar / Trochlear groove',
      pinCoords: { x: 150, y: 120 },
    },
    {
      id: 'Back',
      label: 'Back (Posterior)',
      anatomical: 'Popliteal fossa / Posterior capsule',
      pinCoords: { x: 150, y: 250 },
    },
    {
      id: 'Diffuse',
      label: 'Diffuse / Deep Joint',
      anatomical: 'Generalized intra-articular sensation',
      pinCoords: { x: 150, y: 155 },
    },
  ];

  const toggleZone = (zoneId: PainZone) => {
    if (selectedZones.includes(zoneId)) {
      onChange(selectedZones.filter((z) => z !== zoneId));
    } else {
      onChange([...selectedZones, zoneId]);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      {/* Visual Interactive Map (SVG) */}
      <div className="md:col-span-5 flex flex-col items-center justify-center">
        <div className="relative w-full max-w-[280px] aspect-square rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] p-4 flex items-center justify-center shadow-inner">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            {/* Minimal Knee Silhouette - Apple Health style */}
            <path
              d="M110 30 L190 30 L185 100 Q205 130 200 160 Q185 200 180 270 L120 270 Q115 200 100 160 Q95 130 115 100 Z"
              fill="#FFFFFF"
              stroke="#D2D2D7"
              strokeWidth="2"
            />
            {/* Patella Outline */}
            <circle cx="150" cy="120" r="24" fill="#FBFBFD" stroke="#0071E3" strokeWidth="1.5" strokeDasharray="4 2" />
            {/* Joint line */}
            <path d="M100 160 Q150 168 200 160" fill="none" stroke="#0071E3" strokeWidth="1.5" opacity="0.4" />

            {/* Interactive Pins */}
            {zones.map((zone) => {
              const isSelected = selectedZones.includes(zone.id);
              return (
                <g
                  key={zone.id}
                  onClick={() => toggleZone(zone.id)}
                  className="cursor-pointer transition-all"
                >
                  <circle
                    cx={zone.pinCoords.x}
                    cy={zone.pinCoords.y}
                    r={isSelected ? 14 : 9}
                    fill={isSelected ? '#0071E3' : '#E5E5EA'}
                    fillOpacity={isSelected ? 0.25 : 0.8}
                    stroke={isSelected ? '#0071E3' : '#AEAEB2'}
                    strokeWidth={isSelected ? 2 : 1}
                    className="transition-all duration-200"
                  />
                  <circle
                    cx={zone.pinCoords.x}
                    cy={zone.pinCoords.y}
                    r="4"
                    fill={isSelected ? '#0071E3' : '#636366'}
                  />
                </g>
              );
            })}
          </svg>

          <span className="absolute bottom-2 text-[10px] font-medium text-[#86868b]">
            TAP PINPOINTS TO SELECT
          </span>
        </div>
      </div>

      {/* Button Selectors */}
      <div className="md:col-span-7 flex flex-col gap-2">
        <div className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-1">
          Select areas of knee discomfort:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {zones.map((zone) => {
            const isSelected = selectedZones.includes(zone.id);
            return (
              <button
                key={zone.id}
                type="button"
                onClick={() => toggleZone(zone.id)}
                className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#0071E3] shadow-[0_2px_10px_rgba(0,113,227,0.12)]'
                    : 'bg-[#F5F5F7] border-transparent text-[#6e6e73] hover:bg-[#EAEAEA] hover:text-[#1d1d1f]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-xs font-semibold ${isSelected ? 'text-[#0071E3]' : 'text-[#1d1d1f]'}`}>
                    {zone.label}
                  </span>
                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                      isSelected
                        ? 'bg-[#0071E3] border-[#0071E3] text-white font-bold'
                        : 'border-[#C7C7CC] bg-white'
                    }`}
                  >
                    {isSelected ? '✓' : ''}
                  </span>
                </div>
                <span className="text-[10px] text-[#86868b] mt-1 font-normal">
                  {zone.anatomical}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

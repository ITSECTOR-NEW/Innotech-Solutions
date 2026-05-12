import React from "react";

const ITEMS = [
  "Web Development","Mobile App Development","Industrial IoT","Robotics Automation",
  "AI Integration","Digital Marketing","SCADA Systems","Student Training","UI/UX Design","Industry 4.0",
];

export default function Marquee() {
  // Duplicate for seamless loop
  const all = [...ITEMS, ...ITEMS];
  return (
    <div className="py-5 border-t border-b border-white/10 bg-dark-800 overflow-hidden">
      <div className="flex gap-12 animate-marquee w-max">
        {all.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 text-slate-400 text-sm font-medium whitespace-nowrap px-6">
            <i className="fas fa-circle-dot text-cyan-400 text-xs"></i>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

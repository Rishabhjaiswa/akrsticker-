import React from "react";

export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} title="Logo">
      <div 
        className="absolute inset-0 bg-[linear-gradient(45deg,#3b82f6,#ec4899,#eab308,#06b6d4,#3b82f6)] bg-[length:400%_400%] animate-holographic"
        style={{
          WebkitMaskImage: 'url(/logo.png)',
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskImage: 'url(/logo.png)',
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
        }}
      />
    </div>
  );
}

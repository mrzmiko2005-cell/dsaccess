interface LogoProps {
  light?: boolean;
}

export default function Logo({ light = false }: LogoProps) {
  const dsColor = light ? '#FFFFFF' : '#1B3A6B';
  const accessColor = light ? '#FFFFFF' : '#1B3A6B';
  const groupColor = light ? '#94a3b8' : '#4A5568';
  const lineColor = light ? '#64748b' : '#1B3A6B';

  return (
    <div className="flex flex-col items-start leading-none select-none">
      <div className="flex items-baseline gap-1">
        <span style={{ color: dsColor, fontWeight: 900, fontSize: '1.3rem', letterSpacing: '-0.01em', fontFamily: 'system-ui, sans-serif' }}>
          DS
        </span>
        <span style={{ color: accessColor, fontWeight: 900, fontSize: '1.3rem', letterSpacing: '0.04em', fontFamily: 'system-ui, sans-serif' }}>
          ACCESS
        </span>
      </div>
      <div className="flex items-center gap-1.5 mt-0.5">
        <span style={{ display: 'block', height: '1px', width: '18px', backgroundColor: lineColor }} />
        <span style={{ color: groupColor, fontWeight: 400, fontSize: '0.6rem', letterSpacing: '0.28em', fontFamily: 'system-ui, sans-serif' }}>
          GROUP
        </span>
        <span style={{ display: 'block', height: '1px', width: '18px', backgroundColor: lineColor }} />
      </div>
    </div>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const textColor = light ? 'text-white' : 'text-gray-900';
  const eyebrowColor = light ? 'text-blue-300' : 'text-[#1B3A6B]';
  const descColor = light ? 'text-gray-300' : 'text-gray-500';

  return (
    <div className={`max-w-2xl ${alignClass} mb-12`}>
      {eyebrow && (
        <p className={`text-xs font-bold tracking-[0.2em] uppercase mb-3 ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${textColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed ${descColor}`}>{description}</p>
      )}
    </div>
  );
}

export default function Card({ data, appearance }: CardProps) {
    const { headline, media, bodyCopy, cta } = data;
  
    const desktopMediaRaw =
      media?.fields?.desktopMedia?.fields?.file?.url ??
      media?.fields?.mobileMedia?.fields?.file?.url ??
      null;
  
    const desktopMedia = desktopMediaRaw
      ? desktopMediaRaw.startsWith('//')
        ? `https:${desktopMediaRaw}`
        : desktopMediaRaw
      : null;
  
    const alt = media?.fields?.altText ?? '';
    const body = bodyCopy?.content?.[0]?.content?.[0]?.value ?? '';
    const links = Array.isArray(cta) ? cta : [];
  
    const isEditorial = appearance === 'Editorial cards';
  
    return (
      <div
        className={`rounded-lg ${
          isEditorial
            ? 'bg-background shadow-md flex flex-col md:flex-row' //normal flow: image left, text right
            : 'bg-[#0D556C]'
        }`}
      >
        {/* Image block */}
        {desktopMedia && (
          <div className="w-full md:w-1/2">
            <img
              src={desktopMedia}
              alt={alt || headline || 'Media Image'}
              className="w-full h-full object-contain rounded-l-lg"
            />
          </div>
        )}
  
        {/* Text block */}
        <div className="w-full md:w-1/2 p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">{headline}</h3>
          <p className="text-body text-foreground opacity-80 mb-4">{body}</p>
  
          <div className="flex flex-wrap gap-3 mt-2">
            {links.map((link: any, idx: number) => {
              const label = link.fields?.label;
              const href = link.fields?.externalLink;
              const appearance = link.fields?.appearance;
  
              if (!href) return null;
  
              const buttonStyle =
                appearance === 'Secondary'
                  ? 'bg-transparent border border-foreground text-foreground'
                  : 'bg-[#0ff] text-black';
  
              return (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-cta font-medium px-4 py-2 rounded-full ${buttonStyle}`}
                >
                  {label} →
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  
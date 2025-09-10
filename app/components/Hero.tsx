// app/components/Hero.tsx

interface HeroProps {
    headline: string;
    bodyCopy: string;
    imageUrl?: string;
    ctaLabel?: string;
    ctaUrl?: string;
    caption?: string; //  optional prop
    ctaAppearance?: 'Primary' | 'Secondary';
    theme: string; // "Core Dark" | "Core Light"
  }
  
  export default function Hero({
    headline,
    bodyCopy,
    imageUrl,
    ctaLabel,
    ctaUrl,
    caption,
    ctaAppearance = 'Primary',
    theme,
  }: HeroProps) {
    const themeClass =
      theme === 'Core Dark'
        ? 'hds-web-product-dark-theme'
        : 'hds-web-product-light-theme';
  
    const ctaClass =
      ctaAppearance === 'Secondary'
        ? 'btn-base btn-secondary'
        : 'btn-base btn-primary';
  
    return (
      
      <section
      className={`${themeClass} bg-background text-foreground px-8 py-12 md:py-16 mb-20`}
      >
        
        <div className="mx-auto max-w-4xl text-center">
            {/* Caption */}
    {caption && (
        <p className="text-sm text-foreground opacity-70 mb-[0.50rem]">
        {caption}
      </p>
    )}
          {/* Headline */}
          <h1 className="text-headline font-bold mb-[3rem]">Deploy digital navigation experiences          </h1>
  
          {/* Body Copy */}
          <p className="text-body mb-[3rem]">{bodyCopy}</p>
  
          {/* CTA Button */}
          {ctaLabel && ctaUrl && (
            <a
              href={ctaUrl}
              className={`${ctaClass} btn-base btn-primary text-cta font-medium mb-[3rem]`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ctaLabel}
            </a>
          )}
  
          {/* Image */}
          {imageUrl && (
            <div className="mt-[2rem] mb-[5rem] mx-auto w-full max-w-[1258px]">
              <img
                src={imageUrl}
                alt={headline}
                className="w-full h-auto rounded-lg shadow-md object-contain"
              />
            </div>
          )}
        </div>
      </section>
    );
  }
  
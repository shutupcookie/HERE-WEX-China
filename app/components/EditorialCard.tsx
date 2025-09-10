export default function EditorialCard({ data, theme }: EditorialCardProps) {
  const { headline, bodyCopy, media, position } = data;

  const themeClass =
    theme === 'Core Dark'
      ? 'hds-web-product-dark-theme'
      : 'hds-web-product-light-theme';

  const mediaUrl = media?.fields?.file?.url
    ? media.fields.file.url.startsWith('//')
      ? `https:${media.fields.file.url}`
      : media.fields.file.url
    : null;

  const altText = media?.fields?.title || headline || 'Image';

  const bodyText =
    bodyCopy?.content?.[0]?.content?.[0]?.value ?? '';

 
    const isImageRight = position?.toLowerCase() === 'right';

  return (
    <section className={`${themeClass} bg-background text-foreground pt-13 pb-16 mb-[96px]`}>
<div className="px-4 sm:px-0 flex justify-center">
<div className="flex flex-row items-center gap-[90px] rounded-lg shadow" style={{ height: '430px', width: '1150px' }}>

{isImageRight ? ( 
  <>
  {/* Text first */} 
  <div className="w-1/2 h-full flex flex-col justify-center px-4"> <h3 className="text-headline font-bold mb-2">{headline}</h3> 
  <p className="text-body text-foreground opacity-80">{bodyText}</p> 
  </div> 
  {/* Image second */} 
  <div className="w-1/2 h-full"> <img src={mediaUrl} alt={altText} className="w-full h-full object-cover rounded-lg" /> 
  </div> </> ) : ( 
  <> {/* Image first */} 
  <div className="w-1/2 h-full"> <img src={mediaUrl} alt={altText} className="w-full h-full object-cover rounded-lg" /> </div> {/* Text second */} <div className="w-1/2 h-full flex flex-col justify-center px-4"> <h3 className="text-headline font-bold mb-2">{headline}</h3> <p className="text-body text-foreground opacity-80">{bodyText}</p> </div> </> )} </div> </div> </section> ); }
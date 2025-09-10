import FlexibleCard from './FlexibleCard';

interface FlexibleCardListProps {
  cards: any[];
  theme: string;
}

export default function FlexibleCardList({ cards, theme }: FlexibleCardListProps) {
  const themeClass =
    theme === 'Core Dark'
      ? 'hds-web-product-dark-theme'
      : 'hds-web-product-light-theme';

  return (
    <section className={`${themeClass} text-foreground py-16`}>

      <div className="bg-[#092732] px-8" style={{ paddingBottom: '100px' }}>
      <div className=" max-w-[1280px] max-w-7xl mx-auto gap-x-[15px] justify-center px-4 sm:px-6 lg:px-8 grid gap-8"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '25px',

      }}
      >
      {cards.map((card, idx) => (
          <div
          key={idx}
          className="hds-card hds-card--primary-default bg-background rounded-2xl overflow-hidden"
          style={{
            maxWidth: '402px',
            flex: '1 1 calc(33.333% - 10px)',
            minHeight: '284px', 

          }}
        >
        
        <div className="py-6 px-4">
  <div className="max-w-[350px] mx-auto">
    <h3
      className="font-bold mb-4"
      style={{
        fontFamily: 'FiraGO, sans-serif',
        fontSize: '24px',
        lineHeight: '1.3',
      }}
    >
      {card.fields.headline}
    </h3>
    <p className="text-body opacity-80">{card.fields.description}</p>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

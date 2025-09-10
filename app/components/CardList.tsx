// app/components/CardList.tsx
import Card from './Card';

interface CardListProps {
  headline: string;
  subHeadline?: string;
  titleAlignment?: 'left' | 'center';
  appearance?: 'Editorial cards' | 'Flexible cards';
  background?: 'Primary' | 'Secondary';
  theme: string;
  cards: any[];
}

export default function CardList({
  headline,
  subHeadline,
  titleAlignment = 'left',
  appearance = 'Editorial cards',
  background = 'Primary',
  theme,
  cards = [],
}: CardListProps) {
  const themeClass =
    theme === 'Core Dark'
      ? 'hds-web-product-dark-theme'
      : 'hds-web-product-light-theme';

  const bgClass =
    background === 'Secondary' ? 'bg-[#f9fafb]' : 'bg-background';

  const textAlignClass =
    titleAlignment === 'center' ? 'text-center' : 'text-left';

  const isEditorial = appearance === 'Editorial cards';

  return (
    <section className={`${themeClass} ${bgClass} text-foreground px-8 py-12`}>
      <div className="mx-auto max-w-7xl">
        <h2 className={`text-3xl font-bold mb-2 ${textAlignClass}`}>
          {headline}
        </h2>
        {subHeadline && (
          <p className={`text-body mb-6 ${textAlignClass}`}>{subHeadline}</p>
        )}

<div className={isEditorial ? 'flex justify-center' : 'grid md:grid-cols-3 gap-6'}>
  <div className="max-w-7xl w-full">
    {cards.map((card: any, idx: number) => (
      <Card key={idx} data={card.fields} appearance={appearance} />
    ))}
  </div>
</div>
      </div>
    </section>
  );
}

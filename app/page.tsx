// app/page.tsx

import Hero from '@/components/Hero';
import EditorialCard from '@/components/EditorialCard';
import FlexibleCardList from '@/components/FlexibleCardList';
import { fetchPageEntry } from '@/lib/api';
import VisionFeatureGrid from '@/components/VisionFeatureGrid';
import CTABlock from '@/components/CTABlock'

export default async function Home() {
  const page = await fetchPageEntry('3jjDGTEZJE1t4ufudjIYU9');

  const hero = page?.content?.[0]?.fields;
  const editorialCards = page?.content?.filter(
    (entry: any) => entry?.sys?.contentType?.sys?.id === 'editorialCard'
  );

  const flexibleCardsEntry = page?.content?.find(
    (entry: any) => entry?.sys?.contentType?.sys?.id === 'flexibleCardList'
  );
  const flexibleCards = flexibleCardsEntry?.fields;

  const visionFeatureGridEntry = page?.content?.find(
    (entry: any) => entry?.sys?.contentType?.sys?.id === 'visionFeatureGrid'
  );
  const visionFeatureGrid = visionFeatureGridEntry?.fields;

  const theme = page?.theme || 'Core Light';

  return (
    <main>
      {hero && (
        <Hero
          headline={hero.headline}
          caption={hero.caption}
          bodyCopy={hero.bodyCopy?.content?.[0]?.content?.[0]?.value ?? ''}
          imageUrl={hero.image?.fields?.desktopMedia?.fields?.file?.url}
          ctaLabel={hero.cta?.fields?.label}
          ctaUrl={hero.cta?.fields?.externalLink}
          ctaAppearance={hero.cta?.fields?.appearance}
          theme={theme}
        />
      )}

      {editorialCards?.map((entry: any, index: number) => (
        <div className="mt-20" key={entry.sys.id || index}>
          <EditorialCard data={entry.fields} theme={theme} />
        </div>
      ))}

                  {/* Vision Feature Grid */}
                  {visionFeatureGrid?.cards?.length > 0 && (
        <VisionFeatureGrid
          title={visionFeatureGrid.title}
          cards={visionFeatureGrid.cards}
        />
      )}

      {flexibleCards?.cards && (
        <FlexibleCardList cards={flexibleCards.cards} theme={theme} />
      )}





{hero?.cta?.fields?.label && hero?.cta?.fields?.externalLink && (
  <div className="mt-16">
    <CTABlock
      label={hero.cta.fields.label}
      url={hero.cta.fields.externalLink}
      appearance={hero.cta.fields.appearance}
    />
  </div>
)}



    </main>
  );
}

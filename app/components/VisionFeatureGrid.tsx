import VisionFeatureCard from './VisionFeatureCard';

interface VisionFeatureGridProps {
  title: string;
  cards: any[];
}

export default function VisionFeatureGrid({ title, cards }: VisionFeatureGridProps) {
  return (
<section className="bg-[#e9f4f9] py-24 px-4 text-center flex flex-col justify-center items-center min-h-[550px]">
<h2 className="text-[48px] font-bold text-[#002736] mb-12 max-w-4xl mx-auto">
        {title}
      </h2>

      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-12">
          {cards.map((card, index) => {
            const fields = card.fields;
            const heading = fields?.heading || 'Untitled';
            const description = fields?.description || '';
            const imageUrl = fields?.icon?.fields?.file?.url
              ? `https:${fields.icon.fields.file.url}`
              : '/placeholder.png';

            return (
              <VisionFeatureCard
                key={card.sys.id}
                heading={heading}
                description={description}
                iconUrl={imageUrl}
                alt={fields?.icon?.fields?.title || heading}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

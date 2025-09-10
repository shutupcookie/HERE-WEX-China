// app/components/VisionFeatureCard.tsx

interface VisionFeatureCardProps {
    heading: string;
    description: string;
    iconUrl: string;
    alt: string;
    index: number;
  }
  
  export default function VisionFeatureCard({
    heading,
    description,
    iconUrl,
    alt,
  }: VisionFeatureCardProps) {
    return (
      <div className="flex flex-col items-center text-center max-w-[380px] mx-auto">
        <img
          src={iconUrl || '/placeholder.png'}
          alt={alt}
          className="h-[100px] w-[120px] object-contain mb-6"
        />
        <h3 className="text-[24px] font-normal text-[#002736e8] mb-2">
          {heading}
        </h3>
        <p className="text-[16px] font-normal text-[#002736e8] opacity-80">
          {description}
        </p>
      </div>
    );
  }
  
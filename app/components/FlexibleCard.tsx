interface FlexibleCardProps {
    headline: string;
    description: string;
    theme: string;
  }
  
  export default function FlexibleCard({ headline, description, theme }: FlexibleCardProps) {
    return (
      <div className="hds-card hds-card--primary-default w-[358px] h-[287px] flex flex-col justify-between p-4">
        <h4 className="text-headline font-bold mb-2">{headline}</h4>
        <p className="text-body opacity-80">{description}</p>
      </div>
    );
  }
  
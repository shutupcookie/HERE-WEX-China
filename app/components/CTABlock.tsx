import CTAButton from './CTAButton';

interface CTABlockProps {
  label: string;
  url: string;
  appearance?: string;
}

export default function CTABlock({ label, url, appearance }: CTABlockProps) {
  return (
<section className="w-full pt-20 pb-20 px-4 bg-white mt-[3rem] mb-[3rem]">
<div className="max-w-screen-md mx-auto text-center">
        <CTAButton label={label} url={url} appearance={appearance} />
      </div>
    </section>
  );
}

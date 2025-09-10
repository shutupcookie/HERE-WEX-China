// app/components/CTAButton.tsx

import Link from 'next/link';

interface CTAButtonProps {
  label: string;
  url: string;
  appearance?: string;
}

export default function CTAButton({ label, url, appearance }: CTAButtonProps) {
  return (
    <Link
      href={url}
      className={`btn-base btn-primary text-cta ${
        appearance === 'secondary' ? 'bg-gray-300 text-black' : ''
      }`}
    >
      {label}
    </Link>
  );
}

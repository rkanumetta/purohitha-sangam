type Props = {
  className?: string;
  alt?: string;
};

export function BrandMark({ className = "h-12 w-12", alt = "" }: Props) {
  return (
    <img
      src="/logo.jpg"
      alt={alt}
      width={1024}
      height={1024}
      className={`shrink-0 rounded-xl object-cover ${className}`}
    />
  );
}

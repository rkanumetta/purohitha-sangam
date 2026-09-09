type Props = {
  src: string;
  alt: string;
  className?: string;
  position?: "top" | "center";
};

export function MediaFrame({ src, alt, className = "", position = "top" }: Props) {
  return (
    <div className={`overflow-hidden rounded-xl bg-night-3 ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${position === "center" ? "object-center" : "object-top"}`}
      />
    </div>
  );
}

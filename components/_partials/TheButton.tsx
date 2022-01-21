export default function TheButton({
  children,
  dense,
  secondary,
  mobileWide,
}: Props) {
  const variant = secondary ? "bg-secondary" : "bg-primary";
  const padding = dense ? "" : "lg:py-4 lg:px-12";
  const width = mobileWide ? "w-full md:w-auto" : "";

  return (
    <button
      className={`rounded font-bold text-sm text-white py-2 px-6 whitespace-nowrap uppercase md:text-base hover:underline ${variant} ${padding} ${width}`}
    >
      {children}
    </button>
  );
}

interface Props {
  children: any;
  dense?: boolean;
  secondary?: boolean;
  mobileWide?: boolean;
}

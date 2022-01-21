export default function TheButton({ children, dense, secondary }: Props) {
  const variant = secondary ? "bg-secondary" : "bg-primary";
  const padding = dense ? "" : "lg:py-4 lg:px-12";
  return (
    <button
      className={`rounded font-bold text-sm text-white py-2 px-8 uppercase md:text-base hover:underline ${variant} ${padding}`}
    >
      {children}
    </button>
  );
}

interface Props {
  children: any;
  dense?: boolean;
  secondary?: boolean;
}

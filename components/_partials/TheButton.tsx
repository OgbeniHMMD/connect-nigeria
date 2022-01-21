export default function TheButton({ children, primary, secondary }: Props) {
  return (
    <button
      className={`rounded font-bold text-sm text-white py-2 px-8 uppercase md:text-base lg:py-4 lg:px-12 hover:underline ${
        secondary ? "bg-secondary" : "bg-primary"
      }`}
    >
      {children}
    </button>
  );
}

interface Props {
  children: any;
  primary?: boolean;
  secondary?: boolean;
}

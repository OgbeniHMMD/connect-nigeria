export default function TheButton({ children }) {
  return (
    <button className="bg-primary rounded font-bold text-sm text-white py-2 px-8 uppercase md:text-base lg:py-4 lg:px-12 hover:underline">
      {children}
    </button>
  );
}

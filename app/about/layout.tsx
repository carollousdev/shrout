export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="h-36 w-full bg-blue-700">
        <h1 className="text-white">Carollous Dachi</h1>
      </div>
      {children}
    </div>
  );
}

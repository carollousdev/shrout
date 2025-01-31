export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="bg-blue-700">
        <h1>Carollous Dachi</h1>
      </div>
      {children}
    </div>
  );
}

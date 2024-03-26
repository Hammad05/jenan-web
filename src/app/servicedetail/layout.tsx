export default function ServiceDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="md:mx-auto md:w-2/3">{children}</div>;
}

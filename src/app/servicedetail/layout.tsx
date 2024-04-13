export default function ServiceDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="md:mx-auto w-full md:max-w-[var(--layout-max-width-internal)]">{children}</div>;
}

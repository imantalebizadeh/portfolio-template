export default function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <p className="mx-auto w-fit bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text font-semibold uppercase tracking-widest text-transparent">
        {eyebrow}
      </p>
      <h2 className="mt-6 text-center font-serif text-3xl capitalize md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-center text-white/60 md:text-lg xl:text-xl">
        {description}
      </p>
    </>
  );
}

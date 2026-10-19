import Link from "next/link";

type Props = {
  href: string;
  title: string;
  description: string;
  icon: string;
};

export default function CategoryCard({ href, title, description, icon }: Props) {
  return (
    <Link
      href={href}
      className="group block bg-white/10 p-px transition-colors duration-200 hover:bg-fuchsia-500"
    >
      <div className="flex h-full flex-col bg-[#0f1923] p-7 transition-colors duration-200 group-hover:bg-[#161f2b]">
        <div className="mb-6 text-6xl">{icon}</div>

        <h3 className="text-2xl font-black uppercase italic tracking-tighter">{title}</h3>
        <p className="mt-2 flex-1 text-sm text-white/60">{description}</p>

        <span className="mt-6 text-sm font-bold uppercase tracking-widest text-white/50 transition-colors group-hover:text-fuchsia-400">
          View projects →
        </span>
      </div>
    </Link>
  );
}
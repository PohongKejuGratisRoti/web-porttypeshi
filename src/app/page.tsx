import CategoryCard from "@/components/CategoryCard";

const categories = [
  { href: "/webdev", title: "Web Dev", description: "Websites and web apps I've built.", icon: "💻" },
  { href: "/gamedev", title: "Game Dev", description: "Games, prototypes, and game jams.", icon: "🎮" },
  { href: "/dataanalyst", title: "Data Analyst", description: "Dashboards, reports, and analysis.", icon: "📊" },
  { href: "/multimedia", title: "Multimedia", description: "3D models, illustrations, and more.", icon: "🎨" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1923] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="mb-12 text-5xl font-black uppercase italic tracking-tighter">
          My <span className="text-fuchsia-500">Portfolio</span>
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <CategoryCard key={c.href} {...c} />
          ))}
        </div>
      </div>
    </main>
  );
}
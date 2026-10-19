
import TerminalWindow from "@/components/TerminalWindow";
import Image from "next/image";


export default function WebDevPage() {
  const stack = [
  { name: "Python", icon: "/icons/python.svg" },
  { name: "FastAPI", icon: "/icons/fastapi.svg" },
  { name: "Go", icon: "/icons/Go.svg" },
  { name: "MongoDB", icon: "/icons/MongoDB.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Java", icon: "/icons/java.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "TailWindCSS", icon: "/icons/tailwindcss.svg" },
  { name: "PHP", icon: "/icons/php.svg" },
  { name: "Vue", icon: "/icons/vuejs.svg" },
  { name: "Express", icon: "/icons/express.svg" },
  { name: "Elysia", icon: "/icons/elysia.svg" },
  { name: "Hono", icon: "/icons/hono.svg" },
  { name: "Spring", icon: "/icons/spring.svg" },
  { name: "Dotnet", icon: "/icons/dotnet.svg" },

  
];
  return (
    <main className="min-h-screen bg-black text-amber-600 px-7">
    <TerminalWindow>
      <p><span className=" text-green-400">$ </span>whoami</p>
      <p className="mb-4 text-fuchsia-400">Arry Wahyu Setiawan</p>
      <p><span className="select-none text-green-400">$ </span>groups</p>
      <p className="mb-4 text-sky-500">Web Developer</p>
      <p><span className="select-none text-green-400">$ </span>ls -la | groups backend</p>
      <p className="mb-4 text-blue-800">FastApi Express Go Elysia Hono Spring</p>
      <p><span className="select-none text-green-400">$ </span>ls -la | groups frontend</p>
      <p className="mb-4 text-blue-800">Vue React Flutter</p>
      <p><span className="select-none text-green-400">$ </span>ls -la | groups monolith</p>
      <p className="mb-4 text-blue-800">NEXTjs Laravel<span className="animate-pulse text-white">▍</span></p>
      
      {/* ...rest of your lines */}
    </TerminalWindow>
    <TerminalWindow>

      <p>
    <span className="text-green-400">$ </span>
    ls -la ~/backend/projects
  </p>

  <div className="mb-4 space-y-1">
    <p className="text-sky-400">drwxr-xr-x  maptrackingAPI/</p>
    <p className="pl-4 text-zinc-400">
      Interactive and Tracking
    </p>
    <p className="pl-4 text-amber-300">
      FastAPI · OpenMaps API · REST API
    </p>
  </div>

  <div className="mb-4 space-y-1">
    <p className="text-sky-400">drwxr-xr-x  fastapi-deepseek-wrapper/</p>
    <p className="pl-4 text-zinc-400">
      ChatGPT API wrapper built with FastAPI
    </p>
    <p className="pl-4 text-amber-300">
      Python · FastAPI · Ollama API
    </p>
  </div>

  <div className="mb-4 space-y-1">
    <p className="text-sky-400">drwxr-xr-x  golang-gemini-wrapper/</p>
    <p className="pl-4 text-zinc-400">
      Gemini API wrapper built with Go
    </p>
    <p className="pl-4 text-amber-300">
      Go · net/http · Gemini API
    </p>
  </div>

  <div className="mb-4 space-y-1">
    <p className="text-sky-400">drwxr-xr-x  basic-crud-restapi-fastapi/</p>
    <p className="pl-4 text-zinc-400">
      REST API with basic CRUD operations
    </p>
    <p className="pl-4 text-amber-300">
      FastAPI · REST · Database
    </p>
  </div>

  <p>
    <span className="text-green-400">$ </span>
    <span className="animate-pulse text-white">▍</span>
  </p>

    </TerminalWindow>
    <TerminalWindow>
      <div className="mb-4 space-y-1">
        <p className="text-sky-400">drwxr-xr-x  golang-gemini-wrapper/</p>
        <p className="pl-4 text-zinc-400">
         Gemini API wrapper built with Go
      </p>
    <p className="pl-4 text-amber-300">
      Go · net/http · Gemini API
    </p>
  </div>
      <p>
    <span className="text-green-400">$ </span>
    <span className="animate-pulse text-white">▍</span>
  </p>
    </TerminalWindow>
    <TerminalWindow>
  <p className="mb-4">
    <span className="text-green-400">$ </span>
    ./stack --list
  </p>

  <div className="flex gap-4 overflow-x-auto pb-3">
  {stack.map((tech) => (
    <div
      key={tech.name}
      className="flex min-w-28 shrink-0 flex-col items-center gap-3 rounded-lg border border-zinc-800 bg-blue-950 p-4 transition duration-200 hover:border-green-500 hover:bg-zinc-900"
    >
      <Image
        src={tech.icon}
        alt=""
        width={48}
        height={48}
        className="h-12 w-12 object-contain"
      />
      <span className="text-sm text-zinc-300">{tech.name}</span>
    </div>
  ))}
</div>

  <p className="mt-2 text-xs text-zinc-500">
    Scroll horizontally to explore the stack.
  </p>
</TerminalWindow>
    
    
    </main>
  );
}
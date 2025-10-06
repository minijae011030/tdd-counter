import github_logo_white from "@/assets/github-mark-white.png";
import github_logo from "@/assets/github-mark.png";

import react_logo from "@/assets/react.png";
import vite_logo from "@/assets/vite.png";
import { useToast } from "@/hooks/use-toast";
import { useThemeStore } from "@/store/useThemeStore";
import { Copy, Moon, Sun } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <Hero />
      <Features />
      <GettingStarted />
      <TechStack />
      <Footer />
    </div>
  );
}

/* ---------------- HEADER ---------------- */
function Header() {
  const { theme, toggle } = useThemeStore();

  const handleToggle = () => {
    document.body.classList.add("theme-transition");
    toggle();
    setTimeout(() => document.body.classList.remove("theme-transition"), 300);
  };
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/70 backdrop-blur transition-colors duration-300 supports-[backdrop-filter]:bg-background/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-primary">
          <img src={vite_logo} className="h-5" />
          <img src={react_logo} className="h-5" />
          <span className="font-semibold">React + Vite Template</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <a href="#features" className="hover:text-foreground">
            Features
          </a>
          <a href="#getting-started" className="hover:text-foreground">
            Getting Started
          </a>
          <a href="#stack" className="hover:text-foreground">
            Tech Stack
          </a>
        </nav>
        <button
          onClick={handleToggle}
          className="inline-flex items-center justify-center rounded-md p-2 transition-colors hover:bg-accent"
          title="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4 text-foreground" />
          ) : (
            <Moon className="h-4 w-4 text-foreground" />
          )}
        </button>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const { theme } = useThemeStore();
  return (
    <section className="relative transition-colors duration-300">
      <div className="absolute inset-0 -z-10 opacity-40">
        {theme === "dark" ? (
          <div className="mx-auto h-40 max-w-5xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/40 via-indigo-500/20 to-transparent blur-3xl" />
        ) : (
          <div className="mx-auto h-40 max-w-5xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-300/40 via-indigo-200/20 to-transparent blur-3xl" />
        )}
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-28">
        <div className="mb-6 flex justify-center gap-5">
          <img src={vite_logo} className="h-12" />
          <img src={react_logo} className="h-12" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Build faster with React & Vite.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          A batteries-included starter focused on speed, accessibility, and DX.
          Designed for real-world apps—from prototypes to production.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs">
          {[
            "React 19",
            "TypeScript 5",
            "Vite 7",
            "Zustand",
            "Tailwind 3",
            "shadcn/ui",
          ].map((t) => (
            <span
              key={t}
              className="rounded-full bg-accent px-3 py-1 text-accent-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <HeroButton href="https://vitejs.dev/guide/" text="Vite Docs" />
          <HeroButton href="https://react.dev/" text="React Docs" />
          <HeroButton
            href="https://github.com/minijae011030/react-template"
            text="GitHub"
            icon={theme === "dark" ? github_logo_white : github_logo}
          />
        </div>
      </div>
    </section>
  );
}

function HeroButton({
  href,
  text,
  icon,
}: {
  href: string;
  text: string;
  icon?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 font-medium transition-colors hover:bg-accent"
    >
      {icon && <img src={icon} className="-ml-2 h-6" />}
      {text}
    </a>
  );
}

/* ---------------- FEATURES ---------------- */
function Features() {
  const features = [
    {
      title: "Blazing Dev Server",
      desc: "Instant HMR and lightning-fast builds via Vite 7.",
    },
    {
      title: "Type-Safe by Default",
      desc: "TypeScript configuration ready out of the box.",
    },
    {
      title: "Utility-First Styling",
      desc: "TailwindCSS with animate plugin and class sorting.",
    },
    {
      title: "Accessible Components",
      desc: "shadcn/ui (Radix) for accessible building blocks.",
    },
    {
      title: "Modern Routing",
      desc: "React Router 7 with a clean route setup.",
    },
    {
      title: "Lint & Format",
      desc: "ESLint + Prettier + Tailwind class auto-ordering.",
    },
  ];

  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="mb-6 text-2xl font-semibold">Features</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm transition-colors"
          >
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CODE BLOCK ---------------- */
function CodeBlock({ code }: { code: string }) {
  return (
    <div className="relative w-full overflow-x-auto">
      <pre className="mt-2 w-max min-w-full rounded-lg bg-muted p-4 font-mono text-sm">
        {code}
      </pre>
    </div>
  );
}
/* ---------------- GETTING STARTED ---------------- */
function GettingStarted() {
  const { toast } = useToast();

  const code1 = `git clone https://github.com/minijae011030/react-template.git
cd react-template
npm i
npm run dev`;

  const code2 = `npm run build      # production build
npm run preview    # preview the build
npm run lint       # ESLint
npm run format     # Prettier + Tailwind sort`;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      description: "Copied to clipboard!",
      duration: 2000,
    });
  };

  return (
    <section id="getting-started" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="mb-6 text-2xl font-semibold">Getting Started</h2>
      <div className="grid min-w-0 gap-6">
        <CodeCard title="Use this template" code={code1} onCopy={handleCopy} />
        <CodeCard title="Common Scripts" code={code2} onCopy={handleCopy} />
      </div>
    </section>
  );
}

function CodeCard({
  title,
  code,
  onCopy,
}: {
  title: string;
  code: string;
  onCopy: (code: string) => void;
}) {
  return (
    <div className="min-w-0 rounded-xl border border-border bg-card p-5 shadow-sm transition-colors">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{title}</h3>
        <button
          onClick={() => onCopy(code)}
          className="rounded-md bg-accent p-1 transition-colors hover:bg-accent/80"
        >
          <Copy className="h-4 w-4 text-accent-foreground" />
        </button>
      </div>
      <CodeBlock code={code} />
    </div>
  );
}

/* ---------------- TECH STACK ---------------- */
function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="mb-6 text-2xl font-semibold">Tech Stack</h2>
      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
        {[vite_logo, react_logo].map((logo, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2"
          >
            <img src={logo} className="h-5" />
          </span>
        ))}
        {[
          "TypeScript 5",
          "Zustand",
          "TailwindCSS 3",
          "shadcn/ui",
          "React Router 7",
        ].map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-accent-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background transition-colors">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} React + Vite Template</p>
        <p>Powered by React, Vite, Tailwind, and shadcn/ui</p>
      </div>
    </footer>
  );
}

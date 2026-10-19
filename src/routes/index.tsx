import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arsenal Express — Agendador TikTok" },
      { name: "description", content: "Agende, publique e acompanhe seus vídeos do TikTok direto do Arsenal Express." },
      { property: "og:title", content: "Arsenal Express — Agendador TikTok" },
      { property: "og:description", content: "Agende, publique e acompanhe seus vídeos do TikTok direto do Arsenal Express." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div aria-hidden className="ambient-pink pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full opacity-20 blur-3xl" />
      <div aria-hidden className="ambient-cyan pointer-events-none absolute -left-52 top-1/3 h-[480px] w-[480px] rounded-full opacity-10 blur-3xl" />
      <div className="animate-rise-in">
        <p className="eyebrow flex items-center justify-center gap-2">
          <span className="tally" aria-hidden /> Arsenal Express · TikTok
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
          Vídeo pronto entra na <span className="tiktok-split">fila do TikTok</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
          Escolhe a conta, cola o link, marca o horário. O resto sai sozinho.
        </p>
        <Button asChild variant="glow" size="lg" className="mt-8">
          <Link to="/tiktok">
            Abrir agendador <ArrowRight />
          </Link>
        </Button>
      </div>
    </main>
  );
}

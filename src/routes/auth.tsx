import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Entrar — Arsenal Express" },
      { name: "description", content: "Entre no Arsenal Express pra agendar seus vídeos no TikTok." },
      { property: "og:title", content: "Entrar — Arsenal Express" },
      { property: "og:description", content: "Entre no Arsenal Express pra agendar seus vídeos no TikTok." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const { error } =
      mode === "in"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({
            email,
            password,
            options: { emailRedirectTo: `${window.location.origin}/tiktok` },
          });
    setBusy(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    if (mode === "up") {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        toast.success("Confere seu e-mail pra confirmar a conta.");
        return;
      }
    }
    navigate({ to: "/tiktok" });
  }

  return (
    <main className="grain relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div aria-hidden className="ambient-pink pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full opacity-20 blur-3xl" />
      <div aria-hidden className="ambient-cyan pointer-events-none absolute -left-52 top-1/3 h-[480px] w-[480px] rounded-full opacity-10 blur-3xl" />
      <div className="panel w-full max-w-sm animate-rise-in p-8">
        <p className="eyebrow flex items-center gap-2">
          <span className="tally" aria-hidden /> Arsenal Express
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight">
          {mode === "in" ? "Entrar" : "Criar conta"}
        </h1>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button type="submit" variant="glow" className="w-full" disabled={busy}>
            {busy ? "Aguarde..." : mode === "in" ? "Entrar" : "Criar conta"}
          </Button>
        </form>
        <button
          type="button"
          onClick={() => setMode(mode === "in" ? "up" : "in")}
          className="mt-4 w-full text-center text-sm text-muted-foreground hover:text-foreground"
        >
          {mode === "in" ? "Não tem conta? Criar uma" : "Já tem conta? Entrar"}
        </button>
      </div>
    </main>
  );
}

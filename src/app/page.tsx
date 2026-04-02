export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 font-sans">
      <main className="flex flex-col items-center gap-8 text-center px-8">
        <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-emerald-500 shadow-lg">
          <span className="text-4xl">🚀</span>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            LPAD Auto-Deploy Works!
          </h1>
          <p className="text-lg text-zinc-400 max-w-md">
            This page was automatically deployed by LPAD after a GitHub push.
            Webhook triggered ✓ Build ran ✓ Site updated ✓
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-zinc-500">
          <span>Deployed via <code className="text-emerald-400">lpad.ekddigital.com</code></span>
          <span>Repo: <code className="text-zinc-300">ekddigital/test</code></span>
        </div>
      </main>
    </div>
  );
}

import { ArrowRight, Play, BarChart3, FileText, Calendar } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-600/15 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
              Nouveau : Estimation IA intégrée
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Gérez vos chantiers{' '}
              <span className="bg-gradient-to-r from-primary-light via-violet-400 to-purple-300 bg-clip-text text-transparent">
                sans effort
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-xl">
              TitanBTP est le logiciel tout-en-un conçu pour les artisans et entreprises du bâtiment.
              Devis, factures, planning, estimation IA — tout depuis une seule interface.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold rounded-xl bg-primary hover:bg-primary-dark text-white transition-all shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                Essai gratuit 14 jours
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold rounded-xl border border-white/15 text-white/80 hover:text-white hover:bg-white/5 transition-all"
              >
                <Play className="h-5 w-5" />
                Voir la démo
              </a>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <div className="flex -space-x-3">
                {[
                  'bg-emerald-500', 'bg-blue-500', 'bg-amber-500', 'bg-rose-500',
                ].map((color, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full ${color} border-2 border-surface flex items-center justify-center text-xs font-bold text-white`}
                  >
                    {['JM', 'AS', 'PD', 'LB'][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-semibold">+500 artisans</p>
                <p className="text-white/50 text-sm">nous font confiance</p>
              </div>
            </div>
          </div>

          {/* Right — Dashboard mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-violet-500/10 rounded-3xl blur-xl" />
            <div className="relative bg-surface-light/80 backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-2xl">
              {/* Window bar */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <div className="flex-1 mx-4 h-6 rounded-lg bg-white/5 flex items-center px-3">
                  <span className="text-[11px] text-white/30">app.titanbtp.fr/dashboard</span>
                </div>
              </div>

              {/* Mock KPI row */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: 'CA du mois', value: '24 500 €', icon: BarChart3, color: 'text-emerald-400' },
                  { label: 'Devis en attente', value: '7', icon: FileText, color: 'text-violet-400' },
                  { label: 'Chantiers actifs', value: '4', icon: Calendar, color: 'text-blue-400' },
                ].map((kpi) => (
                  <div
                    key={kpi.label}
                    className="bg-white/5 rounded-xl p-3 border border-white/5"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] text-white/40">{kpi.label}</span>
                      <kpi.icon className={`h-3.5 w-3.5 ${kpi.color}`} />
                    </div>
                    <p className="text-lg font-bold text-white">{kpi.value}</p>
                  </div>
                ))}
              </div>

              {/* Mock chart */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-white/50">Évolution des revenus</span>
                  <span className="text-[10px] text-emerald-400">+18% ↑</span>
                </div>
                <div className="flex items-end gap-1.5 h-24">
                  {[35, 50, 40, 65, 55, 80, 70, 90, 75, 95, 85, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-primary/60 to-primary-light/40 transition-all"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Mock project list */}
              <div className="mt-4 space-y-2">
                {[
                  { name: 'Rénovation cuisine — Martin', status: 'En cours', color: 'bg-amber-500' },
                  { name: 'Terrasse bois — Dupont', status: 'Planifié', color: 'bg-blue-500' },
                ].map((project) => (
                  <div
                    key={project.name}
                    className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2 border border-white/5"
                  >
                    <span className="text-xs text-white/70">{project.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${project.color}/20 text-white/80`}>
                      {project.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { UserPlus, FolderPlus, FileText, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Créez votre compte',
    description:
      'Inscription gratuite en 30 secondes. Personnalisez votre profil entreprise, logo et coordonnées.',
  },
  {
    icon: FolderPlus,
    number: '02',
    title: 'Ajoutez vos projets',
    description:
      'Créez vos chantiers avec toutes les informations : client, type, dates, équipe et photos.',
  },
  {
    icon: FileText,
    number: '03',
    title: 'Générez devis & factures',
    description:
      'Créez des devis professionnels en PDF, convertissez-les en factures et suivez les paiements.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Pilotez votre activité',
    description:
      'Consultez votre dashboard pour suivre CA, projets en cours, alertes et taux de conversion.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-light bg-primary/10 border border-primary/20 rounded-full mb-4">
            Comment ça marche
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Opérationnel en{' '}
            <span className="text-primary-light">4 étapes</span>
          </h2>
          <p className="text-lg text-white/50">
            Pas de formation complexe. TitanBTP est conçu pour être intuitif dès la première utilisation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center group">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/10 to-transparent" />
              )}

              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-white/[0.04] border border-white/[0.08] mb-6 group-hover:bg-white/[0.08] group-hover:border-white/[0.15] transition-all duration-300">
                <step.icon className="h-10 w-10 text-primary-light" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-primary/30">
                  {step.number}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

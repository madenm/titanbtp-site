import { Check, Star } from 'lucide-react'

const plans = [
  {
    name: 'Pro',
    price: '150',
    period: '/ mois',
    description: 'Idéal pour les artisans indépendants et les petites structures.',
    features: [
      'Jusqu\'à 20 projets actifs',
      'Devis & factures illimités',
      'Planning vue mensuelle & liste',
      'Estimation IA — 10 estimations / mois',
      'Gestion d\'équipe jusqu\'à 3 membres',
      'Export PDF avec logo entreprise',
      'Tableau de bord & alertes',
      'Support par email',
    ],
    cta: 'Essai gratuit 14 jours',
    highlighted: true,
    trial: '14 jours d\'essai gratuit',
  },
  {
    name: 'Entreprise',
    price: '300',
    period: '/ mois',
    description: 'La solution complète pour les entreprises du BTP qui veulent scaler.',
    features: [
      'Projets illimités',
      'Devis & factures illimités',
      'Planning avancé (semaine, mois, liste)',
      'Estimation IA illimitée',
      'CRM & pipeline de prospects',
      'Membres d\'équipe illimités',
      'Tarifs & catalogue Artiprix intégré',
      'Gestion multi-entreprise',
      'API & intégrations tierces',
      'Onboarding & formation personnalisés',
      'Support prioritaire téléphone & email',
    ],
    cta: 'Essai gratuit 14 jours',
    highlighted: false,
    trial: '14 jours d\'essai gratuit',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/5 rounded-full blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-light bg-primary/10 border border-primary/20 rounded-full mb-4">
            Tarifs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Des prix{' '}
            <span className="text-primary-light">simples et transparents</span>
          </h2>
          <p className="text-lg text-white/50">
            Pas de surprise, pas de frais cachés. Choisissez le plan qui correspond à votre activité.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-primary/15 to-primary/5 border-2 border-primary/40 shadow-xl shadow-primary/10'
                  : 'bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1 text-xs font-semibold rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                    <Star className="h-3 w-3" />
                    Plus populaire
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-white/40">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}€</span>
                  <span className="text-white/40">{plan.period}</span>
                </div>
                {'trial' in plan && plan.trial && (
                  <p className="text-sm text-primary-light mt-2">{plan.trial}</p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary-light shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-xl text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25 hover:shadow-primary/40'
                    : 'bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.1]'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

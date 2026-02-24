import {
  FileText, Calendar, Brain, Receipt, Users, BarChart3,
  Building, Settings, Smartphone,
} from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Devis professionnels',
    description:
      'Créez des devis détaillés en quelques minutes avec génération PDF automatique, suivi du statut et conversion en facture en un clic.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Receipt,
    title: 'Facturation simplifiée',
    description:
      'Facturez vos clients directement depuis vos devis validés. Suivez les paiements, relancez les impayés et gardez le contrôle sur votre trésorerie.',
    color: 'from-emerald-500 to-green-600',
  },
  {
    icon: Calendar,
    title: 'Planning intelligent',
    description:
      'Visualisez vos chantiers en vue calendrier, semaine ou liste. Ajoutez des notes quotidiennes et suivez les deadlines en un coup d\'œil.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Brain,
    title: 'Estimation IA',
    description:
      'Estimez le coût de vos chantiers grâce à l\'intelligence artificielle. Prenez une photo, répondez à quelques questions et obtenez un devis détaillé.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Users,
    title: 'CRM & Prospects',
    description:
      'Gérez votre pipeline commercial avec un CRM visuel. Suivez vos prospects du premier contact à la signature avec des colonnes personnalisables.',
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: Building,
    title: 'Gestion de projets',
    description:
      'Centralisez toutes les informations de vos chantiers : clients, images, notes d\'avancement, équipe assignée, devis et factures associés.',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    icon: BarChart3,
    title: 'Tableau de bord',
    description:
      'Suivez votre chiffre d\'affaires, taux de conversion, chantiers en retard et alertes importantes depuis un dashboard clair et visuel.',
    color: 'from-teal-500 to-emerald-600',
  },
  {
    icon: Settings,
    title: 'Tarifs personnalisés',
    description:
      'Configurez vos tarifs horaires, prix de matériaux et marges par défaut. L\'estimation IA s\'appuie sur vos propres prix pour plus de précision.',
    color: 'from-gray-400 to-gray-600',
  },
  {
    icon: Smartphone,
    title: 'Responsive & mobile',
    description:
      'Accédez à TitanBTP depuis n\'importe quel appareil. L\'interface s\'adapte parfaitement au mobile pour gérer vos chantiers sur le terrain.',
    color: 'from-purple-500 to-violet-600',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-light bg-primary/10 border border-primary/20 rounded-full mb-4">
            Fonctionnalités
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Tout ce dont vous avez besoin,{' '}
            <span className="text-primary-light">rien de superflu</span>
          </h2>
          <p className="text-lg text-white/50">
            Un outil pensé par et pour les professionnels du BTP. Chaque fonctionnalité répond à un
            besoin concret du quotidien.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

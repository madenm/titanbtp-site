import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Puis-je tester TitanBTP avant de m\'engager ?',
    answer:
      'Oui, tous nos plans incluent un essai gratuit de 14 jours, sans carte bancaire requise. Vous avez accès à l\'intégralité des fonctionnalités du plan choisi pendant la période d\'essai.',
  },
  {
    question: 'Comment fonctionne l\'estimation IA ?',
    answer:
      'Vous pouvez optionnellement prendre une photo de la zone de travaux, puis répondre à un questionnaire adapté au type de chantier (surface, matériaux, etc.). Notre IA analyse ces informations avec les prix de référence du marché et vos tarifs personnels pour générer un chiffrage détaillé avec fourchette de prix, matériaux, main-d\'œuvre et durée estimée.',
  },
  {
    question: 'Puis-je importer mes données existantes ?',
    answer:
      'Oui, vous pouvez ajouter vos clients, projets et tarifs manuellement ou via import. L\'onboarding guidé vous accompagne pas à pas pour configurer votre espace de travail.',
  },
  {
    question: 'TitanBTP fonctionne-t-il sur mobile ?',
    answer:
      'Absolument. L\'interface est entièrement responsive et optimisée pour une utilisation sur smartphone et tablette. Vous pouvez gérer vos chantiers, créer des devis et consulter votre planning directement depuis le terrain.',
  },
  {
    question: 'Mes données sont-elles sécurisées ?',
    answer:
      'Vos données sont hébergées sur des serveurs sécurisés avec Supabase (infrastructure PostgreSQL). L\'authentification est gérée par un système robuste et toutes les communications sont chiffrées en HTTPS.',
  },
  {
    question: 'Puis-je personnaliser mes devis et factures ?',
    answer:
      'Oui, vous pouvez ajouter votre logo, personnaliser les couleurs, renseigner vos coordonnées d\'entreprise (SIRET, adresse, etc.) et configurer vos conditions générales par défaut. Vos documents PDF reflètent votre identité visuelle.',
  },
  {
    question: 'Comment annuler ou changer de plan ?',
    answer:
      'Vous pouvez changer de plan ou annuler à tout moment depuis les paramètres de votre compte. Aucun engagement, aucune pénalité. Vos données restent accessibles pendant 30 jours après l\'annulation.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-light bg-primary/10 border border-primary/20 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Questions{' '}
            <span className="text-primary-light">fréquentes</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-white/[0.04] border-white/[0.12]'
                    : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.1]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-white/40 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-sm text-white/50 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Jean-Marc Lefebvre',
    role: 'Artisan plombier',
    location: 'Lyon',
    avatar: 'JM',
    color: 'bg-emerald-500',
    content:
      'Avant TitanBTP, je faisais mes devis sur Excel. Maintenant en 5 minutes c\'est bouclé, avec un PDF pro que mes clients adorent. Le planning m\'a changé la vie.',
    rating: 5,
  },
  {
    name: 'Sophie Moreau',
    role: 'Gérante — Moreau Rénovation',
    location: 'Bordeaux',
    avatar: 'SM',
    color: 'bg-violet-500',
    content:
      'L\'estimation IA est bluffante. J\'uploade une photo du chantier, je réponds à 3 questions et j\'ai un chiffrage détaillé. Ça m\'a fait gagner des heures de calcul.',
    rating: 5,
  },
  {
    name: 'Pierre Durand',
    role: 'Chef de chantier',
    location: 'Paris',
    avatar: 'PD',
    color: 'bg-blue-500',
    content:
      'Avec 8 chantiers en parallèle, j\'avais besoin d\'un outil pour tout centraliser. Le dashboard me donne une vue d\'ensemble en 2 secondes. Indispensable.',
    rating: 5,
  },
  {
    name: 'Laure Bernard',
    role: 'Électricienne indépendante',
    location: 'Toulouse',
    avatar: 'LB',
    color: 'bg-rose-500',
    content:
      'Interface magnifique, facile à prendre en main. J\'ai pu créer mes premiers devis le jour même de mon inscription. Le CRM m\'aide à ne plus perdre de prospects.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary-light bg-primary/10 border border-primary/20 rounded-full mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Ils l'utilisent{' '}
            <span className="text-primary-light">au quotidien</span>
          </h2>
          <p className="text-lg text-white/50">
            Des artisans et entreprises du BTP partagent leur expérience avec TitanBTP.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.06] rounded-2xl p-6 transition-all duration-300"
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-white/[0.04]" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                "{t.content}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-xs font-bold text-white`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/40">
                    {t.role} — {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

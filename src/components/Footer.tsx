import { Hammer, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  Produit: [
    { label: 'Fonctionnalités', href: '#features' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'Témoignages', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ],
  Ressources: [
    { label: 'Guide de démarrage', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Centre d\'aide', href: '#' },
    { label: 'Nouveautés', href: '#' },
  ],
  Légal: [
    { label: 'Mentions légales', href: '#' },
    { label: 'CGU', href: '#' },
    { label: 'Politique de confidentialité', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <Hammer className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Titan<span className="text-primary-light">BTP</span>
              </span>
            </a>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">
              Le logiciel de gestion tout-en-un pour les artisans et entreprises du bâtiment.
              Devis, factures, planning et estimation IA.
            </p>
            <div className="space-y-2">
              <a href="mailto:contact@titanbtp.fr" className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors">
                <Mail className="h-4 w-4" />
                contact@titanbtp.fr
              </a>
              <a href="tel:+33100000000" className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors">
                <Phone className="h-4 w-4" />
                01 00 00 00 00
              </a>
              <span className="flex items-center gap-2 text-sm text-white/40">
                <MapPin className="h-4 w-4" />
                Paris, France
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white/70 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} TitanBTP. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/50 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/50 transition-colors">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Home() {
  const { formData, setFormData } = useApp();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ajoutez ici la logique d'envoi du formulaire
  };

  const steps = [
    {
      title: 'Créez votre profil',
      description: 'Inscrivez-vous et remplissez votre profil avec vos besoins spécifiques.',
    },
    {
      title: 'Trouvez un aidant',
      description: 'Parcourez les profils des aidants qualifiés et choisissez celui qui vous correspond.',
    },
    {
      title: 'Prenez contact',
      description: "Échangez directement avec l'aidant et planifiez votre première rencontre.",
    },
  ];

  const faqs = [
    {
      question: 'Comment fonctionne AidConnect ?',
      answer: 'AidConnect met en relation les personnes ayant besoin d aide avec des aidants qualifiés. Créez votre profil, recherchez un aidant selon vos critères, et prenez contact directement.',
    },
    {
      question: 'Les aidants sont-ils qualifiés ?',
      answer: 'Oui, tous nos aidants sont vérifiés et qualifiés. Nous vérifions leurs références et qualifications avant leur inscription sur la plateforme.',
    },
    {
      question: 'Combien coûte le service ?',
      answer: 'L inscription et la recherche sont gratuites. Les tarifs des services sont fixés par les aidants et clairement indiqués sur leurs profils.',
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trouvez l'aide dont vous avez besoin
          </h1>
          <p className="text-xl text-gray-600">
            Connectez-vous avec des aidants qualifiés près de chez vous
          </p>
        </div>

        {/* Form Section */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              <input
                type="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Votre téléphone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="">Type de service</option>
                <option value="aide-domicile">Aide à domicile</option>
                <option value="aide-menagere">Aide ménagère</option>
                <option value="garde-malade">Garde malade</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            {/* Toggle pour la recherche immédiate */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Recherche immédiate</span>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, immediateSearch: !formData.immediateSearch })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                  formData.immediateSearch ? 'bg-primary-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    formData.immediateSearch ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {!formData.immediateSearch && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required={!formData.immediateSearch}
                />
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required={!formData.immediateSearch}
                />
              </div>
            )}

            <textarea
              placeholder="Votre message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              rows={4}
              required
            />

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Trouver un aidant
            </button>
          </form>
        </div>

        {/* How it Works Section */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl font-bold text-primary-600">{index + 1}</span>
                  <h3 className="text-xl font-semibold ml-4">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
} 
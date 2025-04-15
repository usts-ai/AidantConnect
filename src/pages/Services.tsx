import { motion } from 'framer-motion';

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-24"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Nos Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          title="Aide à domicile"
          description="Assistance quotidienne pour les tâches ménagères et les soins personnels."
        />
        <ServiceCard
          title="Garde malade"
          description="Surveillance et soins pour les personnes malades ou en convalescence."
        />
        <ServiceCard
          title="Accompagnement"
          description="Soutien pour les sorties, rendez-vous médicaux et activités sociales."
        />
      </div>
    </motion.div>
  );
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <h3 className="text-xl font-semibold text-primary-600 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
} 
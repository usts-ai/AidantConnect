import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-24"
    >
      <h1 className="text-4xl font-bold text-center mb-8">À Propos de Nous</h1>
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg">
          <p className="text-lg text-gray-600 mb-6">
            AidConnect est née d'une vision simple : faciliter la mise en relation entre les personnes
            ayant besoin d'aide et des aidants qualifiés et bienveillants.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Notre mission est de créer un environnement sûr et efficace où chacun peut trouver
            l'assistance dont il a besoin, tout en offrant aux aidants une plateforme pour
            proposer leurs services de manière professionnelle.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Nos Valeurs</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary-600 font-semibold mr-2">•</span>
              <span>Bienveillance et respect dans chaque interaction</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 font-semibold mr-2">•</span>
              <span>Qualité et professionnalisme des services</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 font-semibold mr-2">•</span>
              <span>Transparence et confiance</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
} 
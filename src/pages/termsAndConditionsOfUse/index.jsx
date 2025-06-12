import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Conditions générales
          </h1>
          <p className="mt-2 text-gray-500">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <ol className="space-y-8 list-decimal list-inside">
            {/* Article 1 */}
            <li className="pl-4">
              <h2 className="text-xl font-bold text-primary mb-3">Objet</h2>
              <p className="text-gray-700">
                Les présentes Conditions Générales ont pour objet de définir les droits et obligations des utilisateurs et de Forma school dans le cadre de la navigation sur le site et de l'achat des formations en ligne.
              </p>
            </li>

            {/* Article 2 */}
            <li className="pl-4">
              <h2 className="text-xl font-bold text-primary mb-3">Accès au site</h2>
              <ul className="space-y-3 text-gray-700 mt-3">
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  L'accès au site Forma school est libre et gratuit pour tout utilisateur disposant d'un accès Internet. Cependant, certaines parties du site et certaines formations sont accessibles uniquement aux utilisateurs ayant créé un compte.
                </li>
              </ul>
            </li>

            {/* Article 3 */}
            <li className="pl-4">
              <h2 className="text-xl font-bold text-primary mb-3">Matériaux soumis</h2>
              <div className="bg-gray-50 rounded-lg p-6 mt-3">
                <p className="text-gray-700 mb-6">
                  « Matériaux Soumis » désigne tout matériel, texte, photographies, vidéos, informations ou autres données fournis et/ou téléchargés par vous sur les Services.
                </p>

                <div className="space-y-6">
                  {/* Section 3.1 */}
                  <div>
                    <h3 className="font-semibold text-gray-800">3.1 Matériaux soumis</h3>
                    <p className="text-gray-700 mt-2">
                      Vous êtes seul responsable des Matériaux Soumis. La Société ne sera pas responsable de tout ou partie des Matériaux Soumis et se réserve le droit, à sa seule discrétion, de supprimer ou de modifier tout Matériau Soumis sans préavis ni explication. RIEN DANS CES CONDITIONS N'OBLIGE LA SOCIÉTÉ À AFFICHER VOS MATÉRIAUX SOUMIS OU À LES UTILISER DE QUELQUE MANIÈRE QUE CE SOIT. Veuillez noter que tout Matériau Soumis sera accessible au public et pourra être promu et transféré par la Société, à sa seule discrétion, il est donc conseillé de ne pas inclure dans ces Matériaux tout contenu ou information que vous souhaitez garder privé. La Société ne fournit pas de services de sauvegarde ou d'archivage, vous êtes seul responsable de la conservation de copies de sauvegarde de vos Matériaux Soumis.
                    </p>
                  </div>

                  {/* Section 3.2 */}
                  <div>
                    <h3 className="font-semibold text-gray-800">3.2 Licence sur les matériaux soumis</h3>
                    <p className="text-gray-700 mt-2">
                      Vous accordez par la présente à la Société une licence mondiale, irrévocable, perpétuelle, gratuite de droits d'auteur pour utiliser, héberger, stocker, afficher, reproduire, modifier, adapter, éditer, publier et distribuer vos Matériaux Soumis et exploiter pleinement vos Matériaux Soumis pour la fourniture, la maintenance et l'amélioration des Services.
                    </p>
                  </div>

                  {/* Section 3.3 */}
                  <div>
                    <h3 className="font-semibold text-gray-800">3.3 Déclarations et garanties</h3>
                    <p className="text-gray-700 mt-2">
                      Vous déclarez et garantissez à la Société que vos Matériaux Soumis :
                    </p>
                    <ol className="list-decimal list-outside ml-5 mt-3 space-y-2">
                      <li className="text-gray-700">
                        sont et seront conformes à toutes les lois, règles et réglementations applicables, aux Conditions et ne portent pas et ne porteront pas atteinte aux droits de tout tiers, y compris les droits de propriété intellectuelle et le droit à la vie privée,
                      </li>
                      <li className="text-gray-700">
                        ne contiennent pas et ne contiendront pas de contenu menaçant, offensant, raciste, haineux, violent, obscène, diffamatoire ou autrement inapproprié ou de contenu commercial,
                      </li>
                      <li className="text-gray-700">
                        sont et seront exempts de toute restriction, droit de tiers, obligation de paiement et/ou redevance (y compris, sans limitation, à toute société de gestion collective).
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>

            {/* Article 4 */}
            <li className="pl-4">
              <h2 className="text-xl font-bold text-primary mb-3">Inscriptions et comptes utilisateurs</h2>
              <p className="text-gray-700">
                L'utilisateur souhaitant accéder aux formations doit créer un compte en fournissant des informations exactes. Il est responsable de la confidentialité de ses identifiants de connexion et doit signaler immédiatement toute utilisation frauduleuse de son compte.
              </p>
            </li>

            {/* Article 5 */}
            <li className="pl-4">
              <h2 className="text-xl font-bold text-primary mb-3">Tarifs</h2>
              <p className="text-gray-700">
                Les prix des formations sont affichés en euros et incluent toutes taxes applicables. Forma school se réserve le droit de modifier ses prix à tout moment, mais les formations déjà achetées restent au prix convenu lors de l'achat.
              </p>
            </li>

            {/* Article 6 */}
            <li className="pl-4">
              <h2 className="text-xl font-bold text-primary mb-3">Responsabilités</h2>
              <ol className="list-decimal list-outside ml-5 mt-3 space-y-3">
                <li className="text-gray-700">
                  Forma school met tout en œuvre pour assurer un accès permanent au site, mais ne garantit pas l'absence d'interruptions temporaires.
                </li>
                <li className="text-gray-700">
                  L'utilisateur est responsable de son matériel et de sa connexion Internet.
                </li>
                <li className="text-gray-700">
                  Forma school ne pourra être tenu responsable d'une mauvaise application des formations par l'utilisateur.
                </li>
              </ol>
            </li>

            {/* Article 7 */}
            <li className="pl-4">
              <h2 className="text-xl font-bold text-primary mb-3">Propriété intellectuelle</h2>
              <p className="text-gray-700">
                Les formations, contenus pédagogiques et supports mis à disposition sont protégés par le droit d'auteur. Toute reproduction ou diffusion non autorisée est interdite.
              </p>
            </li>

            {/* Article 8 */}
            <li className="pl-4">
              <h2 className="text-xl font-bold text-primary mb-3">Données personnelles</h2>
              <p className="text-gray-700">
                Les informations personnelles des utilisateurs sont collectées dans le cadre de la gestion des comptes et des commandes, conformément à notre Politique de Confidentialité.
              </p>
            </li>

            {/* Article 9 */}
            <li className="pl-4">
              <h2 className="text-xl font-bold text-primary mb-3">Résiliation et suppression de compte</h2>
              <p className="text-gray-700">
                Forma school se réserve le droit de suspendre ou de supprimer un compte en cas de non-respect des CGU/CGV ou de fraude.
              </p>
            </li>
          </ol>

          {/* Contact */}
          <div className="bg-blue-50 rounded-lg p-6 mt-10 border border-blue-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Questions ?</h2>
            <p className="text-gray-700">
              Si vous avez des questions supplémentaires ou avez besoin de plus de précisions, veuillez nous contacter en envoyant un e-mail à {' '}
              <a href="mailto:contact@formaschool.fr" className="text-primary font-medium hover:underline">
                contact@formaschool.fr
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
"use client";

const Hero = () => {
  return (
    <main className="container mx-auto px-4 py-8 md:pt-24 flex flex-col justify-start items-center  min-h-screen ">
      <h1 className="lg:text-5xl text-4xl max-w-2xl font-bold text-center mb-8">
        A new home for readers and writers
      </h1>

      <div className="max-w-lg mx-auto bg-white mt-6 p-6 rounded-md shadow-xl ring-2 ring-purple-300">
        <div className="text-center mb-4">
          <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm">
            Subscribe to our newsletter
          </span>
        </div>

        <form className="pt-6">
          <div className="flex justify-center gap-3">
            <div className="mb-4 ">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="name"
                id="name"
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-600"
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="name"
                id="name"
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-600"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-600"
            />
          </div>
        </form>

        <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium">
          Submit
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          J'ai déjà fait ce test d'éligibilité →
        </p>
      </div>
      {/* 
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div>
          <h3 className="font-bold mb-2">Simple et intuitif</h3>
          <p className="text-gray-600">
            Déposez votre dossier en 10 minutes et une réponse sous 24 heures.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Sécurisé</h3>
          <p className="text-gray-600">
            Vos données sont cryptées et ne sont jamais partagées.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Sans engagement</h3>
          <p className="text-gray-600">
            Aucune obligation avant que votre contrat ne soit signé.
          </p>
        </div>
      </div> */}
    </main>
  );
};

export default Hero;

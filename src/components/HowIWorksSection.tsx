const steps = [
  {
    number: "01",
    title: "Placez Sonora Zen sous votre oreiller",
    description:
      "Son format discret s’intègre facilement à votre routine du soir, sans gêner votre confort.",
  },
  {
    number: "02",
    title: "Lancez votre ambiance sonore",
    description:
      "Démarrez votre séance en quelques secondes pour créer une atmosphère apaisante au moment du coucher.",
  },
  {
    number: "03",
    title: "Laissez-vous guider vers le sommeil",
    description:
      "Profitez d’un moment de calme pour relâcher la pression et favoriser un endormissement plus serein.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="comment-ca-marche" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#26A69A] mb-3">
            Comment ça marche
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Une routine simple pour des nuits plus apaisées
          </h2>

          <p className="text-base md:text-lg text-slate-600">
            Sonora Zen a été pensé pour être facile à utiliser, confortable et
            rassurant dès la première soirée.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#26A69A] text-white text-sm font-bold">
                {step.number}
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm md:text-base text-slate-600">
            Sans écouteurs. Sans installation compliquée. Juste un rituel plus
            doux au moment du coucher.
          </p>
        </div>
      </div>
    </section>const steps = [
  {
    number: "01",
    title: "Placez Sonora Zen sous votre oreiller",
    description:
      "Son format discret s’intègre facilement à votre routine du soir, sans gêner votre confort.",
  },
  {
    number: "02",
    title: "Lancez votre ambiance sonore",
    description:
      "Démarrez votre séance en quelques secondes pour créer une atmosphère apaisante au moment du coucher.",
  },
  {
    number: "03",
    title: "Laissez-vous guider vers le sommeil",
    description:
      "Profitez d’un moment de calme pour relâcher la pression et favoriser un endormissement plus serein.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="comment-ca-marche" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#26A69A] mb-3">
            Comment ça marche
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Une routine simple pour des nuits plus apaisées
          </h2>

          <p className="text-base md:text-lg text-slate-600">
            Sonora Zen a été pensé pour être facile à utiliser, confortable et
            rassurant dès la première soirée.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#26A69A] text-white text-sm font-bold">
                {step.number}
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm md:text-base text-slate-600">
            Sans écouteurs. Sans installation compliquée. Juste un rituel plus
            doux au moment du coucher.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 

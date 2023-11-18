import LinkButton from "../components/ui/LinkButton";

const WizardIntro = () => {
  return (
    <main className="min-h-screen p-8 flex flex-col">
      <h1>Welcome to the wizard game!!!</h1>
      <section className="max-w-2xl m-auto">
        <h2>Instructions</h2>
        <p className="text-center mb-4 text-lg">
          Hi I am a math wizard. I lost my spell book and I need your help to
          find it.
        </p>
        <p className="text-center mb-4 text-lg">
          You have 5 lives. If you get a question wrong, you lose a life.
        </p>
        <p className="text-center mb-4 text-lg">
          Every 10th question is a Boss Fight question and the math problem is
          more difficult. If you get the Boss Fight question correct, you get 5
          points and you gain a life.
        </p>

        <p className="text-center mb-4 text-lg">
          Solve 50 questions without running out of lives to help the wizard
          find his spell book!!!
        </p>

        <p className="text-center mb-4 text-2xl">Good Luck!!!!</p>
      </section>
      <div className="flex justify-center mt-10">
        <LinkButton text="Play" href="/wizard/game" />
      </div>
    </main>
  );
};

export default WizardIntro;

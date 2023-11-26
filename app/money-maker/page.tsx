import LinkButton from "../components/ui/LinkButton";

const MoneyMakerIntro = () => {
  return (
    <main className="min-h-screen p-8 flex flex-col">
      <h1>Money Maker Game</h1>
      <section className="max-w-2xl m-auto">
        <p>
          Your goal is to try to make $10,000. You gain money by answering math
          problems.
        </p>
        <div className="flex justify-center mt-20">
          <LinkButton text="Start" href="/money-maker/game" />
        </div>
      </section>
    </main>
  );
};

export default MoneyMakerIntro;

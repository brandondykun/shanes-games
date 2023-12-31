import Image from "next/image";
import Link from "next/link";
import Button from "./components/ui/Button";
import LinkButton from "./components/ui/LinkButton";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-24">
      <h1 className="text-center text-3xl">Shane&rsquo;s Games</h1>
      <div className="flex flex-row gap-4 flex-wrap">
        <LinkButton text="Wizard Game" href="/wizard" />
        <LinkButton text="Money Maker" href="/money-maker" />
      </div>
    </main>
  );
}

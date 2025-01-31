"use client";

import CharacterBuilder from "./CharacterBuilder/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 py-12">
      <CharacterBuilder />
    </main>
  );
}

import CompanionCard from "@/components/companion-card";
import CompanionsList from "@/components/companions-list";
import ActionCallBanner from "@/components/ui/action-call-banner";
import { recentSessions } from "@/lib/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id="1"
          name="Companion 1"
          topic="This is the first companion."
          subject="weapon"
          color="#ffb6c1"
        />

        <CompanionCard
          id="2"
          name="Companion 2"
          topic="This is the second companion."
          subject="character"
          color="#87ceeb"
        />

        <CompanionCard
          id="3"
          name="Companion 3"
          topic="This is the third companion."
          subject="character"
          color="#96dab7"
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recent Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />

        <ActionCallBanner />
      </section>
    </main>
  );
};

export default Page;

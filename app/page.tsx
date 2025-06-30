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
          title="Companion 1"
          content="This is the first companion."
          tags={["weapon"]}
          color="#ffb6c1"
        />

        <CompanionCard
          id="2"
          title="Companion 2"
          content="This is the second companion."
          tags={["character"]}
          color="#87ceeb"
        />

        <CompanionCard
          id="3"
          title="Companion 3"
          content="This is the third companion."
          tags={["character", "new"]}
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

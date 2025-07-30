import CompanionCard from "@/components/companion-card";
import CompanionsList from "@/components/companions-list";
import ActionCallBanner from "@/components/ui/action-call-banner";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import React from "react";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentCompanionSessions = await getRecentSessions();

  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            id={companion.id}
            name={companion.name}
            topic={companion.topic}
            subject={companion.subject}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recent Sessions"
          companions={recentCompanionSessions}
          classNames="w-2/3 max-lg:w-full"
        />

        <ActionCallBanner />
      </section>
    </main>
  );
};

export default Page;

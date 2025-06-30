import Image from "next/image";
import Link from "next/link";
import React from "react";

const ActionCallBanner = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way</div>

      <h2 className="text-3xl font-bold">
        Unlock your potential with our courses
      </h2>

      <p>
        Join our community of learners and take the first step towards your
        future and success today.
        <br />
        Start your journey now!
      </p>

      <Image
        src="/images/cta.svg"
        alt="Call to Action Illustration"
        width={360}
        height={240}
      />

      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="Plus Icon" width={12} height={12} />

        <Link href="/companions/new">
          <p>Build a New Companion</p>
        </Link>
      </button>
    </section>
  );
};

export default ActionCallBanner;

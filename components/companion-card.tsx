import Link from "next/link";
import React from "react";

interface Props {
  id: string;
  name: string;
  topic: string;
  subject: string;
  color: string;
}

const CompanionCard = ({ id, name, topic, subject, color }: Props) => {
  return (
    <article
      id={id}
      className="companion-card"
      style={{ backgroundColor: color }}
    >
      <div className="subject-badge flex self-start">{subject}</div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>

      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-black w-full justify-center">
          View Details
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;

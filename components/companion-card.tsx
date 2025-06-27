import Link from "next/link";
import React from "react";

interface Props {
  id: string;
  title: string;
  content: string;
  tags: string[];
  color: string;
}

const CompanionCard = ({ id, title, content, tags, color }: Props) => {
  return (
    <article
      id={id}
      className="companion-card"
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center gap-2">
        {tags.map((tag) => (
          <div key={tag} className="subject-badge">
            {tag}
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm">{content}</p>

      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-black w-full justify-center">
          View Details
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;

"use client";

import Image from "next/image";
import Link from "next/link";

interface CertificationCardProps {
  cert: {
    id: string;
    title: string;
    description: string;
    image: string;        // Preview image
    category: string;
    tags: string[];
    certificate: string;  // Path to certificate file
  };
}

const CertificationCard: React.FC<{ cert: CertificationCardProps["cert"] }> = ({ cert }) => {
  const { title, description, image, tags, certificate } = cert;

  return (
    <div className="rounded-xl border bg-white dark:bg-zinc-900 p-4 shadow-sm hover:shadow-md transition">
      {/* Preview Course Image */}
      <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="rounded-md"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold">{title}</h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mt-1 mb-3">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-muted text-foreground px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* View Certificate Button */}
      <Link
        href={certificate}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <button className="text-sm px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition w-full">
          View Certificate
        </button>
      </Link>
    </div>
  );
};

export default CertificationCard;

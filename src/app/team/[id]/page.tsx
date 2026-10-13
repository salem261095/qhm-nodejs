import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { teamMembers } from "@/data/team";
import MemberProfilePage from "@/components/team/MemberProfilePage";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    id: member.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    return {
      title: "Lawyer Profile Not Found | QHM Law Firm",
    };
  }

  const excerpt =
    member.bio[0] ||
    `${member.name} is ${member.role} at Qaisar Hamed Metawea Law Firm (QHM).`;

  return {
    title: `${member.name} – ${member.role}`,
    description: excerpt,
    alternates: {
      canonical: `/team/${member.id}`,
    },
    openGraph: {
      type: "profile",
      title: `${member.name} – ${member.role} | QHM Law Firm`,
      description: excerpt,
      url: `/team/${member.id}`,
      images: [
        {
          url: member.image,
          width: 800,
          height: 1000,
          alt: member.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${member.name} – ${member.role} | QHM Law Firm`,
      description: excerpt,
      images: [member.image],
    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const index = teamMembers.findIndex((m) => m.id === id);

  if (index === -1) {
    notFound();
  }

  const member = teamMembers[index];
  const prev = index > 0 ? teamMembers[index - 1] : undefined;
  const next = index < teamMembers.length - 1 ? teamMembers[index + 1] : undefined;

  return (
    <MemberProfilePage
      member={member}
      adjacent={{ prev, next }}
    />
  );
}

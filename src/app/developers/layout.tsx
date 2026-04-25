import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Developer Portal',
  description: 'Access PDS developer resources, seminars, engineering blogs, and future API documentations. Build with the PDS ecosystem.',
};

export default function DevelopersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the mission at PDS. We are looking for visionary engineers, designers, and thinkers to build the future of AI and enterprise software.',
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

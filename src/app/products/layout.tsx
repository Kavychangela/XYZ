import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flagship Products',
  description: 'Explore the PDS ecosystem of flagship products including Edict, Pal Property, Paintlib, and more. Innovative solutions for enterprise and real estate.',
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

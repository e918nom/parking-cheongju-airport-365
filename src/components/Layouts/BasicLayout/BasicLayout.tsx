import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

type Props = {
  children: React.ReactNode;
};

export default function BasicLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="bg-base-100">{children}</main>
      <Contact />
      <Footer />
    </>
  );
}

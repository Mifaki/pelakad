import Footer from '~/shared/container/Footer/Footer';
import TopNavbar from '~/shared/container/navigation/TopNavbar';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <TopNavbar />
      {children}
      <Footer />
    </main>
  );
}

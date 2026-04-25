import Footer from '../components/footer'
import UserHeader from '../components/userHeader'

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 認証チェックはここで実装予定
  
  return (
    <>
    <UserHeader />
      {children}
    <Footer />
    </>
  );
}

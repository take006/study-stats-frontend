import Docs from '../../components/menuDocs';
import SideMenu from '../../components/sideMenu';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <SideMenu />
      <div className="flex-1 bg-gray-50">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-6">ダッシュボード</h1>
            <Docs />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}


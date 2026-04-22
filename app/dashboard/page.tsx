// src/app/dashboard/page.tsx
export default function DashboardPage() {
  const studyRecords = [
    {
      id: 1,
      category: '数学',
      hours: 1.5,
      projectTags: ['定期テスト対策'],
    },
    {
      id: 2,
      category: '英語',
      hours: 1.0,
      projectTags: ['TOEIC'],
    },
    {
      id: 3,
      category: 'プログラミング',
      hours: 2.0,
      projectTags: ['ポートフォリオ制作', 'Web開発基礎'],
    },
    {
      id: 4,
      category: '数学',
      hours: 1.5,
      projectTags: ['定期テスト対策'],
    },
    {
      id: 5,
      category: '英語',
      hours: 1.0,
      projectTags: ['TOEIC', '英語基礎固め'],
    },
  ];

  const categoryTotals = studyRecords.reduce<Record<string, number>>((acc, record) => {
    acc[record.category] = (acc[record.category] ?? 0) + record.hours;
    return acc;
  }, {});

  const projectTotals = studyRecords.reduce<Record<string, number>>((acc, record) => {
    record.projectTags.forEach((tag) => {
      acc[tag] = (acc[tag] ?? 0) + record.hours;
    });
    return acc;
  }, {});

  const totalHours = studyRecords.reduce((sum, record) => sum + record.hours, 0);
  const studyDays = 3;
  const averageHours = totalHours / studyDays;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">ダッシュボード</h2>
      <p className="text-gray-600 mb-4">期間を選択して学習統計を表示します。</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500 mb-1">総学習時間</div>
          <div className="text-2xl font-bold">{totalHours}時間</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500 mb-1">学習日数</div>
          <div className="text-2xl font-bold">{studyDays}日</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500 mb-1">平均学習時間</div>
          <div className="text-2xl font-bold">{averageHours.toFixed(1)}時間</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">カテゴリ別 学習時間</h3>
          <div className="space-y-2">
            {Object.entries(categoryTotals).map(([category, total]) => (
              <div key={category} className="flex items-center justify-between text-sm">
                <span className="text-gray-700">{category}</span>
                <span className="font-semibold text-gray-800">{total}時間</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">プロジェクト別 学習時間</h3>
          <div className="space-y-2">
            {Object.entries(projectTotals).map(([project, total]) => (
              <div key={project} className="flex items-center justify-between text-sm">
                <span className="text-gray-700">{project}</span>
                <span className="font-semibold text-gray-800">{total}時間</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// src/app/dashboard/records/page.tsx
export default function RecordsPage() {
  // 仮データ
  const studyRecords = [
    {
      id: 1,
      dateTime: '2026年2月16日 09時30分',
      category: '数学',
      hours: 1.5,
      content: '微分積分の演習問題を解いた',
      projectTags: ['定期テスト対策'],
    },
    {
      id: 2,
      dateTime: '2026年2月16日 11時00分',
      category: '英語',
      hours: 1.0,
      content: 'リーディング練習',
      projectTags: ['TOEIC'],
    },
    {
      id: 3,
      dateTime: '2026年2月15日 14時15分',
      category: 'プログラミング',
      hours: 2.0,
      content: 'React Hooksの実装',
      projectTags: ['ポートフォリオ制作', 'Web開発基礎'],
    },
    {
      id: 4,
      dateTime: '2026年2月15日 16時45分',
      category: '数学',
      hours: 1.5,
      content: '確率論の章を読んだ',
      projectTags: ['定期テスト対策'],
    },
    {
      id: 5,
      dateTime: '2026年2月14日 08時20分',
      category: '英語',
      hours: 1.0,
      content: 'リスニング教材で学習',
      projectTags: ['TOEIC', '英語基礎固め'],
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">学習記録一覧</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {studyRecords.map((record) => (
          <div key={record.id} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">日付</p>
                <p className="text-gray-800 font-medium">{record.dateTime}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">カテゴリ</p>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {record.category}
                </span>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">学習時間</p>
                <p className="text-gray-800 font-medium">{record.hours}時間</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">プロジェクト</p>
                <div className="flex flex-wrap gap-2">
                  {record.projectTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor={`content-${record.id}`} className="text-sm font-semibold text-gray-600 mb-1 block">
                  学習内容
                </label>
                <textarea
                  id={`content-${record.id}`}
                  defaultValue={record.content}
                  className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 text-sm h-24 resize-y"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

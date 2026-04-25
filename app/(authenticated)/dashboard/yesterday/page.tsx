// src/app/dashboard/yesterday/page.tsx
export default function YesterdayPage() {
  // 仮データ
  const yesterdayData = {
    date: '2026年2月15日',
    totalHours: 4.0,
    subjects: [
      { name: '数学', hours: 2.0, color: 'bg-blue-100' },
      { name: '英語', hours: 1.5, color: 'bg-green-100' },
      { name: 'プログラミング', hours: 0.5, color: 'bg-purple-100' },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">昨日の学習記録</h2>
      <p className="text-gray-500 mb-6">{yesterdayData.date}</p>

      <div className="mb-8">
        <div className="bg-gray-50 p-6 rounded-lg inline-block">
          <div className="text-sm text-gray-500 mb-1">昨日の学習時間</div>
          <div className="text-4xl font-bold">{yesterdayData.totalHours}時間</div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4">科目別学習時間</h3>
      <div className="space-y-3">
        {yesterdayData.subjects.map((subject) => (
          <div key={subject.name} className={`${subject.color} p-4 rounded-lg flex justify-between items-center`}>
            <span className="font-medium">{subject.name}</span>
            <span className="text-lg font-bold">{subject.hours}時間</span>
          </div>
        ))}
      </div>
    </div>
  );
}

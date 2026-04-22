// src/app/dashboard/weekly/page.tsx
export default function WeeklyPage() {
  // 仮データ
  const weeklyData = {
    period: '2月10日 - 2月16日',
    totalHours: 21.5,
    averageHours: 3.1,
    studyDays: 7,
    subjects: [
      { name: '数学', hours: 9.5, color: 'bg-blue-100' },
      { name: '英語', hours: 7.0, color: 'bg-green-100' },
      { name: 'プログラミング', hours: 5.0, color: 'bg-purple-100' },
    ],
    dailyStats: [
      { day: '月', hours: 3.0 },
      { day: '火', hours: 3.5 },
      { day: '水', hours: 2.5 },
      { day: '木', hours: 4.0 },
      { day: '金', hours: 3.0 },
      { day: '土', hours: 2.0 },
      { day: '日', hours: 3.5 },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">今週の学習記録</h2>
      <p className="text-gray-500 mb-6">{weeklyData.period}</p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500 mb-1">総学習時間</div>
          <div className="text-3xl font-bold">{weeklyData.totalHours}時間</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500 mb-1">平均学習時間</div>
          <div className="text-3xl font-bold">{weeklyData.averageHours}時間</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500 mb-1">学習日数</div>
          <div className="text-3xl font-bold">{weeklyData.studyDays}日</div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4">日別学習時間</h3>
      <div className="flex gap-2 mb-8">
        {weeklyData.dailyStats.map((day) => (
          <div key={day.day} className="flex-1">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-32 flex flex-col justify-end">
              <div 
                className="bg-black rounded-t-lg transition-all"
                style={{ height: `${(day.hours / 4) * 100}%` }}
              ></div>
            </div>
            <div className="text-center mt-2 text-sm text-gray-600">{day.day}</div>
            <div className="text-center text-xs text-gray-500">{day.hours}h</div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-4">科目別学習時間</h3>
      <div className="space-y-3">
        {weeklyData.subjects.map((subject) => (
          <div key={subject.name} className={`${subject.color} p-4 rounded-lg flex justify-between items-center`}>
            <span className="font-medium">{subject.name}</span>
            <span className="text-lg font-bold">{subject.hours}時間</span>
          </div>
        ))}
      </div>
    </div>
  );
}

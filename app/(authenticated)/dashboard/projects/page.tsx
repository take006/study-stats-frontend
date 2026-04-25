// src/app/dashboard/projects/page.tsx
export default function ProjectsPage() {
  // 仮データ
  const projects = [
    {
      id: 1,
      name: 'フロントエンド開発基礎',
      description: 'React、TypeScript、Tailwind CSSを学習するプロジェクト',
      progress: 65,
      totalHours: 25,
      completedHours: 16.25,
      status: '進行中',
    },
    {
      id: 2,
      name: '数学の基礎',
      description: '微分積分と線形代数を習得するプロジェクト',
      progress: 40,
      totalHours: 50,
      completedHours: 20,
      status: '進行中',
    },
    {
      id: 3,
      name: '英語スピーキング',
      description: '日常会話レベルの英語習得',
      progress: 50,
      totalHours: 30,
      completedHours: 15,
      status: '進行中',
    },
    {
      id: 4,
      name: 'Next.js マスター',
      description: 'Next.jsの高度な機能を習得',
      progress: 30,
      totalHours: 40,
      completedHours: 12,
      status: '未開始',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">プロジェクト</h2>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full ${
                  project.status === '進行中'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-gray-600 mb-4">{project.description}</p>

            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>進捗状況</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">学習時間</span>
                <div className="font-semibold text-gray-800">
                  {project.completedHours} / {project.totalHours}時間
                </div>
              </div>
              <div>
                <span className="text-gray-500">残り時間</span>
                <div className="font-semibold text-gray-800">
                  {(project.totalHours - project.completedHours).toFixed(2)}時間
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// src/app/page.tsx
import Link from 'next/link'; // Link コンポーネントをインポート
import Header from './components/header';

export default function Home() {
  return (
    <>
      <Header />
      <main>
				<section className="relative overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white"></div>
					<div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
						<div className="grid gap-10 md:grid-cols-2 md:items-center">
							<div>
								<p className="inline-flex items-center rounded-full border border-sky-100 bg-white px-4 py-1 text-xs font-medium text-sky-600">Study-Stats / 学習の可視化</p>
								<h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
									学習記録を数値化して、
									<span className="text-sky-600">市場価値</span>と
									<span className="text-orange-500">戦闘力</span>を上げる
								</h1>
								<p className="mt-5 text-base text-slate-600 md:text-lg">
									時間とメモを残すだけで、学習履歴・スキルマップを自動で整理。
									「いつでも学習を始められる状態」を作ります。
								</p>
								<div className="mt-7 flex flex-wrap items-center gap-3">
										<Link href="/dashboard" className="rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-600">ダッシュボードへ</Link>
										<Link href="" className="rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-600">無料で試す</Link>
										<Link href="" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300">ログイン</Link>
								</div>
								<div className="mt-8 grid grid-cols-3 gap-4 text-xs text-slate-500">
									<div className="rounded-xl border border-slate-100 bg-white px-3 py-3">
										<p className="text-slate-900 font-semibold">学習時間</p>
										<p className="mt-1 text-sky-600">+18.2% / 月</p>
									</div>
									<div className="rounded-xl border border-slate-100 bg-white px-3 py-3">
										<p className="text-slate-900 font-semibold">継続日数</p>
										<p className="mt-1 text-orange-500">42 days</p>
									</div>
									<div className="rounded-xl border border-slate-100 bg-white px-3 py-3">
										<p className="text-slate-900 font-semibold">スキル領域</p>
										<p className="mt-1 text-slate-600">12 categories</p>
									</div>
								</div>
							</div>
							<div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
								<div className="flex items-center justify-between">
									<p className="text-sm font-semibold text-slate-800">Weekly Focus</p>
									<span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600">Last 7 days</span>
								</div>
								<div className="mt-5 grid grid-cols-7 gap-2">
									<div className="h-24 rounded-lg bg-sky-100"></div>
									<div className="h-32 rounded-lg bg-sky-200"></div>
									<div className="h-20 rounded-lg bg-sky-100"></div>
									<div className="h-36 rounded-lg bg-sky-300"></div>
									<div className="h-28 rounded-lg bg-sky-200"></div>
									<div className="h-16 rounded-lg bg-orange-100"></div>
									<div className="h-24 rounded-lg bg-orange-200"></div>
								</div>
								<div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4">
									<div className="flex items-center justify-between text-xs text-slate-500">
										<span>学習集中度</span>
										<span className="text-slate-700 font-semibold">82%</span>
									</div>
									<div className="mt-3 h-2 w-full rounded-full bg-white">
										<div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-sky-400 to-orange-400"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="features" className="py-16 md:py-20">
					<div className="mx-auto max-w-7xl px-6">
						<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
							<div>
								<p className="text-sm font-medium text-sky-600">FEATURES</p>
								<h2 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">データで学習を最適化</h2>
							</div>
							<p className="text-sm text-slate-500">シンプルな入力で、毎日の学びを「見える化」します。</p>
						</div>
						<div className="mt-10 grid gap-6 md:grid-cols-3">
							<div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
								<div className="h-10 w-10 rounded-xl bg-sky-100"></div>
								<h3 className="mt-4 text-base font-semibold text-slate-900">時間×メモで記録</h3>
								<p className="mt-2 text-sm text-slate-600">学習時間と内容をメモするだけでログ化。毎日の積み上げが一目で分かります。</p>
							</div>
							<div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
								<div className="h-10 w-10 rounded-xl bg-orange-100"></div>
								<h3 className="mt-4 text-base font-semibold text-slate-900">スキルマップ可視化</h3>
								<p className="mt-2 text-sm text-slate-600">カテゴリ別に学習の偏りを把握。強みと伸び代を数値で整理します。</p>
							</div>
							<div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
								<div className="h-10 w-10 rounded-xl bg-slate-100"></div>
								<h3 className="mt-4 text-base font-semibold text-slate-900">継続の仕組み化</h3>
								<p className="mt-2 text-sm text-slate-600">直近の学習履歴から次の学習へ。シームレスに再開できます。</p>
							</div>
						</div>
					</div>
				</section>

				<section id="visual" className="py-16 md:py-20 bg-slate-50">
					<div className="mx-auto max-w-7xl px-6">
						<div className="grid gap-10 md:grid-cols-2">
							<div>
								<p className="text-sm font-medium text-orange-500">VISUALIZE</p>
								<h2 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">データっぽく、でも分かりやすく</h2>
								<p className="mt-4 text-sm text-slate-600">チャートやカードで直感的に把握。数字が学習の手応えになります。</p>
								<ul className="mt-6 space-y-3 text-sm text-slate-600">
									<li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky-400"></span>学習時間のトレンド</li>
									<li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-orange-400"></span>カテゴリ別比率</li>
									<li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-slate-400"></span>継続日数の推移</li>
								</ul>
							</div>
							<div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
								<div className="flex items-center justify-between text-sm text-slate-500">
									<span>Skill Map</span>
									<span className="text-slate-700 font-semibold">Q1 2026</span>
								</div>
								<div className="mt-6 grid grid-cols-4 gap-3">
									<div className="h-20 rounded-2xl bg-sky-100"></div>
									<div className="h-20 rounded-2xl bg-sky-200"></div>
									<div className="h-20 rounded-2xl bg-orange-100"></div>
									<div className="h-20 rounded-2xl bg-slate-100"></div>
									<div className="h-20 rounded-2xl bg-slate-100"></div>
									<div className="h-20 rounded-2xl bg-sky-100"></div>
									<div className="h-20 rounded-2xl bg-orange-200"></div>
									<div className="h-20 rounded-2xl bg-sky-50"></div>
								</div>
								<div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4">
									<div className="flex items-center justify-between text-xs text-slate-500">
										<span>Market Value</span>
										<span className="text-slate-800 font-semibold">+12.4%</span>
									</div>
									<div className="mt-3 h-2 w-full rounded-full bg-white">
										<div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-sky-400 to-orange-400"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="flow" className="py-16 md:py-20">
					<div className="mx-auto max-w-7xl px-6">
						<div className="text-center">
							<p className="text-sm font-medium text-sky-600">HOW IT WORKS</p>
							<h2 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">3ステップで始める</h2>
						</div>
						<div className="mt-10 grid gap-6 md:grid-cols-3">
							<div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
								<p className="text-xs font-semibold text-slate-500">STEP 1</p>
								<h3 className="mt-3 text-base font-semibold text-slate-900">学習時間を記録</h3>
								<p className="mt-2 text-sm text-slate-600">日付・時間・カテゴリを入力するだけ。</p>
							</div>
							<div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
								<p className="text-xs font-semibold text-slate-500">STEP 2</p>
								<h3 className="mt-3 text-base font-semibold text-slate-900">メモで学びを整理</h3>
								<p className="mt-2 text-sm text-slate-600">短いメモでもOK。次回の学習がスムーズに。</p>
							</div>
							<div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
								<p className="text-xs font-semibold text-slate-500">STEP 3</p>
								<h3 className="mt-3 text-base font-semibold text-slate-900">データで成長確認</h3>
								<p className="mt-2 text-sm text-slate-600">チャートで成長を可視化。目標に近づく。</p>
							</div>
						</div>
					</div>
				</section>

				<section className="py-16 md:py-20 bg-gradient-to-r from-sky-50 via-white to-orange-50">
					<div className="mx-auto max-w-7xl px-6">
						<div className="rounded-3xl border border-slate-100 bg-white px-6 py-10 shadow-sm md:px-10 md:py-12">
							<div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
								<div>
									<h2 className="text-2xl font-semibold text-slate-900">今すぐ Study-Stats を始める</h2>
									<p className="mt-2 text-sm text-slate-600">学習の履歴を資産に。継続できる環境を作ろう。</p>
								</div>
									<Link href="/dashboard" className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-600">ダッシュボードへ</Link>
									<Link href="" className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-600">無料で登録</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
    </>
  );}
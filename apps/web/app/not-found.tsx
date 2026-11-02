import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-semibold text-neutral-900">404</h1>
      <p className="mt-4 text-neutral-600">这个页面不存在。</p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
      >
        返回首页
      </Link>
    </main>
  )
}

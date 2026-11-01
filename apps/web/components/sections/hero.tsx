import Link from 'next/link'
import { profile } from '@/data/profile'

export function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-4 pt-24 pb-16 sm:pt-32 sm:pb-24">
      <p className="mb-3 text-sm text-neutral-500">
        {profile.location} · {profile.lookingFor}
      </p>

      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
        {profile.name}
        <span className="mt-2 block text-lg font-normal text-neutral-500 sm:text-2xl">
          {profile.title}
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600">
        {profile.subtitle}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="#projects"
          className="rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
        >
          看项目
        </Link>
        <Link
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-900"
        >
          GitHub
        </Link>
        <Link
          href={profile.resumeUrl}
          className="rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-900"
        >
          下载简历
        </Link>
      </div>
    </section>
  )
}

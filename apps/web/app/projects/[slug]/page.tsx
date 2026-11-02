import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import { projects } from '@/data/projects'
import { getMDXSource } from '@/lib/mdx'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <Suspense fallback={<ProjectSkeleton />}>
        <ProjectContent params={params} />
      </Suspense>
    </main>
  )
}

async function ProjectContent({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  const source = await getMDXSource(slug)

  if (!source) notFound()

  return (
    <>
      <header className="mb-12">
        <p className="text-sm text-neutral-500">{project.period}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-1 text-sm text-neutral-500">{project.role}</p>
        <p className="mt-4 text-base text-neutral-600">{project.summary}</p>
      </header>

      <article className="prose prose-neutral max-w-none">
        <MDXRemote source={source} />
      </article>
    </>
  )
}

function ProjectSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-4 w-24 rounded bg-neutral-200" />
      <div className="h-8 w-2/3 rounded bg-neutral-200" />
      <div className="h-4 w-1/3 rounded bg-neutral-200" />
      <div className="mt-8 space-y-3">
        <div className="h-4 w-full rounded bg-neutral-200" />
        <div className="h-4 w-5/6 rounded bg-neutral-200" />
        <div className="h-4 w-4/6 rounded bg-neutral-200" />
      </div>
    </div>
  )
}

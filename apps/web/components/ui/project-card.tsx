import Link from 'next/link'
import type { Project } from '@/data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-xl border border-neutral-200 p-6 transition-colors hover:border-neutral-900"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-semibold text-neutral-900 group-hover:underline">
          {project.title}
        </h3>
        <span className="shrink-0 text-xs text-neutral-500">
          {project.period}
        </span>
      </div>

      <p className="mt-1 text-sm text-neutral-500">{project.role}</p>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
        {project.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-neutral-100 px-2 py-1 text-xs text-neutral-600"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  )
}

import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ui/project-card'

export function Projects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
        项目
      </h2>
      <p className="mt-2 text-sm text-neutral-500">
        独立全栈项目与工作经历中的核心交付。
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}

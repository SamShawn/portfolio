import { experiences } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
        工作经历
      </h2>
      <p className="mt-2 text-sm text-neutral-500">
        从用户级产品到机构级终端，再到独立全栈交付。
      </p>

      <ol className="mt-8 space-y-10">
        {experiences.map((exp) => (
          <li key={`${exp.company}-${exp.period}`} className="relative pl-6">
            <span
              className="absolute top-2 left-0 h-2 w-2 -translate-x-[3px] rounded-full bg-neutral-900"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold text-neutral-900">
                {exp.company}
              </h3>
              <span className="text-xs text-neutral-500">{exp.period}</span>
            </div>
            <p className="mt-0.5 text-sm text-neutral-500">{exp.role}</p>
            <p className="mt-2 text-sm text-neutral-600">{exp.product}</p>

            <ul className="mt-3 space-y-1.5">
              {exp.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-2 text-sm leading-relaxed text-neutral-600"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}

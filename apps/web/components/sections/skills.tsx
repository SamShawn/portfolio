import { skillGroups } from '@/data/profile'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
        技能栈
      </h2>
      <p className="mt-2 text-sm text-neutral-500">
        按实际使用深度分层，不列进度条。
      </p>

      <div className="mt-8 space-y-6">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm font-medium text-neutral-900">
              {group.label}
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-neutral-200 px-2.5 py-1 text-sm text-neutral-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import Link from 'next/link'
import { profile } from '@/data/profile'

const links = [
  { label: '邮箱', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'GitHub', value: 'github.com/SamShawn', href: profile.github },
  {
    label: '手机',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/-/g, '')}`,
  },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
        联系
      </h2>
      <p className="mt-2 text-sm text-neutral-500">
        {profile.lookingFor}，欢迎邮件或 GitHub 联系。
      </p>

      <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {links.map((link) => (
          <div key={link.label}>
            <dt className="text-xs text-neutral-500">{link.label}</dt>
            <dd className="mt-1">
              <Link
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  link.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="text-sm text-neutral-900 underline-offset-4 hover:underline"
              >
                {link.value}
              </Link>
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-8">
        <Link
          href={profile.resumeUrl}
          className="inline-block rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
        >
          下载简历 PDF
        </Link>
      </div>
    </section>
  )
}

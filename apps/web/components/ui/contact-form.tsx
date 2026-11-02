'use client'

import { useState } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value.trim(),
      email: (
        form.elements.namedItem('email') as HTMLInputElement
      ).value.trim(),
      message: (
        form.elements.namedItem('message') as HTMLTextAreaElement
      ).value.trim(),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || '发送失败，请稍后重试。')
      }

      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error ? err.message : '发送失败，请稍后重试。'
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-neutral-200 p-6 text-sm text-neutral-700">
        消息已发送，我会尽快回复。
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-xs text-neutral-500">
            姓名
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={50}
            className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-900"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs text-neutral-500">
            邮箱
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={100}
            className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-900"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs text-neutral-500">
          留言
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          maxLength={1000}
          className="mt-1 w-full resize-y rounded-lg border border-neutral-300 px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-900"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 disabled:opacity-50"
      >
        {status === 'submitting' ? '发送中…' : '发送消息'}
      </button>
    </form>
  )
}

'use client'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <div className="font-mono text-xl font-bold text-zinc-900 dark:text-white">
            <span className="text-brand-500 dark:text-brand-400">▸</span> KIMM 실습 안내
          </div>

          {/* Description */}
          <p className="max-w-md text-sm text-zinc-500">
            한국기계연구원 Claude Code 활용 교육 참가자용 실습 안내입니다.
            공개 자료와 가상 자료만 씁니다. 기관 자료는 넣지 않습니다.
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400 dark:text-zinc-500">
            <a
              href="https://code.claude.com/docs/ko/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-900 dark:hover:text-white"
            >
              공식 문서
            </a>
            <a
              href="https://github.com/axwith/kimm-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-900 dark:hover:text-white"
            >
              실습 폴더
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-zinc-300 dark:text-zinc-700">
            © {year} AXWITH · 한국기계연구원 Claude Code 활용 교육
          </p>
        </div>
      </div>
    </footer>
  )
}

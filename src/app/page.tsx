import { Suspense } from 'react'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import {
  getSectionsConfig,
  getSectionMetas,
  getAllSectionMarkdowns,
} from '@/lib/content'
import { PageClient } from '@/components/PageClient'
import { SectionBlock } from '@/components/SectionBlock'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: '한국기계연구원 Claude Code 활용 교육 — 실습 안내',
  description:
    '한국기계연구원 Claude Code 활용 교육(2026-10-15) 참가자용 실습 안내. 실습 폴더, 단계별 요청문, 링크, 강의 자료.',
}

export default function Page() {
  const config = getSectionsConfig()
  const sections = getSectionMetas()
  const sectionContents = getAllSectionMarkdowns()

  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <PageClient sections={sections} tiers={config.tiers}>
        {sectionContents.map(({ meta, markdown, frontmatter }) => (
          <SectionBlock
            key={meta.id}
            id={meta.id}
            order={meta.order}
            tier={meta.tier}
            title={meta.title}
            subtitle={meta.subtitle}
            part={meta.part}
            clip={meta.clip}
            badge={meta.badge}
            type={meta.type}
            frontmatter={frontmatter}
          >
            <MDXRemote
              source={markdown}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              components={{ pre: CodeBlock as any }}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </SectionBlock>
        ))}
      </PageClient>
    </Suspense>
  )
}

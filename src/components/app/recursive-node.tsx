import { ChevronRight, FileIcon, Folder, FolderOpen } from 'lucide-react'
import { useState } from 'react'

import type { Node } from '@/app'
import { cn } from '@/lib/utils'

export const NodeItem = ({ node }: { node: Node }) => {
  const [isOpen, setIsOpen] = useState(false)
  const hasNodes = !!node.nodes

  const toggleOpen = () => setIsOpen((prev) => !prev)

  return (
    <li className="my-1.5">
      <span className={cn('flex items-center gap-1.5', !hasNodes && 'pl-6')}>
        {hasNodes ? (
          <>
            <button type="button" onClick={toggleOpen}>
              <ChevronRight
                className={cn('size-4 text-zinc-700 transition-transform duration-200', isOpen && 'rotate-90')}
              />
            </button>
            {!isOpen ? <Folder className="size-6 text-sky-500" /> : <FolderOpen className="size-6 text-sky-700" />}
          </>
        ) : (
          <FileIcon className="size-6 text-zinc-500" />
        )}
        {node.name}
      </span>
      {isOpen && <ul className="pl-6">{node.nodes?.map((node) => <NodeItem key={node.name} node={node} />)}</ul>}
    </li>
  )
}

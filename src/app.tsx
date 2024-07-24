import { NodeItem } from './components/app/recursive-node'

export type Node = {
  name: string
  nodes?: Node[]
}

export const App = () => {
  const nodes: Node[] = [
    {
      name: 'Desktop',
      nodes: [
        {
          name: 'Movies',
          nodes: [
            {
              name: 'Action',
              nodes: [{ name: 'John Wick' }, { name: 'Mad Max' }],
            },
            { name: 'Comedy', nodes: [] },
            { name: 'Drama', nodes: [] },
          ],
        },
        { name: 'Music', nodes: [] },
        { name: 'Pictures', nodes: [] },
        { name: 'Documents', nodes: [] },
        { name: 'Passwords.txt' },
      ],
    },
  ]

  return (
    <div className="mx-auto max-w-sm p-8">
      <ul>
        {nodes.map((folder) => (
          <NodeItem key={folder.name} node={folder} />
        ))}
      </ul>
    </div>
  )
}

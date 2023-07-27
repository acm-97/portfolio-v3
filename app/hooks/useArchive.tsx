import {useGithubProjects, type ProjectsProps} from '@/app/contexts'
import {privateProjects} from '@/app/constants'
import {type ColumnsProps} from '@/app/components/Table'
import {Icon} from '@/app/components'

const useArchive = () => {
  const {projects} = useGithubProjects()
  const columns: ColumnsProps[] = [
    {
      headerName: 'Year',
      accessor: ({createdAt}: ProjectsProps) => createdAt.getFullYear(),
      cellProps: {className: 'bg-transparent text-secondary-main font-mono text-lg'},
      headerCellProps: {
        className: 'bg-transparent text-xl text-primary-main normal-case bg-transparent',
      },
    },
    {
      headerName: 'Title',
      accessor: 'name',
      cellProps: {className: 'bg-transparent whitespace-normal text-primary-main'},
      headerCellProps: {
        className: 'bg-transparent text-xl text-primary-main normal-case bg-transparent',
      },
    },
    {
      headerName: 'Made at',
      accessor: ({madeAt}: ProjectsProps) => madeAt || '--',
      cellProps: {
        className: 'bg-transparent max-md:hidden text-primary-main text-base',
      },
      headerCellProps: {
        className:
          'bg-transparent max-md:hidden text-xl text-primary-main normal-case bg-transparent',
      },
    },
    {
      headerName: 'Build with',
      cellProps: {
        className: 'bg-transparent max-md:hidden whitespace-normal font-mono text-xs',
      },
      headerCellProps: {
        className:
          'bg-transparent max-md:hidden text-xl text-primary-main normal-case bg-transparent',
      },
      accessor: ({name, topics}: ProjectsProps) =>
        topics && topics.length > 0
          ? topics.map(topic => (
              <span className="not-last-child:mr-4" key={`${topic}-${name}`}>
                {topic}
                <span className="inline-block not-last-child:visible">·</span>
              </span>
            ))
          : '--',
    },
    {
      headerName: 'Links',
      cellProps: {className: 'bg-transparent'},
      headerCellProps: {
        className: 'bg-transparent text-xl text-primary-main normal-case bg-transparent',
      },
      accessor: ({website, github}: ProjectsProps) => (
        <>
          {github && <Icon name="GitHub" linkProps={{href: github}} />}
          {website && <Icon name="External" linkProps={{href: website}} />}
        </>
      ),
    },
  ]

  return {
    rows: projects.concat(privateProjects).sort((a: any, b: any) => b.createdAt - a.createdAt),
    columns,
  }
}

export default useArchive

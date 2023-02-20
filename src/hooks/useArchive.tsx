import { useGithubProjects, ProjectsProps } from '@/contexts';
import { privateProjects } from '@/constants';
import { ColumnsProps } from '@/components/Table';
import { Icon } from '@/components';

const useArchive = () => {
  const { projects } = useGithubProjects();
  const columns: ColumnsProps[] = [
    {
      headerName: 'Year',
      accessor: ({ createdAt }: ProjectsProps) => createdAt.getFullYear(),
      cellProps: { className: 'bg-transparent border-transparent sec-color font--mono text-lg' },
      headerCellProps: { className: 'bg-transparent border-transparent text-xl  normal-case bg-transparent' },
    },
    {
      headerName: 'Title',
      accessor: 'name',
      cellProps: { className: 'bg-transparent border-transparent whitespace-normal primary-color' },
      headerCellProps: { className: 'bg-transparent border-transparent text-xl  normal-case bg-transparent' },
    },
    {
      headerName: 'Made at',
      accessor: ({ madeAt }: ProjectsProps) => madeAt || '--',
      cellProps: { className: 'bg-transparent max-md:hidden border-transparent primary-color text-base' },
      headerCellProps: {
        className: 'bg-transparent max-md:hidden border-transparent text-xl  normal-case bg-transparent',
      },
    },
    {
      headerName: 'Build with',
      cellProps: { className: 'bg-transparent max-md:hidden border-transparent whitespace-normal font--mono text-xs' },
      headerCellProps: {
        className: 'bg-transparent max-md:hidden border-transparent text-xl  normal-case bg-transparent',
      },
      accessor: ({ name, topics }: ProjectsProps) =>
        topics && topics.length > 0
          ? topics.map((topic) => (
              <span className="not-last:mr-4" key={`${topic}-${name}`}>
                {topic}
                <span className="hiden inline-block not-last:visible">·</span>
              </span>
            ))
          : '--',
    },
    {
      headerName: 'Links',
      cellProps: { className: 'bg-transparent border-transparent' },
      headerCellProps: { className: 'bg-transparent border-transparent text-xl  normal-case bg-transparent' },
      accessor: ({ website, github }: ProjectsProps) => (
        <>
          {github && <Icon name="GitHub" linkProps={{ external: true, href: github }} />}
          {website && <Icon name="External" linkProps={{ external: true, href: website }} />}
        </>
      ),
    },
  ];

  return {
    rows: projects.concat(privateProjects).sort((a: any, b: any) => b.createdAt - a.createdAt),
    columns,
  };
};

export default useArchive;

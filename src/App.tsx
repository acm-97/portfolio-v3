import { memo, useEffect, useRef } from 'react';
import classNames from 'classnames';

import { HideShowNav, scrollToHashSection, showSections } from './utils';

import { Home, About, Experience, MyBuilds, NoteworthyProjects, Contact, Credits } from '@/modules';
import { ProjectsProvider } from '@/contexts';
import { Navbar } from '@/components';

const App = () => {
  const sectionAbout = useRef<HTMLDivElement>(null);
  const sectionExperience = useRef<HTMLDivElement>(null);
  const sectionMyBuilds = useRef<HTMLDivElement>(null);
  const sectionContact = useRef<HTMLDivElement>(null);

  const sections = [
    { key: 'home', component: <Home />, ref: null },
    { key: 'about', component: <About />, ref: sectionAbout },
    { key: 'experience', component: <Experience />, ref: sectionExperience },
    { key: 'work', component: <MyBuilds />, ref: sectionMyBuilds },
    { key: 'noteworthyProjects', component: <NoteworthyProjects />, ref: null },
    { key: 'contact', component: <Contact />, ref: sectionContact },
  ];

  useEffect(() => {
    HideShowNav();
  });

  // useEffect(() => {
  //   showSections();
  // }, []);

  useEffect(() => {
    scrollToHashSection(sectionAbout, sectionExperience, sectionMyBuilds, sectionContact);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionAbout, sectionExperience, sectionMyBuilds, sectionContact, window.location.hash]);

  return (
    <ProjectsProvider>
      <Navbar>
        {sections.map(({ key, component, ref }, i) => (
          <section
            key={`${key}-section`}
            id={key}
            ref={ref}
            className={classNames(
              i === 0 ? 'min-h-[100vh]' : 'min-h-[60vh]',
              'section flex w-full flex-col items-center justify-center',
            )}
          >
            {component}
          </section>
        ))}
        <Credits />
      </Navbar>
    </ProjectsProvider>
  );
};

export default memo(App);

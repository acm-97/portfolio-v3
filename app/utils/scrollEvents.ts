export const HandleNavBar = () => {
  const navbar = document.querySelectorAll('.navbar')

  let lastScrollY = window.scrollY
  if (window.scrollY > 0) {
    navbar?.forEach(nav =>
      nav.classList.add(
        'shadow-none',
        'translate-y-[calc(-1_*_6rem)]',
        'shadow-[#0000001a_0px_4px_6px_-1px,#0000000f_0px_2px_4px_-1px]',
      ),
    )
  }

  window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
      navbar?.forEach(nav =>
        nav.classList.add(
          'shadow-none',
          'translate-y-[calc(-1_*_6rem)]',
          'shadow-[#0000001a_0px_4px_6px_-1px,#0000000f_0px_2px_4px_-1px]',
        ),
      )
    } else
      navbar?.forEach(nav => nav.classList.remove('shadow-none', 'translate-y-[calc(-1_*_6rem)]'))

    if (window.scrollY === 0) {
      navbar?.forEach(nav =>
        nav.classList.remove('shadow-[#0000001a_0px_4px_6px_-1px,#0000000f_0px_2px_4px_-1px]'),
      )
    }

    lastScrollY = window.scrollY
  })
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let frame1;
    let frame2;

    const scroll = () => {
      if (!hash) {
        window.scrollTo(0, 0);
        return;
      }

      const id = hash.replace('#', '');
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    // wait for full render + layout settle
    frame1 = requestAnimationFrame(() => {
      frame2 = requestAnimationFrame(scroll);
    });

    return () => {
      cancelAnimationFrame(frame1);
      cancelAnimationFrame(frame2);
    };
  }, [pathname, hash]);

  return null;
}

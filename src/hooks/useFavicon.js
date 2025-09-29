import { useRef, useEffect } from 'react';

const useFavicon = (href) => {
  const linkRef = useRef(null);

  useEffect(() => {
    if (!href) return;

    if (!linkRef.current) {
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.size = '32x32'; 
      document.head.appendChild(link);
      linkRef.current = link;
    }

    linkRef.current.href = href;
  }, [href]);
};

export default useFavicon;
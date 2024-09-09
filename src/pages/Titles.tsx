import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navigation } from '../data';

interface NavLink {
  title: string;
  url?: string;
  children?: NavLink[];
}

const Titles = () => {
  const [titles, setTitles] = useState<NavLink[]>(navigation);
  const [titlePath, setTitlePath] = useState<string[]>([]);

  useEffect(() => {
    console.log(titlePath);
  }, [titlePath]);

  const findNavLink = (
    title: string,
    navLinks: NavLink[]
  ): NavLink | undefined => {
    for (const navLink of navLinks) {
      if (navLink.title === title) {
        return navLink;
      }
      if (navLink.children) {
        const result = findNavLink(title, navLink.children);
        if (result) return result;
      }
    }
    return undefined;
  };

  const handleTitleClick = (title: string) => {
    const selectedNavLink = findNavLink(title, navigation);

    if (selectedNavLink?.children) {
      setTitlePath((prev) => [...prev, title]);
      setTitles(selectedNavLink.children);
    } else {
      // Handle case where title has no children
      console.log('No children for this title');
    }
  };

  const handleBackClick = () => {
    setTitlePath((prev) => {
      const newPath = [...prev];
      newPath.pop(); // Remove the last title from the path
      const parentTitle = newPath[newPath.length - 1];

      const parentNavLink = findNavLink(parentTitle, navigation);
      setTitles(parentNavLink?.children || navigation);
      return newPath;
    });
  };

  return (
    <div className='container mx-auto'>
      <div className='flex gap-4'>
        {titlePath.length > 0 && (
          <button onClick={handleBackClick}>Back</button>
        )}

        <h2 className='font-bold text-slate-600 text-2xl'>
          {titlePath.length > 0 && titlePath[titlePath.length - 1]}
        </h2> 
      </div>

      {titles.map((navLink, index) => {
        const { title, url, children } = navLink;

        if (url) {
          return (
            <div key={index}>
              {/* styling helps you understand which is a link */}
              <Link to={url} className='text-blue-500 underline'>
                {title}
              </Link>
            </div>
          );
        }

        if (children) {
          return (
            <div key={index}>
              <span
                onClick={() => handleTitleClick(title)}
                className='text-green-400 cursor-pointer'>
                {title}
              </span>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default Titles;

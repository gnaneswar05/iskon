import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Sidebar() {
  const router = useRouter();
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    router.push('/login');
  };

  const navItems = [
    { label: 'Dashboard', path: '/admin' },
    { label: 'Pages', path: '/admin/pages' },
    { label: 'Services', path: '/admin/services' },
    { label: 'Festivals', path: '/admin/festivals' },
    { label: 'Events', path: '/admin/events' },
    { label: 'Temple', path: '/admin/temple' },
    { label: 'Media', path: '/admin/media' },
    { label: 'Facility', path: '/admin/facility' },
    { label: 'Blogs', path: '/admin/blogs' },
    { label: 'Donations', path: '/admin/donations' },
    { label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar__brand">
        <h2>ISKCON Admin</h2>
      </div>
      <nav className="admin-sidebar__nav">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.path}
            className={`admin-sidebar__link ${
              activePath === item.path ? 'active' : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="admin-sidebar__footer">
        <button className="admin-sidebar__logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </aside>
  );
}

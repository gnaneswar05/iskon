'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Sidebar from '../../components/admin/Sidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminFooter from '../../components/admin/AdminFooter';
import './admin.css';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Basic client-side auth check
    const isLoginPage = pathname === '/admin/login';
    const authStatus = localStorage.getItem('admin_authenticated');
    
    if (!authStatus || authStatus !== 'true') {
      if (!isLoginPage) {
        router.push('/admin/login');
      } else {
        setIsAuthenticated(true); // Allow rendering the login page itself
      }
    } else {
      // If authenticated and tries to access login, redirect to dashboard
      if (isLoginPage) {
        router.push('/admin');
      } else {
        setIsAuthenticated(true);
      }
    }
  }, [router, pathname]);

  if (!isAuthenticated) {
    return null; // Return empty while checking to avoid layout flash
  }

  // If we are on the login page, don't show the sidebar, header, or footer
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className="admin-layout page-admin">
      <Sidebar />
      <div className="admin-main">
        <AdminHeader />
        <main className="admin-content">
          {children}
        </main>
        <AdminFooter />
      </div>
    </div>
  );
}

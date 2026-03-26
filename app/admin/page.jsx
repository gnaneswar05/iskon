export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h2 style={{ fontFamily: 'var(--font-mont)', marginTop: 0 }}>Overview</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginTop: '24px' }}>
        <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: 'var(--nav-muted)' }}>Total Events</h3>
          <p style={{ margin: 0, fontSize: '32px', fontFamily: 'var(--font-mont)', fontWeight: 'bold', color: 'var(--brand)' }}>14</p>
        </div>
        <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: 'var(--nav-muted)' }}>Registered Users</h3>
          <p style={{ margin: 0, fontSize: '32px', fontFamily: 'var(--font-mont)', fontWeight: 'bold', color: 'var(--brand)' }}>3,245</p>
        </div>
        <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: 'var(--nav-muted)' }}>Recent Donations</h3>
          <p style={{ margin: 0, fontSize: '32px', fontFamily: 'var(--font-mont)', fontWeight: 'bold', color: 'var(--brand)' }}>₹45,000</p>
        </div>
      </div>
    </div>
  );
}

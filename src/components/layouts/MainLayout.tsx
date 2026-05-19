import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import RightPanel from './RightPanel';
import ModalManager from '../modals/ModalManager';

export default function MainLayout() {
  return (
      <>
        <div style={{
          display: 'flex',
          minHeight: '100vh',
          background: 'var(--bg-base)',
        }}>
          {/* Sidebar anchors the app shell on desktop and collapses out of the flow on mobile. */}
          <div style={{ display: 'flex' }} className="sidebar-wrapper">
            <Sidebar />
          </div>

          {/* Topbar and page content share the remaining horizontal space. */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <Topbar />
            <div style={{
              flex: 1,
              display: 'flex',
              gap: 0,
              maxWidth: '100%',
            }}>
              {/* Page Content */}
              <main style={{
                flex: 1,
                padding: '24px 24px',
                minWidth: 0,
                maxWidth: 680,
              }}>
                <Outlet />
              </main>

              {/* Keep the right panel close to the viewport edge without letting it touch the border. */}
              <div className="right-panel-wrapper" style={{ marginLeft: 'auto', marginRight: 8 }}>
                <RightPanel />
              </div>
            </div>
          </div>
        </div>

        {/* Modals sit outside the layout flow so they can overlay any page. */}
        <ModalManager />

        {/* Layout-specific media rules live here because the breakpoints are tied to this shell. */}
        <style>{`
        @media (max-width: 1100px) {
          .right-panel-wrapper { display: none; }
        }
        @media (max-width: 768px) {
          .sidebar-wrapper { display: none; }
          main { padding: 16px !important; }
        }
      `}</style>
      </>
  );
}

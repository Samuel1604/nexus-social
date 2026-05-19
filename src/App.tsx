import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import FeedPage from './pages/FeedPage'
import ExplorePage from './pages/ExplorePage'
import GroupsPage from './pages/GroupsPage'
import ChannelsPage from './pages/ChannelsPage'
import RoomsPage from './pages/RoomsPage'
import ProfilePage from './pages/ProfilePage'
import NotificationsPage from './pages/NotificationsPage'
import { AuthProvider} from './context/AuthContext'
import { SocialProvider } from './context/SocialContext'
import { UIProvider } from './context/UIContext'
import ProtectedRoutes from './components/ProtectedRoutes';
import MainLayout from './components/layouts/MainLayout';

const App = () => {


  return (
    <AuthProvider>
      <SocialProvider>
        <UIProvider>
          {/* Keep providers above all routes so guards, modals, and social actions share one app-wide state tree. */}
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<MainLayout />}>
              <Route path="/" element={<FeedPage />} />
              {/* Feed stays public; everything below this boundary requires a signed-in user. */}
              <Route element={<ProtectedRoutes />}>
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/groups" element={<GroupsPage />} />
                <Route path="/channels" element={<ChannelsPage />} />
                <Route path="/rooms" element={<RoomsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/profile/:id" element={<ProfilePage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
              </Route>
            </Route>
          </Routes>
        </UIProvider>
      </SocialProvider>
    </AuthProvider>
  );
}

export default App

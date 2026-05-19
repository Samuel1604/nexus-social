import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import {
  INITIAL_NOTIFICATIONS,
  MOCK_CHANNELS,
  MOCK_GROUPS,
  MOCK_POSTS,
  MOCK_ROOMS,
  ALL_INTERESTS,
  users as MOCK_USERS,
} from "../data/mockData";

import type {
  SocialPost,
  Room,
  Group,
  Channel,
  Notification,
  NewPost,
  NewRoom,
  NewGroup,
  SocialContextValue,
  SuggestedUser,
} from "../types/social";

import type { User } from "../types/auth";

const CURRENT_USER_ID = 999;
const DEFAULT_FOLLOWING = [1, 3];

const SocialContext = createContext<SocialContextValue | null>(null);

export const SocialProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<SocialPost[]>(MOCK_POSTS);
  const [rooms, setRooms] = useState<Room[]>(MOCK_ROOMS);
  const [groups, setGroups] = useState<Group[]>(MOCK_GROUPS);
  const [channels] = useState<Channel[]>(MOCK_CHANNELS);
  const [notifications, setNotifications] = useState<Notification[]>(
    INITIAL_NOTIFICATIONS,
  );
  const [interests] = useState<string[]>(ALL_INTERESTS);
  const [users, setUsers] = useState<SuggestedUser[]>(MOCK_USERS);
  const [usersLoading, setUsersLoading] = useState<boolean>(true);
  const [following, setFollowing] = useState<number[]>(DEFAULT_FOLLOWING);
  const [likedPostIds, setLikedPostIds] = useState<string[]>([]);
  const [likedUserIds, setLikedUserIds] = useState<number[]>([]);
  const [joinedRoomIds, setJoinedRoomIds] = useState<string[]>([]);
  const [joinedGroupIds, setJoinedGroupIds] = useState<string[]>(
    // Mock groups can ship with a role, so treat those as already joined.
    MOCK_GROUPS.filter((group) => group.role).map((group) => group.id),
  );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // DummyJSON gives Explore a larger, realistic people list while local mock data remains the fallback.
        const res = await fetch("https://dummyjson.com/users?limit=100&skip=0");
        const data = await res.json();
        const enriched = data.users.map((user: User) => ({
          ...user,
          occupation: user.company?.title || "Professional",
          interests: interests
            .filter((interest) =>
              user.firstName?.toLowerCase().includes(interest.toLowerCase()),
            )
            .slice(0, 3),
          bio: `Hi, I'm ${user.firstName} from ${user.address?.city}. I work as a ${user.company?.title || "Professional"}.`,
          followers: Math.floor(Math.random() * 1000),
          following: Math.floor(Math.random() * 500),
          posts: Math.floor(Math.random() * 100),
          isVerified: user.id ? user.id % 7 === 0 : false,
        }));
        setUsers(enriched);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setUsersLoading(false);
      }
    };

    fetchUsers();
  }, [interests]);

  const [subscribedChannelIds, setSubscribedChannelIds] = useState<string[]>(
    [],
  );

  const unreadCount = notifications.filter(
    (notification) => !notification.read,
  ).length;
  const likedPosts = useMemo(() => new Set(likedPostIds), [likedPostIds]);
  const likedUsers = useMemo(() => new Set(likedUserIds), [likedUserIds]);
  const subscribedChannels = useMemo(
    // Components need quick membership checks without owning the mutable id arrays.
    () => new Set(subscribedChannelIds),
    [subscribedChannelIds],
  );

  const suggestedUsers = useMemo(
    () =>
      users.filter(
        (user) => user.id !== CURRENT_USER_ID && !following.includes(user.id),
      ),
    [following, users],
  );

  const createPost = ({
    content,
    image = null,
    tags = [],
    author = {
      name: "You",
      username: "you",
      avatar: "https://dummyjson.com/image/avatar/13",
      verified: false,
    },
    authorId = CURRENT_USER_ID,
  }: NewPost) => {
    const trimmedContent = content.trim();

    if (!trimmedContent) return;

    setPosts((currentPosts) => [
      {
        id: `post-${Date.now()}`,
        authorId,
        author,
        content: trimmedContent,
        image,
        likes: 0,
        comments: 0,
        shares: 0,
        timestamp: new Date(),
        tags,
      },
      ...currentPosts,
    ]);
  };

  const addPost = (content: string, tags: string[] = []) => {
    createPost({ content, tags });
  };

  const createRoom = ({
    name,
    description = "",
    category,
    maxParticipants,
    isPremium,
    color,
    tags = [],
  }: NewRoom) => {
    setRooms((currentRooms) => [
      {
        id: `room-${Date.now()}`,
        name: name.trim(),
        description: description.trim(),
        host: {
          name: "You",
          username: "you",
          avatar: "https://dummyjson.com/image/avatar/13",
        },
        participants: 1,
        maxParticipants,
        tags,
        isLive: false,
        isPremium,
        color,
        memberCount: 1,
        category,
      },
      ...currentRooms,
    ]);
  };

  const createGroup = ({
    name,
    description = "",
    category,
    isPrivate,
    tags,
  }: NewGroup) => {
    setGroups((currentGroups) => [
      {
        id: `group-${Date.now()}`,
        name: name.trim(),
        description: description.trim(),
        avatar: "https://dummyjson.com/image/avatar/13",
        cover: null,
        members: 1,
        postsToday: 0,
        isPrivate,
        tags,
        category,
        role: "admin",
      },
      ...currentGroups,
    ]);
  };

  const toggleLikePost = (postId: string) => {
    setLikedPostIds((currentLikedPostIds) => {
      const isLiked = currentLikedPostIds.includes(postId);

      // Keep the visible like count synchronized with the user's liked id list.
      setPosts((currentPosts) =>
        currentPosts.map((post) =>
          post.id === postId
            ? { ...post, likes: Math.max(0, post.likes + (isLiked ? -1 : 1)) }
            : post,
        ),
      );

      return isLiked
        ? currentLikedPostIds.filter((id) => id !== postId)
        : [...currentLikedPostIds, postId];
    });
  };

  const toggleUserLike = (userId: number) => {
    setLikedUserIds((currentLikedUserIds) =>
      currentLikedUserIds.includes(userId)
        ? currentLikedUserIds.filter((id) => id !== userId)
        : [...currentLikedUserIds, userId],
    );
  };

  const sharePost = (postId: string) => {
    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === postId ? { ...post, shares: post.shares + 1 } : post,
      ),
    );
  };

  const toggleFollow = (userId: number) => {
    setFollowing((currentFollowing) =>
      currentFollowing.includes(userId)
        ? currentFollowing.filter((id) => id !== userId)
        : [...currentFollowing, userId],
    );
  };

  const toggleJoinRoom = (roomId: string) => {
    setJoinedRoomIds((currentRoomIds) => {
      const isJoined = currentRoomIds.includes(roomId);

      // Joining a live room changes both local membership state and the displayed participant count.
      setRooms((currentRooms) =>
        currentRooms.map((room) =>
          room.id === roomId
            ? {
                ...room,
                participants: Math.max(
                  0,
                  room.participants + (isJoined ? -1 : 1),
                ),
              }
            : room,
        ),
      );

      return isJoined
        ? currentRoomIds.filter((id) => id !== roomId)
        : [...currentRoomIds, roomId];
    });
  };

  const toggleJoinGroup = (groupId: string) => {
    setJoinedGroupIds((currentGroupIds) => {
      const isJoined = currentGroupIds.includes(groupId);

      setGroups((currentGroups) =>
        currentGroups.map((group) =>
          group.id === groupId
            ? {
                ...group,
                members: Math.max(0, group.members + (isJoined ? -1 : 1)),
                role: isJoined ? null : "member",
              }
            : group,
        ),
      );

      return isJoined
        ? currentGroupIds.filter((id) => id !== groupId)
        : [...currentGroupIds, groupId];
    });
  };

  const toggleSubscribeChannel = (channelId: string) => {
    setSubscribedChannelIds((currentChannelIds) =>
      currentChannelIds.includes(channelId)
        ? currentChannelIds.filter((id) => id !== channelId)
        : [...currentChannelIds, channelId],
    );
  };

  const subscribeChannel = (channelId: string) => {
    setSubscribedChannelIds((currentChannelIds) =>
      currentChannelIds.includes(channelId)
        ? currentChannelIds
        : [...currentChannelIds, channelId],
    );
  };

  const markNotificationRead = (notificationId: string) => {
    setNotifications((currentNotifications) =>
      currentNotifications.map((notification) =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification,
      ),
    );
  };

  const markAllNotificationsRead = () => {
    setNotifications((currentNotifications) =>
      currentNotifications.map((notification) => ({
        ...notification,
        read: true,
      })),
    );
  };

  const value: SocialContextValue = {
    posts,
    rooms,
    groups,
    channels,
    notifications,
    users,
    usersLoading,
    following,
    likedPosts,
    likedUsers,
    joinedRoomIds,
    joinedGroupIds,
    subscribedChannelIds,
    subscribedChannels,
    unreadCount,
    suggestedUsers,
    createPost,
    addPost,
    createRoom,
    createGroup,
    toggleLikePost,
    // Older components call togglePostLike; keep it as an alias while the newer name stays available.
    togglePostLike: toggleLikePost,
    sharePost,
    toggleFollow,
    toggleUserLike,
    toggleJoinRoom,
    toggleJoinGroup,
    toggleSubscribeChannel,
    subscribeChannel,
    markNotificationRead,
    markAllNotificationsRead,
  };

  return (
    <SocialContext.Provider value={value}>{children}</SocialContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSocialContext = () => {
  const ctx = useContext(SocialContext);

  if (!ctx) {
    throw new Error("useSocialContext must be used within SocialProvider");
  }

  return ctx;
};

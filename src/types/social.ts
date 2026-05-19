import {
  INITIAL_NOTIFICATIONS,
  MOCK_CHANNELS,
  MOCK_GROUPS,
  MOCK_POSTS,
  MOCK_ROOMS,
} from "../data/mockData";

import type {User} from './auth.ts'

export type Post = (typeof MOCK_POSTS)[number];
export type SocialPost = Omit<Post, "image"> & { image: string | null };
export type Room = (typeof MOCK_ROOMS)[number];
export type Group = (typeof MOCK_GROUPS)[number];
export type Channel = (typeof MOCK_CHANNELS)[number];
export type Notification = (typeof INITIAL_NOTIFICATIONS)[number];
export type SuggestedUser = User & {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  image: string;
};

export interface NewPost {
  content: string;
  image?: string | null;
  tags?: string[];
  author?: SocialPost["author"];
  authorId?: number;
}

export interface NewRoom {
  name: string;
  description?: string;
  category: string;
  maxParticipants: number;
  isPremium: boolean;
  color: string;
  tags?: string[];
}

export interface NewGroup {
  name: string;
  description?: string;
  category: string;
  isPrivate: boolean;
  tags: string[];
}

export interface SocialContextValue {
  posts: SocialPost[];
  rooms: Room[];
  groups: Group[];
  channels: Channel[];
  notifications: Notification[];
  users: SuggestedUser[];
  usersLoading: boolean;
  following: number[];
  likedPosts: Set<string>;
  likedUsers: Set<number>;
  joinedRoomIds: string[];
  joinedGroupIds: string[];
  subscribedChannelIds: string[];
  subscribedChannels: Set<string>;
  unreadCount: number;
  suggestedUsers: SuggestedUser[];
  createPost: (post: NewPost) => void;
  addPost: (content: string, tags?: string[]) => void;
  createRoom: (room: NewRoom) => void;
  createGroup: (group: NewGroup) => void;
  toggleLikePost: (postId: string) => void;
  togglePostLike: (postId: string) => void;
  sharePost: (postId: string) => void;
  toggleFollow: (userId: number) => void;
  toggleUserLike: (userId: number) => void;
  toggleJoinRoom: (roomId: string) => void;
  toggleJoinGroup: (groupId: string) => void;
  toggleSubscribeChannel: (channelId: string) => void;
  subscribeChannel: (channelId: string) => void;
  markNotificationRead: (notificationId: string) => void;
  markAllNotificationsRead: () => void;
}

export interface Search {
  items: SuggestedUser[],
  config: {
    fields: string [],
    filterKey: keyof User | null
  }
}

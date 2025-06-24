import { create } from "zustand";
import { persist, createJSONStorage, PersistStorage, StorageValue } from "zustand/middleware";

interface UserInfo {
  email: string;
  nickname: string;
  profileImage: string;
  userId: number;
}

interface UserInfoStore {
  user: UserInfo | null;
  setUser: (user: UserInfo) => void; // 유저 정보를 전역 상태에 저장하는 함수
  clearUser: () => void;
}

const createNoopStorage = (): PersistStorage<unknown> => ({
  getItem(_name: string): StorageValue<unknown> | null {
    return null;
  },
  setItem(_name: string, _value: StorageValue<unknown>): void {
    // noop
  },
  removeItem(_name: string): void {
    // noop
  },
});

export const useUserInfoStore = create<UserInfoStore>()(
  persist(
    // 상태를 자동으로 localStorage에 저장
    (set) => ({
      user: null, // 초기 상태
      setUser: (user) => set({ user }), // 상태를 바꾸는 함수
      clearUser: () => set({ user: null }), // 유저 정보를 제거
    }),
    {
      name: "userInfo-storage", // localStorage 키 이름
      storage:
        typeof window !== "undefined" ? createJSONStorage(() => localStorage) : createNoopStorage(),
    },
  ),
);

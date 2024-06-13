import { create } from 'zustand';
import { UserInfoState } from '../interfaces/userInterfaces';
import { UserAuthority } from '../enums/userAuthority';

const useUserInfoStore = create<UserInfoState>()((set) => ({
  authorities: [],
  accessToken: '',
  refreshToken: '',
  name: '',
  id: 0,
  setAuthorities: (by: Array<UserAuthority>) =>
    set((state: UserInfoState) => ({ authorities: by })),
}));

export default useUserInfoStore;

import { create, StateCreator } from 'zustand';
import {
  EmailLoginSlice,
  GoogleLoginSlice,
  KakaoLoginSlice,
} from '@/src/jinheung/user/interfaces/authInterfaces';

const createEmailAuthSlice: StateCreator<EmailLoginSlice> = (set) => ({
  email: '',
  password: '',
  setEmail: (email: string) =>
    set((state: EmailLoginSlice) => ({ email: email })),
  setPassword: (password: string) =>
    set((state: EmailLoginSlice) => ({ email: password })),
});

const createGoogleAuthSlice: StateCreator<GoogleLoginSlice> = (set) => ({
  jwt: '',
  setJwt: (token: string) => set((state: GoogleLoginSlice) => ({ jwt: token })),
});

const createKakaoAuthSlice: StateCreator<KakaoLoginSlice> = (set) => ({
  authorizationCode: '',
  setCode: (code: string) =>
    set((state: KakaoLoginSlice) => ({ authorizationCode: code })),
});

export const useAuthStore = create<
  EmailLoginSlice & GoogleLoginSlice & KakaoLoginSlice
>((...a) => ({
  ...createEmailAuthSlice(...a),
  ...createGoogleAuthSlice(...a),
  ...createKakaoAuthSlice(...a),
}));

export default useAuthStore;

export interface EmailLoginSlice {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}
export interface GoogleLoginSlice {
  jwt: string;
  setJwt: (token: string) => void;
}

export interface KakaoLoginSlice {
  authorizationCode: string;
  setCode: (code: string) => void;
}

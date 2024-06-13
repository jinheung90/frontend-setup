import { UserAuthority } from '../enums/userAuthority';

export interface UserInfoState {
  authorities: Array<UserAuthority>;
  name: string;
  id: number;
  accessToken: string;
  refreshToken: string;
}

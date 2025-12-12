export interface User {
  id?: string;
  name?: string;
  mobile?: string;
  email?: string;
  qualification?: string;
  profile_image?: string;
}

export interface AuthState {
  loading: boolean;
  user: User | null;
  isLoggedIn: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  error: string | null;
}

xport type UserRole = 'admin_master' | 'coordinator' | 'teacher' | 'student' | 'parent';

export interface JWTPayload {
  id: string;
  email: string;
  role: UserRole;
  schoolId?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

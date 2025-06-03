const DATABASE_URL = import.meta.env.VITE_DATABASE_URL;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const API_URL = import.meta.env.VITE_PUBLIC_API_URL;
const API_KEY = import.meta.env.VITE_PUBLIC_API_KEY;

const requireEnvVar = (name: string, value: string | undefined) => {
  if (!value) throw new Error(`${name} 환경 변수가 설정되지 않았습니다.`);
  return value;
};

export const ENV = {
  supabase: {
    url: requireEnvVar('VITE_SUPABASE_URL', SUPABASE_URL),
    anonKey: requireEnvVar('VITE_SUPABASE_ANON_KEY', SUPABASE_ANON_KEY)
  },
  database: {
    url: requireEnvVar('VITE_DATABASE_URL', DATABASE_URL)
  },
  api: {
    url: requireEnvVar('VITE_PUBLIC_API_URL', API_URL),
    key: requireEnvVar('VITE_PUBLIC_API_KEY', API_KEY)
  }
};

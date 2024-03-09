import { LoginModal } from '@/components/modals/LoginModal';
import { STORAGE_KEYS, useStorageValue } from '@/data/storage';

export function RequireLoginProvider({ children }: React.PropsWithChildren) {
  const username = useStorageValue(STORAGE_KEYS.USERNAME);
  const jobTitle = useStorageValue(STORAGE_KEYS.JOB_TITLE);

  const isLoggedIn = username && jobTitle;

  return (
    <>
      <LoginModal />
      {isLoggedIn && children}
    </>
  );
}
import { LoginModal } from '@/components/modals/LoginModal';
import { STORAGE_KEYS, useStorageValue } from '@/data/storage';

export function RequireLoginProvider({ children }: React.PropsWithChildren) {
  const usernameQuery = useStorageValue(STORAGE_KEYS.USERNAME);
  const jobTitleQuery = useStorageValue(STORAGE_KEYS.JOB_TITLE);

  const isLoading = usernameQuery.isLoading || jobTitleQuery.isLoading;
  const isLoggedIn = usernameQuery.data && jobTitleQuery.data;

  return (
    <>
      {!isLoading && <LoginModal />}
      {isLoggedIn && children}
    </>
  );
}
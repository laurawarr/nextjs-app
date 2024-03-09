import { LoginModal } from '@/components/modals/LoginModal';
import { useStorageValue } from '@/data/storage';

export function RequireLoginProvider({ children }: React.PropsWithChildren) {
  const username = useStorageValue('username');
  const jobTitle = useStorageValue('jobTitle');

  const isLoggedIn = username && jobTitle;

  return (
    <>
      <LoginModal />
      {isLoggedIn && children}
    </>
  );
}
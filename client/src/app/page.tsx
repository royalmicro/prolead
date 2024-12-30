'use client';
import { useRouter } from 'next/navigation';

const RootPage = () => {
  const router = useRouter();

  router.push('/signup');

  return <></>;
};

export default RootPage;

'use client';

import { pb } from '@/config/pocketbase';
import Profile from '@/core/molecules/Profile/Profile';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const page = () => {
  const router = useRouter();

  useEffect(() => {
    if (pb?.authStore && !pb?.authStore?.isValid) {
      router.push('/login');
    }
  }, [pb.authStore.isValid]);

  return (
    <div className="bg-white min-h-[800px] flex items-center justify-center">
      <Profile />
    </div>
  );
};

export default page;

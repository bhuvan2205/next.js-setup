'use client';

import { pb } from '@/config/pocketbase';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const page = () => {
  const router = useRouter();

  useEffect(() => {
    if (pb?.authStore && !pb?.authStore?.isValid) {
      router.push('/login');
    }
  }, [pb.authStore.isValid]);
  return (
    <div className="p-32 bg-white min-h-[500px]">
      <div>
        <strong>User Id: </strong>
        {pb?.authStore?.model?.id ?? ''}
      </div>
    </div>
  );
};

export default page;

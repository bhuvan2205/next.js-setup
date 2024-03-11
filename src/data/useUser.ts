import { pb } from '@/config/pocketbase';
import { RecordModel } from 'pocketbase';
import { useEffect, useState } from 'react';

const useUser = () => {
  const [user, setUser] = useState<RecordModel | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { id } = pb.authStore.model || {};
      const userData = await pb.collection('users').getOne(id);
      setUser(userData);
    };

    getUser();
  }, []);

  return { user };
};

export default useUser;

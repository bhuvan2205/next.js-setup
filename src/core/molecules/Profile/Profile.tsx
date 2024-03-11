import { POCKETBASE_URL } from '@/constants/endpoint';
import useUser from '@/data/useUser';
import { getUpperCase } from '@/lib/upperCase';
import React from 'react';

const Profile = () => {
  const { user } = useUser();
  const profile = `${POCKETBASE_URL}/api/files/${user?.collectionId}/${user?.id}/${user?.avatar}`;

  return (
    <div className="flex flex-col max-w-md p-6 bg-gray-800 text-gray-100">
      <img
        src={profile}
        alt="profile"
        className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 bg-gray-500 aspect-square"
      />
      <div>
        <h2 className="text-xl font-semibold">{getUpperCase(user?.username ?? '')}</h2>
        <span className="block pb-2 text-sm text-gray-400">{user?.email}</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum
          sequi illum qui unde aspernatur non deserunt
        </p>
      </div>
    </div>
  );
};

export default Profile;

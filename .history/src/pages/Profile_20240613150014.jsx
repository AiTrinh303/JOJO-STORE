import { useEffect, useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-center text-blue-500">Profile</h1>
        {profile ? (
          <div className="text-gray-700">
            <p className="mb-4"><strong className="font-semibold">Username:</strong> {profile.userName}</p>
            <p className="mb-4"><strong className="font-semibold">Email:</strong> {profile.email}</p>
            <p className="mb-4"><strong className="font-semibold">Password:</strong> {profile.password}</p>
            {/* Add more profile information here */}
          </div>
        ) : (
          <p className="text-red-500">No profile information found.</p>
        )}
      </div>
    </section>
  );
};

export default Profile;


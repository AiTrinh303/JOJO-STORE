import { useEffect, useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);


  //Section : Avatar
  const [avatar, setAvatar] = useState(null);

  const handleChangeAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  }

  useEffect(() => {
    return () => avatar && URL.revokeObjectURL(avatar.preview);    
  }, [avatar]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-center text-blue-500">Profile</h1>
        {profile ? (
          <div className="text-gray-700">
            <p className="mb-4"><strong className="font-semibold">Username:</strong> {profile.userName}</p>
            <p className="mb-4"><strong className="font-semibold">Email:</strong> {profile.email}</p>
            < className="mb-4"><strong className="font-semibold">Password:</strong> {profile.password}</            </div>
        ) : (
          <p className="text-red-500">No profile information found.</p>
        )}
      </div>
    </section>
  );
};

export default Profile;


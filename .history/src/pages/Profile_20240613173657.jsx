import { useEffect, useState } from 'react';

const Profile = () => {
  const { user, setUser } = useContext(UserContext); 
  const [profile, setProfile] = useState(null);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const handleChangeAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  useEffect(() => {
    return () => avatar && URL.revokeObjectURL(avatar.preview);
  }, [avatar]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-center text-blue-500">Profile</h1>
        {profile ? (
          <div className="text-gray-700 flex flex-col items-center">
            <div className="mb-4 flex flex-col items-center">
              <input 
                type="file"
                onChange={handleChangeAvatar}
                className="mb-2"
              />
              {avatar && <img src={avatar.preview} alt="Preview" className="w-48 h-48 object-cover rounded-full mb-4" />}
            </div>
            <div className="flex-col items-center justify-between w-full">
              <p className="mb-4 text-center "><strong className="font-semibold">Username:</strong> {profile.userName}</p>
              <p className="mb-4 text-center "><strong className="font-semibold">Email:</strong> {profile.email}</p>
              <p className="mb-4 text-center "><strong className="font-semibold">Password:</strong> {profile.password}</p>
            </div>
          </div>
        ) : (
          <p className="text-red-500 text-center">No profile information found.</p>
        )}
      </div>
    </section>
  );
};

export default Profile;


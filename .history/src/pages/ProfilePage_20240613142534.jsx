import { useEffect, useState } from 'react';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Retrieve profile information from localStorage
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  return (
    <section>
      <h1>Profile</h1>
      {profile ? (
        <div>
          <p><strong>Username:</strong> {profile.userName}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Password:</strong> {profile.password}</p>
          {/* Add more profile information here */}
        </div>
      ) : (
        <p>No profile information found.</p>
      )}
    </section>
  );
};

export default ProfilePage;

import { useEffect } from 'react';
import { useAuth } from '../utils/AuthContext';

function ProtectedVolunteerPage({ openSignIn }) {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      openSignIn(true); // Open sign-in modal
    }
  }, [user, openSignIn]);

  return (
    <div className="flex flex-col min-h-screen px-4 text-center" style={{padding: '2rem'}}>
      <h2 className="text-xl font-bold text-[#5372f0]">
        You must be signed in to access the Volunteer page.
      </h2>
      <p className="mt-2 text-sm font-bold text-black">
        Please sign in to continue.
      </p>
    </div>
  );
}

export default ProtectedVolunteerPage;

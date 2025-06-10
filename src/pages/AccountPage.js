import { useState, useEffect } from 'react';
import { useAuth } from '../components/utils/AuthContext';
import { updateProfile, updatePassword } from 'firebase/auth';
import { auth } from '../components/home/firebase';

function AccountPage() {
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.displayName || '');
    }
  }, [user]);

  const handleUpdate = async () => {
    try {
      setError('');
      setSuccessMessage('');

      if (name && name !== user.displayName) {
        await updateProfile(auth.currentUser, { displayName: name });
      }

      if (newPassword.trim() !== '') {
        if (newPassword.length < 6) {
          setError('Password must be at least 6 characters.');
          return;
        }
        await updatePassword(auth.currentUser, newPassword);
      }

      setSuccessMessage('Account updated successfully.');
      setNewPassword('');
    } catch (err) {
      console.error(err);
      setError('Update failed. Please try again.');
    }
  };

  const isDisabled = 
    (name === (user?.displayName || '')) &&
    newPassword.trim() === '';

  return (
    <div className="flex flex-col items-center px-4">
      <div className="max-w-3xl w-full p-8 rounded">
        <h1 className="text-2xl font-bold mb-4 text-center text-[#5372f0]">Your Account</h1>

        {error && <p className="text-red-600 mb-2">{error}</p>}
        {successMessage && <p className="text-green-600 mb-2">{successMessage}</p>}

        <div className="mb-4">
          <label className="block text-3xl font-bold mb-1" style={{paddingBottom: '0.3rem', color: '#5372f0'}}>Email</label>
          <input
            type="email"
            value={user?.email}
            disabled
            className="w-full px-5 py-3 text-2xl border rounded bg-gray-100"
            style={{paddingLeft: '0.3rem'}}
            />
        </div>

        <div className="mb-4">
          <label className="block text-3xl font-bold mb-1" style={{padding: '0.3rem 0', color: '#5372f0'}}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 text-2xl border rounded"
            style={{paddingLeft: '0.3rem'}}
          />
        </div>

        <div className="mb-4">
          <label className="block text-3xl font-bold mb-1" style={{padding: '0.3rem 0', color: '#5372f0'}}>New Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 text-2xl border rounded pr-12"
              placeholder="Enter new password"
              style={{paddingLeft: '0.3rem'}}
            />
            <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className="absolute right-3 text-[1px] text-blue-500"
                style={{ marginBottom: '2rem', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {newPassword && newPassword.length < 6 && (
            <p className="text-sm text-red-500 mt-1">Minimum 6 characters required</p>
          )}
        </div>

        <button
          onClick={handleUpdate}
          disabled={isDisabled}
          className={`w-full px-4 py-2 rounded transition-colors duration-300 ${
            isDisabled
              ? 'bg-gray-500 text-gray-700 cursor-not-allowed pointer-events-none'
              : 'bg-[#5372f0] text-white'
          }`}
          style={{ marginTop: '1rem', color: 'white'}}
        >
          Save Changes
        </button>
      </div>

      <div className="w-full">
        <hr className="border-t-30 border-[#f5f5dc] mb-12" />
        <hr className="border-t-1 border-[#ccc] mb-12" />
      </div>
    </div>
  );
}

export default AccountPage;

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

function SignUpModal({ isOpen, onClose, onOpenSignIn }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        email,
        createdAt: new Date(),
      });

      console.log("User signed up and saved:", user.uid);
      onClose();
    } catch (error) {
      console.error("Sign up error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="bg-white p-8 rounded-xl w-full max-w-md shadow-xl relative">
        <button onClick={onClose} className="absolute top-3 right-4 text-black-800 hover:text-black-500 text-2xl">
          &times;
        </button>

        <h2 className="text-3xl font-bold text-[#5372f0] mb-6 text-center" style={{ paddingTop:'2rem' }}>Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-5" style={{ padding: '0 2rem' }}>
          <div>
            <label className="block font-semibold mb-1 text-black-800">First Name</label>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 border-2 border-[#5372f0] rounded-md focus:ring-2 focus:ring-[#5372f0] outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-black-800">Last Name</label>
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 border-2 border-[#5372f0] rounded-md focus:ring-2 focus:ring-[#5372f0] outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-black-800">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border-2 border-[#5372f0] rounded-md focus:ring-2 focus:ring-[#5372f0] outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-black-800">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border-2 border-[#5372f0] rounded-md focus:ring-2 focus:ring-[#5372f0] outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-black-800">Confirm Password</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border-2 border-[#5372f0] rounded-md focus:ring-2 focus:ring-[#5372f0] outline-none"
            />
          </div>

          <button
            type="submit"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              width: '100%',
              backgroundColor: isHovered ? '#3e5dcc' : '#5372f0',
              color: 'white',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              transition: 'background-color 0.2s ease-in-out',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              marginTop: '1rem',
            }}
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-gray-700">
          Already have an account?{' '}
          <span
            onClick={() => {
              onClose();
              onOpenSignIn();
            }}
            className="font-semibold hover:underline cursor-pointer"
            style={{ color: '#5372f0', fontWeight: 800 }}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUpModal;

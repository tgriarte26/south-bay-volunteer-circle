import { useState } from 'react';

function SignInModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    onClose();
  };

  return (
    <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
    >
      <div className="bg-white p-8 rounded-xl w-full max-w-md shadow-xl relative" style={{padding: '2rem'}}>
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-black-800 hover:text-black-500 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold text-[#5372f0] mb-6 text-center" >Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div style={{margin: '1rem 0'}}>
            <label className="block font-semibold mb-1 text-black-800">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border-2 border-[#5372f0] rounded-md focus:ring-2 focus:ring-[#5372f0] outline-none"
            />
          </div>
          <div style={{margin: '1rem 0'}}>
            <label className="block font-semibold mb-1 text-black-800">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              padding: '0.3rem',
              borderRadius: '0.5rem',
              transition: 'background-color 0.2s ease-in-out',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInModal;

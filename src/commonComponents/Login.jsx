'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);

    // ✅ Dummy login logic
    localStorage.setItem('token', 'dummy-token');

    // ✅ Redirect to dashboard
    router.push('/dashboard');
  };

  return (
    <section>
      <div className='flex flex-row h-screen'>
        <div className='bg-[#30BDEE] flex-1/2 flex flex-col justify-center items-center'>
          <h1 className='text-[32px] font-bold'>Welcome to the Community</h1>
          <p>Manage your XP, groups, and marketplace — all in one place.</p>
        </div>
        <div className='bg-black flex-1/2 flex justify-center items-center'>
          <form
            onSubmit={handleSubmit}
            className='max-w-md mx-auto p-6 bg-white shadow-md rounded-md'
          >
            <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>

            <div className='mb-4'>
              <label className='block text-gray-700 mb-2'>Name</label>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                placeholder='Enter your name'
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 mb-2'>Email</label>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                placeholder='Enter your email'
                required
              />
            </div>

            <div className='mb-6'>
              <label className='block text-gray-700 mb-2'>Password</label>
              <input
                type='password'
                name='password'
                value={form.password}
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                placeholder='Enter your password'
                required
              />
            </div>

            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

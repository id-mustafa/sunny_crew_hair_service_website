'use client';
import React, { useState } from 'react';

const CallNow = () => {
  const [isFetching, setIsFetching] = useState(false);

  const handleCall = async () => {
    setIsFetching(true);
    try {
      const response = await fetch('/api/phone-number');
      if (!response.ok) throw new Error('Failed to fetch phone number');
      const data = await response.json();
      const telephone = data.phone;
      window.location.href = `tel:${telephone}`;
    } catch (error) {
      console.error('Error fetching phone number:', error);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleCall}
        disabled={isFetching}
        className={`py-2 px-4 rounded-[2rem] text-lg text-white transition-all duration-200 delay-50 ${
          isFetching
            ? 'bg-black cursor-not-allowed'
            : 'bg-neutral-800 hover:bg-gray-400'
        }`}
      >
        {isFetching ? 'Calling...' : 'Call Us Now!'}
      </button>
    </div>
  );
};

export default CallNow;

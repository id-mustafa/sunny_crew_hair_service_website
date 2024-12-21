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
        className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ${
          isFetching
            ? 'cursor-not-allowed'
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        {isFetching ? 'Calling...' : ' Call Now'}
      </button>
    </div>
  );
};

export default CallNow;

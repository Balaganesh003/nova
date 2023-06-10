// pages/404.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page after 3 seconds
    const redirect = setTimeout(() => {
      router.push('/');
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(redirect);
  }, []);

  return (
    <div className="flex items-center flex-col gap-4 justify-center w-screen h-screen">
      <h1>404 - Page Not Found</h1>
      <p>Redirecting to the home page...</p>
    </div>
  );
}

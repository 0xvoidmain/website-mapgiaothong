'use client';

import React, { useEffect, useState } from 'react';
import { AppShell } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import Header from '@/components/header';
import Footer from './footer';

const AppShellWrapper = ({ children }: { children: any }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
      <>
        <Header />
        <Notifications position="top-right" zIndex={1000} autoClose={4000} />
        {children}
        <Footer />
      </>
      )}
    </>
  );
};

export default AppShellWrapper;

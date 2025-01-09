import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const AdSense: React.FC = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-4343457660098479"
      data-ad-slot="6407261752"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdSense;
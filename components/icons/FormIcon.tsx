import React from 'react';

const FormIcon: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M32.5 5H7.5C6.11929 5 5 6.11929 5 7.5V32.5C5 33.8807 6.11929 35 7.5 35H32.5C33.8807 35 35 33.8807 35 32.5V7.5C35 6.11929 33.8807 5 32.5 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 15H27.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 20H27.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 25H22.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default FormIcon; 
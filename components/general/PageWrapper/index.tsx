import React, { ReactNode } from 'react';

interface PageWrapperProps {
  classNames?: string;
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ classNames, children }) => {
  return <div className={classNames} >{children}</div>;
};

export default PageWrapper;
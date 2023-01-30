import { ReactNode } from "react";

export const Layout = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen mt-12 w-full px-12 space-y-8">
      <h1 className="text-center text-2xl mb-6">{title}</h1>
      {children}
    </div>
  );
};

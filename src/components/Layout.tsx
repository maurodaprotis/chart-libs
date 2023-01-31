import { ReactNode } from "react";
import { Navigation } from "./Navigation";

export const Layout = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className="flex w-full">
      <Navigation />
      <div className="max-w-7xl mx-auto min-h-screen mt-12 w-full px-12 space-y-8 flex-1">
        <h1 className="text-center text-2xl mb-6">{title}</h1>
        {children}
      </div>
    </div>
  );
};

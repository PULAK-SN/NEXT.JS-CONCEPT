import { ReactNode } from "react";
import Header from "./Header";
const DashboardLayout = ({
  children,
  analytics,
  team,
}: {
  children: ReactNode;
  analytics: ReactNode;
  team: ReactNode;
}) => {
  return (
    <div className="p-8">
      <Header />
      {children}
      <div className="flex gap-4 py-4">
        {team}
        {analytics}
      </div>
    </div>
  );
};

export default DashboardLayout;

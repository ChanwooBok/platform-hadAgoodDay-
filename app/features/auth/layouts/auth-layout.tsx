import { FlickeringGrid } from "components/magicui/flickering-grid";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="relative">
        <FlickeringGrid
          squareSize={10}
          gridGap={10}
          flickerChance={0.5}
          color="#E11D49"
          maxOpacity={0.5}
        />
      </div>
      <Outlet />
    </div>
  );
}

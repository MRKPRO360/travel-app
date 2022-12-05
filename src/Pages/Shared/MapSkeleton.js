import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
export default function MapSkeleton() {
  return (
    <SkeletonTheme baseColor="#e3e3e1" highlightColor="#f5f5f0">
      <Skeleton rounded className="w-full h-full" />
    </SkeletonTheme>
  );
}

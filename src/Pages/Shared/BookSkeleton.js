import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
export default function BookSkeleton({ cards }) {
  return (
    <SkeletonTheme baseColor="#e3e3e1" highlightColor="#f5f5f0">
      {Array(cards)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="flex gap-6">
            <div className="w-[292px] h-48 rounded">
              <Skeleton className="w-full h-full" />
            </div>
            <div className="flex-1 ">
              <Skeleton count={7} height={24} />
            </div>
          </div>
        ))}
    </SkeletonTheme>
  );
}

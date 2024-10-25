import style from "./Skeleton.module.css";

import { SkeletonProps } from "@/types/Skeleton";

const Skeleton = ({
  className = "",
  height,
  variant = "rectangular",
  width,
}: SkeletonProps) => {
  const classes = [
    `${style.skeleton}`,
    variant === "circular" ? `${style.skeleton__circular}` : "",
    variant === "text" ? `${style.skeleton__text}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      style={{
        height,
        width,
      }}
    />
  );
};

export default Skeleton;

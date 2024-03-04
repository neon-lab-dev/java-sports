function AppSkeleton({ className = "", ...props }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-gray-100 ${className}`}
      {...props}
    />
  );
}

export default AppSkeleton;

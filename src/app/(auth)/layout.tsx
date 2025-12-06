import Image from "next/image";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Left illustration (hidden on small screens) */}
      <div className="relative hidden min-h-screen max-w-[650px] flex-[0.55] p-6 lg:flex-[0.8] xl:flex">
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-700 ease-out">
          <Image
            src="/assets/pf-auth/auth-cover-image.svg"
            alt="Auth cover"
            fill
            className="object-cover transition-all duration-700 ease-out dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>

      {/* Form column */}
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 md:p-10">
        <div className="w-full max-w-xl transition-opacity duration-500 ease-out">
          {children}
        </div>
      </div>
    </div>
  );
}

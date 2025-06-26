// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function useAuthGuard() {
//   const router = useRouter();
//   const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     const hasToken = document.cookie.includes("ACCESS_TOKEN");
//     if (!hasToken) {
//       router.replace("/login");
//       return;
//     }
//     setIsReady(true);
//   }, []);

//   return isReady;
// }

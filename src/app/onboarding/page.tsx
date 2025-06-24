// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import { Header } from "@/layout/Header";

// export default function OnboardingPage() {
//   const [step, setStep] = useState(1);
//   const [showOnboarding, setShowOnboarding] = useState(true); // 다이얼로그 on/off
//   const router = useRouter();

//   // useEffect(() => {
//   //   const token = localStorage.getItem("accessToken");
//   //   if (token) {
//   //     // 로그인된 사용자는 홈으로
//   //     router.replace("/");
//   //   }
//   // }, []);

//   const nextStep = () => {
//     if (step < 4) setStep(step + 1);
//     else {
//       router.push("/login");
//     }
//   };

//   const prevStep = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const mainMessage = {
//     1: "1번 메인 메세지",
//     2: "2번 메인 메세지",
//     3: "3번 메인 메세지",
//     4: "4번 메인 메세지",
//   };

//   const subMessage = {
//     1: "1번 서브 메세지",
//     2: "2번 서브 메세지",
//     3: "3번 서브 메세지",
//     4: "4번 서브 메세지",
//   };

//   const image = {
//     1: "/images/onboarding/1.png",
//     2: "/images/onboarding/2.png",
//     3: "/images/onboarding/3.png",
//     4: "/images/onboarding/4.png",
//   };

//   const buttonText = {
//     1: "다음",
//     2: "다음",
//     3: "다음",
//     4: "시작하기",
//   };

//   return (
//     <>
//     {showOnboarding && (
//       <>
//       {/* 헤더 */}
//       <Header bgColorClassName="bg-white">
//         <Header.Title>Guide</Header.Title>
//         <Header.Close onCloseClick={() => alert("닫기 클릭")} />
//       </Header>
//       {/* 메인메세지 */}
//       <div className="text-center text-2xl font-bold">
//         {mainMessage[step as keyof typeof mainMessage]}
//       </div>
//       {/* 서브메세지 */}
//       <div className="text-center text-sm text-gray-500">
//         {subMessage[step as keyof typeof subMessage]}
//       </div>
//       {/* 이미지 */}
//       <div className="h-full w-full bg-gray-100">
//         <Image src={image[step as keyof typeof image]} alt="onboarding" width={100} height={100} />
//       </div>
//       {/* 버튼 */}
//       <button onClick={nextStep}>{buttonText[step as keyof typeof buttonText]}</button>
//       </>
//     )}
//     </>
//   );
// }

import Image from "next/image";
import { useRouter } from "next/navigation";

type UserProfileProps = {
  profile: {
    profileImageUrl: string;
    nickname: string;
  };
};

const UserProfile = ({ profile }: UserProfileProps) => {
  const router = useRouter();

  return (
    <div className="flex inline-flex w-full items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100">
          <Image
            src={profile.profileImageUrl || "/imgs/default-profile.svg"}
            alt="프로필"
            width={40}
            height={40}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <span className="text-subtitle2">{profile.nickname}</span>
      </div>
      <button
        onClick={() => router.push(`/mypage/user-info`)}
        className="rounded bg-neutral-100 px-3 py-1 text-body2"
      >
        내 정보 수정
      </button>
    </div>
  );
};

export default UserProfile;

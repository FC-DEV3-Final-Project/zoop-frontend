type UserProfile = {
  email: string;
  nickname: string;
  profileImageUrl: string;
};

const fetchUserInfo = async (): Promise<UserProfile> => {
  const response = await fetch("/mypage/account");
  if (!response.ok) {
    throw new Error("사용자 정보를 불러오지 못했습니다");
  }
  return response.json().then((data) => data.account);
};

export default fetchUserInfo;
export type { UserProfile };
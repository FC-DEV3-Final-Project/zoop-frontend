const clearAuthTokens = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("kakao_access");
  localStorage.removeItem("userInfo-storage");
};

export { clearAuthTokens };
// 금액 옵션("1억", "5천만" 등) 문자열을 숫자로 변환하는 함수
export const parseKoreanMoneyToNumber = (str: string): number => {
  if (str.includes("억")) return parseInt(str) * 10000;
  if (str.includes("천만")) return parseInt(str) * 1000;
  if (str.includes("백만")) return parseInt(str) * 100;
  if (str.includes("만")) return parseInt(str);

  return 0;
};

// 숫자 문자열을 3자리마다 콤마가 찍힌 형식으로 변환하는 함수
export const formatNumberWithComma = (numStr: string) => {
  // 숫자 아닌 문자 제거하고 숫자로 변환
  const onlyNumber = numStr.replace(/,/g, "").replace(/[^\d]/g, "");
  if (!onlyNumber) return "0";

  return parseInt(onlyNumber, 10).toLocaleString("ko-KR");
};

// 금액을 한글 단위로 변환하는 함수
export const formatMoneyToKoreanUnit = (input: string): string => {
  const clean = input.replace(/,/g, "").replace(/[^\d]/g, "");
  const num = parseInt(clean, 10) * 10000; // '만원' 단위를 '원'으로 환산

  if (isNaN(num) || num === 0) return "0";

  const units = ["", "만", "억", "조", "경"];
  const result = [];

  let value = num;
  let i = 0;

  while (value > 0) {
    const unitValue = value % 10000;
    if (unitValue !== 0) {
      result.unshift(`${unitValue.toLocaleString()}${units[i]}`);
    }
    value = Math.floor(value / 10000);
    i++;
  }

  return result.join(" ");
};

export default function PriceSection() {
  const data = [
    { date: "25.03.26", floor: "9층", price: "전세 4억 4,100" },
    { date: "25.02.14", floor: "12층", price: "전세 5억 4,000" },
    { date: "25.02.05", floor: "8층", price: "월세 5,250/210" },
    { date: "25.02.01", floor: "7층", price: "전세 5억 930" },
    { date: "25.01.15", floor: "10층", price: "전세 4억 8,600" },
  ];

  return (
    <section id="price" className="mb-2 scroll-mt-[80px] bg-white px-5 py-8">
      <div className="mb-5 text-title2 text-black">실거래가</div>
      <div className="grid grid-cols-3 border-b-[1px] border-b-gray-500-alternative pb-[9.5px] text-body2 text-gray-800">
        <span>계약일</span>
        <span>층</span>
        <span>거래정보</span>
      </div>

      <div>
        {data.map((row, idx) => (
          <div
            key={idx}
            className="grid grid-cols-3 border-b-[1px] border-b-gray-500-alternative py-[9.5px] text-body2 text-black"
          >
            <span>{row.date}</span>
            <span>{row.floor}</span>
            <span>{row.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

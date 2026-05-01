//เก็บ ui

const Title = () => {
  return (
    <div className="text-blue-400 text-2xl flex justify-center m-[30px]">
      เที่ยวไหนดี
    </div>
  );
};

const Input = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="search">ค้นหาที่เที่ยว</label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="หาที่เที่ยวแล้วไปกัน ..."
        className="w-full text-center border-b-2 border-gray-400 focus:border-blue-500 outline-none"
      />
    </div>
  );
};

const SearchResult = () => {
  let arr = ["AAA", "BBB", "CCC"];
  return (
    <div className="flex flex-col gap-5 mt-5">
      {arr.map((text) => {
        return (
          <div className="flex flex-col md:flex-row gap-5 ">
            <div className="md:w-[40%] w-full ">
              <img
                className="rounded-xl"
                src="https://img.wongnai.com/p/1600x0/2019/07/02/3c758646aa6c426ba3c6a81f57b20bd6.jpg "
              />
            </div>

            <div className="md:w-[60%] w-full">
              <div className="font-bold ">
                คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหน?
                อ่านจบครบที่เดียว!{" "}
              </div>
              <div className="text-xs">
                วันว่างนี้ไปเที่ยวเกาะช้างกัน ไปทำกิจกรรมต่างๆ เช่น
                ที่เที่ยวน้ำตก ...{" "}
              </div>
              <div> <a className="text-blue-600 underline text-xs">อ่านต่อ</a></div>
              <div className="text-xs mb-2">
                หมวด เกาะ ทะเล จุดชมวิว ธรรมชาติ และ ตราด{" "}
              </div>
              <div className=" w-full flex justify-between flex-col md:flex-row gap-2 ">
                <div className="flex justify-between gap-1 ">
                  <div class="rounded ">
                    <img
                      className="rounded-xl md:w-25 md:h-25 mt-4"
                      src="https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg"
                    />
                  </div>
                  <div class="rounded">
                    <img
                      className="rounded-xl md:w-25 md:h-25 mt-4"
                      src="https://img.wongnai.com/p/1600x0/2019/07/02/941dbb607f0742bbadd63bbbd993e187.jpg"
                    />
                  </div>
                  <div class="rounded">
                    <img
                      className="rounded-xl md:w-25 md:h-25 mt-4"
                      src="https://img.wongnai.com/p/1600x0/2019/07/02/bd1d256256c14c208d0843a345f75741.jpg"
                    />
                  </div>
                </div>
                <button
                  className="  bg-pink-300 p-5 w-fit rounded-full"
                  onClick={() => {
                    alert("Share !");
                  }}
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const HomepageComponent = () => {
  return (
    <div className="mx-auto max-w-[800px] md:px-0 px-5">
      <div className="w-full">
        <Title />
        <Input />
        <SearchResult />
      </div>
    </div>
  );
};

export default HomepageComponent;

// const Detail = () => {
//   return (
//     <div className="flex justify-between">
//       <div>Left</div>
//       <div>Right</div>
//     </div>
//   );
// };

// const Title = () => {
//   return <div>Title</div>;
// };

// const HompageComponent = (props) => {
//   let { count, setCount } = props;
//   return (
//     <div>
//       <Title />
//       <Detail />
//       {count}
//       <button
//         className="h-4 bg-amber-200 p-5"
//         onClick={() => {
//           setCount(count + 1);
//           //   count++;
//           //   console.log(count);
//         }}
//       >
//         +
//       </button>
//       <button
//         className="h-4 bg-amber-200 p-5"
//         onClick={() => {
//           //   count--;
//           setCount(count - 1);
//         }}
//       >
//         -
//       </button>
//     </div>
//   );
// };

// export default HompageComponent;

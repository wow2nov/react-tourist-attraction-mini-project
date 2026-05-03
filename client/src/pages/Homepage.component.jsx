//เก็บ ui
import truncateText from "../helpers/truncateText";

const Title = () => {
  return (
    <div className="text-blue-400 text-2xl flex justify-center m-[30px]">
      เที่ยวไหนดี
    </div>
  );
};

const Input = (props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="search">ค้นหาที่เที่ยว</label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="หาที่เที่ยวแล้วไปกัน ..."
        className="w-full text-center border-b-2 border-gray-400 focus:border-blue-500 outline-none"
        value={props.input}
        onChange={(e) => props.setInput(e.target.value)}
      />
    </div>
  );
};

const SearchResult = (props) => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      {props.trips.map((trip) => {
        return (
          <div
            key={trip.eid ?? trip.url}
            className="flex flex-col md:flex-row gap-5 "
          >
            <div className="md:w-[40%] w-full ">
              <img className="rounded-xl" src={trip.photos[0] || ""} />
            </div>

            <div className="md:w-[60%] w-full">
              <div className="font-bold ">{trip.title || ""}</div>
              <div className="text-xs">
                {truncateText(trip.description, 85)}
              </div>
              <div>
                <a
                  className="text-blue-600 underline text-xs"
                  href={trip.url}
                  target="_blank"
                >
                  อ่านต่อ
                </a>
              </div>
              <div className="text-xs mb-2 ">
                หมวด{" "}
                {trip.tags.map((tag, index) => {
                  let strTag = `${tag} `;
                  // index = 9
                  // length = 10
                  // 0,1,2,3,4,5,6,7,8,9
                  if (index === trip.tags.length - 1) strTag = `และ ${strTag}`;
                  return strTag;
                })}
              </div>
              <div className="flex w-full flex-col justify-between gap-2 md:flex-row ">
                <div className="mt-4 grid grid-cols-3 gap-1.5 md:gap-2">
                  {/* <div class="rounded ">
                    <img
                      className="rounded-xl md:w-25 md:h-25 mt-4"
                      src="https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg"
                    />
                  </div> */}
                  {trip.photos.slice(1).map((photo) => {
                    return (
                      <div
                        key={photo}
                        className="aspect-square overflow-hidden md:aspect-auto"
                      >
                        <img
                          className="h-full w-full object-cover md:w-25 md:h-25 rounded-xl"
                          src={photo}
                          alt=""
                        />
                      </div>
                    );
                  })}
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

const HomepageComponent = (props) => {
  return (
    <div className="mx-auto max-w-[800px] md:px-0 px-5">
      <div className="w-full">
        {/* {JSON.stringify(props.trips)} */}
        <Title />
        <Input input={props.input} setInput={props.setInput} />
        <SearchResult trips={props.trips} />
      </div>
    </div>
  );
};

export default HomepageComponent;


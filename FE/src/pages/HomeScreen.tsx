import { useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { MdBookmark, MdLink, MdThumbUpOffAlt } from "react-icons/md";
import { getWebData, likeWebData } from "../api/API";

const HomeScreen = () => {
  //   const data = Array.from({ length: 12 });

  const [data, setData] = useState([]);

  useEffect(() => {
    getWebData().then((res: any) => {
      setData(res);
    });
  }, []);

  return (
    <div className="mt-10 p-5 pt-0 gap-5 grid grid-cols-5">
      {data.map((el: any) => (
        <div className=" border rounded-lg min-h-[400px] p-4">
          <div className="flex items-center justify-between">
            <img className="w-10 h-10 rounded-full border" src="" alt="" />

            <div>
              <FaEllipsisV />
            </div>
          </div>

          <div className="text-[20px] font-bold mt-3">{el?.title}</div>

          <div className="flex ">
            <div className="text-[14px] border px-2 rounded-md mt-2">#MAN</div>
          </div>

          <div className="flex mt-3 items-center gap-2">
            <p>20 Mins Ago</p>
            <div className="w-1 h-1 bg-black rounded-full" />
            <p>{el?.readTime}</p>
          </div>

          <img
            src={el?.image}
            className="w-full object-cover rounded-lg border h-[140px]"
            alt=""
          />

          <div className="flex w-full justify-between items-center text-[20px] mt-2">
            <div
              className="flex items-center gap-2 hover:text-slate-600 cursor-pointer transition-all duration-300"
              onClick={() => likeWebData(el?._id)}
            >
              <MdThumbUpOffAlt />
              <div>{el?.likes.length}</div>
            </div>
            <div className="flex items-center gap-4">
              <MdBookmark />
              <MdLink />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;

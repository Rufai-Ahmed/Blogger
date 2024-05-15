import {
  FaUsers,
  FaComments,
  FaFire,
  FaArrowAltCircleUp,
  FaSearch,
  FaHandHoldingHeart,
  FaPlusSquare,
  FaBookmark,
  FaHistory,
  FaPauseCircle,
  FaCog,
  FaFileAlt,
  FaScroll,
  FaCommentAlt,
  FaPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../global/ContextProvider";
import { useContext } from "react";

const Sider = () => {
  const siderData = [
    {
      title: "Squads",
      data: [
        {
          icon: <FaUsers />,
          title: "Public Squads",
          url: "#",
        },
        {
          icon: <FaPlus />,
          title: "New Squads",
          url: "#",
        },
      ],
    },
    {
      title: "Discover",
      data: [
        {
          icon: <FaComments />,
          title: "Discussions",
          url: "#",
        },
        {
          icon: <FaFire />,
          title: "Popular",
          url: "#",
        },
        {
          icon: <FaArrowAltCircleUp />,
          title: "Most Up-Voted",
          url: "#",
        },
        {
          icon: <FaSearch />,
          title: "Search",
          url: "#",
        },
      ],
    },
    {
      title: "Contribute",
      data: [
        {
          icon: <FaHandHoldingHeart />,
          title: "Community Picks",
          url: "#",
        },
        {
          icon: <FaPlusSquare />,
          title: "Suggest new source",
          url: "#",
        },
      ],
    },
    {
      title: "Manage",
      data: [
        {
          icon: <FaBookmark />,
          title: "Bookmarks",
          url: "/bookmarks",
        },
        {
          icon: <FaHistory />,
          title: "History",
          url: "#",
        },
        {
          icon: <FaPauseCircle />,
          title: "Pause new tab",
          url: "#",
        },
        {
          icon: <FaCog />,
          title: "Customize",
          url: "#",
        },
      ],
    },
  ];

  const otherData = [
    {
      icon: <FaFileAlt />,
      title: "Docs",
      url: "#",
    },
    {
      icon: <FaScroll />,
      title: "Changelogs",
      url: "#",
    },
    {
      icon: <FaCommentAlt />,
      title: "Feedback",
      url: "#",
    },
  ];

  const { toggle, setToggled } = useContext(GlobalContext);

  return (
    <div
      className={`flex flex-col h-full py-3 `}
      onMouseEnter={() => setToggled(true)}
      onMouseLeave={() => setToggled(false)}
    >
      <Link
        to="/"
        className="flex text-[15px] justify-start pl-4 items-center gap-2 cursor-pointer hover:bg-slate-700 py-3 transition-all duration-300 hover:text-white"
      >
        <img
          src="https://cdn.dribbble.com/userupload/14230881/file/original-0f7934043d4ca14f09326b424fc6909a.png?crop=0x85-2004x1588&resize=320x240&vertical=center"
          className="w-5 h-5 rounded-md object-cover"
          alt=""
        />
        <div>My Feed</div>
      </Link>

      <div className="space-y-3 p-4">
        {siderData.map((el, i: number) => (
          <div>
            <div className={`${toggle ? "text-[13px]" : "text-[15px]"}`}>
              {el.title}
            </div>
            <div className="">
              {el.data.map((props) => (
                <Link
                  key={i}
                  to={props?.url}
                  className="flex text-[15px] justify-start pl-4 items-center gap-2 cursor-pointer hover:bg-slate-700 py-3 transition-all duration-300 hover:text-white "
                >
                  <div className="text-[20px]">{props.icon}</div>
                  <div>{!toggle && props.title}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1" />
      <div>
        {otherData.map((el: any, i: number) => (
          <Link
            key={i}
            to={el?.url}
            className="flex text-[15px] justify-start pl-4 items-center gap-2 cursor-pointer hover:bg-slate-700 py-3 transition-all duration-300 hover:text-white "
          >
            <div className="text-[20px]">{el.icon}</div>
            <div>{!toggle && el.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sider;

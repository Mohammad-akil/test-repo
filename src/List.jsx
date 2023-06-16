import { useState, useEffect, useContext } from "react";
import ListIteem from "./ListIteem";

import { useDispatch } from "react-redux";
import { add } from "./features/listSlice";

const List = () => {
  const dispatch = useDispatch();
  const [pageLength, setpageLength] = useState(10);
  const [list, setlist] = useState([]);
  const [url, setUrl] = useState(
    `https://api.github.com/users?per_page=${pageLength}`
  );
  const [notAvailable, setNotAvailable] = useState(false);
  const [data, setData] = useState([]);
  const fetchUserDetails = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  const handleNextClick = () => {
    if (pageLength !== 100) {
      setpageLength(pageLength + 10);
      setUrl(`https://api.github.com/users?per_page=${pageLength}`);
    } else {
      setNotAvailable(true);
    }
  };

  const handleChecked = (item) => {
    setlist((prev) => {
      return [...prev, item];
    });
    dispatch(add(item));
  };

  console.log(list);
  useEffect(() => {
    fetchUserDetails();
  }, [pageLength]);

  return (
    <>
      {data &&
        data.map((item) => (
          <ListIteem key={item.id} item={item} handleChecked={handleChecked} />
        ))}

      {notAvailable && (
        <h1 className="text-center text-xl">Data not available</h1>
      )}
      {!notAvailable && (
        <div className="flex justify-between items-center ">
          <button className="button-5" onClick={handleNextClick}>
            loadmore
          </button>
        </div>
      )}
    </>
  );
};

export default List;

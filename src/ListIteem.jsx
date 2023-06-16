const ListIteem = ({ item, handleChecked }) => {
  return (
    <div>
      <div key={item?.id} className=" wrapper border my-3 ">
        <span>{item?.login}</span>
        <img className="image" src={item?.avatar_url} alt={item?.login} />
        <input type="checkbox" onChange={() => handleChecked(item)} />
      </div>
    </div>
  );
};

export default ListIteem;

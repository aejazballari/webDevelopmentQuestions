import { useEffect, useState } from "react";

const checklist = [
  { id: 1, name: "list1" },
  { id: 2, name: "list2" },
  { id: 3, name: "list3" },
  { id: 4, name: "list4" },
  { id: 5, name: "list5" },
  { id: 6, name: "list6" },
];

const Multiselect = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(checklist);
  }, [list]);
  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setSelectedItems(list.map((item) => item.id));
    if (isCheckAll) {
      setSelectedItems([]);
    }
  };

  const handleClick = (e) => {
    setSelectedItems(
      selectedItems.filter((item) => item !== parseInt(e.target.id))
    );
    if (e.target.checked) {
      setSelectedItems([...selectedItems, parseInt(e.target.id)]);
    }
  };
  console.log(selectedItems);
  return (
    <div>
      <input
        type="checkbox"
        id="selectall"
        value="Select All"
        onChange={handleSelectAll}
        checked={isCheckAll}
      />
      <label htmlFor="selectall">Select All</label>
      <div>
        {checklist.map((item) => {
          return (
            <div key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.name}
                onChange={handleClick}
                checked={selectedItems.includes(item.id)}
              />
              <label htmlFor={item.id}>{item.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Multiselect;

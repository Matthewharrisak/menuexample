import { useState } from "react";

export const LeftMenuContent = ({ handlePageChange, menuData }) => {
  const [open, setOpen] = useState({});
  const [selected, setSelected] = useState(null);

  const handleClick = (id) => {
    setOpen({ ...open, [id]: !open[id] });
    setSelected(id);
    handlePageChange(id);
  };

  // if depth is greater then 1 then we need to pass those items
  //to display on a right menu
  const renderItems = (items, depth = 0) => {
    return items.map((item) => {
      const shouldRender = item.children.length > 0 && depth < 1 && open[item.id];
      const isSelected = selected === item.id;

      return (
        <div key={item.id}>
          <div
            style={{
              paddingLeft: depth * 20,
              backgroundColor: isSelected ? "lightgray" : "white",
            }}
            onClick={() => handleClick(item.id)}
          >
            {item.title}
          </div>

          {shouldRender && renderItems(item.children, depth + 1)}
        </div>
      );
    });
  };
  return <div>{renderItems(menuData)}</div>;
};

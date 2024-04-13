import { useState } from "react";

export const RightMenuContent = ({ pageToDisplay }) => {
  const [open, setOpen] = useState({});

  const [selected, setSelected] = useState(null);
  const handleClick = (id) => {
    setOpen({ ...open, [id]: !open[id] });
    setSelected(id);
  };

  const renderItems = (items, depth = 0) => {
    return items.map((item) => {
      const shouldRender = item.children.length > 0 && depth < 3;
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
  return <div>{renderItems(pageToDisplay?.children)}</div>;
};
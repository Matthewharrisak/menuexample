import { PersistentDrawer } from "../../components/PersistentDrawer/PersistentDrawer";
import { useCallback, useState } from "react";
import { RightMenuContent } from "./RightMenuContent";
import { LeftMenuContent } from "./LeftMenuContent";
import { siteData } from "../../store";

export const BothMenus = () => {
  const [page, setPage] = useState("");

  const handlePageChange = useCallback((page: string) => {
    setPage(page);
  }, []);

  const searchChildrenById = (id: string, children) => {
    for (const child of children) {
      if (child.id === id) {
        return child;
      }
      if (child.children) {
        const foundChild = searchChildrenById(id, child.children);
        if (foundChild) {
          return foundChild;
        }
      }
    }
    return [];
  };

  const pageToDisplay = searchChildrenById(page, siteData);
  return (
    <div>
      <PersistentDrawer
        anchorPosition={"left"}
        menuContent={<LeftMenuContent handlePageChange={handlePageChange} menuData={siteData} />}
      />
      {pageToDisplay.id && (
        <PersistentDrawer
          anchorPosition={"right"}
          startPosition={true}
          menuContent={<RightMenuContent pageToDisplay={pageToDisplay} />}
        />
      )}
    </div>
  );
};

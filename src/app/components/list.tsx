import React from "react";

export const List = ({
  items,
  numColumns,
}: {
  items: string[];
  numColumns: number;
}) => {
  const columns: string[][] = [];
  for (let i = 0; i < numColumns; i++) {
    columns.push([]);
  }

  items.forEach((item, index) => {
    columns[index % numColumns].push(item);
  });

  let classes = `grid grid-cols-1 lg:grid-cols-${numColumns}`;

  if (numColumns > 2) {
    classes += " md:grid-cols-2";
  }

  return (
    <ul className={classes}>
      {columns.map((column, colIndex) => (
        <div key={colIndex}>
          {column.map((item, index) => (
            <li key={item} className="flex items-start gap-2 mb-5">
              <span className="material-symbols-outlined flex rounded-full mt-1 md:mt-0 text-xlmd:text-32px bg-darkGreen text-black">
                done
              </span>
              <span className="font-ibm-plex-sans-700 text-xl">{item}</span>
            </li>
          ))}
        </div>
      ))}
    </ul>
  );
};

export default List;

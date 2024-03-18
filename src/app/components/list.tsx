import React from 'react';

export const List = ({ items, numColumns }: { items: string[]; numColumns: number }) => {
    const columns: string[][] = [];
    for (let i = 0; i < numColumns; i++) {
        columns.push([]);
    }

    items.forEach((item, index) => {
        columns[index % numColumns].push(item);
    });

    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {columns.map((column, colIndex) => (
                <div key={colIndex}>
                    {column.map((item, index) => (
                        <li className="flex items-center gap-2 mb-5">
                            <span className="material-symbols-outlined flex rounded-full text-32px bg-darkGreen text-black">
                                done
                            </span>
                            <span className='font-ibm-plex-sans-700 text-xl'>{item}</span>
                        </li>
                    ))}
                </div>
            ))}
        </ul>
    );
};

export default List;

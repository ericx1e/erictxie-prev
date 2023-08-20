import React from 'react';

function CellLines({ attachedCells, cells, cellSize }) {
    return (
        <svg className="cell-lines">
            {attachedCells.map(([index1, index2, distance]) => (
                <line
                    key={`${index1}-${index2}`}
                    x1={cells[index1].x + cellSize / 2}
                    y1={cells[index1].y + cellSize / 2}
                    x2={cells[index2].x + cellSize / 2}
                    y2={cells[index2].y + cellSize / 2}
                    style={{
                        stroke: "#777",
                        strokeWidth: `${(3 - distance / 34)}px`,
                        strokeOpacity: `${(1 - distance / 100)}`
                    }}
                />
            ))}
        </svg>
    );
}

export default CellLines;
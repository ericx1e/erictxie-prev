// BouncingCells.js
import React, { useEffect, useState } from 'react';
import './BouncingCells.css';
import CellLines from './CellLines'; // Import the CellLines component

function BouncingCells() {
    const numberOfCells = 150;
    const cellSize = 10;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const [cells, setCells] = useState(Array.from({ length: numberOfCells }, () => ({
        x: Math.random() * screenWidth,
        y: Math.random() * screenHeight,
        speedX: (Math.random() - 0.5) * 2, // Random speed in X direction
        speedY: (Math.random() - 0.5) * 2, // Random speed in Y direction
    })));

    useEffect(() => {
        const moveCells = () => {
            setCells(prevCells =>
                prevCells.map(cell => {
                    const newX = cell.x + cell.speedX;
                    const newY = cell.y + cell.speedY;

                    return {
                        ...cell,
                        x: newX >= screenWidth + cellSize ? newX - screenWidth : newX < -cellSize ? newX + screenWidth : newX,
                        y: newY >= screenHeight + cellSize ? newY - screenHeight : newY < -cellSize ? newY + screenHeight : newY,
                    };
                })
            );

            requestAnimationFrame(moveCells);
        };

        requestAnimationFrame(moveCells);

        return () => cancelAnimationFrame(moveCells);
    }, []);

    const getAttachedCells = () => {
        const attachedCells = [];

        for (let i = 0; i < cells.length; i++) {
            for (let j = i + 1; j < cells.length; j++) {
                const dx = cells[i].x - cells[j].x;
                const dy = cells[i].y - cells[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    attachedCells.push([i, j]);
                }
            }
        }

        return attachedCells;
    };

    const attachedCells = getAttachedCells();

    return (
        <div className="bouncing-cells">
            {attachedCells.length > 0 && <CellLines attachedCells={attachedCells} cells={cells} cellSize={cellSize} />}
            {cells.map((cell, index) => (
                <div
                    className="cell"
                    key={index}
                    style={{
                        left: `${cell.x}px`,
                        top: `${cell.y}px`,
                        width: `${cellSize}px`,
                        height: `${cellSize}px`,
                    }}
                />
            ))}
        </div>
    );
}

export default BouncingCells;

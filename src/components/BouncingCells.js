// BouncingCells.js
import React, { useEffect } from 'react';

const BouncingCells = () => {
    const numCells = 10;
    const maxVelocity = 2;

    useEffect(() => {
        const animationContainer = document.getElementById("animation-container");

        const createCell = () => {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            animationContainer.appendChild(cell);

            const position = {
                x: Math.random() * animationContainer.offsetWidth,
                y: Math.random() * animationContainer.offsetHeight,
            };

            const velocity = {
                x: (Math.random() - 0.5) * maxVelocity,
                y: (Math.random() - 0.5) * maxVelocity,
            };

            const updatePosition = () => {
                position.x += velocity.x;
                position.y += velocity.y;

                if (position.x <= 0 || position.x >= animationContainer.offsetWidth) {
                    velocity.x *= -1;
                }

                if (position.y <= 0 || position.y >= animationContainer.offsetHeight) {
                    velocity.y *= -1;
                }

                cell.style.transform = `translate(${position.x}px, ${position.y}px)`;
                requestAnimationFrame(updatePosition);
            };

            requestAnimationFrame(updatePosition);
        };

        for (let i = 0; i < numCells; i++) {
            createCell();
        }
    }, []);

    return (
        <div className="animation-container" id="animation-container">
        </div>
    );
};

export default BouncingCells;

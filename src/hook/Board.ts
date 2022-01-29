import { useState } from 'react';

const useBoard: () => [number[], (x: number, y: number) => void] = () => {
  const [knightPosition, setKnightPosition] = useState<[number, number]>([
    2, 2,
  ]);

  function canMoveKnight(toX: number, toY: number) {
    const [x, y] = knightPosition;
    const dx = toX - x;
    const dy = toY - y;

    return (
      (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    );
  }
  const moveKnight = (x: number, y: number) => {
    if (canMoveKnight(x, y)) {
      console.log('yea can move knight');
      setKnightPosition([x, y]);

      console.log(knightPosition);
    }
  };

  return [knightPosition, moveKnight];
};
export default useBoard;

export const ItemTypes = {
  KNIGHT: 'knight',
};

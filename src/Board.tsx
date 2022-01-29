import { VFC } from 'react';
import { useDrop } from 'react-dnd';
import useBoard, { ItemTypes } from './hook/Board';
import Knight from './Knight';
import BoardSquare from './Square';

type renderSquareProps = {
  i: number;
};

const RenderSquare: VFC<renderSquareProps> = (props) => {
  const x = props.i % 8;
  const y = Math.floor(props.i / 8);
  const [, moveeknight] = useBoard();

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      drop: () => moveeknight(x, y),
      collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    }),
    [x, y],
  );

  return (
    <div
      ref={drop}
      onClick={() => moveeknight(x, y)}
      key={props.i}
      style={{ width: '12.5%', height: '20px' }}
    >
      <BoardSquare x={x} y={y} isOver={isOver} />
    </div>
  );
};

export const Board: VFC = () => {
  const squares: number[] = Array(64);
  for (let i = 0; i < 64; i++) {
    squares.push(i);
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {squares.map((index) => (
        <RenderSquare i={index} />
      ))}
    </div>
  );
};

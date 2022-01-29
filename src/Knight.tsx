import { VFC } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './hook/Board';

const Knight: VFC = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      <span>♘</span>
    </div>
  );
};

export default Knight;

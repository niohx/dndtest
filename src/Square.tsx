import { ReactNode, VFC } from 'react';
import { useDrop } from 'react-dnd';
import useBoard, { ItemTypes } from './hook/Board';
import Knight from './Knight';

interface Props {
  x: number;
  y: number;
  children?: ReactNode;
}

// export const Square: VFC<Props> = (props) => {
//   const black = (props.x + props.y) % 2 === 1;

//   const fill = black ? 'black' : 'white';
//   const stroke = black ? 'white' : 'black';

//   return (
//     <div
//       style={{
//         backgroundColor: fill,
//         color: stroke,
//         width: '100%',
//         height: '100%',
//       }}
//     >
//       {props.children}
//     </div>
//   );
// };

interface BoardProps {
  x: number;
  y: number;
  moveKnight?: (x: number, y: number) => void;
  isOver: boolean;
  children?: ReactNode;
}

const BoardSquare: VFC<BoardProps> = (props) => {
  const [knightPosition, moveknight] = useBoard();
  console.log(knightPosition);
  const black = (props.x + props.y) % 2 === 1;
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';
  const isKnightHere =
    knightPosition[0] === props.x && knightPosition[1] === props.y;

  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%',
      }}
      onClick={() => {
        moveknight(props.x, props.y);
      }}
    >
      {isKnightHere ? <Knight /> : null}

      {props.isOver && (
        <div
          style={{
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />
      )}
    </div>
  );
};

export default BoardSquare;

// type renderSquareProps={x:number,y:number,knightPosition:knightPosition}

// export const renderSquare:VFC<renderSquareProps>=(props)=>{
//     const black:boolean = (props.x+props.y)%2 ===1;
//     const isKnightHere = props.knightPosition[0] === props.x && props.knightPosition[1] ===props.y;
//     const piece = isKnightHere? <Knight />:null;
//     return <Square black={black}>{piece}</Square>

// }

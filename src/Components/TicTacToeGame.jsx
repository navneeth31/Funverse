/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';

const TicTacToeGame = () => {
  const [gameMode, setGameMode] = useState(null);
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState(null);

  const handlePlayerChange = (e, playerNumber) => {
    const playerName = e.target.value;
    if (playerNumber === 1) {
      setPlayer1(playerName);
    } else {
      setPlayer2(playerName);
    }
  };

  const handleSquareClick = (index) => {
    if (winner || board[index] !== '' || (gameMode === 'computer' && currentPlayer === 'O')) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
    setCurrentPlayer(nextPlayer);

    checkWinner(newBoard, currentPlayer);
  };

  const checkWinner = (board, currentPlayer) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] === currentPlayer && board[b] === currentPlayer && board[c] === currentPlayer) {
        setWinner(currentPlayer);
        return;
      }
    }

    if (board.every(square => square !== '')) {
      setWinner('draw');
    }
  };

  useEffect(() => {
    if (gameMode === 'computer' && currentPlayer === 'O' && !winner) {
      const availableSquares = board.map((val, index) => (val === '' ? index : null)).filter(val => val !== null);
      const randomMove = availableSquares[Math.floor(Math.random() * availableSquares.length)];

      if (randomMove !== null) {
        const newBoard = [...board];
        newBoard[randomMove] = 'O';
        setBoard(newBoard);
        checkWinner(newBoard, 'O');
        setCurrentPlayer('X');
      }
    }
  }, [currentPlayer, gameMode, board, winner]);

  const resetGame = () => {
    setGameMode(null);
    setPlayer1('');
    setPlayer2('');
    setCurrentPlayer('X');
    setBoard(Array(9).fill(''));
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="absolute top-20 left-5 m-4">
        <button type="button" className="bg-zinc-200 text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group">
          <a href='/'>
            <div className="bg-red-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute right-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                ></path>
                <path
                  fill="#000000"
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                ></path>
              </svg>
            </div>
          </a>
          <a className="translate-x-0" href='/'>Go Back</a>
        </button>
      </div>
      {!gameMode && (
        <div className="space-y-4 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8">Choose Game Mode</h1>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group" onClick={() => setGameMode('player')}>
              <span className="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Player vs Player
            </button>
            <button className="bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group" onClick={() => setGameMode('computer')}>
              <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Player vs Computer
            </button>
          </div>
        </div>
      )}
      {gameMode && (
        <>
          <h1 className="text-2xl sm:text-3xl font-bold mb-8">Tic Tac Toe</h1>
          {!winner && (
            <div className="mb-4 space-y-2 text-center">
              <p>Player 1 (X): <input type="text" value={player1} onChange={(e) => handlePlayerChange(e, 1)} className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-rose-400" /></p>
              {gameMode === 'player' && (
                <p>Player 2 (O): <input type="text" value={player2} onChange={(e) => handlePlayerChange(e, 2)} className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-green-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-green-400" /></p>
              )}
            </div>
          )}
          {winner && (
            <div className="mb-4 text-center">
              <p className="text-xl font-bold">
                {winner === 'draw' ? 'It\'s a draw!' : `${winner === 'X' ? player1 : (gameMode === 'computer' ? 'Computer' : player2)} wins!`}
              </p>
            </div>
          )}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 backdrop-blur">
            {board.map((square, index) => (
              <div key={index} onClick={() => handleSquareClick(index)} className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 border border-gray-400 flex items-center justify-center text-lg sm:text-2xl md:text-3xl font-bold cursor-pointer">
                {square}
              </div>
            ))}
          </div>
          <div className='pt-6'>
            <button className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95" onClick={resetGame}>
              <span className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#B931FC] text-white rounded-[14px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    d="M8 13V9m-2 2h4m5-2v.001M18 12v.001m4-.334v5.243a3.09 3.09 0 0 1-5.854 1.382L16 18a3.618 3.618 0 0 0-3.236-2h-1.528c-1.37 0-2.623.774-3.236 2l-.146.292A3.09 3.09 0 0 1 2 16.91v-5.243A6.667 6.667 0 0 1 8.667 5h6.666A6.667 6.667 0 0 1 22 11.667Z"
                  ></path></svg
                >Play Again</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TicTacToeGame;

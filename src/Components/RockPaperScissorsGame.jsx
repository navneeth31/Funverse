import { useState } from 'react';

const RockPaperScissors = () => {
  const [player1, setPlayer1] = useState('');
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState(null);

  const handlePlayerChange = (e, player) => {
    if (player === 1) setPlayer1(e.target.value);
  };

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    setComputerChoice(computerChoice);

    if (choice === computerChoice) {
      setWinner('draw');
    } else if (
      (choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')
    ) {
      setWinner(player1);
    } else {
      setWinner('Computer');
    }
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
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
      <h1 className="text-3xl font-bold mb-8 text-center">Rock Paper Scissors</h1>
      {!playerChoice && (
        <div className="mb-4">
          <p className="mb-2">Enter your Name: <input className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-green-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-green-400" type="text" value={player1} onChange={(e) => handlePlayerChange(e, 1)} /></p>
        </div>
      )}
      {playerChoice && (
        <div className="mb-4 text-center">
          <p className="text-xl font-bold">{winner === 'draw' ? 'It\'s a draw!' : `${winner} wins!`}</p>
          <p>Your choice: {playerChoice}</p>
          <p>Computer choice: {computerChoice}</p>
        </div>
      )}
      {!playerChoice && (
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button onClick={() => handlePlayerChoice('rock')} className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold">Rock</button>
          <button onClick={() => handlePlayerChoice('paper')} className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold">Paper</button>
          <button onClick={() => handlePlayerChoice('scissors')} className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold">Scissors</button>
        </div>
      )}
      <div className='pt-6'>
            <button className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95" onClick={resetGame}>
              <span className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#B931FC] text-white rounded-[14px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path
                    d="M8 13V9m-2 2h4m5-2v.001M18 12v.001m4-.334v5.243a3.09 3.09 0 0 1-5.854 1.382L16 18a3.618 3.618 0 0 0-3.236-2h-1.528c-1.37 0-2.623.774-3.236 2l-.146.292A3.09 3.09 0 0 1 2 16.91v-5.243A6.667 6.667 0 0 1 8.667 5h6.666A6.667 6.667 0 0 1 22 11.667Z"
                  ></path></svg
                >Play Again</span>
            </button>
          </div>
    </div>
  );
};

export default RockPaperScissors;

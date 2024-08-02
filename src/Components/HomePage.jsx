import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome!!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        <Link to="/TicTacToeGame">
          <div className="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
            <div className="w-52 h-40 bg-sky-300 rounded-2xl">
              <img
                  src="https://images.pexels.com/photos/11986168/pexels-photo-11986168.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Tic Tac Toe"
                  className="w-full h-40 object-cover rounded-2xl"
                />
            </div>
            <div className="">
                <p className="font-extrabold">Tic Tac Toe</p>
                <p className="">Play Tic Tac Toe against a friend or the computer!</p>
            </div>
            <button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">Wana Play?</button>
          </div>
        </Link>
        <Link to="/RockPaperScissorsGame">
          <div className="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
            <div className="w-52 h-40 bg-sky-300 rounded-2xl">
              <img
                  src="https://images.pexels.com/photos/4472822/pexels-photo-4472822.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Rock Paper Scissors"
                  className="w-full h-40 object-cover rounded-2xl"
                />
            </div>
            <div className="">
                <p className="font-extrabold">Rock Paper Scissors</p>
                <p className="">Challenge your friends in Rock Paper Scissors!</p>
            </div>
            <button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">Wana Play?</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

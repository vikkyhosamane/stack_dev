function WelcomeMessage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <h1 className="font-space-grotesk text-4xl font-black">Welcome to the world of Next js</h1>
        <p className="mt-4 text-xl font-semibold">Welcome Another Font</p>
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <WelcomeMessage />
    </div>
  );
};

export default Home;

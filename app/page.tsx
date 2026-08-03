function WelcomeMessage() {
  return <h1 className="text-3xl text-white font-black">Welcome to the world of Next js</h1>;
}

const Home = () => {
  return (
    <div>
      <WelcomeMessage />
    </div>
  )
}

export default Home;


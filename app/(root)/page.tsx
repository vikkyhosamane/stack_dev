import { auth } from "@/auth";
import LogoutButton from "@/components/auth/LogoutButton";

const Home = async () => {
  const session = await auth();
  console.log("Session:", session);

  return (
    <>
      <div>Welcome Another Font</div>
      <div className="px-10 pt-25">
        <LogoutButton />
      </div>
    </>
  );
};

export default Home;

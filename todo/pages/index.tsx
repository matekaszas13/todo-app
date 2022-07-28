import type { NextPage } from "next";
import Button from "../components/Button";

const Home: NextPage = () => {
  return (
    <div>
      <Button buttonName={"add todo"} />
    </div>
  );
};

export default Home;

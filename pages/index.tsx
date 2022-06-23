import type { NextPage } from "next";
import Welcome from "@/components/Welcome";
import Grid from "@/components/Grid";
import Card from "@/components/Card";
import MainContent from "@/components/MainContent";
import SvgBg from "@/components/SvgBg";

const Home: NextPage = () => {
  return (
    <div className="relative overflow-hidden">
      <Grid>
        <>
          <div className="fixed w-screen h-screen left-0 top-0">
            <Welcome text="WELCOME" />
          </div>
          <MainContent />
          <Card />
        </>
      </Grid>
      <SvgBg />
    </div>
  );
};

export default Home;

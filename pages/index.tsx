import type { NextPage } from "next";
import Welcome from "@/components/Welcome";
import Grid from "@/components/Grid";
import Card from "@/components/Card";
import MainContent from "@/components/MainContent";
import SvgBg from "@/components/SvgBg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home: NextPage = () => {
  return (
    <div className="relative overflow-hidden">
      <Grid>
        <>
          <MainContent />
          <Card />
          <div className="fixed w-screen h-screen left-0 top-0">
            <Welcome text="WELCOME" />
          </div>
        </>
      </Grid>
      <SvgBg />
    </div>
  );
};

export default Home;

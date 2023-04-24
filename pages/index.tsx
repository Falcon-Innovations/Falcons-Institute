
import {Fragment} from "react";
import Navbar from "@/components/shared/navbar";
import Container from "@/components/layout/container";
import {Hero} from "@/components/home/hero";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
    </Fragment>
  );
}



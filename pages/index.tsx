
import {Fragment} from "react";
import Navbar from "@/components/shared/navbar";
import {Hero} from "@/components/home/hero";
import {Courses} from "@/components/home/courses";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Courses />
    </Fragment>
  );
}



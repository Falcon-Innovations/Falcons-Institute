
import {Fragment} from "react";
import Navbar from "@/components/shared/navbar";
import {Hero} from "@/components/home/hero";
import {Courses} from "@/components/home/courses";
import {SubscribeToNewsletter} from "@/components/home/subscribe-to-newsletter";
import {Footer} from "@/components/shared/footer";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Courses />
      <SubscribeToNewsletter />
      <Footer />
    </Fragment>
  );
}



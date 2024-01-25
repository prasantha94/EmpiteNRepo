"use client"
import Address_bar from "@/Components/Address_bar";
import Capabilities from "@/Components/Capabilities";
import Contact from "@/Components/Contact";
import GoogleMapView from "@/Components/GoogleMapView";
import Hero from "@/Components/Hero";
import Showcase from "@/Components/Showcase";
import Smartworks from "@/Components/Smartworks";
import Testimonails from "@/Components/Testimonails";
import Video_tab from "@/Components/Video_tab";
import What_we_do from "@/Components/What_we_do";



export default function Home() {
  return (
    <>
  <Hero/>
  <What_we_do/>
  <Showcase/>
  <Capabilities/>
  <Video_tab/>
  <Contact/>
  <Testimonails/>
  <Smartworks/>
  <GoogleMapView/>
  <Address_bar/>
    </>

 
  )
}

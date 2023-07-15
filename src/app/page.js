import React from "react"
import Navbar from "../../components/navbar"
import Card from "../../components/card"
import Footer from "../../components/footer"
import Knowledge from "../../components/knowledge"

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="mt-8 max-w-sm md:max-w-lg container mx-auto">
        <Card title="Welcome!" imgSrc= {"../../images/profile.png"} body="Hi, I'm Md Auntor Shak, a strong engineering professional with a Bachelor's degree focused in Computer Science and Engineering from North South University. "/>
      </div>
      <Knowledge />
      <div className="mt-16 container mx-auto"> <Footer /> </div>
    </main>
  )
}

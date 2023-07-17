import React from "react"
import Navbar from "../../components/navbar"
import Card from "../../components/card"
import Footer from "../../components/footer"
import Contact from "../../components/contacts"
import Education from "../../components/education"

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Card title="Welcome!" imgSrc= {"../../images/profile.png"} body="Hi, I'm Md Auntor Shak, a strong engineering professional with a Bachelor's degree focused in Computer Science and Engineering from North South University. "/>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
    <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">Education</h2>
    </div>
       <Education />
    </div>
        <Contact />
        <Footer />
      <div>

      </div>
    </main>
  )
}

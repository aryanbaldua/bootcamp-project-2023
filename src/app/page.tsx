import styles from './page.module.css'
import "@/app/global.css"
import Image from 'next/image'
import sky from "@/app/images/sky.jpg"
import blogs from "@/app/blogData";

export default function Resume() {
  return (
    <div>
    <main>
        <h1 className="welcome">Welcome!</h1>
        <div className="about">
          <div className="about-image">
            <Image src={sky.src} width = {300} height = {500} alt="A picture of Aryan Baldua"></Image>
          </div>
          <div className="about-text">
            <p>
              Hi guys, my name is Aryan Baldua. I am a first year software engineering major.
               Some of my hobbies include playing basketball and spikeball, hanging out with my friends, 
               listening to music, and watching horror movies. I am excited to be a part of Hack4Impact!
            </p>
            
          </div>
        </div>
  </main>

    <footer className="footer">
        © 2023 Personal Website Name | All Rights Reserved
    </footer>
  </div>
  )
}

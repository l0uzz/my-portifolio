import { Header } from "@/components/header/header"
import "@/styles/home.scss"
import "./page.scss"

export default function Home() {
  return (

    <main className="container">
      <Header/>
    <div className="experience">
      <h3>Experience</h3>
      <p>text</p>
      <div className="experience-time">
        
      </div>
      <div className="Infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span> 🟥⬜🟦 - Intermediary</span>
            <span>🟩🟨 - Native Speak</span>
          </div>
          <h3>Education</h3>
          <div className="educational-info">
            <span>🎓Analysis and systems development - University Estácio de Sá</span>
          </div>
       </div>
       <div className="button">
        <div className="social">

        </div>
        <button>Contact me</button>
       </div>
      </div>
    </main>
  )
}

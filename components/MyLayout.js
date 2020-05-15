import Header from './Header'
import Link from "next/link"

export default function Layout(props) {
  return (
    <div>
      <Header />
      <div className="main" id="mainid">
        {props.children}
      </div>

      <style jsx>{`
      a{
        text-decoration:none;
        color:red;
      }
      .main{
        min-height: 50vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

            `}</style>


    </div>
  )

  

  


}
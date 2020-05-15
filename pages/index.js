
import Head from "next/head";
import Link from "next/link";
import MyLayout from "../components/MyLayout"
import Videos from "../components/Videos"


const Home = () => (
  <MyLayout>
    <Head>
      <title>Videocum/AnaSayfa</title>
      <link rel="icon" href="/icon.png" />
    </Head>
    <main>
      .......................yapım aşamasındadır.admin krambaqtus
      <Videos/>
    </main>
  </MyLayout>
)

export default Home

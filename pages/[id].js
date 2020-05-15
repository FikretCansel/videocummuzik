import { useRouter } from 'next/router';
import Layout from '../components/MyLayout';
import Videos from "../components/Videos"

export default function Post() {
  const router = useRouter();

  return (
    <Layout>
      <style jsx>{`
      @media screen and (max-width:900px){
      .videowindow{
        width:330px;
        height:270px;
      }
    }
      @media screen and (min-width:900px){
        .videowindow{
        width:899px;
        height:600px;
      }
    }
    `}</style>
      <div>
        <video className="videowindow" controls="controls">
        <source src={router.query.id+".mp4"} type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
        </video>
        <ul><h2>{router.query.id}</h2></ul>
      </div>
      <div className="Comments">
      <p>Yorumlar</p>

      

      </div>
    </Layout>
    
  );
}
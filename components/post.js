import { useRouter } from 'next/router';
import Layout from '../components/MyLayout';

const Content = () => {
  
  const router = useRouter();
  return (
    <>
      <div>
      <video width="500" height="250" controls="controls">
      <source src={router.query.title} type="video/mp4" />
      Tarayıcınız video etiketini desteklemiyor.
      </video>
      <ul><h2>{router.query.title}</h2></ul>
      </div>
    </>
  );
};

const Page = () => (
  <Layout>
    <Content />
  </Layout>
);

<style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .video{
        margin-top:25px;
      
      }
    `}</style>

export default Page;
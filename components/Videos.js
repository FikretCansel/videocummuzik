import Link from "next/link";

const PostLink=props=>(
      <div>
      <Link href="/[id]" as={`/${props.id}`}>
      <div className="videos">
          <img src={props.id+".png"} className="videoimg"/>
          <h2><a>{props.id}</a></h2>
        </div>
      </Link>
      <style jsx>{`
          .videos{
            border: 1px solid #DDD;
            margin-top:10px;
            padding:25px 25px;
            }
            .videos:hover{
            cursor:pointer;
            }

          @media screen and (min-width:1100px){
            .videoimg{
              width:800px;
              height:400px;
             }
          }
             @media screen and (max-width:1100px){
              .videoimg{
                width:370px;
                height:200px;
               }
          }
            `}</style>


    </div>
  );

  export default function Videos(props) {
      return(
          <div>
        
            <PostLink id="Future - Life Is Good ft. Drake"></PostLink>
            <PostLink id="Kazılı Kuyum"></PostLink>
            
            <PostLink id="Gazapizm-Unutulacak Dünler"></PostLink>
            
            </div>
      )
  }
  

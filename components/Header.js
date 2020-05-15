import Link from 'next/link'
import Head from 'next/head'
    const main={
        marginTop:50

    }

    const v={
        fontSize:50,
        fontFamily: "Lucida Console",
        
    }
    const ideocum={
        fontSize:25,
        color:"red",
        marginRight:50,
        style:"none"
    }
    
    
    

export default function Header(){
    
    return(
    <div>
        <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"></meta>
        </head>
        <body>
            <div className="header">
                    <ul className="headloc">
                        <Link href="./">
                        <a className="hrefIndex">
                            <a className="webnameV">V</a><a className="ideocu">ideocum</a>
                        </a>
                        </Link>
                    </ul>
                    <ul className="upmenuul">
            <Link href="./"><a className="upmenua">Ana Sayfa</a></Link>
            <Link href="./"><a className="upmenua">Katagori</a></Link>
            <Link href="./"><a className="upmenua">Trend</a></Link>
            </ul>
                
            </div>
            </body>
        <style jsx>{`
                *{
                    margin: 0px 0px;
                    padding: 0px 0px;
                }
                .header{
    
                    width:%100;;
                    height: 75px;
                    background:rgb(220, 20, 70);
                }
                  .upmenua{
                    margin-right:40px;
                  }
                  .upmenuul{
                    font-size:25px;
                    margin:auto;
                    position:relative;
                    top:20px;
                    left:20px;
                  }
                  .upmenua:hover{
                    margin-right:42px;
                    color:white;
                  }
                a{
                    color: inherit;
                    text-decoration: none;
                  }
                .sidebarBtn{
                    font-size:25px;
                    padding: 0px 10px;
                    margin-right: 20px;
                }
                .headloc{
                    margin-top:10px;
                    margin-left: 20px;
                    float:left;
                }
                .hrefIndex{
                    cursor:pointer;
                    title:Videocum Ana Sayfası;
                }
                .webnameV{
                    font-size:40px;
                }
                .ideocu{
                    font:Serif;
                    font-size:20px;
                    color:aliceblue;
                }
                .headSearch{
                    float:right;
                    margin:25px 10px;
                }
                @media screen and (max-width:1100px){
                    .upmenuul{
                        font-size:11px;
                        margin:auto;
                        position:relative;
                        top:35px;
                        left:16px;
                        color:white;
                      }
                      .ideocu{
                        font:Serif;
                        font-size:16px;
                        color:aliceblue;
                    }
                }
            

            `}</style>
    </div>
    )
}
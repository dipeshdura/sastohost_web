import content from '../../css/Content.module.css';
import {card} from './CardData';
import { TiCloudStorageOutline } from "react-icons/ti";

import '@fortawesome/fontawesome-free/css/all.css';

function Card() {
  return (
   <>
      <div className={content.content_card}>

{card.map((item,index)=>(
  
  <div key={index} className={content.card} style={item.background?{background:'black',color:'white !important'}:null}>
  <h3 
  style={{
    color:item.font?'white':'black',
    marginBottom:'12px'
  }}
  
  >
    {item.title}</h3>
  <h3 
  style={{
    color:item.font?'white':'black',
    marginBottom:'12px'
  }}
  >
    Rs.{item.price}/year</h3>
  <p 
  style={{
    color:item.font?'white':'black',
    marginBottom:'12px',
    letterSpacing:'0.2px'
  }}
   >
    {item.content}</p>
  <div className={content.offer_container}>
    <ul>
      <li className={content.list_item}
        style={{
          color:item.font?'white':'black'
        }}
        >
          <TiCloudStorageOutline style={{
            color:item.font?'white !important':'black !important'
          }} />
      {/* <i className="fa-solid fa-database"
           style={{
            color:item.font?'white':'black'
          }}
          ></i> */}
        {item.offer.storage}
        </li>
      <li className={content.list_item}
        style={{
          color:item.font?'white':'black'
        }}
        >
            <i className="fas fa-rocket"
                 style={{
                  color:item.font?'white':'black'
                }}
                ></i>
        {item.offer.bandwidth}
        </li>
      <li className={content.list_item} 
        style={{
          color:item.font?'white':'black'
        }}
        >
       <i className="fa-solid fa-envelope"
            style={{
              color:item.font?'white':'black'
            }}
            ></i>
        {item.offer.account}
        </li>
      <li className={content.list_item}
       style={{
        color:item.font?'white':'black'
      }}
       >
        <i className="fa-solid fa-users"
             style={{
              color:item.font?'white':'black'
            }}></i>

        {item.offer.customer_support}
        </li>
      <li className={content.list_item}
       style={{
        color:item.font?'white':'black'
      }}
       >
        {item.offer.sslc.status?
        <i className="fa-solid fa-file"
             style={{
          color:item.font?'white':'black'
        }}></i>:
        <i className="fa-regular fa-circle-xmark"
             style={{
          color:item.font?'white':'black'
        }}></i>
        }   
        {item.offer.backup.backup}
        </li>
      <li className={content.list_item}
      style={{
        color:item.font?'white':'black'
      }}
       
       >
        {item.offer.sslc.status?
         <i className="fa-solid fa-award"
              style={{
          color:item.font?'white':'black'
        }}></i>
         :
         <i className="fa-regular fa-circle-xmark"
              style={{
          color:item.font?'white':'black'
        }}></i>
        }   
        {item.offer.sslc.sslc}</li>

      <li className={content.list_item}
      style={{
        display:item.offer.database_support?'flex':'none',
        color:item.font?'white':'black',
      }}
       >
        <i className="fa-regular fa-circle-check"
        style={
          {color:item.font?'white':'black'}
        }></i>
        {item.offer.database_support} </li>

      <li className={content.list_item}
          style={{
            display:item.offer.adSecuirty?'flex':'none',
            color:item.font?'white':'black',
          }}
       >
        <i className="fa-solid fa-shield-halved"
        style={
          {color:item.font?'white':'black'}
        }></i>
        {item.offer.adSecuirty}</li>

      <li className={content.list_item}
          style={{
            display:item.offer.dedIpaddress?'flex':'none',
            color:item.font?'white':'black',
          }}
       >
        <i className="fa-solid fa-server"
        style={
          {color:item.font?'white':'black'}
        }></i>
        {item.offer.dedIpaddress}</li>

    </ul>
  </div>
  <div className={content.additional_feature}>
    <p>Additional Features:</p>
    <p>{item.features}</p>
  </div>
  <div className={content.choose_container}>
    <button className={content.choose_btn}>Choose</button>
  </div>
</div>
  ))}


</div>
   </>
  )
}

export default Card
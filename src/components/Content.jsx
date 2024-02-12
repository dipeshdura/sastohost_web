import Card from './Card/Card';
import content from '../css/Content.module.css';

export default function Content() {
  return (
    <>
    <div className={content.content_container}>
    <div className={content.content_text}>
            <h2>Select the Best Web Hosting Plan <br/> for Your Website</h2>
            <p>From basic to advanced, we have a web hosting plan that's right for you.<br/> Compare our options and select the one that meets your needs.</p>
          </div>
        <div className={content.content}>
        
          <div className={content.content_box}>  
         <Card/>
          </div>
      
        </div>
    </div>
    </>
  )
}

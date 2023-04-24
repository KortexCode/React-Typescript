import { RandomFox } from '@/components/RandomFox';
import { useState } from 'react';

const randomNum = ()=> Math.floor(Math.random()*123 + 1);

const randomId = ()=> Math.random().toString(36).substring(2, 9);

type ApiFox = {
  id: string,
  url: string
}

export default function Home() {
//También se puede escribir useState<Array<string>>
  const [images, setImages] = useState<ApiFox[]>([
    {id:randomId(), url:`https://randomfox.ca/images/${randomNum()}.jpg`},
    {id:randomId(), url:`https://randomfox.ca/images/${randomNum()}.jpg`},
    {id:randomId(), url:`https://randomfox.ca/images/${randomNum()}.jpg`},
  ]);

  return (
    <div>
      <main>
        <p>Chikorita Papu!!</p>
        {images.map((item, index)=>
          (<div key={index} className='my-2'>
            <RandomFox url={item.url}>
              <figcaption>Fox id: {item.id}</figcaption>
            </RandomFox>
          </div>) 
        )}
      </main>

    </div>
  )
}

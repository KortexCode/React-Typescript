import { RandomFox } from '@/components/RandomFox';
import { useState } from 'react';
import type {MouseEventHandler} from 'react';

const randomNum = ()=> Math.floor(Math.random()*123 + 1);

const randomId = ()=> Math.random().toString(36).substring(2, 9);

//Ejemplo con types e interfaces
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

  const handleAddFox: MouseEventHandler<HTMLButtonElement>  = () => {  
    const newList: ApiFox[] = [...images];
    const newImage: ApiFox = {id:randomId(), url:`https://randomfox.ca/images/${randomNum()}.jpg`};
    newList.push(newImage);
    setImages(newList);
  }

  return (
    
      <main>
        <h1 className='fontSide-xl'>Chikorita Papu!!</h1>
        <div className='py-2 my-4'>
          <button className='ms-2 p-2 rounded-lg bg-red-300' onClick={handleAddFox}>Add new Fox</button>
        </div>
        <section className='w-full'>
          {images.map((item, index)=>
            (<div key={index} className='w-[80%] my-2 mx-auto grid grid-cols'>
              <RandomFox url={item.url}/>
            </div>) 
          )}
        </section>
      </main>

  
  )
}

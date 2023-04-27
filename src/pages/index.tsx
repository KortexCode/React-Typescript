import { LazyImage } from '@/components/LazyImage';
import { useState } from 'react';

import type {MouseEventHandler} from 'react';

const BG_IMG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
//Obtener un número aleatorio entre 1 y 123
const randomNum = ()=> Math.floor(Math.random()*123 + 1);
//Obtener un id aleatorio
const randomId = ()=> Math.random().toString(36).substring(2, 9);

export default function Home() {
//También se puede escribir useState<Array<string>>
  const [images, setImages] = useState<IApiFox[]>([
    {id:randomId(), url:`https://randomfox.ca/images/${randomNum()}.jpg`},
    {id:randomId(), url:`https://randomfox.ca/images/${randomNum()}.jpg`},
    {id:randomId(), url:`https://randomfox.ca/images/${randomNum()}.jpg`},
  ]);
  //FUnción que agrega fotos de zorros
  const handleAddFox: MouseEventHandler<HTMLButtonElement>  = () => {  
    const newList: IApiFox[] = [...images];
    const newImage: IApiFox = {id:randomId(), url:`https://randomfox.ca/images/${randomNum()}.jpg`};
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
              <LazyImage url={item.url} onLazyLoad={(node: HTMLImageElement | null):void => {
                console.log("imagen cargada")
              }} onClick={()=>console.log("gg")} width={320} height={"auto"} 
              className="mt-3 bg-gray-300"  alt="fox img" src={BG_IMG}/>  
            </div>) 
          )}
        </section>
      </main>

  
  )
}

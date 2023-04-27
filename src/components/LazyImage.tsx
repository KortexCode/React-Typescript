import type { ImgHTMLAttributes } from "react";
import { useObserver } from "@/hooks/useObserver";
import React, { useEffect } from "react";
import { useRef } from "react";


//Tipado para la url del atriibuto src de la etiqueta img
type lazyImagePro = {
    url: string;
    onLazyLoad: (arg:HTMLImageElement | null) => void;
}
//Tipado dinámico para los atributos pasados como props a la etiqueta img
type ImageNativeAttributes = ImgHTMLAttributes<HTMLImageElement>;
//Tipado para el objeto Prop del componente
type Props = lazyImagePro & ImageNativeAttributes;

//Componente LazyImage
function LazyImage({ url, onLazyLoad, ...imgAtrributes }: Props): JSX.Element {
  
    const node = useRef<HTMLImageElement>(null);
    useEffect(() => {
        const imgNodeObserver = node.current;
        const observer: IntersectionObserver = useObserver(url, onLazyLoad, imgNodeObserver);
        const imgNode = node.current as Element;
        observer.observe(imgNode);

        return () => {
            observer.disconnect();
        }
    }, [url]);

    return (
        <img ref={node} {...imgAtrributes}/>
    )
}
export { LazyImage }


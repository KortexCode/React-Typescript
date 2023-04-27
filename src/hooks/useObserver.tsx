
function useObserver(url: string, 
    onLoad: (arg:HTMLImageElement | null ) => void, 
    node: HTMLImageElement | null,
    ):IntersectionObserver
{
    
    const observer = new IntersectionObserver((entries)=>{

        entries.filter(entry => entry.isIntersecting).forEach(foxImg => {

            const  src: string = url;
      
            foxImg.target.setAttribute("src", src);
            onLoad(node);

            observer.unobserve(foxImg.target); 
        })
    }); 

    return observer
    
}

export {useObserver}
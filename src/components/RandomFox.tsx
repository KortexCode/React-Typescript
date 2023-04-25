
type props = {
    url: string;
}

function RandomFox({url}: props ) : JSX.Element{
    return (    
        <img src={url} alt="fox img" width={320} height={"auto"} className="mt-3"/>   
    )
}
export {RandomFox}
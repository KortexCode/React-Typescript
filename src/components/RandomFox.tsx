
type props = {
    url: string;
    children: JSX.Element | JSX.Element[];
}

function RandomFox({url, children}: props ) : JSX.Element{
    return (
    
        <figure>
            <img src={url} alt="fox img"
                width={320} height={"auto"} className="mt-3"/>
            {children}
        </figure>
       
    )
}
export {RandomFox}
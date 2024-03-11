const Loader = ({visible}) => {
    return (
        <>
        {visible ?
            <img className="h-10" src="img/loader.gif" alt="chargement" /> 
        : ""}
        </>
    )
}

export default Loader
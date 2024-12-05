

const Header = () => {
    const navigationBar = [
        'главная',
        'о нас',
        'ответы',
        'страница1',
        'страница2'
    ]

    const myFunck = () => {
        console.log('Hello World');
    }



    return (
        <>
            {navigationBar.map((item) => (
                <a href={item}>{item}</a>
            ))}

            <button onClick={myFunck}>Click</button>
        </>
    )
}

export default Header;
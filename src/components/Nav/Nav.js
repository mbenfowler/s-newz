import './Nav.scss'

export const Nav = ({ setQuery }) => {
    const handleQuery = (e) => {
        if (e.key === 'Enter') {
            setQuery(e.target.value)
        }
    } 

    return (
        <nav>
            <div id='leftSideNav'>
                <h1>S-NEWZ</h1>
                <img id='sleepyImg' src={`${process.env.PUBLIC_URL}/images/sleepy.png`} />
            </div>
            <input className='search' onKeyDown={handleQuery} placeholder='Search...'></input>
        </nav>
    )
}

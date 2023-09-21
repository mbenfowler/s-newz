import './Nav.scss'

export const Nav = ({ setQuery }) => {
    const handleQuery = (e) => {
        if (e.key === 'Enter') {
            setQuery(e.target.value)
        }
    } 

    return (
        <nav>
            <h1>S-NEWZ</h1>
            <input className='search' onKeyDown={handleQuery} placeholder='Search...'></input>
        </nav>
    )
}

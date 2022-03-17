import classes from './RecentContentHeader.module.css';


const RecentContentHeader = () => {
    return <div className={classes.container}>
        <h2>RECENT CONTENT</h2>
        <ul>
            <li className={classes.active}>PHOTOS</li>
            <li>PROJECTS</li>
            <li>BOOKS</li>
        </ul>
    </div>
}

export default RecentContentHeader;
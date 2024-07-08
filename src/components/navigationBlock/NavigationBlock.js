import { Link, NavLink } from 'react-router-dom'
import './navigationBlock.scss'

const NavigationBlock = (props) => {
    
    return (
        <div class="top-bar">
            <div class="container">
                <div id="crumbs">
                    {props.type === "search" && <h1 style={{ margin: 0,}} class="page-title">Search Results for: {props.navigation}</h1>}
                        {
                        props.type === 'search' &&
                            <div>
                                <span>
                                    <Link to="/" as="a" href="">HOME</Link>
                                    <span className="seperator">></span>
                                </span>

                                <span>
                                    <a href="">{props.navigation}</a>
                                    <span className="seperator">></span>
                                </span>

                                <span>
                                    <a>{props.navigation}</a>
                                </span>
                            </div>
                        }
                        {
                        props.type === 'content' &&
                        <>
                            <div>
                                <span>
                                    <h2 className='page-title'>{`Search Results for "${props.navigation.title}"`}</h2>
                                </span>
                            </div>

                            <div>
                                <span>
                                    <Link to="/" as="a" href="">HOME</Link>
                                    <span className="seperator">></span>
                                </span>

                                <span>
                                    <a href="">{props.navigation.source}</a>
                                    <span className="seperator">></span>
                                </span>

                                <span>
                                    <a>{props.navigation.title}</a>
                                </span>
                            </div>
                        </>
                    }
                    {
                    props.type === 'categories' && 
                        <>  
                            <h2 style={{margin: '0 auto', fontSize: '35px'}} className="categories">{props.navigation}</h2>
                        </>
                    }
                    { props.type === 'other' && 
                        <>  
                            <h2 style={{margin: '0 auto', fontSize: '35px'}} className="categories">{props.title}</h2>
                        </>
                    }
                        
                </div>
            </div>
        </div>
    )
}

export default NavigationBlock
import "./index.scss";
import {useState} from "react";
import mockData from "../../mock-data/post-list-mock.json";

export default props => {
    const [postList, setPostList] = useState([...mockData]);
            
    return (
        <div className="post-list-container">
            {
                postList.map(
                    post=> {
                        return (
                             <div classNameName = "container">
                                <div className="card post-item" style={{width: "18rem"}} >
                                    <svg aria-label="Placeholder: Image cap" class="bd-placeholder-img card-img-top" height="180" preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                                    <div className="card-body">
                                        <h5 className="card-title">{post.postTitle}</h5>
                                        <p className="card-text">{post.postContent}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })} 
        </div>  
    )
}
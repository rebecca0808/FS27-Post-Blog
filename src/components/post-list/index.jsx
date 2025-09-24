import "./index.scss";
import {useState,useEffect} from "react";
// import mockData from "../../mock-data/post-list-mock.json";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default props => {
    const [postList, setPostList] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=> {
        axios.get("http://localhost:3002/posts")
            .then(
                res => {
                     setPostList(res?.data || []);
                }
            )
            .catch(error => {
                console.log(error);
            })
    }, []);

    //从server端去读postlist，然后渲染出来
    return (
        <div className="post-list-container">
            {
                postList.map(
                    post=> {
                        return (
                             <div classNameName = "container">
                                <div className="card post-item" style={{width: "18rem"}} >
                                    <svg aria-label="Placeholder: Image cap" className="bd-placeholder-img card-img-top" height="180" preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg"><title>Placeholder</title>
                                        <rect width="100%" height="100%" fill="#868e96"></rect>
                                        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                                    </svg>
                                    <div className="card-body">
                                        <h5 className="card-title">{post.postTitle}</h5>
                                        <p className="card-text">{post.postContent}</p>
                                        <a href="#" className="btn btn-primary" onClick = { 
                                            () => {
                                                window.localStorage.setItem("postDetail", JSON.stringify(post));
                                                navigate(`/post-detail/${post.id}`)
                                            } 
                                        }>Detail</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })} 
        </div>  
    )
}
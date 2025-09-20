import {useState} from "react";
export default props => {
    const [postDetail, setPostDetail] = useState({
        title: "",
        content: ""
    })

    const handleChange = (e) => {
        //step1: 获取用户输入
        const { name, value } = e.target;

        //step2: 更新状态，将老的值展开，用新的值覆盖掉
        setPostDetail({
            ...postDetail,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        //step1: 组织表单默认提交行为
        e.preventDefault();

        //step2: 获取表单数据
        // const form = e.target;
        // const formData = new FormData(form);
        // const title = formData.get('title');
        // const content = formData.get('content');

        // 受控表单直接通过 postDetail 获取最新数据 console.log(postDetail)

        //step3: 数据校验 (minlength maxlength text number regExp)

    }

    // 手动validate表单数据
    const validatForm = () => {
        let isValid = true;
        const {title, content} = postDetail;
        if (title.trim().length < 2 || title.trim().length > 32) {
            isValid = false;
        }
        if (content.length < 2 || content.length > 140) {
            isValid = false;
        }

        return isValid;
    }



    return (
        <div className="row">
            <div className="col-md-12">
                <form noValidate onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" >Title: </label>
                        <input 
                            type="text" 
                            name="title" 
                            value={postDetail.title}
                            onChange={handleChange}
                            className="form-control" 
                            placeholder="Please enter title, 2-32 characters"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" >Content: </label>
                        <textarea 
                            className="form-control" 
                            name="content" 
                            value={postDetail.content}
                            onChange={handleChange}
                            rows="10" 
                            placeholder="Please enter content, maximum 140 characters">
                        </textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
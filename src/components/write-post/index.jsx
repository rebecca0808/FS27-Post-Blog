export default props => {
    const handleSubmit = (e) => {
        //step1: 组织表单默认提交行为
        e.preventDefault();
        //step2: 获取表单数据
        const form = e.target;
        const formData = new FormData(form);
        const title = formData.get('title');
        const content = formData.get('content');
        //step3: 数据校验 (minlength maxlength text number regExp)

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
                            className="form-control" 
                            placeholder="Please enter title, 2-32 characters"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" >Content: </label>
                        <textarea 
                            className="form-control" 
                            name="content" 
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
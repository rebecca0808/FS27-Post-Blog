import {useState} from "react";
import Ajv from "ajv";
import ajvErrors from "ajv-errors";

//定义好校验规则
const schema = {
     type: "object",
     required: ["title", "content"],
     properties: {
        title: {
            type: "string",
            minLength: 2,
            maxLength: 32,
            errorMessage: {
                type: "Title has to be string type",
                minLength: "Minimum length: 2 characters",
                maxLength: "Maximum length 32 characters"
            }
        },
        content: {
            type: "string",
            minLength: 2,
            maxLength: 140,
            errorMessage: {
                type: "Content has to be string type",
                 minLength: "Minimum length: 2 characters",
                maxLength: "Maximum length 140 characters"
            }
        }
     }
}

const ajv = new Ajv({allErrors: true}); //创建 Ajv 实例；allErrors=true 会一次性收集所有错误
ajvErrors(ajv);//注册 ajv-errors 插件，启用 errorMessage 自定义文案
const validate = ajv.compile(schema);//预编译 schema，得到一个校验函数 validate(data)， 返回布尔值：true 表示通过；false 表示失败。



export default props => {
    const [errors, setErrors] = useState({});

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
        const isValid = validate(postDetail);
        setErrors({});
        if (!isValid) { //如果校验失败，进入错误处理分支。
            const fieldErrors = {}; //新建一个 “字段名 → 错误文案” 的映射对象
            validate?.errors.forEach((error) => { //当validate 返回false 时，validate.errors 会被 Ajv 填充为一组错误对象数组
                const field = error.instancePath.substring(1); //每个 error 里常用字段：instancePath: 发生错误的数据路径（如 "/title"、"/items/0/name"）
                fieldErrors[field] = error.message;
            });
            setErrors(fieldErrors);
            console.log(fieldErrors);
            return;
        }

        //step4: 数据提交

    }

    // 手动validate表单数据
    // const validatForm = () => {
    //     let isValid = true;
    //     const {title, content} = postDetail;
    //     if (title.trim().length < 2 || title.trim().length > 32) {
    //         isValid = false;
    //     }
    //     if (content.length < 2 || content.length > 140) {
    //         isValid = false;
    //     }

    //     return isValid;
    // }



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
                            className={`form-control ${errors.title ? "is-invalid": ""}`}
                            placeholder="Please enter title, 2-32 characters"/>
                        {errors.title && <span className = "text-danger">{errors.title}</span>} 
                    </div>
                    <div className="mb-3">
                        <label className="form-label" >Content: </label>
                        <textarea 
                            className={`form-control ${errors.content ? "is-invalid": ""}`}
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
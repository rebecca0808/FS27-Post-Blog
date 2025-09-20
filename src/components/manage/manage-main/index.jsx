import {Outlet, NavLink} from 'react-router-dom';

export default props => {
    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <Outlet></Outlet>
                </div>
                <div className="col-md-3">
                    <div className="list-group">
                        <NavLink to="/manage/dashboard" className="list-group-item list-group-item-action" aria-current="dashboard">
                            Dash Board
                        </NavLink>
                        <NavLink to="/manage/post-mng" className="list-group-item list-group-item-action" aria-current="post management">Post Management</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
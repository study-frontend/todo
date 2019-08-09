import React, {memo} from "react";
 
// react.memo
//https://ko.reactjs.org/docs/react-api.html#reactmemo
//https://scotch.io/tutorials/react-166-reactmemo-for-functional-components-rendering-control
//https://engineering.huiseoul.com/react-16-6-new-features-memo-lazy-etc-452c78ace739

const TodoLi = (props) => {

    const onClickRemove = () => {      
        props.removeData(props.todo);
    }

    return (
        <li>
            <span>{props.todo}</span>
            <span className="btn-container">
                <a  href="#" onClick={onClickRemove} >삭제</a> 
            </span>
        </li>
    );
}


// class TodoLi extends React.Component {
//     constructor(){
//         super();
//         this.onClickRemoveButton = this.onClickRemove.bind(this);
//     }

//     onClickRemove() {
//         console.log(this.props.todo);
//         this.props.removeData(this.props.todo);
//     }

//     render(){
//         return(
//             <li>
//                 <span>{this.props.todo}</span>
//                 <span className="btn-container">
//                     <a  href="#" onClick={this.onClickRemoveButton} >삭제</a> 
//                 </span>
//             </li>
//         );
//     }
// }

export default TodoLi;
import React from "react";
 
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
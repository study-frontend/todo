import React, { memo } from 'react';
import PropTypes from 'prop-types';

// 함수형 컴포넌트
const AddLi = memo((props) => {
    let inputBox = null;

    const onClickAdd = () => {
        props.updateAddData(inputBox.value);
        inputBox.value = '';
        inputBox.focus();
    }

    return(
        <div className="input-group input-group-lg">
			<input ref={input => {inputBox = input}} type="text" className="form-control" placeholder="할 일을 입력해주세요" />
			<span className="input-group-btn">
			    <button onClick={onClickAdd} className="btn btn-primary" type="button">등록</button>
		    </span>
        </div>
    );
});

AddLi.propTypes = {
    onClickAdd: PropTypes.func
}

// class AddLi extends React.Component {
//     constructor(){
//         super();

//         this.onClickAddButton = this.onClickAdd.bind(this);
//     }

//     onClickAdd() {
//         console.log("input text");
//         console.log(this.inputBox.value);
//         this.props.updateAddData(this.inputBox.value);
//     }

//     render(){
//         return(
//             <div className="input-group input-group-lg">
// 			    <input ref={input => {this.inputBox = input}} type="text" className="form-control" placeholder="할 일을 입력해주세요" />
// 			    <span className="input-group-btn">
// 		    	    <button onClick={this.onClickAddButton} className="btn btn-primary" type="button">등록</button>
// 	    	    </span>
// 	        </div>
//         );
//     }
// }

export default AddLi;
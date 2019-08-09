import React, {memo} from 'react';
import PropTypes from 'prop-types';

const Title = memo((props) => {
    return (
        <div className="page-header">
		    <h1>{props.text}</h1>
	    </div>
    );
});

Title.propTypes = {
    text: PropTypes.string
}

// class Title extends React.Component {
//     constructor(){
//         super();
//     }

//     render(){
//         return(
//             <div className="page-header">
// 			    <h1>{this.props.text}</h1>
// 	        </div>
//         );
//     }
// }

export default Title;
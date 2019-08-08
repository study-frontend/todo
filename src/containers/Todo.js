import React from "react";

import AddLi from "../components/AddLi";
import Title from "../components/Title";
import TodoLi from "../components/TodoLi";


class Todo extends React.Component {
    constructor(){
        super();
        this.state = {
            text : '',
            todos : [],
        }

        this.updateAddDataFn = this.updateAddData.bind(this);
        this.removeDataFn = this.removeData.bind(this);
    }

    componentWillMount() {
        console.log('componentWillMount'); // 새로고침(F5) 시 적용1
    }
    componentDidMount() { 
        console.log('componentDidMount'); // 새로고침(F5) 시 적용2 // ajax 호출 시점

        // axios.get("/todo")
        //    .done( (data) => data = data)
        //    .fail()

        const textData = "To do list";
        const todosData = [
            '이것도 해야 되고',
            '저것도 해야 되고',
            '그것도 해야 되고',
            '언제 다 하나',
        ]
//debugger; // componentWillUpdate 전 시점

        this.setState( (prevState) => {
            return {
                text: textData,
                todos: todosData,
            }
        });

    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps'); // devserver init1 새로 그린 dom을 한번 업데이트 될 때
    }
    componentWillUpdate() {
        console.log('componentWillUpdate'); // devserver init2
    }
    componentDidUpdate() {
        console.log('componentDidUpdate'); // devserver init3
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    updateAddData (todo) {
        this.setState( (prevState) => {
            const todos = prevState.todos;
            todos.push(todo);

            return {
                todos: todos
            }
        })
    }

    removeData(todo){
        this.setState( (prevState) => {
            const todos = prevState.todos;
            const index = todos.indexOf(todo);
            todos.splice(index, 1);
            
            return {
                todos : todos
            }
        });
    }

    render() {
        console.log("render");
        const todoLi = this.state.todos.map( (todo, idx) => {
            return (
                <TodoLi todo={todo} key={'todo' + idx} removeData={this.removeDataFn} />
            );
        });

        return(
            <div className="container">
			    <Title text={this.state.text} />
			    <AddLi updateAddData={this.updateAddData} />
			    <hr/>
                <ul>
                    {todoLi}
                </ul>
		    </div>  
        );
    }
}

export default Todo;
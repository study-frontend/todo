import React, { Component, Suspense, lazy } from "react";
import {hot} from 'react-hot-loader';

import AddLi from "../components/AddLi";
import Title from "../components/Title";
//import TodoLi from "../components/TodoLi";
import Loader from '../components/common/Loader';

export const delay = (time) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });


class Todo extends Component {
    constructor(){
        super();
        this.state = {
            text : '',
            todos : [],
        }

        this.updateAddDataFn = this.updateAddData.bind(this);
        this.removeDataFn = this.removeData.bind(this);
    }

    //Warning: componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-async-component-lifecycle-hooks for details.
    // componentWillMount() {
    //     console.log('componentWillMount'); // 새로고침(F5) 시 적용1
    // }
    componentDidMount() { 
        console.log('componentDidMount'); // 새로고침(F5) 시 적용2 // ajax 호출 시점
        this.fetchData();
    }

    async fetchData() {
        const textData = "To do list";
        const todosData = [
            '이것도 해야 되고',
            '저것도 해야 되고',
            '그것도 해야 되고',
            '언제 다 하나',
        ]

            return delay(500)
                .then(() => {
                    this.setState({
                        todos: todosData,
                        text: textData,
                    });
                });
    }

    //Warning: componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-async-component-lifecycle-hooks for details.
    // componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps'); // devserver init1 새로 그린 dom을 한번 업데이트 될 때
    // }
    // componentWillUpdate() {
    //     console.log('componentWillUpdate'); // devserver init2
    // }

    componentDidUpdate() {
        console.log('componentDidUpdate'); // devserver init3
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    updateAddData (todo) {
        // 입력 값이 빈 스트링일 때에는 입력이 되지 않도록 
        if (!todo.trim()) {
            return false;
        }

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

        // https://ko.reactjs.org/docs/code-splitting.html
        const LazyTodoLi = lazy(() => import('../components/TodoLi'));
        const todoLi = this.state.todos.map((todo, i) => {
            return (
                <LazyTodoLi todo={todo} key={'todo' + i} removeData={this.removeDataFn}/>
                );
            });
        // return 없이 쓰려면 아래와 같이 한줄로 나타낸다
        // const todoLi = this.state.todos.map((todo, i) => <LazyTodoLi todo={todo} key={'todo' + i} handleRemovedData={this.handleRemovedData}/>);

        return(
            <div className="container">
			    <Title text={this.state.text} />
			    <AddLi updateAddData={this.updateAddDataFn} />
			    <hr/>
                <ul>
                    {/* https://ko.reactjs.org/docs/code-splitting.html */}
                    <Suspense fallback={<Loader/>}>
                        {todoLi}
                    </Suspense>
                </ul>
		    </div>  
        );
    }
}

export default hot(module)(Todo);
//export default Todo;
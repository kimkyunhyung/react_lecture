import React, { Component } from "react";
import Todos from "./components/Todos";
import Timer from "./components/Timer";
import Header from "./components/Header";
import CompareImVsMu from "./components/CompareImVsMu";
import "./App.css";

const goals = [
  { title: "React 개발에 필요한 환경을 구축한다.", completed: true },
  { title: "새로운 자바스크립트 문법을 익힌다.", completed: false },
  { title: "개발 편의를 위한 VSCode IDE를 익힌다.", completed: false },
  { title: "기본적인 Git 사용법을 익힌다.", completed: false },
  { title: "PR 코드 리뷰를 응용한 개발 프로세스를 익힌다.", completed: false },
  { title: "React 로 간단한 노트 앱을 만들어본다.", completed: false }
];

class App extends Component {
  state = {
    isExpired: false,
    resetCounter: 1
  };

  completeTimer = () => {
    this.setState({ isExpired: true });
  };

  handleReset = () => {
    this.setState({ resetCounter: this.state.resetCounter + 1 });
  };

  render() {
    const { isExpired } = this.state;
    return (
      <div className="App">
        <Header />
        <Todos title="강의목표" items={goals} />
        {!isExpired && (
          <Timer
            key={this.state.resetCounter}
            expireDate={"2018-07-04T00:00:00+09:00"}
            onComplete={this.completeTimer}
          />
        )}

        <button onClick={this.handleReset}>reset</button>

        <CompareImVsMu />
      </div>
    );
  }
}

export default App;

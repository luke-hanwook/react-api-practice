/**
 * React.PureComponent
 * React.PureComponent는 shoulComponentUpdate(), props와 state를 이용한 얕은 비교를 구현한다. (성능 향상을 기대)
 * 주의: props와 state의 구조가 간단할 것으로 예상 될때만 PureComponent를 상속하고,
 *      깊은 자료구조의 경우 forceUpdate()를 사용하거나, 부변 객체의 사용을 검토한다.
 *      추가적으로 PureComponent의 shouldComponentUpdate()는 컴포넌트의 하위 트리에 대한 props 갱신 작업을 수행하지 않기 때문에,
 *      자식 컴포넌트들이 순수한지 꼭 확인한다.
 */

import React from "react";

class GreetingWithPureComponent extends React.PureComponent {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default GreetingWithPureComponent;

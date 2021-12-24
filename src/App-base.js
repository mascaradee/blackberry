import React from "react";
import PropTypes from "prop-types";

/**
 * 목표
 * 컴포넌트는 HTML을 반환하는 function이다.
 * JSX 사용법을 알자
 * - import, export 등으로 컴포넌트를 어떻게 사용할 수 있게하는 문법
 * - 컴포넌트에 정보를 보낸 수 있다.
 * - html + js
 * - props 사용법 - props라는 이름은 암거나 해도 문제 없음 컴포넌트가 넘겨주는 첫 인자를 가리키는 것이므로
 * - map() 사용법 - array를 반환한다.
 * - propTypes 유효성 체크
 */

const fruits = [
  { id: 1, name: "grape", imoge: "🍇", rating: 5 },
  { id: 2, name: "blueberry", imoge: "🍒", rating: 4.3 },
  { id: 3, name: "apple", imoge: "🍎" },
];

function renderFruit(fruit) {
  return <Food name={fruit.name} picture={fruit.imoge} />;
}
function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>I love {name}</h3>
      <h4>{rating}/5.0</h4>
      <div>{picture}</div>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      {/* <Food name="kimchi" something={true} papapap={["hello", 1, 2, 3]} /> */}
      {fruits.map((fruit) => (
        <Food
          key={fruit.id}
          name={fruit.name}
          picture={fruit.imoge}
          rating={fruit.rating}
        />
      ))}
      {/* {fruits.map(renderFruit)} */}
    </div>
  );
}

export default App;

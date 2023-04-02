import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import ReactTopic from "./ReactTopic";
import { Counter } from "./ReactTopic";
import { Counter2 } from "./ReactTopic";

import "../../Styles/ReactTopics.css";

const listLifeCycle = {
  "constructor (props)": " - происходит начальная инициализация компонента.",
  "static getDeprivedStateFromProps (props, state) ": ` - вызывается непосредственно перед рендерингом компонента. 
  Этот метод не имеет доступа к текущему объекту компонента (через this) и должен возвращать объект для обновления объекта state или значение
  null, если нечего обновлять.`,
  "render ()": " - происходит непосредственно рендеринг компоненты.",
  "componentDidMount () ":
    " - вызывается после рендеринга компонента. Именно здесь следует выполнять запросы к удалённым ресурсам.",
  "componentWillUnmount ()": " - вызывается перед удалением компонента из DOM.",
};

const listLifeCycle2 = {
  "static getDeprivedStateFromProps (props, state) ": "",
  "shouldComponentUpdate (nextProps, nextState)":
    " - если этот метод возвращает true, то выполняются следующие методы",
  "render ()": "",
  "getSnapshotBeforeUpdate (prevProps, prevState)": ` - вызывается непосредственно перед компонентом. 
  Он позволяет компоненту получить информацию из DOM перед возможным обновлением.`,
  "componentDidUpdate (prevProps, prevState, snapshot)":
    " - вызывается сразу после обновления компонента (если shouldComponentUpdate возвращает true ",
};

export const reactTopics = {
  1: "Introduction",
  2: "Components",
  3: "Props",
  4: "State",
  5: "Lifecycle",
  6: "Events",
  7: "Key",
  8: "Refs",
  9: "Asynchronous requests",
  10: "Virtual DOM",
  11: "Fragment",
  12: "React.memo",
  13: "useEffect",
  14: "Router",
  15: "Context",
  16: "Form",
  17: "UI Libraries",
};

const ReactTopics = () => {
  return (
    <section className="section">
      <ul>
        <div className="section__list">
          <h1 className="section__heading">React topics:</h1>
          {Object.entries(reactTopics).map(([id, topic]) => (
            <li key={id}>
              <NavLink to={id}>{topic}</NavLink>
            </li>
          ))}
        </div>
      </ul>

      <Routes>
        <Route
          path="/1"
          element={
            <ReactTopic
              info={`Реакт - это JS-библиотека для создания UI (user interface). Легко
          переиспользуется, т.к. взят подход независимых компонент.`}
              info2={`Разработчик
          ПО из FaceBook Джордан Валке создал React. Исходный код открыт в мае
          2013г.`}
            />
          }
        />
        <Route
          path="/2"
          element={
            <ReactTopic
              info={`Компоненты React — это многократно иcпользуемые фрагменты
            JavaScript-кода, которые выводят HTML-элементы (благодаря JSX ).
            `}
              info2={`Компоненты бывают функциональные и классовые.`}
              code={`const functionalComponent = () => {
    return <h1>Hello, world! </h1> 
};`}
              code2={`class classComponent extends React.Component {
  render() {
    return <h1>Hello, world!</h1>;
  }
}`}
            />
          }
        />
        <Route
          path="/3"
          element={
            <ReactTopic
              info={`Компоненты позволяют разбить интерфейс на независымые части, про
          которые легко думать в отдельности. Они во многом ведут себя как
          обычные функции JS. Они принимают произвольные входные данные -
          пропсы (props) и возвращают React-элементы,
          описывающие, что мы хотим увидеть на экране.`}
            />
          }
        />
        <Route
          path="/4"
          element={
            <ReactTopic
              info={`State в React – объект JS, позволяющий отслеживать данные компонента. 
              Нужно, чтобы хранить какое-то изменяющиеся значение, с которым, например, будет взаимодействовать пользователь.
              `}
              info2={`Единственный допустимый способ обновления состояния компонента – через setState().
              У setState два параметра: объект либо функция и callback-функция, которая сработает, когда State обновится.
              Каждый вызов setState тригерит метод render - происходит re-render. `}
              code={`export class Counter extends React.Component {
    state = {
        count: 0,
     };
      handleClick = () => {
        this.setState((state) => ({
          count: ++state.count,
        }));
      };
              
    render() {
      const { count } = this.state;
        return (
          <div className="counter">
            <p>{count}</p>
              <Button onClick={() => this.handleClick()}>Click me</Button>
          </div>
        );
      }
}
              `}
              code2={<Counter />}
              code3={`import {useState} from 'react';
export const Counter2 = () => {
  const [count, setCount] = useState(0);
              
  const handleClick = () => {
    setCount((prev) => ++prev);
  };
   return (
    <>
      <p>{count}</p>
      <Button onClick={() => handleClick()}>Click here</Button>
    </>
    );
};`}
              code4={<Counter2 />}
            />
          }
        />
        <Route
          path="/5"
          element={
            <ReactTopic
              info={`В процессе работы компонент проходит через ряд этапов жизненного цикла.
        На каждом из этапов вызывается определённая функция, в которой мы можем определить какие-либо действия:
        `}
              listLifeCycle={Object.entries(listLifeCycle).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
              info2={`Если в компоненте происходят обновления:`}
              listLifeCycle2={Object.entries(listLifeCycle2).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
              info3={`Это описание методов жизненного цикла в классовом компоненте. В функциональных компонентах используется хук useEffect.`}
            />
          }
        />
        <Route
          path="/6"
          element={
            <ReactTopic
              info={`Обработка событий в React-элементах очень похожа на обработку событий в DOM-элементах. 
        Но есть несколько синтаксических отличий:`}
              info2={`События в React именуются в стиле camelCase вместо нижнего регистра.
        С JSX вы передаёте функцию как обработчик события вместо строки.
        Ещё одно отличие — в React нельзя предотвратить обработчик события по умолчанию, вернув false. Нужно явно вызвать preventDefault. `}
              info3={` Это основные: onClick() - обычно используется в кнопке,
              onChange() - обычно используется в элементе формы (input).`}
            />
          }
        />
        <Route
          path="/7"
          element={
            <ReactTopic
              info={`Ключи помогают React определять, какие элементы были изменены, добавлены или удалены. 
        Их необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени.
        Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать элемент списка от его соседей. 
        Чаще всего вы будете использовать ID из ваших данных как ключи.`}
              info2={`Когда у вас нет заданных ID для списка, то в крайнем случае можно использовать индекс элемента как ключ.`}
              info3={`Однако не рекомендуется использовать индексы как ключи, если порядок элементов может поменяться. 
              Это негативно скажется на производительности и может вызвать проблемы с состоянием компонента.`}
              code={`const todoItems = todos.map((todo, index) =>
  <li key={index}>
    {todo.text}
  </li>
);`}
            />
          }
        />
        <Route
          path="/8"
          element={
            <ReactTopic
              info={`Рефы дают возможность получить доступ к DOM-узлам или React-элементам, созданным в рендер-методе.`}
              info2={`Ссылки создаются с использованием React.createRef() и добавляются к React-элементам с помощью атрибута ref. 
              В функциональных компонентах используется хук useRef.`}
              info3={`Ситуации, в которых использование рефов является оправданным:`}
              info4={`-Управление фокусом, выделение текста или воспроизведение медиа;
-Императивный вызов анимаций;
-Интеграция со сторонними DOM-библиотеками.`}
              info5={`Избегайте использования рефов в ситуациях, когда задачу можно решить декларативным способом.`}
            />
          }
        />
        <Route
          path="/9"
          element={
            <ReactTopic
              info={`Как выполнить AJAX-запрос к серверу? - 
          Можно использовать встроенный в браузер метод window.fetch или любую AJAX-библиотеку, например Axios или jQuery AJAX.     
          `}
              info2={`Где в жизненном цикле компонента лучше делать запрос? - 
              Можно сделать AJAX-запрос в componentDidMount. Когда вы получите данные, вызовите setState, чтобы передать их компоненту.         
          `}
              code={`class MyComponent extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
   }
          
  componentDidMount() {
    fetch("https://api.example.com/items")
     .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
          },
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    }
    )
}
          
  render() {
    const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
        } else {
          return (
            <ul>
              {items.map(item => (
                <li key={item.id}>
                  {item.name} {item.price}
                </li>
              ))}
            </ul>
          );
          }
      }
  }`}
              info6={`Вот эквивалент с хуками:`}
              code2={`const MyComponent = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },                      
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
        )
  }, [])
              
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
     return <div>Загрузка...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
           <li key={item.id}>
            {item.name} {item.price}
          </li>
          ))}
        </ul>
      );
    }
}`}
            />
          }
        />
        <Route
          path="/10"
          element={
            <ReactTopic
              info={`Виртуальный DOM (VDOM) — это концепция программирования, в которой «виртуальное» представление 
              пользовательского интерфейса хранится в памяти и синхронизируется с «настоящим» DOM при помощи библиотеки, 
              такой как ReactDOM. Этот процесс называется согласованием.`}
              info2={`DOM расшифровывается как Document Object Model (объектная модель документа). При каждом изменении UI (user interface), 
              DOM также обновляется для отображения этих изменений. Частые манипуляции с DOM негативно влияют на производительность.
              DOM представляет собой древовидную структуру данных. Поэтому изменения и обновления самого DOM являются достаточно быстрыми. 
              Но после изменения обновленный элемент и все его потомки (дочерние элементы) должны быть повторно отрисованы (отрендерены) 
              для обновления UI приложения. Повторный рендеринг — очень медленный процесс. Таким образом, чем больше у нас компонентов UI, 
              тем более дорогими с точки зрения производительности являются обновления DOM.`}
              info3={`Манипуляции с RDOM являются медленными. Манипуляции с VDOM намного быстрее, поскольку они не отображаются 
              (отрисовываются) на экране.
              Когда в UI добавляются новые элементы, создается VDOM в виде дерева. Каждый элемент является узлом этого дерева. 
              При изменении состояния любого элемента, создается новое дерево. Затем это новое дерево сравнивается (diffed) со старым.      
              После этого вычисляется наиболее эффективный метод внесения изменений в RDOM. 
              Цель данных вычислений состоит в минимизации количества операций, 
              совершаемых с RDOM. Тем самым, уменьшаются накладные расходы, связанные с обновлением RDOM.  
              После этого вычисляется разница между предыдущей и текущей версиями виртуального DOM-дерева. 
              Затем все родительское поддерево подвергается повторному рендерингу для представления обновленного UI. 
              Наконец, это обновленное дерево используется для обновления RDOM.`}
              info5={`В React каждая часть UI является компонентом и почти каждый компонент имеет состояние (state). 
              При изменении состояния компонента, React обновляет VDOM. После обновления VDOM, React сравнивает его текущую версию с предыдущей. 
              Этот процесс называется «поиском различий» (diffing).
              После обнаружения объектов, изменившихся в VDOM, React обновляет соответствующие объекты в RDOM. 
              Это существенно повышает производительность по сравнению с прямыми манипуляциями DOM. 
              Именно это делает React высокопроизводительной библиотекой JavaScript.`}
            />
          }
        />
        <Route
          path="/11"
          element={
            <ReactTopic
              info={`С помощью фрагментов можно сгруппировать список дочерних элементов без добавления дополнительных узлов в DOM.`}
              info2={`Используем React.Fragment или сокращённую запись: <> </>`}
              info3={`Недостаток сокращенной записи: нельзя использовать атрибут key.`}
            />
          }
        />
        <Route
          path="/12"
          element={
            <ReactTopic
              info={`React.memo — это компонент высшего порядка.
Компонент высшего порядка — это функция, которая принимает компонент и возвращает новый компонент.`}
              info2={`Если ваш компонент всегда рендерит одно и то же при неменяющихся пропсах, вы можете обернуть 
              его в вызов React.memo для повышения производительности в некоторых случаях, мемоизируя тем самым результат. 
              Это значит, что React будет использовать результат последнего рендера, избегая повторного рендеринга.`}
              info3={`React.memo затрагивает только изменения пропсов. Если функциональный компонент обёрнут в React.memo 
              и использует useState, useReducer или useContext, он будет повторно рендериться при изменении состояния или контекста.
              По умолчанию он поверхностно сравнивает вложенные объекты в объекте props. Если вы хотите контролировать сравнение, 
               можно передать свою функцию сравнения в качестве второго аргумента.`}
              info5={`Этот метод предназначен только для оптимизации производительности.
               Аналогом в классовых компонентах выступает метод shouldComponentUpdate()`}
            />
          }
        />
        <Route
          path="/13"
          element={
            <ReactTopic
              info={`Для использования методов жизненного цикла в функциональных компонентах предназначек хук useEffect.`}
              info2={`Хук позволяет использовать 3 метода жизненного цикла: componentDidMount(), componentDidUpdate(prevProps, prevState), 
              componentWillUnmount().`}
              info3={`UseEffect принимает в качестве первого параметра функцию, в качестве второго [массив зависимостей].`}
              code={`useEffect ( () => { }, [dependencies])`}
            />
          }
        />
        <Route
          path="/14"
          element={
            <ReactTopic
              info={`В React имеется своя система маршрутизации, 
        которая позволяет сопоставлять запросы к приложению с определенными компонентами. 
        Ключевым звеном в работе маршрутизации является модуль react-router, который содержит основной функционал по работе с маршрутизацией. 
        Однако если мы собираемся работать в браузере, то нам также надо использовать модуль react-router-dom.`}
            />
          }
        />
        <Route
          path="/15"
          element={
            <ReactTopic
              info={`Контекст разработан для передачи данных для всего дерева React-компонентов, не прокидывая через пропсы.`}
              code={`import React, {useContext} from "react";
  const UserContext = React.createContext({});
              
  const Test = () => {
    const user = useContext(UserContext);
      return <h1>{user.name}</h1>
  };
              
  const App = () => {
    return (
      <UserContext.Provider value={{name: "Nick"}}>
        <Test />
      </UserContext.Provider>
    )
  }`}
              info6={`Контекст лучше всего создавать в отдельном файле.`}
            />
          }
        />
        <Route
          path="/16"
          element={
            <ReactTopic
              info={`В React HTML-элементы формы ведут себя немного иначе по сравнению с DOM-элементами, 
        так как у элементов формы изначально есть внутреннее состояние.`}
              info2={`По умолчанию браузер переходит на другую страницу при отправке HTML-форм, в том числе и этой. 
              Если вас это устраивает, то не надо ничего менять, в React формы работают как обычно. 
              Однако чаще всего форму удобнее обрабатывать с помощью JavaScript-функции, у которой есть доступ к введённым данным. 
              Стандартный способ реализации такого поведения называется «управляемые компоненты».`}
              info3={`В HTML элементы формы, такие как <input>, <textarea> и <select>, обычно сами управляют своим состоянием 
              и обновляют его когда пользователь вводит данные. В React мутабельное состояние обычно содержится в свойстве компонентов state
               и обновляется только через вызов setState().`}
              info5={`Мы можем скомбинировать оба подхода и сделать состояние React-компонента «единственным источником правды». 
              Тогда React-компонент будет рендерить форму и контролировать её поведение в ответ на пользовательский ввод. 
              Значение элемента формы input в этом случае будет контролировать React, а сам элемент будет называться «управляемый компонент».`}
            />
          }
        />
        <Route
          path="/17"
          element={
            <ReactTopic
              info={`Почти во всех проектах разработчики используют различные библиотеки. Например:`}
              info2={`MUI Core - https://mui.com/core/`}
              info3={`React Bootstrap - https://react-bootstrap.github.io/`}
              info5={`Semantic UI React - https://react.semantic-ui.com/`}
              info6={`Ant Design - https://ant.design/`}
            />
          }
        />
      </Routes>
    </section>
  );
};

export default ReactTopics;

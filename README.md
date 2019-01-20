# 리엑트 교과서 요약

# 1. React 살펴보기

## 1.1. React란 무엇인가?

 React는 UI 컴포넌트 라이브러리 \
 React UI는 매우 독립적이며 특정 관심사에 집중된 기능 블록 \
 React는 템플릿 언어가 없는 순수한 Javascript를 기반으로 **CBA**(Component-based architecture)를 구현, 컴포넌트에 대한 새로운 시각을 창출

## 1.2. React가 해결할 수 있는 문제

시간에 따라 변화하는 데이터를 다루는 거대한 애플리케이션의 개발\
React팀은 메모리에서 DOM요소를 생성하는 것은 빠르지만, 실제 DOM으로 렌더링 하는 과정에서 병목이 발생한다는 점을 알게되어, 문제를 해결하는 알고리즘 개발. 이로 인하여 React의 동작속도 및 성능에 이득을 가져옴

## 1.3. React의 장점

* 단순한 앱개발: 순수 Javascript로 만든 컴포넌트 기반 아키텍쳐. 선언형 스타일, DOM추상화(강력, 개발자 친화적)
* 빠른 UI
* 코드량 감소: 수많은 라이브러리와 컴포넌트를 접할 수 있음

### 1.3.1. 간결성

**KISS**(Keep It Simple, Stupid) 원칙: 간결한 시스템이 더 잘 작동함\
React를 간결하게 만드는 기능들

* 선언형 스타일 채택: React는 뷰를 자동으로 갱신하는 선언형 스타일을 채택\
내부적으로 가상 DOM을 사용하여 브라우저에 이미 반영된 뷰와 새로운 뷰의 차이점을 찾아냄. 이 과정을 DOM diffing, View reconciliation이라고 함. 개발자는 명시적으로 뷰를 변경하려고 노력 할 필요가 없음. 상태를 갱신하면 뷰는 이에 따라 자동으로 갱신됨.

```javascript
    //예제 1
    //명령형 프로그래밍
    let arr = [1,2,3,4,5],
        arr2 = [];
    for (let i = 0, x = arr.range; i < x; i ++) {
        arr2[i] = arr[i]*2;
    }
    console.log('a', arr2);
    // >> a[2,4,6,8,10]

    //선언형 프로그래밍
    let arr = [1,2,3,4,5],
        arr2 = arr.map((v,i) => {return v*2});
    console.log('b', arr);
    // >> b[2,4,6,8,10]

    //예제 2
    //명령형 프로그래밍
    let profile = {account: '47574416'},
        profileDeep = {account: {number: 47574416}};
    console.log(getNestedValueImperatively(profile, 'account') === '47574416');
    console.log(getNestedValueImperatively(profileDeep, 'account.number') === 47574416);

    let getNestedValueImperatively = function getNestedValueImperatively (object, propertyName) {
        let currentObject = object,
            propertyNamesList = propertyName.split('.'),
            maxNestedLevel = propertyNamesList.length,
            currentNestedLevel;

        for (currentNestedLevel = 0; currentNestedLevel < maxNestedLevel; currentNestedLevel ++) {
            if (!currentObject || typeof currentObject === 'undefined') return undefined
            currentObject = currentObject[propertyNameList[currentNestedLevel]]
        }
        return currentObject
    }

    //선언형 프로그래밍
    let getValue = function getValue(object, propertyName) {
        return typeof object === 'undefined' ? undefined: object[propertyName]
    }
    let getNestedValueDeclaratively = function getNestedValueDeclaratively(object, propertyName) {
        return propertyname.split('.').reduce(getValue, object);
    }
    console.log(getNestedValueDeclaratively({bar: 'baz'}, 'bar') === 'baz');
    console.log(getNestedValueDeclaratively({bar: {baz:1}}, 'bar.baz') === 1);
```

* 순수한 Javascript를 이용한 컴포넌트 기반 아키텍쳐: React는 컴포넌트에 Javascript만 사용함. 다른 템플릿 엔진 같은 **DSL**(Domain-Specific Language - e.g. Angular)를 사용 하지 않음. 한가지 기능을 개발하기 위해 기술을 분리하지 않음
* 강력한 추상화: React는 DOM을 쉽게 다룰 수 있고, 같은 기능이지만 크로스 브라우징을 위해 다르게 구현할 수 밖에 없었던 인터페이스나 이벤트 핸들링을 정규화\
내부의 인터페이스는 숨기고, 정규화 과정을 거친 합성 매서드와 속성 제공\
서버측 랜더잉 기능 역시 **SEO**(Search Engine Optimization)와 성능 개선에 유용

### 1.3.2. 속도와 테스트 용이성

React의 가상 DOM은 자바스크립트 메모리에만 존재. 데이터를 변경하면 React는 가상 DOM을 비교하여, 랜더링 변경이 필요한 경우에만 실제 DOM에 랜더링 함

### 1.3.3. React의 폭넖은 개발 커뮤니티와 생태계

React는 페이스북과 인스타그램의 막대한 지지를 받고 있음

## 1.4. React의 단점

모든 기능을 다 갖춘 프레임워크가 아님\
추가기능들을 개발중임\
훌륭한 사례나 강의가 부족\
단방향 데이터 바인딩

## 1.5. Skip

## 1.6. 첫번째 React App 만들기
예제 코드 1.1. React 라이브러리 로드와 index.html 기본 골격\
소스코드를 다운받는 방법은 다양하겠지만, 가장 의존적이지 않은 심플한 방법을 사용\
react.js는 라이브러리를 불러옴\
react-dom.js는 DOM라이브러리를 불러옴

```html
    <!DOCTYPE html>
        <html>
            <head>
                <script src="js/react.js"></script>
                <script src="js/react-dom.js"><script>
            </head>
            <body>
                <div id="content"></div>
                <script type="text/javascript">
                    let h1 = React.createElement('h1', null, 'Hello world!');
                    ReactDOM.render(
                        h1,
                        document.getElementById('content')
                    )
                </script>
            </body>
        </html>
```

React 엘리먼트를 생성하려면 React.createElement(elementName, data, child)를 호출함
* elementName: HTML 태그명을 문자열로 작성하거나 직접 만든 컴포넌트 클래스 객체를 넘겨 줄 수 있음
* data: 속성이나 상위 컴포넌트를 받음, null이나 {name:'Azat'}와 같은 형태의 데이터
* child: 자식 엘리먼트나 태그 내부에 작성하는 텍스트

코드를 다음과 같이 작성 할 수도 있음

```html
    <div id="content"></div>
    <script src="script.js"></script>
```

# 2장 React 첫걸음

## 2.1. 엘리먼트 중첩

동일한 DOM계층에 h1 요소 두 개를 랜더링 해야하는 경우 시각적으로 영향을 끼치지 않는 요소(e.g. \<div>, \<span>, ...)로 두 요소를 감싸는 방법이 있음

createElement()에 전달하는 매개변수의 수는 제한이 없음, 두 번째 매개변수는 자식 엘리먼트가 됨.

* TIP. Chrome에 React 개발자 도구(React Developer Tools) 확장 프로그램을 설치 할 수 있음 [http://mng.bz/V276]

예제코드 2.1 \<h1> 엘리먼트 두 개를 자식으로 가진 \<div> 엘리먼트 생성

* createElement()의 세 번째 매개변수가 문자열이면, 이는 생성하는 엘리먼트의 텍스트 값임
* 세 번째 또는 그 이후의 매개변수가 문자열이 아니면, 이는 새로 생성하는 엘리먼트의 자식 엘리먼트임

```javascript
    let h1 = React.createElement('h1', null, 'hello world!')
    ReactDOM.render(
        React.createElement('div', null, h1, h1),
        document.getElementById('content')
    )
```

createElement()의 첫 번째 매개변수로 두가지 자료형을 입력 할 수 있음

* 문자열로 작성한 일반적인 HTML 태그(e.g. 'h1', 'div', 'p') 처럼 화살괄호가 없는 문자열. 이름은 소문자로 작성\
React 엘리먼트를 랜더링하면 DOM에 \<p> 가 생김
* React 컴포넌트 클래스 객체. HelloWorld를 예로 들 수 있음. React 컴포넌트 클래스 이름은 대문자로 시작함 

## 2.2. React 컴포넌트 클래스 생성

React 앨리먼트를 중첩하고 나면 엘리먼트가 굉장히 많다는 문제점을 발견. 이때 컴포넌트 기반 아키텍쳐를 활용\
Component class(component)를 이용하면 기능을 느슨하게 결합된 부분으로 분리하여 코드 재사용이 가능

ES6 문법을 이용하면 React.Component 클래스를 상속받아서 React 컴포넌트 클래스를 생성가능\
e.g. class CHILD extends PARENT, class HelloWorld extends React.Component

새로운 컴포넌트 클래스를 구현 할 때는 render()메서드를 반드시 작성해야 함. 이 메서드는 다른 사용자 정의 컴포넌트 클래스나 HTML 태그로 만든 React 엘리먼트를 반환

예제코드 2.3 React 컴포넌트 클래스 생성하고 렌더링하기

```javascript
let h1 = React.createElement('h1', null, 'Hello world!')
class HelloWorld extends React.Component {    //React component class 정의 (class 이름은 대문자로 시작)
    render() {  //엘리먼트 하나를 반환하는 함수인 render()메서드를 생성
        return React.createElement('div', null, h1, h1);    //return 문에는 React 엘리먼트를 반환하도록 구현하여 React클래스가 render()를 실행하면 두 개의 <h1>엘리먼트를 감싼 <div> 엘리먼트를 받을 수 있음
    }
}

ReactDOM.render(    //React엘리머느를 ID가 content인 실제 DOM에 넣어줌
    React.createElement(HelloWorld, null),  //첫 번째 인자로 Helloworld클래스를 전달하여 앨리먼트 생성
    document.getElementById('content')
)

```

위의 예재를 활용하여 동일한 h1을 많이 노출하는 경우

```javascript
ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(HelloWorld),
        React.createElement(HelloWorld),
        React.createElement(HelloWorld)
    ),
    document.getElementById('content');
)
```

## 2.3. React 속성 사용하기

React 컴포넌트의 properties(엘리먼트 내의 변경할 수 없는 값)는 React선언형 스타일의 기초\
Properties를 통해 React엘리먼트를 다양하게 표현 가능\

e.g. React.createElement('a', {href:'http://node.university'});

Properties는 컴포넌트 내부에서 변경 할 수 없음. 부모 컴포넌트는 자식의 생성시점에 속성을 할당. 자식 엘리먼트(다른 엘리먼트 안에 중첩된 엘리먼트)는 속성을 수정하지 않아야 함.

e.g. <TAG_NAME PROPERTY_NAME=VALUE/>

React의 속성은 HTML속성을 작성하는 것과 비슷함. React속성을 작성하는 목적은 HTML속성을 작성 혹은 코드에서 원하는 대로 사용하기 위함.
* 일반적인 HTML 요소인 속성: href, title, style, class
* React 컴포넌트 클래스의 자바스크립트 코드에서 this.props의 값. e.g. this.props.PROPERTY_NAME(PROPERTY_NAME)을 임의의 값으로 지정 가능. 이때 입력한 속성의 이름을 사용하여 this.props.PROPERTY_NAME으로 접근이 가능

표준 HTML속성과 일치하지 않는 경우 HTML에 렌더링 하지는 않지만 위의 방법으로 접근이 가능함. 이 방법을 이요하면 같은 클래스의 서로 다른 인스턴스에 각각 다른 데이터를 넘겨 줄 수 있음(컴포넌트의 재 사용)

다음과 같이 속성을 이용하여 값에 따라 엘리먼트를 다른 모습으로 렌더링 할 수 있음

```javascript
render() {
    if (this.props.heading) return <h1>Hello</h1>
    else return <p>Hello</p>
}
```

HelloWorld 제목인 \<h1>태그에 다음과 같이 세 가지 속성을 추가

* id: HTML 표준 속성 id와 일치하고, React가 자동으로 랜더링 함
* frameworkname: \<h1>의 표준 속성이 아니지만, 제목 텍스트로 표시할 때 사용하는 값
* title: HTML 표준 속성인 title과 일치, React가 자동으로 랜더링 함

```javascript
ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(HelloWorld, {
            id: 'ember',
            frameworkname: 'Ember.js',
            title: 'A framework for creating ambitious web applications.'
        }),
        React.createElement(HelloWorld, {
            id: 'backbone',
            frameworkname: 'backbone.js',
            title: 'Backbone.js gives structure to web applications...'
        }),
        React.createElement(HelloWorld, {
            id: 'Angular',
            frameworkname: 'Angular.js',
            title: 'Superheroic Javascript MVW Framework.'
        }),
        document.getElementById('content')
    );
);
```

다음과 같이 컴포넌트의 render()매서드 내에서 this.props 객체에 접근하면 createElement()의 두 번째 매개변수로 전달한 객체에 접근 할 수 있음\
e.g. {id: 'ember'...}

예제코드 2.4 render() 메서드에서 frameworkName속성 사용하기

```javascript
class HelloWord extends React.Component {
    render() {
        return React.createElement(
            'h1',
            null,
            'Hello' + this.props.frameworkName + 'world!!!'
        );
    }
}
```

예제코드 2.5 컴포넌트의 모든 속성을 \<h1>으로 전달할 수 있음

```javascript
class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            'h1',
            this.props,
            'Hello' + this.props.frameworkName + 'world!!!'
        );
    }
}
```

전체 예제 코드는 다음과 같음
예제코드 2.6 엘리먼트 생성 시 속성 전달

```javascript
class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            'h1',
            this.props,
            'Hello' + this.props.frameworkname + 'world!!'
        )
    }
}

ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(HelloWorld, {
            id: 'ember',
            frameworkname: 'ember.js',
            title: 'A framework for creating ambitious web applications.'
        }),
        React.createElement(HelloWorld, {
            id: 'backbone',
            frameworkname: 'backbone.js',
            title: 'Backbone.js gives structure to web applications...'
        }),
        React.createElement(HelloWorld, {
            id: 'Angular',
            frameworkname: 'Angular.js',
            title: 'Superheroic Javascript MVW Framework.'
        }),
        document.getElementById('content')
    )
)
```

# 3장 JSX

## 3.1. JSX의 정의와 장점

JSX: 함수 호출과 객체 생성을 위한 문법적 편의를 제공하는 자바스크립트의 확장 (React.createElement() 호출을 반복해야하는 불편을 해소)\
React 엘리먼트를 생성하면서 Javascript의 모든 기능을 쓸 수 있도록 도와줌\
장점
* **DX**(Developer experience)개선: 표현력이 뛰어나 코드를 읽기 쉬움. XML과 문법이 유사하여 중첩된 선언형 구조를 더 잘 나타냄
* 팀의 생산성 향상: 전문 개발자 외에도 개발 지식이 있는 팀원이 있다면 직접 코드를 수정할 수도 있음
* 문법 오류와 코드량 감소

다음의 HTML을 생성하는 방법

```html
    <div>
        <HelloWorld/>
        <br/>
        <a href="http://webapplog.com">Great Resources</a>
    </div>
```

Javascript로 생성

```javascript
React.createElement(
    "div",
    null,
    React.createElement(HelloWorld, null),
    React.createElement("br", null),
    React.createElement(
        "a",
        { href: "http://webapplog.com" },
        "Great JS Resources"
    )
)
```

Babel v6 이용하여 변환

```javascript
"use strict";

React.createElement(
    "div",
    null,
    " ",
    React.createElement(HelloWorld, null),
    " ",
    React.createElement("br", null),
    " ",
    React.createElement(
        "a",
        { href: "http://webapplog.com"},
        "Great JS Resources"
    ),
    " "
)
```

UI와 Javascript로직에 대한 설명을 한 곳으로 모아, 기존의 분리를 고쳐놓음

JSX의 동작: JSX -> transpiler에서 js로 변환 -> 렌더링

## 3.2. JSX의 이해

### 3.2.1 JSX로 React 엘리먼트 생성하기

기존의 방식

```javascript
React.createElement(
    HelloWorld,
    {key1: value1, key2: value2, ...},
    child1, child2, child3, ... , childN
)
```

이것을 JSX로 변환하면 다음과 같음
```html
    <name key1=value1 key2=value2 ...>
        <child1/>
        <child2/>
        <child3/>
        ...
        <childN/>
    </name>
```

예제 코드 3.1 Javascript로 작성한 Hello World

```javascript
ReactDOM.render(
    React.createElement('h1', null, 'Hello world!'),
    document.getElementById('content')
)
```

예제 코드 3.2 JSX로 작성한 Hello World

```javascript
ReactDOM.render(
    <h1>Hello world! </h1>,
    document.getElementById('content');
)

//or

let helloWorldReactElement = <h1>Hello world!</h1>
ReactDOM.render(
    helloWorldReactElement,
    document.getElementById('content');
)
```

### 3.2.2 React 컴포넌트에 JSX 사용하기
컴포넌트를 다룰 때도 같은 문법을 사용함. 다른점은 컴포넌트 클래스의 이름이 반드시 대문자로 시작

예제 코드 3.3 JSX를 이용해서 생성한 HelloWorld 클래스

```javascript
class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1>1. Hello world!</h1>
                <h1>2. Hello world!</h1>
            </div>
        )
    }
}
ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('content');
)
```

예제 코드 3.3에서 처럼 return문에 소괄호를 사용하여 묶어줘야함, 혹은 return줄에 \<div>를 바로 선언하여 리턴

### 3.2.3. JSX에서 변수 출력하기

Template literal을 이용한 코드\
**Template literal**: 자바스크립트에서 문자열을 입력하는 방식으로 백틱(back-tic, `)을 사용

```javascript
class DateTimeNow extends React.Component {
    render() {
        let dateTimeNow = new Date().toLocaleString()
        return React.createElement(
            'span',
            null,
            `Current date and time is ${dateTimeNow}`
        );
    }
}
```

JSX에서 중괄호 표기 기법을 사용하는 방식

* 중괄호만 사용해서 데이터를 바인딩 가능
* Javascript 표현식이나 코드를 중괄호 안에서 실행 가능

```javascript
class DateTimeNow extends React.Component {
    render() {
        let dateTimeNow = new Date().toLocaleString()
        return <span> Hello {this.props.userName}, Current date and time is {dateTimeNow}. It's {new Date(Date.now()).toLocaleTimeString()}</span>
    }
}
```

예제 코드 3.4 JSX에서 변수 출력하기

```javascript
let helloWorldReactElement = <h1>Hello world!</h1>
class HelloWorld extends React.Component {
    render() {
        return <div>
            {helloWorldReactElement}
            {helloWorldReactElement}
        </div>
    }
}
ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('content')
)
```

### 3.2.4. JSX에서 속성 사용하기

JSX 태그안에 key1=value1 key2=value2... 같은 표기법을 사용하여 HTML 속성과 React 컴포넌트 속성을 정의\
e.g. 표준 HTML 속성인 href와 사용자 정의 속성 username

```javascript
ReactDOM.render((
    <div>
        <a href="http://reactquickly.co">Time for React?</a>
        <DateTimeNow username='Azat'/> 
    </div>,
    document.getElementById('content')
));
```

속성을 동적으로 설정해 사용할 수 있는 방법\
컴포넌트 속성(this.props)에서 가져올 수 있음\
e.g. href와 title을 랜더링 하기위해 각각 url, label속성을 사용\
속성 값은 ProfileLink 생성 시에 정의 됨. 즉 ProfileLink를 생성하는 부모 컴포넌트에서 이 값을 정의

```html
<profileLink url='/users/azat' label='Profile for Azat'/>
```

```javascript
class ProfileLink extends React.Component {
    render() {
        return <a href={this.props.url}
        title={this.props.label}
        target="_blank">Profile
        </a>
    }
}
```

React는 HTML요소의 명세에 존재하는 속성 외의 속성은 랜더링 할 때 제외함. 그러나 때로는 아래와 같이 사용자 지정 데이터를 속성으로 추가해야 할 수도 있음

```html
<li react-is-awesome="true" id="320">React is awesome! </li>
```

DOM의 HTML 비표준 속성에 데이터를 저장하는 것은 안티패턴 (가급적 추천하지 않음)

JSX를 사용할 떄 데이터를 반드시 HTML 요소의 속성으로 저장해야 하는 경우 다음과 같이 data-* 속성을 사용

```html
<li data-react-is-awesome={this.reactIsAwesome} id="320">React is awesome! </li>
```

값이 참일경우 다음과 같이 랜더링 됨

```html
<li data-react-is-awesome="true" id="320">React is awesome! </li>
```

data-*속성을 사용하지 않아도 this.props를 통해 입력한 모든 속성에 접근이 가능함

각 속성들을 개별적으로 전달 하면 코드가 많아지고, 개선해야 할 코드가 밀접하게 결합되므로 안티패턴임. 다음과 같이 개별적으로 변수를 넘기지 말것

```javascript
class HelloWorld extends React.Component {
    render() {
        return <h1 title={this.props.title} id= {this.props.id}>
            Hello {this.props.frameworkName} world!!!
        </h1>
    }
}
```

생략 부호(...)처럼 생긴 펼침 연산자를 이용 하여 전체 다 넘길 것\
title = {this.props} id = {this.props.id} 가 ...this.props로 표현 가능

예제 코드 3.5 속성 다루기

```javascript
class HelloWorld extends React.Component {
    render() {
        return <h1 {...this.props}>Hello {this.props.frameworkname} world!!!</h1>
    }
}

ReactDOM.render(
    <div>
        <HelloWorld
            id='ember'
            frameworkname='Ember.js'
            title='A framework for creating ambitious web applications.'/>,
        <HelloWorld
            id='backbone'
            frameworkname='Backbone.js'
            title='Backbone.js gives structure to web applications...'/>,
        <HelloWorld
            id='angular'
            frameworkname='Angular.js'
            title='Superheroic Javascript MVW Framework'/>,
    </div>,
    document.getElementById('content')
)

```

### 3.2.5 React 컴포넌트 메서드 생성하기

React 컴포넌트는 class이기 때문에 애플리케이션을 위한 메서드를 자유롭게 추가 가능. 다음 예제 코드는 헬퍼 메서드로 getUrl()을 추가함

```javascript
class Content extends React.Component {
    getUrl() {
        return 'http://webapplog.com'
    }
    render() {
        ...
    }
}
```

예제 코드 3.6 컴포넌트 메서드를 호출하여 URL 가져오기 (중괄호를 이용하여 클래스 메서드를 호출)

```javascript
class Content extends React.Component {
    getUrl() {
        return 'http://webapplog.com'
    }
    render() {
        return (
            <div>
                <p>Your REST API URL is: <a href={this.getUrl()}>{this.getUrl()}</a></p>
            </div>
        )
    }
}
```

### 3.2.6 JSX의 if/else 처리

일반적인 Javascript의 코드
```javascript
rednder() {
    if (user.session)
        return React.createElement('a', {href: '/logout'}, 'Logout')
    else
        return React.createElement('a', {href: '/login'}, 'Login')
}
```

JSX를 사용한 코드
```javascript
render() {
    if(this.props.user.session)
        return <a href='/logout'>Logout</a>
    else
        return <a href='/login'>Login</a>
}
```

변수, 표현식, 삼항 연산자에 대한 Javascript예제 코드

```javascript
//방법 1 : 변수
render() {
    let link
    if (this.props.user.session)
        link = React.createElement('a', {href:'/logout'}, 'logout')
    else
        link = React.createElement('a', {href:'/login'}, 'Login')
    return React.createElement('div', null, link);
}

//방법 2 : 표션식
render() {
    let link = (sessionFlag) => {
        if (sessionFlag)
            return React.createElement('a', {href:'/logout'}, 'logout')
        else
            return React.createElement('a', {href:'/login'}, 'Login')
        }
    return React.createElement('div', null, link(this.props.user.session));
}

//방법 3 : 삼항 연산자
render() {
    return React.createElement('div', null, (this.props.user.session)? React.createElement('a', {href:'/logout'}, 'Logout') : React.createElement('a', {href: '/login'}, 'Login')
    )
}
```

JSX를 사용한 나은 문법

```javascript
//방법 1 : 변수
render() {
    let link
    if (this.props.user.session)
        link = <a href='/logout'>Logout</a>
    else
        link = <a href='/login'>Login</a>
    return <div>{link}</div>
}

//방법 2 : 표현식
render() {
    let link = (sessionFlag) => {
        if (sessionFlag)
            return <a href='/logout'>Logout</a>
        else
            return <a href='/login'>Login</a>
    }
    return <div>{link(this.props.user.session)}</div>
}

//방법 3 : 삼항 연산자
render() {
    return <div>
        {(this.props.user.session) ? <a href='/logout'>Logout</a> : <a href='/login'>Login</a>}
    </div>
}

//방법 4 : 즉시 실행함수(Immediately Invoked Function Expression)로 선언하여 link와 같은 변수 없이 런타임에서 실행
render() {
    return <div>{
        (sessionFlag) => {
            if (sessionFlag)
                return <a href='/logout'>Logout</a>
            else
                return <a href='/login'>Login</a>
        }(this.props.user.session)
    }</div>
}
```

이와 같은 방식을 전체 엘리먼트뿐 아니라 텍스트나 속성 값을 랜더링할 때도 적용할 수 있음. 예를 들어 URL과 텍스트를 확대해서 엘리먼트를 생성하기 위한 중복을 피할 수 있음\
가장 간결한 스타일

```javascript
render() {
    let sessionFlag = this.props.user.session
    return <div>
        <a href={(sessionFlag)?'/logout':'/login')}>{(sessionFlag)?'Logout':'Login'}</a>
    </div>
}
```

요약하여 JSX에서 if/else 조건을 구현할 때는 다음과 같은 방법을 사용

* return 문 이전에 JSX외부에서 변수를 선언한 후 JSX 내부에서 {}를 사용하여 출력함
* return 문 이전에 JSX 외부에서 갚을 반환하는 함수 표현식을 선언한 후 JSX내부의 {}에서 실행함
* 삼항 연산자를 사용
* JSX 내부에서 즉시실행함수를 사용

가장 추천하는 스타일은 다음과 같음

```javascript
class MyReactComponent extends React.Component {
    render() {
        //JSX를 사용하지 않는 영역: 변수, if/else문, 삼항 연산자를 사용
        return (
            // JSX: 삼항 연산자 또는 함수 실행결과를 {}로 표시
        )
    }
}
```

### 3.2.7 JSX의 주석 작성 방법

{/**/}, /* 이 주석은\n 여러줄\n */

## 3.3. Babel을 이용한 JSX 트랜스파일러 설정하기

JSX를 실행시 일반적인 자바스크립트코드로 변환해야함. 이 과정을 compilation과 transformation을 거친다는 의미에서 transpilation이라고 함.\
Transpilation tools

* Balrbel 명령줄 인터페이스 도구: balbel-cli 패키지가 제공하는 트렌스파일레이션 명령. 설정이적고 시작이 간편함
* Node.js 또는 브라우저 자바스크립트로 작성한 babel-core패키지를 이용하여 JSX를 변환하는방식. 저수준 제어가 가능하고, 빌드 도구와 빌드 도구의 플러그인 상의 추상화나 의존성 제거가능 
* 빌드도구: Grunt, Gulp, Webpack같은 도구에서 Babel을 플러그인으로 사용가능 (가장 인기가 좋은 방법)\

## 3.4. React와 JSX의 까다로운 부분

### 3.4.1 특수문자

### 3.4.2 data- 속성

React는 HTML 비표준 속성을 컴포넌트에 추가하면 무시함. 사용자 정의 속성을 렌더링해야 한다면 속성의 접두사로 data-를 다음과 같이 사용함.\

```javascript
<li data-obejct-id="097F4E4F">...</>
```

### 3.4.3 스타일 속성

JSX의 스타일(style) 속성은 문자열 대신 자바스크립트 객체를 전달하고, CSS 속성은 카멜 표기법으로 작성.\
자바스크립트 객체를 사용해 React는 뷰를 더 빠르게 변경할 수 있음.

```javascript
let smallFontSize = {fontSize: '10pt'}
<input style={smallFontSize}>

<input style={{fontSize: '30pt'}}>

<span style= {{borderColor: 'red',
    borderWidth:1,
    borderStyle: 'solid'}}>Hey</span>

<span stype={{border:'1 px red solid'}}>Hey</span>
```

### 3.4.4 class와 for 속성

React와 JSX는 class와 for를 제외하면 표준 HTML 속성을 모두 사용할 수 있음.\
class ~> className\
for ~> htmlFor\

```javascript
<div className="hidden">...</div>

<div>
    <input type="radio" name={this.props.name} id={this.props.id}/>
    <label htmlFor={this.props.id}>
        {this.props.label}
    </label>
</div>
```

### 3.4.5 불 값을 속성 값으로 사용하는 경우

끝으로 disabled, required, checked, autofocus, readOnly같은 일부 속성은 폼 요소에만 사용.\
주의사항: 속성값을 {}안에 반드시 자바스크립트 식으로 작성해야함

```javascript
<input disabled={false}/>
```

# 4. React 컴포넌트의 상태 겍체

React 컴포넌트의 상태 객체에 대한 이해, 상태객체를 다루는 방법, 상태 객체와 속성(props)의 비교, 상태저장 컴포넌트와 상태비저장 컴포넌트에 대해 알아봄.

## 4.1.React 컴포넌트의 상태란?

React의 상태는 컴포넌트의 변경 가능한 데이터 저장소. 변경이 가능하다는 것은 상태 값을 변경 할 수 있다는것. 속성과 상태는 둘 다 뷰를 갱신하기 위해 사용할 수 있지만, 서로 목적이 다름.
상태 객체에 접근할 때는 이름을 이용. 이름은 this.state 객체의 속성. 본질적으로 상태를 변경하면 뷰에서 변경한 상테와 관련된 부분만 갱신됨(HTML 요소 또는 한 요소의 속성만 갱신)

## 4.2 상태 객체 다루기

상태 객체를 다루려면 값에 접근하고 갱산하는 방법과 초기 상태 설정 방법을 알아야 함.

### 4.2.1. 상태 객체에 접근하기

상태 객체는 컴포넌트의 멤버 변수로 this를 통해 접근할 수 있음. 예를들어 this.state.name 같은 방식으로 접근함. render()에서 this.state를 랜더링할 수 있음.

### 4.2.2. 초기 상태 설정하기

render()에서 상태 데이터를 사용하려면 상태를 초기화 해야함. React.Component를 사용하는 ES6 클래스의 constructor에서 this.state를 선언함. 반드시 super()속성을 전달하여 실행해야 부모 클래스의(React.Component)를 사용할 수 있음.

```javascript
class MyFancyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...}
    }
    render() {
        ...
    }
}
```

예제 코드 4.2 시계 컴포넌트 클래스의 생성자

```javascript
class Clock extends React.Component{
    constructor(props) {
        super(props)
        this.state = {currentTime: (new Date()).toLocaleString('en')}
    }
    ...
}
```

상태 객체는 다음과 같이 배열이나 다른 객체를 중첩해서 가질 수 있음.

```javascript
class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            githubName: 'azat-co',
            books: [
                'pro express.js',
                'practical node.js',
                'rapid prototyping with js'
            ]
        }
        render() {
            ...
        }
    }
}
```

constructor() 메서드는 앞의 컴포넌트 클래스에서 React 엘리먼트가 생성되는 시점에 한 번만 호출됨. 이렇게 해서 constructor()메서드 내에서 한 번만 this.state로 직접 상태를 선언할 수 있음. 이후의 상태를 변경하려면 직접 접근하지 말 것.

### 4.2.3. 상태 갱신하기

클래스 매서드인 this.setState(data, callback)를 사용하면 상태를 변경가능. 이 메서드를 실행하면 React는 전달하는 data를 현재 상태에 병합하고 render()를 호출 한 후 callback을 실행.

setState()는 비동기로 작동하기 때문에, 새로운 상태에 의존하는 경우, 콜백함수를 사용해야 새로운 상태가 적용된 후에 필요한 작업을 수행할 수 있음.

예제 코드 4.3 상태를 이용한 Clock 컴포넌트 구현
```javascript
class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.launchClock()
        this.state = {
            currentTime: (new Date()).toLocaleString('en')
        }
    }
    lunchClock() {
        setInterval(()=> {
            console.log('Updating time...')
            this.setState({
                currentTime: (new Date()).toLocaleString('en')
            })
        }, 1000)
    }
    render() {
        console.log('Rendering Clock...')
        return <div>{this.state.currentTime}</div>
    }
}
```

일반적으로 setState()는 이벤트 핸들러나 데이터 수신 또는 갱신을 처리하는 콜백함수에서 호출 됨. setState()로 전달하는 상태는 상태 객체의 일부분만 갱신함. 예를들어 객체에 세 항목이 있을 때 하나를 변경하면, 나머지 둘은 그대로 유지되어 바뀌지 않음.

```javascript
constructor(props) {
    super(props)
    this.state = {
        userName:'Jack',
        userEmail:'j.jobs1028@gmail.com',
        userId: 'JuneJobs'
    }
}
updateValues() {
    this.setState({userName: 'Junhee'})
}
```

setState가 render()를 호출한다는 사실도 알고있어야 함.

## 4.3. 상태 객체와 속성

상태 객체와 속성은 모두 클래스의 멤버이며, 각각 this.state와 this.props를 말함. 상태 객체는 변경이가능하고 속성은 불가능
속성은 부모 컴포넌트에서 전달하지만, 상태는 해당 컴포넌트 자체에서 정의함. 속성의 수정은 부모 컴포넌트에서만 가능. 그러므로 속성은 뷰 생성 시에 정해지고 정적인 상태로 유지됨.

## 4.4. 상태비저장 컴포넌트

Stateless component는 상태 객체가 없으며, 컴포넌트 매서드 또는 다른 React의 라이프사이클 이벤트 또는 메서드를 갖지 않는다. 상태비저장 컴포넌트의 목적은 오직 뷰를 랜더링하는것임. 속성을 받아 처리하는일만 함. 상태비저장 컴포는트를 많이, 상태 저장 컴포넌트를 더 적게 사용할수록 좋음

예제 코드 4.4 상태비저장 Hello World

```javascript
class HelloWorld extends React.Component {
    render() {
        return <h1 {...this.props}>Hello {this.props.frameworkName} world!!!</h1>
    }
}
```

# 5. React 컴포넌트 라이프사이클 이벤트

React 컴포넌트 라이프사이클 이벤트 한눈에 살펴보기, 이벤트 카테고리의 이해, 이벤트 정의, 마운팅, 갱신, 언마운팅 이벤트
화면 너비에 따라 달라지는 컴포넌트를 만드는 것 처럼 컴포넌트를 세밀하게 제어하기 위한 방법으로 컴포넌트 인스턴스 생성 전에 팰요한 로직을 구현한 후 새로운 속성을 제공해서 인스턴스를 재생성하는 방법을 생각해볼 수 있음. 이러한 경우 component lifecycle events를 사용하는 것이 좋음. 마운팅 이벤트를 이용해서 컴포넌트에 필요한 로직을 주입할 수 잇음. 그 외에도 다른 이벤트를 이용하면 뷰가 다시 렌더링하는 것을 결정하는 특별한 로직을 제공해서 좀 더 똑똑한 컴포넌트를 만들 수도 있음.

## 5.1. React 컴포넌트 라이프사이클 이벤트 한눈에 살펴보기

React는 라이프사이클 이벤트를 기반으로 컴포넌트의 동작을 제어하고 사용자 정의를 할 수 있음. 라이프사이클 이벤트는 다음과 같음.

* Mounting Event: React엘리먼트를 DOM노드에 추가할 때 발생
* Updating Event: 속성이나 상태가 변경되어 React 엘리먼트를 갱신할 때 발생
* Unmounting Event: React 엘리먼트를 DOM에서 제거할 때 발생

어떤 이벤트는 한 번만 실행되기도 하고, 어떤 이벤트는 계속해서 실행됨. 

## 5.2. 이벤트 분류

React는 여러 가지 컴포넌트 이벤트를 세 가지 유형으로 정의함. 각 분류에 따라 에벤트가 발생되는 횟수가 다름.

* constructor(): 엘리먼트를 생성하여 기본속성과 상태를 설정할 때 실행된다.
* 마운팅
    * componentWillMount(): DOM에 삽입하기 전에 실행.
    * componentDidMount(): DOM에 삽입되어 렌더링이 완료된 후 실행됨.
* 갱신
    * componentWillReceiveProps(nextProps): 컴포넌트가 속성을 받기 직전에 실행됨.
    * shouldComponentUpdate(nextProps, nextState): 컴포넌트가 갱신되는 조건을 정의해서 재랜더링을 최적화할 수 있음. 불값을 반환
    * componentWillUpdate(nextProps, nextState): 컴포넌트가 갱신되기 직전에 실행됨.
    * componentDidUpdate(prevProps, prevState): 컴포넌트가 갱신된 후에 실행
* 언마운팅
    * componentWillUnmount(): 컴포넌트를 DOM에서 제거하기 전에 실행되며, 구독한 이벤트를 제거하거나 다른 정리 작업을 수행할 수 있음.

## 5.3. 이벤트 구현

라이프사이클 이벤트를 구현하려면 클래스에 메서드를 정의해야함. React는 이벤트 이름에 해당하는 메서드가 있는지 확인. React가 메서드를 찾으면 헤당 메서드를 실행.

React는 특정 매서드가 정의되어 있다면 컴포넌트의 실행주기 중에 이 메서드를 호출함. \
DOM과 연관된 함수가 실행되는 과정을 보여주는 예제

```javascript
class Content extends React.Component {
    componentWillMount() {
        console.log(ReactDOM.findDOMNode(this)) //DOM노드가 0으로 확인됨.
    }
    componentDidMount() {
        console.dir(ReactDOM.findDOMNode(this)) //DOM 노드가 <div>로 확인됨.
    }
    render() {
        return {

        }
    }
}
```

5.4. 모든 이벤트 실행

예제 코드 5.1 Logger 컴포넌트의 렌더링과 세 번의 갱신 실행
```javascript 
class Content extends React.Component {
    constructor(props) {
        super(props)
        this.launchClock()
        this.state = {
            counter: 0,
            currentTime: (new Date()).toLocaleString()
        }
    }
    launchClock() {
        setInterval(() => {
            this.setState({
                counter: ++this.state.counter,
                currentTime: (new Date()).toLocaleString()
            })
        }, 1000)
    }
    render () {
        if (this.state.counter > 2) return
        return <Logger time="{this.state.currentTime}"></Logger>
    }
}
```

예제 코드 5.2 컴포넌트 라이프사이클 이벤트 관찰

```javascript
class Logger extends React.Component {
    constructor(props) {
        super(props)
        console.log("constructor")
    }
    componentWillMount() {
        console.log('componentWillMount 실행')
    }
    componentDidMount(e) {
        console.log('componentDidMount 실행')
        console.log('DOM node:', ReactDOM.findDOMNode(this))
    }
    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps 실행')
        console.log('새로운 속성:', newProps)
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate 실행')
        console.log('새로운 속성:', newProps)
        console.log('새로운 상태:', newState)
        return true
    }
    componentWillUpdate(newProps, newState) {
        console.log('componentWillUpdate 실행')
        console.log('새로운 속성:', newProps)
        console.log('새로운 상태')
    }
    componentDidUpdate(oldProps, oldState) {
        console.log('componentDidUpdate, 실행')
        console.log('이전 속성: ', oldProps)
        console.log('이전 상태: ', oldState)
    }
    conponentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render() {
        return(
            <div>{this.props.time}</div>
        )
    }
}
```

이 웹페이지를 실행하면 Logger컴포넌트의 함수와 라이프사이클 이벤트가 콘솔에 로그를 확인할 수 있다.
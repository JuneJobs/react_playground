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
        React.craeteElement(HelloWorld)
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
            'Hello' + this.props.frameworkNAme + 'world!!!'
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
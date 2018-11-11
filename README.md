# 리엑트 교과서 요약

## 1. React 살펴보기

### 1.1. React란 무엇인가?

 React는 UI 컴포넌트 라이브러리 \
 React UI는 매우 독립적이며 특정 관심사에 집중된 기능 블록 \
 React는 템플릿 언어가 없는 순수한 Javascript를 기반으로 **CBA**(Component-based architecture)를 구현, 컴포넌트에 대한 새로운 시각을 창출

### 1.2. React가 해결할 수 있는 문제

시간에 따라 변화하는 데이터를 다루는 거대한 애플리케이션의 개발\
React팀은 메모리에서 DOM요소를 생성하는 것은 빠르지만, 실제 DOM으로 렌더링 하는 과정에서 병목이 발생한다는 점을 알게되어, 문제를 해결하는 알고리즘 개발. 이로 인하여 React의 동작속도 및 성능에 이득을 가져옴

### 1.3. React의 장점

* 단순한 앱개발: 순수 Javascript로 만든 컴포넌트 기반 아키텍쳐. 선언형 스타일, DOM추상화(강력, 개발자 친화적)
* 빠른 UI
* 코드량 감소: 수많은 라이브러리와 컴포넌트를 접할 수 있음

#### 1.3.1. 간결성

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

#### 1.3.2. 속도와 테스트 용이성

React의 가상 DOM은 자바스크립트 메모리에만 존재. 데이터를 변경하면 React는 가상 DOM을 비교하여, 랜더링 변경이 필요한 경우에만 실제 DOM에 랜더링 함


#### 1.3.3. React의 폭넖은 개발 커뮤니티와 생태계

React는 페이스북과 인스타그램의 막대한 지지를 받고 있음

### 1.4. React의 단점

모든 기능을 다 갖춘 프레임워크가 아님\
추가기능들을 개발중임\
훌륭한 사례나 강의가 부족\
단방향 데이터 바인딩

### 1.5. Skip

### 1.6. 첫번째 React App 만들기
예제 코드 1.1. React 라이브러리 로드와 index.html 기본 골격\
소스코드를 다운받는 방법은 다양하겠지만, 가장 의존적이지 않은 심플한 방법을 사용\
react.js는 라이브러리를 불러옴
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

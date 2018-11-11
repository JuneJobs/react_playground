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
            courrentObject = currentObject[propertyNameList[currentNestedLevel]]
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
* 강력한 추상화: React는 DOM을 쉽게 다룰 수 있고, 같은 기능이지만 크로스 브라우징을 위해 다르게 구현할 수 밖에 없었던 인터페이스나 이벤트 핸들링을 정규화


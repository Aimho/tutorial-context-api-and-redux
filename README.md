## Tutorial Context API & Redux

[velopert 블로그](https://velog.io/@velopert/series/react-with-typescript) - 리액트 프로젝트에서 타입스크립트 사용하기 5,6 실습

## Tutorial Memo

redux code는 [Ducks패턴](https://github.com/erikras/ducks-modular-redux)을 사용함

action type, create action function, reducer를 모두 한파일에 작성하는 방법으로, <br/>
구조 중심이 아니라 기능(module) 중심으로 파일을 나누는 것

Velopert Directory 작성방법

```
modules/
  todos/
    action.ts
    index.ts
    reducer.ts
    types.td
  counter.ts
```

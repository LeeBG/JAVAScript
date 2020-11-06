// 1. 자바스크립트는 자료형이 동적으로 정해진다. - 실행이 굉장히 느리다.
//해석의 순서는 = 을 기준으로 우측부터 해석한다.
// 자바 스크립트는 모든 공간을 포인터로
// v8 engine은 Size가 4byte주기의 주소값만 알면 된다.

// v8 engine 램의 일부를 나누어 만든 Heap이라는 공간(엄청큰) 만듦
// word는 4Byte를 연속적으로 읽는다.
// 변수의 용량은 4Byte로 고정돼있다.
// 매핑테이블에는 RAM의 시작번지수를 적는다.
// hip에 모든 데이터가 저장돼있다. 변수가 읽어질 때 저장[값과 위치주소]

var num = 100000000; //정수 1Byte로 처리가능 ->Heap
console.log("num:", num);

var str = "문자열"; //문자열 // 4Byte ->Heap
console.log("str:", str);

var floatNum = 10.5; //실수 최소 8byte ->Heap
console.log("floatNum:", floatNum);

var charStr = "가" //문자  4Byte ->Heap
console.log("charStr:", charStr);

var boolean = true; // 참/거짓 판별 4Byte ->Heap
console.log("boolean:", boolean);

var list = [1, 2, 3, 4, 5, 6]; //4Byte -> Heap
console.log("list:", list);
console.log("list[0]", list[0]);
console.log("list[5]", list[5]);


// 자바 스크립트 오브젝트 (key : value) 4Byte -> Heap (OS가 알아서 때려 넣는다.)
var user = {
    name: "홍길동",
    phone: "0102222"
}

console.log("user", user);
console.log("user.name", user.name);
console.log("user.phone", user.phone);

// 함수를 저장할 수 있다.
var hello = function() { //4Byte
    alert("함수 호출됨");
}

hello();
/*최근에는 let과 같은 명령어로 변수를 선언한다.*/
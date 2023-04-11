const f = function (){
    console.log(1+1);
    console.log(1+5);
}

const a= [f]; //배열에는 함수를 잘 담지 않는다.
a[0]();

const o = {
    func: f
} //객체에 함수를 주로 담는다.  

o.func();
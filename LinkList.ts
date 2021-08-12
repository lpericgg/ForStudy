
let str = "qwertyuiop";
let newData = null;
//初始化一个单链表  head
let head = {value:str[0],next:null}
let curentIndex = head;
for (let i = 0;i<str.length - 1;i++){
    let newElement = {value:str[i+1],next:null};
    curentIndex.next = newElement;
    curentIndex = newElement;
}

console.log(fun1());

//判定是否是回文字符串
function fun1(){
    let fastIndex = head;
    let lowIndex = head;

    let newArr = [];
    let reverse = "";
    while(fastIndex){
        newArr.push(lowIndex.value);
        lowIndex = lowIndex.next;
        fastIndex = fastIndex.next?.next;
    }

    console.log(lowIndex,fastIndex);

    let min = 0;
    //偶数个数值的时候刚好快指针便利到最后一个，fastIndex 指向null,奇数个就溢出，undefined
    if(fastIndex !== null){
        // 奇数个数值，去掉lowIndex遍历的一个尾
        min = 1;
    }
    else{
        // 偶数个数值
    }

    //执行完while  lowIndex指向链表中间
    for(let i = newArr.length-1-min;i>=0;i--){
        reverse += newArr[i];
    }
    console.log(reverse);

    let another = "";
    while(lowIndex){
        another += lowIndex.value;
        lowIndex = lowIndex.next;
    }

    console.log(another)

    return reverse === another;
}

//遍历单链表
function forList(listHead){
    let curIndex = listHead;
    while(curIndex){
        console.log(curIndex.value);
        curIndex = curIndex.next;
    }
}

//翻转单链表
function reverseList(listHead){
    let curIndex = listHead;
    let nextData = null;
    let prevData = null;
    while(curIndex){
        //暂存下个指向
        nextData = curIndex.next;
        //当前指向  指为前一个对象
        curIndex.next = prevData;
        //更新当前指向为前一个指向
        prevData = curIndex;
        //更新当前指向为下个指向数据；
        curIndex = nextData;
    }   

    return prevData;
}

//删除倒数第n个数据，快慢指针思路。
function deleteNum(n){
    let fastIndex = head;
    let lowIndex = head;

    while(--n >= -1){
        fastIndex = fastIndex.next;
    }

    console.log(fastIndex);
    while(fastIndex){
        fastIndex = fastIndex.next;
        lowIndex = lowIndex.next;
    }
    console.log("delete",lowIndex.next.value);

    lowIndex.next = lowIndex.next.next;
}
head = reverseList(head);
forList(head);
console.log("delete..........");
deleteNum(5)
forList(head);
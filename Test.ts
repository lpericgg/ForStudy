// 求整数平方根，求值失败返回-1
function mySqrt(x){
    if(x < 0 ){
        console.log("数据不合法");
        return;
    }
    if(x === 0){
        return 0;
    }

    let low = 0;
    let high = x;
    let floorNum = 0;
    while(low <= high){
        let mid = Math.floor((high-low)/2 + low);
        if(mid * mid > x){
            high = mid -1;
        }
        else if (mid * mid < x){
            low = mid + 1;
            floorNum = mid;
        }
        else {
            return mid;
        }
    }

    return floorNum;
}

//二分查找
function search(arr,x) {
    let low = 0;
    let high = arr.length -1;
    while(low<=high){
        //求中间值，防止数据溢出，计算差值加上最小值
        let mid = Math.floor((high - low)/2 + low);
        
        if(arr[mid] > x){
            high = mid - 1;
        }
        else if(arr[mid] < x){
            low = mid + 1;
        }
        else{
            console.log("找到了,index为",mid);
            return ;
        }
    }

    console.log("没找到");
}

// 查找第一个值等于给定值的元素
function search1(arr,x){
    let low = 0;
    let high = arr.length - 1;
    while(low<=high){
        let mid = Math.floor((high - low)/2 + low);
        if(arr[mid] > x){
            high = mid - 1;
        }
        else if(arr[mid] < x){
            low = mid + 1;
        }
        else{
            if(mid === 0 || arr[mid - 1] !== x) return mid;
            high = mid - 1;
        }
    }
    return -1;
}

// 查找最后一个值等于给定值的元素
function search2(arr,x){
    let low = 0;
    let high = arr.length - 1;
    while(low<=high){
        let mid = Math.floor((high - low)/2 + low);
        if(arr[mid]>x){
            high = mid - 1;
        }
        else if(arr[mid]<x){
            low = mid + 1;
        }
        else{
            if(mid === arr.length -1 || arr[mid + 1]!== x) return mid;
            low = mid + 1;
        }
    }
    return -1;
}

//查找最后一个小于等于给定值的数据
function search3(arr,x){
    let low = 0;
    let high = arr.length - 1;
    while(low <= high){
        let mid = low + Math.floor((high-low)/2);
        if(arr[mid] > x){
            high = mid - 1;
        }
        else if(arr[mid] < x){
            low = mid + 1;
        }
        else{
            if(mid === arr.length - 1|| arr[mid-1] !== x){
                return mid;
            }
            else{
                high = mid -1;
            }
        }
    }
    return -1;
}
//查找第一个大于等于给定值的数据
function search4(arr,x){
    let low = 0;
    let high = arr.length - 1;
    while(low <= high){
        let mid = low + Math.floor((high-low)/2);
        if(arr[mid] > x){
            high = mid - 1;
        }
        else if(arr[mid] < x){
            low = mid + 1;
        }
        else {
            if(mid === 0 || arr[mid + 1] !== x){
                return mid;
            }
            low = mid + 1;
        }
    }
    return -1;
}
let testArr = [1,2,3,4,5,6,6,6,6,7,7,7,7,8,9,10];
search(testArr,7);

console.log(search1(testArr,7));
console.log(search2(testArr,7));
console.log(search3(testArr,7));
console.log(search4(testArr,7));

console.log(mySqrt(1));

// 三维碰撞算法。
// lua常用的元表
// index 和newIndex
// lua table A 
// lua 字符串。
// C++ 
// 面向对象的理解。
// 虚析构函数有什么好处
// C++字符串结尾是什么

// creator资源加载流程

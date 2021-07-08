let arr = [1,2,3,4,5,6,7,8,9,10];
console.log("初始数组",arr);

function destroyArr(){
    for(let i = 0 ;i<arr.length;i++){
        const index = Math.floor(Math.random()*arr.length);
        if(index === i){
            //连个相同的数据亦或后  = 0 ,所以要跳出
            // 所以在用亦或交换两个数据的值要注意
            continue;
        }
    
        // 第三变量交换两个值
        let temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
    
        //相加交换两个数据值
        arr[i] = arr[i] + arr[index];
        arr[index] = arr[i] - arr[index];
        arr[i] = arr[i] - arr[index];
    
        //亦或交换两个数据的值。位运算
        arr[i] = arr[i]^arr[index];
        arr[index] = arr[i]^arr[index];
        arr[i] = arr[i]^arr[index];
    
        //运算符优先级  根据运算符优先级，首先执行b=a，此时的b直接得到了a的变量值，然后一步数组索引让a得到了b的值
        arr[i] = [arr[index],arr[index] = arr[i]][0];
    
        //es6解构赋值
        [arr[i],arr[index]] = [arr[index],arr[i]];
        // arr[i]^=arr[index];
        // arr[index]^=arr[i];
        // arr[i]^=arr[index];
    }
    console.log("打乱后",arr);
}


//冒泡排序，复杂度最坏情况  o(n^2),最好o(n)
function maopao(){
    for(let i = 1;i<arr.length;i++){
        let flag = false;
        for(let j = 0;j<arr.length-i;j++){
            if(arr[j] > arr[j+1]){
                flag = true;
                arr[j] = [arr[j+1],arr[j+1] = arr[j]][0];
            }
        }
        //如果有一次对比没有发生交换，说明已经是有序的了，就不需要再循环判断了。
        if(!flag){
            console.log("提前跳出");
            break;
        }
    }
    console.log(arr);
}

//快速排序
const quickSort = (array) => {
    const sort = (arr, left = 0, right = arr.length - 1) => {
     if (left >= right) {//如果左边的索引大于等于右边的索引说明整理完毕
      return
     }
    let i = left
    let j = right
    const baseVal = arr[j] // 取无序数组最后一个数为基准值
    while (i < j) {//把所有比基准值小的数放在左边大的数放在右边
     while (i < j && arr[i] <= baseVal) { //找到一个比基准值大的数交换
      i++
     }
     arr[j] = arr[i] // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
     while (j > i && arr[j] >= baseVal) { //找到一个比基准值小的数交换
      j--
    }
     arr[i] = arr[j] // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
    }
    arr[j] = baseVal // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
    sort(arr, left, j-1) // 将左边的无序数组重复上面的操作
    sort(arr, j+1, right) // 将右边的无序数组重复上面的操作
    }
    const newArr = array.concat() // 为了保证这个函数是纯函数拷贝一次数组
    sort(newArr)
    return newArr
   }

function kuaisu(arr,left,right) {
    if(left >= right){
        return;
    }
    let i = left;
    let j = right;
    let key = arr[i];
    while(true){
        //从左向右找比key大的值
        while(arr[++i] < key){
            if(i === right){
                break;
            }
        }
        while(arr[--j] > key){
            if(j === left){
                break;
            }
        }
        if(i>=j)break;

        arr[i] = [arr[j],arr[j] = arr[i]][0];
    }

    arr[left] = [arr[j],arr[j] = arr[left]][0];
    kuaisu(arr,left,j-1);
    kuaisu(arr,j+1,right);
}
destroyArr();
maopao();
destroyArr();
kuaisu(arr,0,arr.length);
console.log(quickSort(arr));

// for (let i = 0;i<10;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },100);
// }

// for (var x = 0;x<10;x++){
//     setTimeout(()=>{
//         console.log(x);
//     },100);
// }
console.log(1<<4);
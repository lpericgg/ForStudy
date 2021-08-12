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

function swapNum(a,b){
    a = [b,[b=a]][0];
}

//快速排序
function quickSort(arr,left,right) {
    if(left >= right){
        return;
    }
    let i = left;
    let j = right;
    let key = arr[left];
    
    while(i < j){
        while(i < j && arr[j] >= key) --j;
        arr[i] = arr[j];
        while(i < j && arr[i] <= key) ++i;
        arr[j] = arr[i];
    }
    arr [i] = key;

    quickSort(arr,left,i-1);
    quickSort(arr,i+1,right);
}

//插入排序
function insertSort(){
    for (let i =1;i<arr.length;i++){
        //当前要插入的数值
        let value = arr[i];
        //已经有序列的数组最大索引
        let position = i;
        //从后往前遍历有序数组找到比当前数字大的第一个值，放在它的后边。
        while(position > 0 && arr[position-1]>value){
            arr[position] = arr[position-1];
            position --;
        }
        arr[position] = value;
    }
    return arr;
}

/**
 * 选择排序
 * 将未排序部分的最小数值，放在已排序数组的末尾
 */
function chooseSort(){
   
    for(let i = 0;i<arr.length;++i){
        let min = arr[i];
        let minIndex = i;
        for (let j = i + 1;j<arr.length;++j){
            if(arr[j]<min){
                min = arr[j];
                minIndex = j;
            }
        }
        arr[i] = [arr[minIndex],arr[minIndex] = arr[i]][0];
    }
    return arr;
}

/**
 * 归并排序
 * 时间复杂度nlogn,空间复杂度On
 * 稳定排序算法，合并的时候，总先放入左边的序列数组，所以就是稳定的。
 */
function guibing(ar,low,high){
    //跳出条件
    if(low >= high){
        return;
    }

    //分成两部分
    
}

/**
 * 快速排序
 * 时间复杂度nlogn，空间复杂度O1
 * 不稳定的排序算法
 */


/**
 * 桶排序
 */

/**
 * 计数排序
 * 时间复杂度 On,空间复杂度On
 * 稳定的排序算法，对数据要求比较苛刻
 */


/**
 * 基数排序
 * 例如手机号排序，低位到高位分别实现计数排序。
 * 时间复杂度o(dn)，d代表维度
 * 稳定的排序算法
 */

destroyArr();
maopao();
destroyArr();
quickSort(arr,0,arr.length-1);
console.log(arr);
destroyArr();
console.log(insertSort());

destroyArr();
console.log("选择排序",chooseSort());
destroyArr();
guibing(arr,0,arr.length-1);

/**
 *
 *
 * 快速排序
 *
 * */
// 生成一个有十个随机数字的数组
function makeRandomArr(arrLength) {
    let length = 10;
    let arr = [];
    let random = 0;
    let fixedNum = 0;
    if (arrLength) {
        length = arrLength
    }
    for (let i = 0; i < length; i++) {
        random = length * Math.random();
        fixedNum = parseInt(random) + 1;
        arr.push(fixedNum)
    }
    return arr;
}

// 生成一个最不理想数字的数组
function makeArr(arrLength) {
    let arr = [];
    for (let i = arrLength; i > 0; i--) {
        arr.push(i)
    }
    return arr
}

let arr = makeArr(10); // 最不理想排序数组
let randomArr = makeRandomArr(10);

// 阮 快速排序
function quickSort(array) {
    let arr = array.concat();// 复制数组,不改变原来数组
    if (arr.length <= 1) {
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}

console.time('阮-Time');
let result = quickSort(arr);
console.log('阮-运算结果', result);
console.timeEnd('阮-Time'); // 阮,时间 3-5ms

console.time('阮-Time');
let randomArrResult = quickSort(randomArr);
console.log('阮-随机-运算结果', randomArrResult);
console.timeEnd('阮-Time'); // 阮,时间 3-5ms
console.log('------------------------');

// 冒泡排序
function bubbleSort(arr) {
    let result = arr.slice();
    let length = result.length;
    for (let i = 0; i < length; i++) {
        let nextLength = length - i;
        let j = 1;
        while (j < nextLength) {
            let first = result[j - 1];
            let second = result[j];
            if (first > second) {
                result[j] = first;
                result[j - 1] = second;
            }
            j++;
        }
    }
    return result;
}

console.time('bubble-Time');
let bubbleResult = bubbleSort(arr);
console.log('bubbleResult 运算结果: ', bubbleResult);
console.timeEnd('bubble-Time');

console.time('bubble-Time');
let bubbleRandomArrResult = quickSort(randomArr);
console.log('bubble-随机-运算结果', bubbleRandomArrResult);
console.timeEnd('bubble-Time');

console.log('------------------------');

// wiki 快速排序
function wikiQuickSort(array) {

    // 交换元素位置
    function swap(array, i, k) {
        let temp = array[i];
        array[i] = array[k];
        array[k] = temp;
    }

    // 数组分区，左小右大
    function partition(array, left, right) { // 遍历 (数组长度减一) 次
        let storeIndex = left;
        let pivot = array[right]; // 直接选最右边的元素为基准元素
        for (let i = left; i < right; i++) {
            if (array[i] < pivot) {
                swap(array, storeIndex, i);
                storeIndex++; // 交换位置后，storeIndex 自增 1，代表下一个可能要交换的位置
            }
        }
        swap(array, right, storeIndex); // 将基准元素放置到最后的正确位置上
        // console.log('分区完成', storeIndex, array);
        return storeIndex;
    }

    // 排序递归
    function sort(array, left, right) {
        if (left >= right) {
            return;
        }
        let storeIndex = partition(array, left, right);
        sort(array, left, storeIndex - 1);
        sort(array, storeIndex + 1, right);
    }

    sort(array, 0, array.length - 1);

    return array;
}

console.time('wikiTime');
let wikiResult = wikiQuickSort(arr);
console.log('wiki运算结果', wikiResult);
console.timeEnd('wikiTime');

console.time('wikiTime');
let wikiRandomArrResult = quickSort(randomArr);
console.log('wiki-随机-运算结果', wikiRandomArrResult);
console.timeEnd('wikiTime');
console.log('--------------------------')
// 插入排序
//  解析 :
// （1） 从第一个元素开始，该元素可以认为已经被排序
// （2） 取出下一个元素，在已经排序的元素序列中从后向前扫描
// （3） 如果该元素（已排序）大于新元素，将该元素移到下一位置
// （4） 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
// （5）将新元素插入到下一位置中
// （6） 重复步骤2

function insertSort(array) {
    let arr = array.concat();
    // 假设第0个元素是一个有序的数列,第1个以后的是无序的序列
    // 所以从第一个元素开始将无序数列的元素插入到有序数列中

    for (let i = 1; i < arr.length; i++) {
        console.log('insert操作前',arr);
        // 升序
        if (arr[i] < arr[i - 1]) {
            // 取出无序数列中第i个作为被插入元素
            let guard = arr[i];
            // 记住有序数列的最后一个位置,并将有序数列位置扩大一个
            let j = i - 1;
            arr[i] = arr[j];
            // 比大小,找到被插入元素所在的位置,从后往前找
            while (j >= 0 && guard < arr[j]) {
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j+1] = guard;
        }
        console.log('insert操作后',arr);
        console.log('------------')
    }
    return arr;
}
randomArr = makeRandomArr(10);
let insertResult = insertSort(randomArr);
console.log(insertResult)








































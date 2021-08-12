
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
class Stack {

    constructor(){
        this.data = [];
    }

    push(e){
        this.data.push(e);
    }

    getTop(){
        return this.data[this.data.length-1];
    }

    pop(){
        return this.data.pop();
    }

    length(){
        return this.data.length;
    }
    
    isImpty(){
        return this.data.length === 0;
    }

    clear(){
        this.data = [];
    }
}
function isVaild(s){
    let stack1 = new Stack();

    for(let i =0;i<s.length;i++){
        if(s[i] === "(" ){
            stack1.push(")");
        }
        else if(s[i] === "{" ){
            stack1.push("}");
        }
        else if(s[i] === "[" ){
            stack1.push("]");
        }
        else if(s[i] === stack1.getTop()){
            stack1.pop();
        }
        else {
            return false;
        }
    }
    return stack1.isImpty();
}

console.log(isVaild("()[([)]{}"))
const set = {};

set.arrCreate = (...vals)=>{
    let set = new set.NormalSet();
    Array.from(vals).forEach(x=>{
        if (x instanceof Array) {
            x.forEach(y=>{
                set.add(y);
            })
        }
        else {
            set.add(x);
        }
    })
    return set;
}

set.N =  class N {
    constructor() {
        this.val = 0;
    }
}

set.Z = class Z {
    constructor() {
        this.val = 1;
    }
}

set.Q = class Q {
    constructor() {
        this.val = 2;
    }
}

set.R = class R {
    constructor() {
        this.val = 3;
    }
}

set.union = (set1,set2)=>{
    if (set1 instanceof set.R || set2 instanceof set.R) {
        return new set.R;
    }
    else if ((set1 instanceof set.Q || set2 instanceof set.Q) && !(set1 instanceof set.R || set2 instanceof set.R)) {
        return new set.Q;
    }
    else if ((set1 instanceof set.Z || set2 instanceof set.Z) && !((set1 instanceof set.Q || set2 instanceof set.Q) || (set1 instanceof set.R || set2 instanceof set.R))) {
        return new set.Z;
    }
    else if ((set1 instanceof set.N || set2 instanceof set.N) && !((set1 instanceof set.Z || set2 instanceof set.Z) || ((set1 instanceof set.Q || set2 instanceof set.Q) || (set1 instanceof set.R || set2 instanceof set.R)))) {
        return new set.N;
    } 
    else {
        if (!set1 instanceof Set || !set2 instanceof Set) {
            console.error('Union function must be used with two sets.')
        }
        else {
            let result = new Set();
            set1.forEach(x=>{
                result.add(x);
            })
            set2.forEach(x=>{
                result.add(x);
            })
            return result;
        }
    }
}

set.intersect = (set1, set2)=>{
    let val1 = -1;
    let val2 = -1;
    if (!(set1 instanceof Set)) {
        val1 = set1.val;
    }
    if (!(set2 instanceof Set)) {
        val2 = set2.val;
    }
    console.log(val1);
    console.log(val2);
    if (Math.min(val1,val2) == 3) {
        return set.R;
    }
    if (Math.min(val1,val2) == 2) {
        return set.Q;
    }
    if (Math.min(val1,val2) == 1) {
        return set.Z;
    }
    if (Math.min(val1,val2) == 0) {
        return set.N;
    }
    if (Math.min(val1,val2) == -1) {
        if (val1 != -1) {
            return set2;
        }
        else if (val2 != -1) {
            return set1;
        }
        else {
            let result = new Set();
            set1.forEach(x=>{
                if (set2.has(x)) {
                    result.add(x);
                }
            })
            return result;
        }
    }
}




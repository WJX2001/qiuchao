
function caculateWeight(molecularFormular) {
    const myObj = {
        C:12,
        H:1,
        O:16,
        N:14
    }

    let molecularWeight = 0
    let currentElement = ''
    let currentCount = 0

    for(let i=0;i<molecularFormular.length;i++) {
        const char = molecularFormular[i]

        if(/[CHON]/.test(char)) {
            if(currentElement !=='') {
                molecularWeight += myObj[currentElement] * (currentCount ||1)

            }
            currentElement = char
            currentCount = 0
        } else if (/[0-9]/.test(char)) {
            currentCount = currentCount * 10 + parseInt(char)
        }
    }

    if(currentElement !== '') {
        molecularWeight +=myObj[currentElement]*(currentCount || 1)
    }
    return molecularWeight
}

const molecularFormular = 'C4H9OH6'
console.log(caculateWeight(molecularFormular))
































const qualifications = [4,8,5,10,11,8,4,5,9,12]

let exceedExpectations = 0
let pass = 0
let failed = 0
let counter = 0

While(counter < qualifications.length) 
    if(qualifications [counter] >=10 ){
   exceedExpectations ++
    }else if (qualificationsIsEnought [counter] >=6 ){
    pass +=1
}else {
failed=failed +1
}
counter++


console.log(exceedExpectations)
console.log(pass)
console.log(fail)

function exceedExpectations (qualifications){
    return qualifications >= 10
}
//////////////////////////////////////////////////////////////////////////////////

var couter = 1
var couter_2 = 1
var grade = 0
var grade_2 = 0
var grade_261 = 0
var couter_261 = 1

//////////////////////////////////////////////////////////////////////////////////

document.querySelector('#form').addEventListener('submit',function(event){

    event.preventDefault()

   // let gpa = []
    let sem
    //let code_ss =[]

    let sub  = document.getElementById('subject').value
    let code_sub  = document.getElementById('code-subject').value
    let gpa_in  = document.getElementById('gpa').value

//////////////////////////////////////////////////////////////////////////////////

    if(document.getElementById('term1').checked) { 
        let term1  = document.getElementById('term1').value
        sem = term1
    } 
    if(document.getElementById('term2').checked){
        let term2  = document.getElementById('term2').value 
        sem = term2
    }
    console.log(gpa)
    
//////////////////////////////////////////////////////////////////////////////////

    if(sub.length == 0 ){
        alert("โปรดกรอกชื่อวิชา !!")
        var ff = false
    }
    else if(isNaN(code_sub)){
        alert("โปรดกรอกเลขรหัสวิชา !!")
        ff = false
    } 
    else if (code_sub.length > 6){
        alert("รหัสวิชาเกิน โปรดกรอกใหม่ !!")
        ff = false
    }
    else if (code_sub.length < 6){
        alert("โปรดกรอกชื่อวิชา !!")
        ff = false
    }
    else if (sem.length == 0 ){
        alert("โปรดเลือกภาคการศึกษา !!")
        ff = false
    }
    else ff = true

//////////////////////////////////////////////////////////////////////////////////    

    if(ff){
        
       // gpa[couter] = gpa_in
        //code_ss[couter] = code_sub

        alert("เพิ่มสำเร็จ !!")

        console.log(couter)
        console.log(sem)
        console.log(gpa)

        document.getElementById('subject').value = null
        document.getElementById('code-subject').value = null
        document.getElementById('term1').checked = null
        document.getElementById('term2').checked = null

//////////////////////////////////////////////////////////////////////////////////

        if(sem  === "term1"){

            if (gpa_in === 'A' ){
                grade = grade + 4
            }
            if(gpa_in === 'B+') {
                grade = grade + 3.5
            }
            if(gpa_in === 'B') {
                grade = grade + 3
            }
            if(gpa_in === 'C+') {
                grade = grade + 2.5
            }
            if(gpa_in === 'C') {
                grade = grade + 2
            }
            if(gpa_in === 'D+') {
                grade = grade + 1.5
            }
            if(gpa_in === 'D') {
                grade = grade + 1
            }
            if (gpa_in === 'F') {
                grade = grade + 0
            }
            console.log(grade)
        }
        //////////////////////////////////////////////////////////////////////////////////
        if(sem === "term2"){

            if (gpa_in === 'A' ){
                grade_2 = grade_2 + 4
            }
            if(gpa_in === 'B+') {
                grade_2 = grade_2 + 3.5
            }
            if(gpa_in === 'B') {
                grade_2 = grade_2 + 3
            }
            if(gpa_in === 'C+') {
                grade_2 = grade_2 + 2.5
            }
            if(gpa_in === 'C') {
                grade_2 = grade_2 + 2
            }
            if(gpa_in === 'D+') {
                grade_2 = grade_2 + 1.5
            }
            if(gpa_in === 'D') {
                grade_2 = grade_2 + 1
            }
            if (gpa_in === 'F') {
                grade_2 = grade_2 + 0
            }
            console.log(grade_2)
        }

///////////////////////// Print to table 261 /////////////////////////////////////////////////////////

        var check = code_sub.substring(0, 3);
        if( (check === "261") || (check === "269") ){
            if (gpa_in === 'A' ){
                grade_261 = grade_261 + 4
            }
            if(gpa_in === 'B+') {
                grade_261 = grade_261 + 3.5
            }
            if(gpa_in === 'B') {
                grade_261 = grade_261 + 3
            }
            if(gpa_in === 'C+') {
                grade_261 = grade_261 + 2.5
            }
            if(gpa_in === 'C') {
                grade_261 = grade_261 + 2
            }
            if(gpa_in === 'D+') {
                grade_261 = grade_261 + 1.5
            }
            if(gpa_in === 'D') {
                grade_261 = grade_261 + 1
            }
            if (gpa_in === 'F') {
                grade_261 = grade_261 + 0
            }

            grade_261 = grade_261 / couter_261
            console.log(grade_261)
            var grade_out_261 = grade_261.toFixed(2)
            const td_grade_3 = document.querySelector("[id='261_grade']")
            td_grade_3.innerHTML = grade_out_261

            couter_261++
            console.log(grade_261)
        }
///////////////////////// Print to table /////////////////////////////////////////////////////////

        if(sem  === "term1"){
            const tables = document.querySelector('#showtable')
        
            const list = document.createElement('tr')
        
            const name = document.createElement('td')
            const name_1 = document.createElement('san')
            name_1.setAttribute("style", "color: black; padding: 20px;")
            name_1.innerHTML = sub
            name.append(name_1)
        
            const code = document.createElement('td')
            code.setAttribute("style", "color: black; padding: 10px;")
            code.innerHTML = code_sub
                
            const grade_s = document.createElement('td')
            grade_s.setAttribute("style", "color: black; padding: 30px;")
            grade_s.innerHTML = gpa_in

            const Dbut = document.createElement('td')
            const deleteButton = document.createElement('button')
            deleteButton.innerHTML = '\u2715';
            deleteButton.onclick = function () {
                tables.removeChild(list);
            };
            
            Dbut.append(deleteButton)
            
            list.append(name)
            list.append(code)
            list.append(grade_s)
            list.append(Dbut)
        
            tables.append(list)


            grade = grade / couter
            console.log(grade)
            var grade_out_n = grade.toFixed(2)
            const td_grade_1 = document.querySelector('#td_grade_1')
            td_grade_1.innerHTML = grade_out_n
            
        
            couter++
        }
        //////////////////////////////////////////////////////////////////////////////////
        if(sem === "term2") {
            const tables_n = document.querySelector('#showtable_2')
        
            const list_n = document.createElement('tr')
        
            const name_n = document.createElement('td')
            const name_2 = document.createElement('san')
            name_2.setAttribute("style", "color: black; padding: 20px;")
            name_2.innerHTML = sub
            name_n.append(name_2)
        
            const code_n = document.createElement('td') 
            code_n.setAttribute("style", "color: black; padding: 10px;")
            code_n.innerHTML = code_sub
                
            const grade_n = document.createElement('td')
            grade_n.setAttribute("style", "color: black; padding: 30px;")
            grade_n.innerHTML = gpa_in
        
            list_n.append(name_n)
            list_n.append(code_n)
            list_n.append(grade_n)
        
            tables_n.append(list_n)
            
            grade_2 = grade_2/couter_2
            var grade_out_2 = grade_2.toFixed(2)
            const td_grade_2 = document.querySelector('#td_grade_2')
            td_grade_2.innerHTML = grade_out_2

            couter_2++
        }

///////////////////////////////////////////////////////////////////////////////////


    }

},false)



/*function CalGrade (){
    if (gpa_in === 'A' ){
        grade_261 += 4
    }
    if(gpa_in === 'B+') {
        grade_261 += 3.5
    }
    if(gpa_in === 'B') {
        grade_261 += 3
    }
    if(gpa_in === 'C+') {
        grade_261 += 2.5
    }
    if(gpa_in === 'C') {
        grade_261 += 2
    }
    if(gpa_in === 'D+') {
        grade_261 += 1.5
    }
    if(gpa_in === 'D') {
        grade_261 += 1
    }
    if (gpa_in === 'F') {
        grade_261 += 0
    }
}*/
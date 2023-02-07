class personClass{
        #healthRate;
        constructor (fullName,age, money, sleepMood, healthRate) {
            
            this.fullName = fullName
            this.age=age
            this.money = money
            this.sleepMood=sleepMood
            this.#healthRate=healthRate
        }
        getHealthRate() {
            return this.#healthRate
        }
        setHealthRate(value) {
            if(value>=0&&value<=100)
                this.#healthRate = value;
    
            else  
                console.log("value must be between 0 and 100");
        }
            Sleep = function (hours) {
                
                if(hours==7){
                    this.sleepMood="happy"
                }
                else if(hours<7){
                    this.sleepMood="tired"
                }
                else if (hours>7) {
                    this.sleepMood="lazy"
                } 
                    
              console.log(` I'm ${this.sleepMood}`)
            }
            Eat = function (meals) {
                switch(meals){
                    case 1:this.setHealthRate(50);break;
                    case 2:this.setHealthRate(75);break;
                    case 3: this.setHealthRate(100);;break;
                }
                    
              console.log(`My health rate =  ${this.getHealthRate()}`)
            }
            Buy=function(items){
                this.money=this.money-(items*10)
                return this.money
            }
          
          
    }
    
class employeeClass extends personClass{
    #salary;
       constructor(fullName,age, money, sleepMood, healthRate,id, email, workMood, salary, isManager){
        super(fullName,age, money, sleepMood, healthRate);
        this.id=id,
        this.email=email,
        this.workMood=workMood,
        this.salary=salary<1000 ? 1000: salary,
        this.isManager=isManager;
      
    }
    
    Work=function(hours) {
                
        if(hours==8){
            this.workMood="happy"
        }
        else if(hours>8){
            this.workMood="tired"
        }
        else if (hours<8) {
            this.workMood="lazy"
        }
        console.log(` I'm ${this.workMood}`)
     }
}
emp=new employeeClass('mostafa ashraf',24,20,50,75,1,'mostafa@gmail',9,1000,true)
emp.Sleep(2)
emp.Work(5)

class officeClass{
    constructor(name, employees){
        this.name=name,
        this.employees=employees;
    }
    
    getAllEmp=function(){
        return this.employees;
    }
    getEmp=function (id) {
        var employee
        this.employees.forEach(emp => {
            if (emp.id==id) {
            employee= Object.assign({},emp)
            }   
        });
        return employee;
    }
    hire(emp){
        this.employees.push(emp);
        return this.employees;
    }
    fire(empId){
        
        this.employees.forEach(element => {
            if (element.id==empId) {
                let index=this.employees.indexOf(element);
                this.employees.splice(index,1);
            }   
        });
        return this.employees;
    }
    
}

const mostafa = new employeeClass("mostafa ashraf",30,1099,"happy",75,1,"mostafa@gmail.com","Happy",5000,true);
const ahmed=new employeeClass("ahmed",22,1000,"lazy",50,2,"ahmed@gmail.com","tired",12000,false);

const emparr=[mostafa,ahmed];
const office1=new officeClass("Office1",emparr);
console.log(office1.getEmp(1))
office1.hire(mostafa)

var stop = true;
        while(stop){
var x=prompt("enter the number of function you want:\n 1-add new employee \n 2-delete employee \n 3-get all current employees \n 4-get spcified employee");
if(x=='1'){
    let a=prompt("enter your name");
    let b=prompt("enter your age");
    let c=prompt("enter your money");
    let d=prompt("enter your sleepMood :");
    let z=prompt("enter your healthRate :")
    let e=prompt("enter your ID");
    let f=prompt("enter your Email");
    let g=prompt("enter your workMood :");
    let h=prompt("enter your salary");
    let i=prompt("if you are manger enter \"true\" else enter \" false\"");
    const newemp = new employeeClass(a,b,c,d,z,e,f,g,h,i);
    office1.hire(newemp);
    alert("you hire new employee succfully");
}
else if (x=="2"){
    let a=Number(prompt("enter the ID of employee : "));
    office1.fire(a);
    alert("you fire employee succfully")
}
else if(x=="3"){
    let  x= office1.getAllEmp();
    for (let i = 0; i < x.length; i++) {
       alert("Employee munber : "+(i+1)+"\nName: "+x[i].fullName+"\nAge: "+x[i].age+"\nSleep Mood: "+x[i].sleepMood+"\nHealth Rate: "+x[i].getHealthRate()+"\nID: "+x[i].id+"\nemail: "+x[i].email+"\nWork Mood: "+x[i].workMood+"\nsalary:"+x[i].getSalary()+"\nIs Manger: "+x[i].isManager+"\n");
    }
    
    
   }
   else if(x=="4"){
       let id=Number(prompt("enter the ID of employee : "));
      var xx=  office1.getEmp(id); 
      alert("Employee information : \nName: "+xx.fullName+"\nAge: "+xx.age+"\nSleep Mood: "+xx.sleepMood+"\nHealth Rate: "+xx.getHealthRate()+"\nID: "+xx.id+"\nemail: "+xx.email+"\nWork Mood: "+xx.workMood+"\nsalary:"+xx.salary+"\nIs Manger: "+xx.isManager+"\n");
   } 
   var answer = prompt("do you want to exit (yes,no)");
   if(answer=="yes")
   {
       stop = false;
   }}
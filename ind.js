const quiz = [
    
    {
    
        ques: "Q1:What does HTML stand for?",
        a: "Hyper Tag Markup Language",
        b: "Hyper Text Markup Language",
        c: "Hyperlinks Text Mark Language",
        d: "Hyperlinking Text Marking Language",
        ans: "ans2"
    },
    
    {
        ques: "Q2:What is CSS Stands For?",
        a: "Cascading Stool Sheet",
        b: "Castcadin stile Sheet",
        c: "Cascading style Sheet",
        d: "Cascading proto Sheet",
        ans: "ans3"
    },
    {
        ques: "Q3:How to Copy down do Copy Down in VS Code specify KeyButtons?",
        a: "Ctr A",
        b: "Ctr D",
        c: "Ctr J",
        d: "Ctr R",
        ans: "ans2"
    },
    
    {
        ques: "Q4:What is The Full form of Javascript ?",
        a: "JavaScript",
        b: "javascript",
        c: "java script",
        d: "jscript",
        ans: "ans1"
    },
    {
        ques: "Q5:What is Full form of HTTP?",
        a: "Hyper Text Prototype",
        b: "Hypertext Trasmitted Protocol",
        c: "Hypertext Transfer Protocol",
        d: "Hyperlinking Text Picture",
        ans: "ans3"
    },
    
    ];
    
    
    const questions = document.querySelector('#question');
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3= document.querySelector('#option3');
    const option4 = document.querySelector('#option4');
    const submit = document.querySelector('#submit');
    const answers = document.querySelectorAll('.answer');
    const showid = document.querySelector('#Showarea');
    const remove = document.querySelector('.showscore');
    
    let count = 0;
    let Mark = 0;
    
    
    
    
    const Quesload = () =>{
    
        list = quiz[count];
         
        questions.innerHTML = quiz[count].ques;
        option1.innerHTML = quiz[count].a;
        option2.innerHTML = quiz[count].b;
        option3.innerHTML = quiz[count].c;
        option4.innerHTML = quiz[count].d;
    }
    
    Quesload();
    
    const getans= ()=>{
    
        let answer;
    
        answers.forEach((curElem)=>{
            if(curElem.checked){
                answer = curElem.id;
            }
        })
    
        return answer;
    
    
    }
    
    const deselectAll =()=>{
        answers.forEach((curElem)=> curElem.checked = false);
    }
    
    submit.addEventListener('click',()=>{
    
        const checkansw = getans();
        const answs = quiz[count].ans;
    
        if (checkansw===answs){
            Mark++;
    
        };
    
        count++;
        
        deselectAll();
        
        if(count < quiz.length){
            Quesload();
            
        }
        
        else{
    
            showid.innerHTML = `
            
            <h3>Your Score is ${Mark}/ ${quiz.length}</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
            `;
    
            remove.style.cssText = ('display:block');
    
    
        }
    
    
    })
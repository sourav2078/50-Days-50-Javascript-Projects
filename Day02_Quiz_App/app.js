const questions=[
    {
        'ques':"The attribute used to define a new namespace is.",
        'a':" XMLNS",
        'b':"XmlNameSpace",
        'c':"Xmlns",
        'd':"XmlNs",
        'correct':"c"
    },
    {
        'ques':'What are the two types of namespaces in XML?',
        'a':'Global and Local Namespace',
        'b':'Local and Intrinsic Namespace',
        'c':'Intrinsic and Global Namespace',
        'd':'None of the above',
        'correct':'a'
    },
    {
        'ques':" _________ keyword is used to declare variables in javascript.",
        'a':"var",
        'b':"let",
        'c':"const",
        'd':"none of these",
        'correct':'a'
    }
]
let index=0;
const qBox=document.getElementById('question')
let right=0, wrong=0;
let total=questions.length;
const options= document.querySelectorAll('.options')
const loadQuestion=()=>{
    if(index===total){
        return endQuiz();
    }
    reset();
    let data=questions[index];
    qBox.innerText=`${index+1}) ${data.ques}`;
    options[0].nextElementSibling.innerText=data.a;
    options[1].nextElementSibling.innerText=data.b;
    options[2].nextElementSibling.innerText=data.c;
    options[3].nextElementSibling.innerText=data.d;
}

const submitQuiz=()=>{
    data=questions[index];
    const ans=getAnswer();
    console.log(ans,data.correct)
    if(ans==data['correct']){
        right++
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer=()=>{
    let answer;
    options.forEach(
        (input)=>{
            if(input.checked){
                answer=input.value;
            }
        }
    )
    return answer;
}
const reset = () =>{
    // options=document.querySelectorAll('.options');
    options.forEach(
        (input) =>{
            input.checked=false;
        }
    )
}
const endQuiz = () =>{
    document.getElementById('box').innerHTML=`
    <div style="Text-align:center">
    <h3>Thanks for playing the Quiz</h3>
    <h2>${right}/${total} are correct </h2>
    </div>
    `
}
loadQuestion();
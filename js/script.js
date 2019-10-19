const $ = document.querySelector.bind(document);
const inValidMsg = '( Fill the box )';
const inValidBox = document.querySelectorAll('.valid-box');
const gradeField = $('.grade-field');
const close = $('.close');
const calc = $('#calc');
const subInput = {
    bangla: $('#bangla'),
    english: $('#english'),
    mathmetics: $('#mathmetics'),
    global: $('#global'),
    moral: $('#moral'),
    physics: $('#physics'),
    chemistry: $('#chemistry'),
    higher: $('#higher'),
    biology: $('#biology')
};
const gradeValue = {
    bangla: $('.grade-bangla'),
    english: $('.grade-english'),
    mathmetics: $('.grade-mathmetics'),
    global: $('.grade-global'),
    moral: $('.grade-moral'),
    physics: $('.grade-physics'),
    chemistry: $('.grade-chemistry'),
    higher: $('.grade-higher'),
    biology: $('.grade-biology')
};
const subName = [
    subInput.bangla,
    subInput.english,
    subInput.mathmetics,
    subInput.global,
    subInput.moral,
    subInput.physics,
    subInput.chemistry,
    subInput.higher,
    subInput.biology
];
calc.addEventListener('click', () => {
    gradeField.style.display = 'block';
    gradeField.style.height = '500px';
    gradeValue.bangla.textContent = checkGrade(subName[0]);
    gradeValue.english.textContent = checkGrade(subName[1]);
    gradeValue.mathmetics.textContent = checkGrade(subName[2]);
    gradeValue.global.textContent = checkGrade(subName[3]);
    gradeValue.moral.textContent = checkGrade(subName[4]);
    gradeValue.physics.textContent = checkGrade(subName[5]);
    gradeValue.chemistry.textContent = checkGrade(subName[6]);
    gradeValue.higher.textContent = checkGrade(subName[7]);
    gradeValue.biology.textContent = checkGrade(subName[8]);
});

close.addEventListener('click', () => {
    gradeFieldRemove();
    subName.forEach(field => field.value = '');
});


function checkGrade(id) {
    if(id.value !== '') {
        if(id.value >= 80 && id.value <= 100)
            return 'A+';
        else if (id.value >= 70 && id.value <= 79)
            return 'A';
        else if(id.value >= 60 && id.value <= 69)
            return 'A-';
        else if(id.value >= 50 && id.value <= 59)
            return 'B';
        else if(id.value >= 33 && id.value <= 49)
            return 'C';
        else if(id.value >= 0 && id.value <= 32)
            return 'F';
        else
            gradeField.styld.display = 'none';
    } else
        gradeField.style.display = 'none';
}



function gradeFieldRemove() {
    let height = 500;
    const timer = setInterval(function() {
        gradeField.style.height = height + 'px';
        height = height - 4;
        if(height <= -1) {
            gradeField.style.display = 'none';
            clearInterval(timer);
        }
    }, 1);
}





const $app = document.getElementById('app');
const $skills = document.createElement('select');
const optionData = [
  {
    value: 'javascript',
    text: 'JavaScript',
  },
  {
    value: 'next',
    text: 'Next.js'
  },
  {
    value: 'react',
    text: 'React.js'
  },
  {
    value: 'typescript',
    text: 'TypeScript'
  }
];

const createOption = () => {
  optionData.forEach((option) => {
    const $option = document.createElement('option');
    $option.value = option.value;
    $option.textContent = option.text;
    $skills.appendChild($option);
  });
}
const createSkills = () => {
  $skills.id = 'skills';
  $app.appendChild($skills);
  createOption();
}

createSkills();
$skills.addEventListener('change', (event) => {
  const value = event.target.value;
  console.log(value);
});
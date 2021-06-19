console.log('CSS variables');

const inputs = document.querySelectorAll('.controls input');
console.log(inputs)

function updateStyle() {
    console.log(this.name, this.value, this.dataset);
    const suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`)
}

inputs.forEach(input => input.addEventListener('change', updateStyle));
// inputs.forEach(input => input.addEventListener('mousemove', updateStyle));
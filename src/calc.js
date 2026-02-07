import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const doc = {
    hexagonDataInput: document.querySelector('#hexagonData'),
    hexagonForm: document.querySelector('#hexagonForm'),
    hexagonAreaInput: document.querySelector('#hexagonArea')
}

doc.hexagonForm.addEventListener('submit', (e) => {
    e.preventDefault()
    render()
})

function render() {
    const mode = document.querySelector('input[name="selectMode"]:checked').value
    if(mode === 'side') {
        const side = doc.hexagonDataInput.value
        const area = calcFromSide(side)
        doc.hexagonAreaInput.value = area
    }else if(mode === 'circum') {
        const circum = doc.hexagonDataInput.value
        const area = calcFromRadiusCircum(circum)
        doc.hexagonAreaInput.value = area
    }else if(mode === 'in') {
        const inCircle = doc.hexagonDataInput.value
        const area = calcFromInCircle(inCircle)
        doc.hexagonAreaInput.value = area
    }else if(mode === 'diagonal') {
        const diagonal = doc.hexagonDataInput.value
        const area = calcFromDiagonal(diagonal)
        doc.hexagonAreaInput.value = area
    }
}

function calcFromSide(side) {
    return (3 * Math.sqrt(3) / 2) * Math.pow(side, 2)
}

function calcFromRadiusCircum(circum) {
    const side = circum / (3 * Math.sqrt(3))
    return (3 * Math.sqrt(3) / 2) * Math.pow(side, 2)
}

function calcFromInCircle(inCircle) {
    const circum = inCircle * 2 * Math.sqrt(3)
    const side = circum / (3 * Math.sqrt(3))
    return (3 * Math.sqrt(3) / 2) * Math.pow(side, 2)
}

function calcFromDiagonal(diagonal) {
    const side = diagonal / Math.sqrt(3)
    return (3 * Math.sqrt(3) / 2) * Math.pow(side, 2)
}

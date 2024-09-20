const nota1 = document.getElementById('nota1');
const nota2 = document.getElementById('nota2');
const nota3 = document.getElementById('nota3');
const nota4 = document.getElementById('nota4');
const error1 = document.getElementById('errorNota1');
const error2 = document.getElementById('errorNota2');
const error3 = document.getElementById('errorNota3');
const error4 = document.getElementById('errorNota4');
const formulario = document.getElementById('registro');
const tabla = document.getElementById('tabla');

const validarNota1 = (nota1) => {
    if (nota1.length > 4) {
        error1.textContent = 'La nota debe tener maximo 2 decimales'
        return false
    }
    error1.textContent = '';
    return true
};

const validarNota2 = (nota2) => {
    if (nota2.length > 3) {
        error2.textContent = 'La nota debe tener maximo 2 decimales'
        return false
    }
    error2.textContent = '';
    return true
};

const validarNota3 = (nota3) => {
    if (nota3.length > 3) {
        error3.textContent = 'La nota debe tener maximo 2 decimales'
        return false
    }
    error3.textContent = '';
    return true
};

const validarNota4 = (nota4) => {
    if (nota4.length > 3) {
        error4.textContent = 'La nota debe tener maximo 2 decimales'
        return false
    }
    error4.textContent = '';
    return true
};

const guardarContacto = (contacto) => {
    const row = document.createElement('tr');

    const codigoColumna = document.createElement('td');
    codigoColumna.textContent = contacto.codigo;

    const nombreColumna = document.createElement('td');
    nombreColumna.textContent = contacto.nombre;

    const nota1Columna = document.createElement('td');
    nota1Columna.textContent = contacto.nota1_20;

    const nota2Columna = document.createElement('td');
    nota2Columna.textContent = contacto.nota2_20;

    const nota3Columna = document.createElement('td');
    nota3Columna.textContent = contacto.nota3_20;

    const nota4Columna = document.createElement('td');
    nota4Columna.textContent = contacto.nota4_40;

    const promedioColumna = document.createElement('td');
    promedioColumna.textContent = contacto.promedio;

    const apruebaColumna = document.createElement('td');
    if (contacto.aprueba > 3) {
        apruebaColumna.textContent = 'A';
    } else {
        apruebaColumna.textContent = 'N';
    }

    const BtnColumna = document.createElement('td');
    const button = document.createElement('button');
    button.textContent = 'eliminar';
    button.addEventListener('click',() => {
        row.remove();
    })

    BtnColumna.appendChild(button);

    row.appendChild(BtnColumna);
    row.appendChild(codigoColumna);
    row.appendChild(nombreColumna);
    row.appendChild(nota1Columna);
    row.appendChild(nota2Columna);
    row.appendChild(nota3Columna);
    row.appendChild(nota4Columna);
    row.appendChild(promedioColumna);
    row.appendChild(apruebaColumna);

    const tbody = tabla.getElementsByTagName('tbody')[0];
    tbody.appendChild(row);
};

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const nota_1 = nota1.value;
    const nota_2 = nota2.value;
    const nota_3 = nota3.value;
    const nota_4 = nota4.value;

    if (validarNota1(nota_1) && validarNota2(nota_2) && validarNota3(nota_3) && validarNota4(nota_4)) {
        const promedio = (nota_1 * 0.2) + (nota_2 * 0.2) + (nota_3 * 0.2) + (nota_4 * 0.4);

        const contacto = {
            codigo: document.getElementById('codigo').value,
            nombre: document.getElementById('nombre').value,
            nota1_20: nota1.value,
            nota2_20: nota2.value,
            nota3_20: nota3.value,
            nota4_40: nota4.value,
            promedio: promedio.toFixed(2),
            aprueba: promedio
        };

        guardarContacto(contacto);
    }
});

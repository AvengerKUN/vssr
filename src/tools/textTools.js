export const textCopy = (txt) => {
    let input = document.createElement('input');
    input.setAttribute('readonly', 'readonly');
    input.setAttribute('value', txt);
    document.body.appendChild(input);
    input.select();
    input.setSelectionRange(0, 9999);
    let bol = document.execCommand('Copy');
    document.body.removeChild(input);
    return bol;
};

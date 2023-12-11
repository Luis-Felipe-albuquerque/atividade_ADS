function addLdapServer() {
    var ldapServerContainer = document.getElementById('ldapServerContainer');
    var serverCount = ldapServerContainer.children.length + 1;
    var limiteMaximo = 9;

    if (serverCount <= limiteMaximo) {
        var newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.name = 'ldapServer';
        newInput.placeholder = '10.10.1.15' + serverCount;
        newInput.addEventListener('input', formatarCampoLdap);  
        ldapServerContainer.appendChild(newInput);
    } else {
        alert('Você atingiu o limite máximo de servidores LDAP adicionais.');
    }
}

function formatarCampoLdap() {
    var cleanedValue = this.value.replace(/[^\d]/g, '');
    var formattedValue = cleanedValue.replace(/(\d{2})(\d{2})(\d{1})(\d{1,3})/, '$1.$2.$3.$4');
    this.value = formattedValue;

    if (this.value.length > 11) {
        this.value = this.value.slice(0, 11);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var campoLdapExistente = document.querySelector('#ldapServerContainer input');
    if (campoLdapExistente) {
        campoLdapExistente.addEventListener('input', formatarCampoLdap); 
    }
});

function reiniciar() {
    document.querySelector('input[placeholder="LDAP Exemplo I"]').value = '';
    var ldapServerContainer = document.getElementById('ldapServerContainer');
    ldapServerContainer.innerHTML = '<input type="text" placeholder="10.10.1.151">';
    document.querySelector('input[placeholder="dc=exemplo,dc=completo"]').value = '';
    document.querySelector('input[type="radio"][value="anonymous"]').checked = true;
    document.querySelector('input[placeholder="cn=Administrador,cn=Usuário,dc=exemplo,dc=completo"]').value = '';
    document.querySelector('input[placeholder="cn=Usuário,dc=exemplo,dc=completo"]').value = '';
    document.querySelector('input[placeholder="Conta ID nome"]').value = '';
    document.querySelector('select[name="tipo"]').selectedIndex = 0;
    document.querySelector('input[placeholder="636"]').value = '';
    document.getElementById('secure-ldap').checked = false;
    document.querySelector('input[type="password"]').value = '';
    document.querySelector('input[placeholder="cn=Grupo, de=exemplo,dc=completo"]').value = '';
    document.querySelector('input[placeholder="(objetivoCategoria=grupo)"]').value = '';
    document.querySelector('input[placeholder="membro"]').value = '';
    document.getElementById('full-dn').checked = false;
    document.getElementById('ignore-referrals').checked = false;

    var popup = document.getElementById('popup');
    popup.style.display = 'block';

    setTimeout(function () {
        popup.style.display = 'none';
    }, 8000);
    window.scrollTo(0, 0);
}

function fecharPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}

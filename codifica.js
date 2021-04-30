    
    var escolheCifra = document.getElementById('opcao');
    var cifraEscolhida = document.getElementById('escolha');

    var mostra = document.getElementById('mostraCesar');
    var base64anula = document.getElementById('base64')

    opcao.addEventListener('change',()=>{
        (opcao.value === 'base64')? base64() : cesar()  ; 
    });

    var base64 = ()=>{
        mostra.style.display = "none"
    }

    var cesar = ()=>{
        mostra.style.display = "flex"
    } 
        
    document.getElementById('entrada').addEventListener('keyup', (cifra)=>{
        let entrada = document.getElementById('entrada').value.split('');
        let saida = document.getElementById('saida');
        let soma = parseInt(document.getElementById('adicao').value);
        let decisao = document.getElementById('encode').checked
    
        if(decisao){
            saida.value = cesarEncode(entrada, soma);
        } else {
            saida.value = cesarDecode(entrada, soma)
        }
           
    })

    document.getElementById('entrada').addEventListener('keyup', (cifra)=>{
        let entrada = document.getElementById('entrada').value
        let saida = document.getElementById('saida');
        let decisao = document.getElementById('encode').checked
        
        saida.value = base64Encode(entrada, decisao)
    })

    function cesarEncode(arr, adicao){
        return arr.map((cifra)=>{
            let code = cifra.charCodeAt();
            if(code >= 65 && code <= 90){
                return String.fromCharCode(((code - 65 + adicao) % 26) + 65)
            } else if(code >= 97 && code <= 122){
                return String.fromCharCode(((code - 97 + adicao) % 26) + 97)
            } else return cifra
        }).join('')
    }

        function cesarDecode(arr, adicao){
            return arr.map((cifra)=>{
                let code = cifra.charCodeAt();
                if(code >= 65 && code <= 90){
                    return (code-65-adicao < 0)?String.fromCharCode(((code - 65 - adicao + 26)%26)+65):String.fromCharCode(((code - 65 - adicao)%26)+65) 
                } else if(code >= 97 && code <= 122){
                    return String.fromCharCode(((code - 97 - adicao + 26) % 26) + 97)
                } else return cifra
            }).join('')  
        }

            function base64Encode(entrada, decisao){
                return (decisao)? btoa(entrada) : atob(entrada)
            }

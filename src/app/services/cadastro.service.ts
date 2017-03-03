import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { CadastrarCliente } from '../models/cadastrarCliente';

@Injectable()
export class CadastroService {

    headers = new Headers({ 'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    cadastrarCliente(numeroCpf: string, nomeCliente: string, 
            sobreNomeCliente: string, observacao: string): Observable<any> {

        let dadosCliente = ({numeroCpf : numeroCpf, nomeCliente : nomeCliente});
        console.log('Dados do cliente para POST' + JSON.stringify(dadosCliente));
        return this.http.post('${API_URL}/cadastrarCliente/{numeroCpf}/?gw-app-key=${PROJETO_HUB_KEY}'
        , dadosCliente, this.headers).map((response) => {
            return response.json();
        })
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Evento, JsonCorreios } from '../../interfaces/correios';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],
})
export class StepsComponent implements OnInit {
  @Input()
  tracking: JsonCorreios = null;

  steps: Array<{
    description: string;
    urlIcon: string;
    date: string;
    address: string;
    delivered: boolean;
  }>;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.steps = this.tracking.objetos[0].eventos.map((event: Evento) => {
      return {
        description: event.descricao,
        urlIcon: event.icone,
        date: event.dtHrCriado,
        address: this.getAddress(event),
        delivered: event.tipo === '01' && event.codigo === 'BDE',
      };
    });
  }

  getAddress(event: Evento) {
    let address = '';

    if (event.unidade.endereco?.cidade) {
      const { cidade, uf } = event.unidade.endereco;
      address = `${cidade} - ${uf}`;
    } else if (event.unidade.nome) {
      address = event.unidade.nome;
    }

    return address;
  }
}

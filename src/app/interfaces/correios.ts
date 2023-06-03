// Versão 2.1.57
export interface JsonCorreios {
  objetos: Objeto[];
  quantidade: number;
  versao: string;
}

export interface Objeto {
  codObjeto: string;
  eventos: Evento[];
  modalidade: string;
  tipoPostal: TipoPostal;
  habilitaAutoDeclaracao: boolean;
  permiteEncargoImportacao: boolean;
  habilitaPercorridaCarteiro: boolean;
  bloqueioObjeto: boolean;
  possuiLocker: boolean;
  habilitaLocker: boolean;
  habilitaCrowdshipping: boolean;
}

export interface Evento {
  codigo: string;
  descricao: string;
  dtHrCriado: string;
  tipo: string;
  unidade: Unidade;
  icone: string;
  detalhe?: string;
  unidadeDestino?: UnidadeDestino;
}

export interface Unidade {
  endereco: Endereco;
  tipo: string;
  codSro?: string;
  nome?: string;
}

export interface Endereco {
  cidade?: string;
  uf?: string;
  bairro?: string;
  cep?: string;
  logradouro?: string;
  numero?: string;
}

export interface UnidadeDestino {
  codSro?: string;
  endereco: Endereco2;
  nome?: string;
  tipo: string;
}

export interface Endereco2 {
  uf: string;
  cidade?: string;
}

export interface TipoPostal {
  categoria: string;
  descricao: string;
  sigla: string;
}

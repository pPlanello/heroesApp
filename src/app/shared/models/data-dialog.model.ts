
export interface DataDialogAngularMaterial {
    type: TypeDialog,
    data: any
}

export enum TypeDialog {
  create = 'Crear',
  delete = 'Borrar',
  save = 'Guardar'
}

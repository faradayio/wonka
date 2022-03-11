export class CFType {
  definition: unknown;
  name?: string;
  constructor(name) {
    this.name = name;
  }
}
export class REP extends CFType {
  definition: CFType;
  constructor(definition: CFType, name?: string) {
    super(name);
    this.definition = definition;
  }
}
export class OPT extends CFType {
  definition: CFType;
  constructor(definition: CFType, name?: string) {
    super(name);
    this.definition = definition;
  }
}
export class ONE extends CFType {
  definition: CFType[];
  constructor(definition: CFType[], name?: string) {
    super(name);
    this.definition = definition;
  }
}
export class ALL extends CFType {
  definition: CFType[];
  constructor(definition: CFType[], name?: string) {
    super(name);
    this.definition = definition;
  }
}
export class T extends CFType {
  definition: string;
  constructor(definition: string, name?: string) {
    super(name);
    this.definition = definition;
  }
}

export const num = new T("float");
export const str = new T("str");
export const bool = new T("bool");

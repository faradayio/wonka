class CFType {
  name?: string;
  constructor(name) {
    this.name = name;
  }
}
class REP extends CFType {
  definition: CFType;
  constructor(definition: CFType, name?: string) {
    super(name);
    this.definition = definition;
  }
}

class OPT extends CFType {
  definition: CFType;
  constructor(definition: CFType, name?: string) {
    super(name);
    this.definition = definition;
  }
}

class ONE extends CFType {
  definition: CFType[];
  constructor(definition: CFType[], name?: string) {
    super(name);
    this.definition = definition;
  }
}

class ALL extends CFType {
  definition: CFType[];
  constructor(definition: CFType[], name?: string) {
    super(name);
    this.definition = definition;
  }
}

class T extends CFType {
  definition: string;
  constructor(definition: string, name?: string) {
    super(name);
    this.definition = definition;
  }
}

const num = new T("float");
const str = new T("str");
const bool = new T("bool");

module.exports = { num, str, bool, T, REP, OPT, ALL, ONE };

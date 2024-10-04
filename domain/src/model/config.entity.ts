class ConfigEntity {
  constructor(
    public PK: string,
    public SK: string,
    public value: object[] | string | number
  ) {}
}

export {ConfigEntity};

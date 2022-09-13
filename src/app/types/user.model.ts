export default class User {
  constructor(
    public id: number,
    public username: string,
    public email: string,
    public mobile: string,
    private _token?: string,
    private _expiresIn?: Date
  ) {}

  get token() {
    if (!this._expiresIn || new Date() > this._expiresIn) {
      return null;
    }
    return this._token;
  }
}

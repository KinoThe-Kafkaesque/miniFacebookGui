export class Status {

	private _contenu!: String;
  public get contenu(): String {
    return this._contenu;
  }
  public set contenu(value: String) {
    this._contenu = value;
  }
	private _totalJaime!: number;
  public get totalJaime(): number {
    return this._totalJaime;
  }
  public set totalJaime(value: number) {
    this._totalJaime = value;
  }
	private _totalCommentaire!: number;
  public get totalCommentaire(): number {
    return this._totalCommentaire;
  }
  public set totalCommentaire(value: number) {
    this._totalCommentaire = value;
  }
	private _dateStatus!: String;
  public get dateStatus(): String {
    return this._dateStatus;
  }
  public set dateStatus(value: String) {
    this._dateStatus = value;
  }
	private _like!: Boolean;
  public get like(): Boolean {
    return this._like;
  }
  public set like(value: Boolean) {
    this._like = value;
  }
}
